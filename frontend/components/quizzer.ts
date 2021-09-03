import {Server} from "./server";
import {User} from "../models/user";
import * as ko from 'knockout';
import {Assignment} from "../models/assignment";
import {Submission, SubmissionStatus} from "../models/submission";
import {AssignmentInterface, AssignmentInterfaceJson, EditorMode} from "./assignment_interface";
import {subsetRandomly} from "../utilities/random"

// Maybe TODO: Add bookmarking
    // Add a question mark button that let's them flag this to return to later
// TODO: Event logging
// TODO: Question Pool
// TODO: Attempt cooldowns
// TODO: One question at a time
// TODO: Allow bulk regrading of students' feedbacks/scoring
// TODO: Check for orphaned feedbacks and answers
// TODO: Allow instructors to see currently failed to grade assignemnts
// TODO: Update on blur - perhaps just have an icon to indicate readiness? ("unsaved changes")
// TODO: Make it more obvious that the "next" button is at the top
// TODO: Hide Generic LTI error message better

export interface QuizzerJson {
    server: Server;
    courseId: number;
    user: User;
    currentAssignmentId: ko.Observable<number>;
    assignmentGroupId: number;
}

export enum QuizQuestionTypes {
    multiple_choice_question="multiple_choice_question",
    multiple_answers_question="multiple_answers_question",
    true_false_question="true_false_question",
    text_only_question="text_only_question",
    matching_question="matching_question",
    multiple_dropdowns_question="multiple_dropdowns_question",
    short_answer_question="short_answer_question",
    fill_in_multiple_blanks_question="fill_in_multiple_blanks_question",

    calculated_question="calculated_question",
    essay_question="essay_question",
    file_upload_question="file_upload_question",

    numerical_question="numerical_question"
}

export const clearValue = (question: Question) => {
    switch (question.type) {
        case QuizQuestionTypes.multiple_answers_question:
            return question.student([]);
        case QuizQuestionTypes.matching_question:
            return question.student.map((v: any) => v(undefined));
        case QuizQuestionTypes.multiple_dropdowns_question:
        case QuizQuestionTypes.fill_in_multiple_blanks_question:
            for (const key in question.student) {
                question.student[key]('');
            }
            return question.student;
        default:
            return question.student("");
    }
}

export const getDefaultValue = (question: Question, answer: any): any => {
    switch (question.type) {
        case QuizQuestionTypes.multiple_answers_question:
            return ko.observableArray(answer && answer.length ? answer: []);
        case QuizQuestionTypes.matching_question:
            return answer && answer.length
                ? question.statements.map((v: any, i: number) => ko.observable(answer[i]))
                : question.statements.map((v: any) => ko.observable(undefined));
        case QuizQuestionTypes.multiple_dropdowns_question:
            let mdqResult: {[key: string]: ko.Observable} = {};
            Object.entries(question.answers).forEach(([key, value])=> {
                mdqResult[key] = ko.observable(answer ? answer[key] || '' : '')
            });
            return mdqResult;
        case QuizQuestionTypes.fill_in_multiple_blanks_question:
            let fimbResult: {[key: string]: ko.Observable} = {};
            getBracketed(question.body).map((key: string) => {
                fimbResult[key] = ko.observable(answer ? answer[key] || '' : "")
            });
            return fimbResult;
        default:
            return ko.observable(answer || "");
    }
}

export const getBracketed = (body: string): string[] => {
    return body.split(SQUARE_BRACKETS)
        .filter((part: string) => part.startsWith('[') && part.endsWith(']'))
        .map((part: string) => part.slice(1, -1));
}

export const subscribeToStudent = (question: Question): ko.Observable[] => {
    ///console.log(question.id, question.student);
    switch (question.type) {
        case QuizQuestionTypes.matching_question:
            return question.student;
        case QuizQuestionTypes.multiple_dropdowns_question:
        case QuizQuestionTypes.fill_in_multiple_blanks_question:
            return Object.values(question.student);
        case QuizQuestionTypes.multiple_answers_question:
        default:
            return [question.student];
    }
}

export const getValue = (question: Question): any => {
    switch (question.type) {
        case QuizQuestionTypes.matching_question:
            return question.student.map((value: ko.Observable) => value());
        case QuizQuestionTypes.multiple_dropdowns_question:
        case QuizQuestionTypes.fill_in_multiple_blanks_question:
            let result: {[key: string]: string} = {};
            Object.entries(question.student).forEach(([key, value]: [string, ko.Observable])=> {
                result[key] = value();
            });
            return result;
        case QuizQuestionTypes.multiple_answers_question:
        default:
            return question.student();
    }
}

export interface Feedback {
    correct: boolean
    score: number
    message: string
    status: string
}

export interface Question {
    body: string
    id: string
    title: string
    type: string
    points: number
    student: any
    answers?: string[] | {[key: string]: string[]}
    statements?: string[]

    feedback: ko.Observable<Feedback>
    visible: ko.Observable<boolean>
}

export interface QuestionPool {
    questions: string[]
    amount: number
}

export enum QuizFeedbackType {
    // TODO: Support other kinds besides immediate
    IMMEDIATE = "IMMEDIATE", NONE = "NONE", SUMMARY = "SUMMARY"
}

export interface QuizInstructionsSettings {
    /** How many times you can attempt a quiz; -1 is infinite attempts */
    attemptLimit?: number
    /** How many minutes you must wait between attempts; -1 is no minutes */
    coolDown?: number
    feedbackType?: QuizFeedbackType
    /** How many questions to show on each "page"; -1 is all questions on one page */
    questionsPerPage?: number
}

export interface QuizInstructions {
    questions?: Record<string, Question>
    settings?: QuizInstructionsSettings
    pools: QuestionPool[]
}

export interface QuizSubmissionAttempt {
    attempting?: boolean
    count?: number
    /** Number of times the instructor has given extra attempts **/
    mulligans?: number
}

export interface QuizSubmission {
    studentAnswers?: {[questionId: string]: Question}
    attempt?: QuizSubmissionAttempt
    feedback?: {[questionId: string]: Feedback}
}

export const EMPTY_QUIZ_SUBMISSION_STRING = JSON.stringify({
    attempt: {attempting: false, count: 0},
    studentAnswers: {},
    feedback: {}
});

export const EMPTY_QUIZ_INSTRUCTIONS_STRING = JSON.stringify({
    questions: {},
    settings: {
        attemptLimit: -1,
        coolDown: -1,
        feedbackType: QuizFeedbackType.IMMEDIATE,
        questionsPerPage: -1
    }
});

export function fillInMissingQuizSubmissionFields(quizSubmission: QuizSubmission) {
    if (!("studentAnswers" in quizSubmission)) {
        quizSubmission.studentAnswers = {};
    }
    if (!("feedback" in quizSubmission)) {
        quizSubmission.feedback = {};
    }
    if (!("attempt" in quizSubmission)) {
        quizSubmission.attempt = {};
    }
    quizSubmission.attempt.attempting ??= false;
    quizSubmission.attempt.count ??= 0;
    quizSubmission.attempt.mulligans ??= 0;
}

export function fillInMissingQuizInstructionFields(quizInstructions: QuizInstructions) {
    if (!("questions" in quizInstructions)) {
        quizInstructions.questions = {};
    }
    if (!("settings" in quizInstructions)) {
        quizInstructions.settings = {};
    }
    quizInstructions.settings.attemptLimit ??= -1;
    quizInstructions.settings.coolDown ??= -1;
    quizInstructions.settings.feedbackType ??= QuizFeedbackType.IMMEDIATE;
    quizInstructions.settings.questionsPerPage ??= -1;
}

export const matchKeyInBrackets = (key: string) => new RegExp(`(?<!\\\))(\\[${key}\\])(?!\\()`);
export const SQUARE_BRACKETS = /(?<!\\)(\[.*?\]\]?)(?!\()/

export class Quiz {
    questionMap: Record<string, Question>;
    questions: ko.ObservableArray<Question>;

    seed: ko.Observable<number>;

    attemptCount: ko.Observable<number>;
    attempting: ko.Observable<boolean>;
    attemptStatus: ko.PureComputed<QuizMode>;
    attemptMulligans: ko.Observable<number>;

    attemptLimit: ko.Observable<number>;
    attemptsLeft: ko.PureComputed<string>;
    canAttempt: ko.PureComputed<boolean>;

    pools: ko.Observable<QuestionPool[]>

    constructor(assignment: Assignment, submission: Submission) {
        this.questions = ko.observableArray([]);
        this.questionMap = {};
        this.attempting = ko.observable(false);
        this.attemptCount = ko.observable(0);
        this.attemptMulligans = ko.observable(0);
        this.attemptLimit = ko.observable<number>(-1);

        this.pools = ko.observable<QuestionPool[]>([]);

        this.loadAssignment(assignment, submission);
        this.seed = ko.observable<number>(submission.id);

        this.attemptStatus = ko.pureComputed<QuizMode>( () => {
            return this.attempting() ? QuizMode.ATTEMPTING :
                this.attemptCount() > 0 ? QuizMode.COMPLETED : QuizMode.READY;
        }, this);

        this.attemptsLeft = ko.pureComputed<string>( () => {
            const attempts = (this.attemptLimit() + this.attemptMulligans() - this.attemptCount());
            return this.attemptLimit() === -1 ? 'infinite attempts left.' :
                attempts < 0 ? 'no attempts left!' :
                attempts === 1 ? 'only one attempt left.' : `${attempts} attempts left.`;
        }, this);

        this.canAttempt = ko.pureComputed<boolean>( () => {
            const attempts = (this.attemptLimit() + this.attemptMulligans() - this.attemptCount());
            return this.attemptLimit() === -1 || attempts > 0;
        }, this);
    }

    loadAssignment(assignment: Assignment, submission: Submission) {
        this.questions.removeAll();
        this.questionMap = {};
        let currentAnswer: QuizSubmission = JSON.parse(submission.code() || EMPTY_QUIZ_SUBMISSION_STRING) as QuizSubmission;
        fillInMissingQuizSubmissionFields(currentAnswer);
        //console.log("Loading Answer:", currentAnswer);
        let instructions: QuizInstructions = JSON.parse(assignment.instructions() || EMPTY_QUIZ_INSTRUCTIONS_STRING) as QuizInstructions;
        fillInMissingQuizInstructionFields(instructions);
        // TODO: For random ones, choose an alternate question based on pool
        // User ID + Assignment ID + Course ID, modulo the quantity of questions available
        // If instructions[questionId] is an array, then pool from it "randomly"
        for (const questionId in instructions.questions) {
            let answer = currentAnswer.studentAnswers[questionId];
            let question = {...instructions.questions[questionId], id: questionId,
                            feedback: ko.observable(null),
                            visible: ko.observable(true)} as Question;
            question.student = getDefaultValue(question, answer);
            this.questionMap[questionId] = question;
            this.questions.push(question);
        }
        this.attempting(currentAnswer.attempt.attempting);
        this.attemptCount(currentAnswer.attempt.count);
        this.attemptLimit(instructions.settings.attemptLimit)
        this.includeFeedbacks(currentAnswer.feedback);
        this.pools(instructions.pools);
    }

    includeFeedbacks(feedbacks: {[key: string]: Feedback}) {
        for (const questionId in feedbacks) {
            let feedback = feedbacks[questionId];
            if (questionId in this.questionMap) {
                this.questionMap[questionId].feedback(feedback);
            }
        }
    }

    clearFeedback() {
        for (const questionId in this.questionMap) {
            this.questionMap[questionId].feedback(null);
        }
    }

    clearAnswers() {
        for (const questionId in this.questionMap) {
            clearValue(this.questionMap[questionId]);
        }
        this.attemptCount(0);
    }

    hidePools() {
        this.questions().forEach((question: Question) => {
            question.visible(true);
        })
        this.pools().forEach((pool: QuestionPool) => {
            const allQuestions = pool.questions;
            const seed = this.seed() + this.attemptCount();
            const chosenQuestions = subsetRandomly(allQuestions, pool.amount, seed);
            allQuestions.forEach((questionId: string) => {
                this.questionMap[questionId].visible(chosenQuestions.includes(questionId));
            })
        })
    }

    submissionAsJson(): string {
        // Build up the fields that need to be edited to save the submission
        let result: QuizSubmission = {studentAnswers: {}, feedback: {}, attempt: {
            attempting: this.attempting(), count: this.attemptCount()
            }} as QuizSubmission;
        this.questions().forEach((question: Question) => {
            // @ts-ignore
            result.studentAnswers[question.id] = getValue(question);
            // @ts-ignore
            result.feedback[question.id] = question.feedback;
        });
        return JSON.stringify(result, null, 2);
    }

    makeBody(question: Question, index: number): string {
        let body = question.body;
        if (question.type === 'multiple_dropdowns_question') {
            let answers = question.answers as {[key: string]: string[]};
            for (let key in answers) {
                let randomizedAnswers = [...answers[key]].sort(() => Math.random() - 0.5);
                let options: string[] = ["", ...randomizedAnswers];
                let optionsStr = options.map((option: string) => (`<option>${option}</option>`)).join("")
                body = body.replace(matchKeyInBrackets(key), `<select id="question-md-${index}" data-bind="value: student['${key}'], disable: $component.isReadOnly()">${optionsStr}</select>`)
            }
        } else if (question.type === 'fill_in_multiple_blanks_question') {
            body = body.split(SQUARE_BRACKETS).map((part: string) => {
                //console.log(part);
                if (part.startsWith('[[') && part.endsWith(']]')) {
                    return part.slice(1, -1);
                } else if (part.startsWith('[') && part.endsWith(']')) {
                    const key = part.slice(1, -1);
                    return `<span class="d-inline-block"><input id="question-fimb-${index}-${part}" type="text" class="form-control" data-bind="value: student['${key}'], disable: $component.isReadOnly()"></span>`;
                } else {
                    return part;
                }
            }).join('');
        }
        return body
    }

}

export enum QuizMode {
    ATTEMPTING = "ATTEMPTING",
    COMPLETED = "COMPLETED",
    READY = "READY"
}



export class Quizzer extends AssignmentInterface {
    quiz: ko.Observable<Quiz>;

    forceQuiz: ko.Observable<boolean>;
    currentQuestion: ko.Observable<Question>;
    isReadOnly: ko.PureComputed<boolean>;

    editorMode: ko.Observable<EditorMode>;
    isDirty: ko.Observable<boolean>;

    errorMessage: ko.Observable<string>;

    subscriptions: {
        quiz: ko.Subscription
        currentAssignmentId: ko.Subscription
        questions: ko.Subscription[]
    }

    constructor(params: AssignmentInterfaceJson) {
        super(params);
        this.subscriptions = {quiz: null, currentAssignmentId: null, questions: null};

        this.quiz = ko.observable(null);

        // UI state
        this.isDirty = ko.observable(false);
        this.editorMode = ko.observable(EditorMode.SUBMISSION);
        this.errorMessage = ko.observable("");

        this.subscriptions.currentAssignmentId = this.currentAssignmentId.subscribe((newId) => {
            console.log("I AM STILL SUBSCRIBED");
            this.loadQuiz(newId);
        }, this);
        this.loadQuiz(this.currentAssignmentId());

        this.subscriptions.questions = [] as ko.Subscription[];
        this.subscriptions.quiz = this.quiz.subscribe((quiz) => {
            this.quiz().questions().map((question: Question) => {
                subscribeToStudent(question).map((subscribable) => {
                    let subscription = subscribable.subscribe((value: any) => {
                        this.onChange();
                    });
                    this.subscriptions.questions.push(subscription);
                })
            });
        });

        this.isReadOnly = ko.pureComputed<boolean>(() => {
            return !this.quiz().attempting();
        }, this);
    }

    dispose() {
        this.subscriptions.currentAssignmentId.dispose();
        this.subscriptions.quiz.dispose();
        this.subscriptions.questions.map((question: ko.Subscription) => question.dispose());
    }

    loadQuiz(assignmentId: number) {
        if (assignmentId != null) {
            let BlockPyServer = window['$MAIN_BLOCKPY_EDITOR'].components.server;
            let data = BlockPyServer.createServerData();
            data["assignment_id"] = assignmentId;
            BlockPyServer._postBlocking("loadAssignment", data, 4,
                (response: any) => {
                    if (response.success) {
                        let assignment = this.server.assignmentStore.newInstance(response.assignment);
                        let submission = this.server.submissionStore.newInstance(response.submission);
                        this.assignment(assignment);
                        this.submission(submission);
                        this.quiz(new Quiz(assignment, submission));
                        console.log(this.quiz())
                    } else {
                        console.error("Failed to load", response);
                        this.assignment(null);
                        this.errorMessage(response.message.message);
                    }
                },
                (e: any, textStatus: string, errorThrown: any) => {
                    console.error("Failed to load (HTTP LEVEL)", e, textStatus, errorThrown);
                    this.assignment(null);
                });
        } else {
            this.assignment(null);
        }
    }

    onChange() {
        this.saveFile("answer.py", this.quiz().submissionAsJson(), false);
    }

    saveSubmission() {
        this.saveFile("answer.py", this.quiz().submissionAsJson(), true);
    }

    saveSubmissionRaw() {
        this.saveFile("answer.py", this.submission().code(), true);
    }

    clearSubmission() {
        this.saveFile("answer.py", "", true);
        this.submission().code("");
    }

    startQuiz() {
        this.errorMessage("");
        this.quiz().attemptCount(this.quiz().attemptCount()+1);
        this.quiz().attempting(true);
        this.quiz().clearFeedback();
        this.quiz().hidePools();
        //this.quiz().clearAnswers();
        this.saveSubmission();
        this.submission().code(this.quiz().submissionAsJson());
    }

    saveAssignment() {
        this.quiz().loadAssignment(this.assignment(), this.submission());
        this.saveFile("!instructions.md", this.assignment().instructions(), true);
        this.saveFile("!on_run.py", this.assignment().onRun(), true);
        this.saveAssignmentSettings({
            settings: this.assignment().settings(),
            points: this.assignment().points(),
            url: this.assignment().url(),
            name: this.assignment().name()
        });
    }

    submit() {
        let BlockPyServer = window['$MAIN_BLOCKPY_EDITOR'].components.server;
        let now = new Date();
        let data = {
            assignment_id: this.assignment().id,
            assignment_group_id: this.assignmentGroupId,
            course_id: this.courseId,
            submission_id: this.submission().id,
            user_id: this.user.id,
            status: 0,
            correct: false,
            timestamp: now.getTime(),
            timezone: now.getTimezoneOffset(),
            passcode: window['$MAIN_BLOCKPY_EDITOR'].model.display.passcode(),
        };
        BlockPyServer._postBlocking("updateSubmission", data, 3,
               (response: any) => {
                    //console.log(response.message.feedbacks);
                    if (response.success || response.message.message === "Generic LTI Failure - perhaps not logged into LTI session?") {
                        console.log(response);
                        this.quiz().includeFeedbacks(response.feedbacks);
                    }
                    if (!response.success) {
                        console.error(response);
                        this.errorMessage(response.message.message);
                    }
                    this.submission().submissionStatus(response.submission_status);
                    this.quiz().attempting(false);
                    if (response.correct) {
                        this.markCorrect(this.assignment().id);
                    }
               },
               (e: any, textStatus: string, errorThrown: any) => {
                    console.error("Failed to load (HTTP LEVEL)", e, textStatus, errorThrown);
                    this.errorMessage("HTTP ERROR (try reloading the page; if still an error, report to instructor!): "+ textStatus+"\n"+errorThrown);
                });
    }
}

export const INSTRUCTIONS_BAR_HTML = (position: string) => `
<p>
    <div data-bind="switch: quiz()?.attemptStatus()">
        <!-- ko case: 'READY' -->
            To begin the quiz, click "Start Quiz".<br>
            You have <span data-bind="text: quiz()?.attemptsLeft()"></span><br>
            <div class="text-center" data-bind="visible: quiz()?.canAttempt()">
                <button data-bind="click: startQuiz" class="btn btn-success">Start Quiz</button>
            </div>
        <!-- /ko -->
        <!-- ko case: 'ATTEMPTING' -->
            <span>Quiz In Progress!</span><br>
            <!--<button data-bind="click: saveSubmission">SAVE</button><br>-->
            <div class="text-center">
                <button data-bind="click: submit" class="btn btn-success">Submit answer</button><br>
            </div>
        <!-- /ko -->
        <!-- ko case: 'COMPLETED' -->
            You have completed the quiz. You can see the feedback for each question ${position}.<br>
            To try again, click "Start Quiz".<br>
            You have <span data-bind="text: quiz()?.attemptsLeft()"></span><br>
            <div class="text-center" data-bind="visible: quiz()?.canAttempt()">
                <button data-bind="click: startQuiz" class="btn btn-success">Try Quiz Again</button>
            </div>
        <!-- /ko -->
    </div>
</p>
`


export const QUIZZER_HTML = `
<div data-bind="if: assignment">
    <div>
        <!-- Errors -->
        <div class="alert alert-warning p-1 border rounded float-right" data-bind="text: errorMessage, visible: errorMessage().length"></div>
    
        <!-- Instructor Editor Mode Selector -->
        <div data-bind="if: isInstructor()">
            <!-- Instructor Editor Mode Selector -->
            <div class="form-check">
                <label class="form-check-label">
                    <input data-bind="checked: editorMode"
                       id="editor-mode-radio" name="editor-mode-radio"
                       class="form-check-input" type="radio" value="RAW">
                    Raw Editor
                </label>
            </div>
            <div class="form-check">
                <label class="form-check-label">
                    <input data-bind="checked: editorMode"
                           id="editor-mode-radio" name="editor-mode-radio"
                           class="form-check-input" type="radio" value="FORM">
                    Form Editor
                </label>
            </div>
            <div class="form-check">
                <label class="form-check-label">
                    <input data-bind="checked: editorMode"
                       id="editor-mode-radio" name="editor-mode-radio"
                       class="form-check-input" type="radio" value="SUBMISSION">
                    Actual Submission
                </label>
            </div>
            
            <!-- Raw Instructor Editor -->
            <div data-bind="if: editorMode() === 'RAW'">
                <button data-bind="click: saveAssignment">Save Assignment</button><br>
                <h6>Instructions</h6>
                <textarea data-bind="textInput: assignment().instructions" style="width: 100%; height: 300px"></textarea><br>
                <h6>On Run</h6>
                <textarea data-bind="textInput: assignment().onRun" style="width: 100%; height: 300px"></textarea><br>
                <h6>Submission</h6>
                <!-- ko if: submission -->
                    <button data-bind="click: clearSubmission">Clear Submission</button><br>
                    <textarea data-bind="textInput: submission().code" style="width: 100%; height: 300px"></textarea><br>
                    <button data-bind="click: saveSubmissionRaw">Save code changes</button>
                <!-- /ko -->
            </div>
        
            <!-- Form Instructor Editor -->
            <div data-bind="if: editorMode() === 'FORM'">
                <button data-bind="click: saveAssignment">Save Assignment</button><br>
                <h6>Instructions</h6>
                <div data-bind="jsoneditor: {value: assignment().instructions}" style="width: 100%; height: 300px"></div><br>
                <h6>On Run</h6>
                <div data-bind="jsoneditor: {value: assignment().onRun}" style="width: 100%; height: 300px"></div><br>
                
                <!-- Other settings -->
                <div class="form-group">
                    <label for="reader-points-editor">
                        Points:
                        <input type="number" id="reader-points-editor" name="reader-points-editor"
                            class="form-control" data-bind="value: assignment().points">
                    </label>
                </div>
                <div class="form-group">
                    <label for="reader-name-editor">
                        Name:
                        <input type="text" id="reader-name-editor" name="reader-name-editor"
                            class="form-control" data-bind="value: assignment().name">
                    </label>
                </div>
                <div class="form-group">
                    <label for="reader-url-editor">
                        URL:
                        <input type="text" id="reader-url-editor" name="reader-url-editor"
                            class="form-control" data-bind="value: assignment().url">
                    </label>
                </div>
                <h6>Additional Settings</h6>
                <div data-bind="jsoneditor: {value: assignment().settings}" style="width: 100%; height: 300px"></div><br>
                
                <!-- ko if: submission -->
                    <h6>Submission</h6>
                    <div data-bind="jsoneditor: {value: submission().code}" style="width: 100%; height: 300px"></div><br>
                    <button data-bind="click: saveSubmissionRaw">Save code changes</button>
                    <button data-bind="click: clearSubmission">Clear Submission</button><br>
                <!-- /ko -->
            </div>
        </div>
        
        <!-- Main Instructions -->
        ${INSTRUCTIONS_BAR_HTML('below')}
        
        <!-- Quick Jump -->
        <div data-bind="visible: quiz()?.attemptCount() > 0">
            <span>Overview: </span>
            <span data-bind="foreach: quiz()?.questions().filter(question => question.visible())">
                <quizzer-question-status params="indexId: 1+$index(), status: student, question: $data, isAnchor: false"></quizzer-question-status>
            </span>
        </div>
    
    </div>
    
    <!-- ko if: editorMode() === 'SUBMISSION' -->
    <div data-bind="foreach: quiz()?.questions().filter(question => question.visible())">
        <div class="card m-4">
            <div class="quizzer-question card-body">
                <quizzer-question-status params="indexId: 1+$index(), status: student, question: $data, isAnchor: true" class="float-right"></quizzer-question-status>
                <h5 class="card-title">Question <span data-bind="text: 1+$index()"></span></h5>
                <h6 class="card-subtitle mb-2 text-muted">
                    <!-- ko if: feedback() -->
                    <span data-bind="text: Math.round(((feedback().score * points) + Number.EPSILON) * 100) / 100 + ' /'"></span>
                    <!-- /ko -->
                    <span data-bind="text: points"></span> points
                    <span data-bind="text: ' ('+id+')', visible: $component.isInstructor()"></span>
                </h6>
                <div data-bind="visible: $parent.quiz().attemptCount() > 0">
                    <div data-bind="markdowned: $parent.quiz().makeBody($data, $index())"></div>
                    <!-- Actual Question Code -->
                    <div data-bind="switch: type">
                        <!-- True/False Question -->
                        <div data-bind="case: 'true_false_question'">
                            <div class="form-check">
                                <label class="form-check-label" data-bind="attr: {for: 'question-tf-'+$index()+'-t'}">
                                  <input data-bind="checked: student,
                                                disable: $component.isReadOnly(),
                                                attr: {name: 'question-tf-'+$index()+'-t',
                                                       id: 'question-tf-'+$index()+'-t'}"
                                    class="form-check-input" type="radio" value="true">
                                    True
                              </label>
                            </div>
                            <div class="form-check">
                              <label class="form-check-label" data-bind="attr: {for: 'question-tf-'+$index()+'-f'}">
                                <input data-bind="checked: student,
                                            disable: $component.isReadOnly(),
                                            attr: {name: 'question-tf-'+$index()+'-f',
                                                   id: 'question-tf-'+$index()+'-f'}"
                                class="form-check-input" type="radio" value="false">
                                False
                              </label>
                            </div>
                        </div>
                        <!-- Multiple Choice -->
                        <div data-bind="case: 'multiple_choice_question'">
                            <!-- ko foreach: answers -->
                            <div class="form-check">
                              <label data-bind="attr: {for: 'question-mcq-'+$index()}" class="form-check-label">
                                  <input data-bind="checked: $parent.student,
                                                    value: $data,
                                                    disable: $component.isReadOnly(),
                                                    attr: {name: 'question-mcq-'+$parentContext.$index(),
                                                           id: 'question-mcq-'+$index()}"
                                    class="form-check-input" type="radio">
                                    <span data-bind="html: $data"></span>
                              </label>
                            </div>
                            <!-- /ko -->
                        </div>
                        <!-- Multiple Answers Question -->
                        <div data-bind="case: 'multiple_answers_question'">
                            <!-- ko foreach: answers -->
                            <div class="form-check">
                              <label data-bind="attr: {for: 'question-maq-'+$parentContext.$index()+'-'+$index()}" class="form-check-label">
                              <input data-bind="checked: $parent.student,
                                                checkedValue: $data,
                                                disable: $component.isReadOnly(),
                                                attr: {id: 'question-maq-'+$parentContext.$index()+'-'+$index(),
                                                       name: 'question-maq-'+$parentContext.$index()+'-'+$index()}"
                                class="form-check-input" type="checkbox">
                                <span data-bind="html: $data"></span>
                              </label>
                            </div>
                            <!-- /ko -->
                        </div>
                        <!-- Text Only Question -->
                        <div data-bind="case: 'text_only_question'"></div>
                        <!-- Matching Question -->
                        <div data-bind="case: 'matching_question'" class="container">
                            <!-- ko foreach: statements -->
                            <div class="row justify-content-between mb-3">
                                <div class="col" data-bind="html: $data"></div>
                                <div class="col">
                                    <select class="custom-select"
                                        data-bind="options: $parent.answers.sort(() => Math.random() - 0.5),
                                                   disable: $component.isReadOnly(),
                                                   optionsCaption: '',
                                                   value: $parent.student[$index()],
                                                   attr: {id: 'question-mat-'+$parentContext.$index()+'-'+$index()}"></select>
                                </div>
                            </div>
                            <!-- /ko -->
                        </div>
                        <!-- Multiple Dropdown Question -->
                        <div data-bind="case: 'multiple_dropdowns_question'">
                        </div>
                        <!-- Short Answer -->
                        <div data-bind="case: 'short_answer_question'">
                            <div class="form-group">
                                <input type="text" class="form-control"
                                    data-bind="value: student, 
                                               disable: $component.isReadOnly(), attr: {id: 'question-sa-'+$index()}">
                            </div>
                        </div>
                        <!-- Numerical Input -->
                        <div data-bind="case: 'numerical_question'">
                            <div class="form-group">
                                <input type="number" class="form-control"
                                    data-bind="value: student, 
                                               disable: $component.isReadOnly(), attr: {id: 'question-num-'+$index()}">
                            </div>
                        </div>
                        <!-- Multiple Fill in the Blank Question -->
                        <div data-bind="case: 'fill_in_multiple_blanks_question'">
                        </div>
                        <!-- Else -->
                        <div data-bind="case: $default">
                            I have no idea what this is!
                        </div>
                    </div>
                </div>
                <!-- ko if: feedback() -->
                <div class="border rounded m-2 p-2" data-bind="class: feedback().status == 'error' ? 'bg-dark' :
                                                                      feedback().correct ? 'bg-success' : 'bg-danger'">
                    <span data-bind="html: feedback().message" class="text-white"></span>
                </div>
                <!-- /ko -->
            </div>
        </div>
    </div>
    <!-- /ko -->
    
    ${INSTRUCTIONS_BAR_HTML('above')}
    <!-- Errors -->
    <div class="alert alert-warning p-1 border rounded" data-bind="text: errorMessage, visible: errorMessage().length"></div>
</div>
<div data-bind="if: server.isLoading()">
    Loading!
</div>

`;

ko.components.register("quizzer", {
    viewModel: Quizzer,
    template: QUIZZER_HTML
});

export const QUIZZER_QUESTION_STATUS_HTML = `
<!--<a data-bind="attr: { href: '#quizzer-question-anchor-'+indexId() }">-->
    <!-- ko if: isAnchor -->
        <span data-bind="attr: {id: 'quizzer-question-anchor-'+indexId()}"></span>
    <!-- /ko -->
    <span data-bind="switch: statusCode">
        <!-- ko case: 'unanswered' -->
            <i class="far fa-square text-secondary"></i>
        <!-- /ko -->
        <!-- ko case: 'answered' -->
            <i class="fas fa-square text-secondary"></i>
        <!-- /ko -->
        <!-- ko case: 'error' -->
            <i class="fas fa-square text-info"></i>
        <!-- /ko -->
        <!-- ko case: 'correct' -->
            <i class="fas fa-square text-success"></i>
        <!-- /ko -->
        <!-- ko case: 'incorrect' -->
            <i class="fas fa-square text-danger"></i>
        <!-- /ko -->
    </span>
<!--</a>-->
`;

interface QuizzerQuestionStatusJson {
    status: ko.Observable<string>[];
    question: Question;
    isAnchor: boolean;
    indexId: number
}

class QuizzerQuestionStatus {
    private status: ko.Observable<string>[];
    private question: Question;
    private isAnchor: boolean;
    private indexId: number;
    private statusCode: ko.PureComputed<string>;
    constructor(params: QuizzerQuestionStatusJson) {
        this.status = params.status;
        this.question = params.question;
        this.isAnchor = params.isAnchor;
        this.indexId = params.indexId;
        this.statusCode = ko.pureComputed<string>(() => {
            const value = this.question && subscribeToStudent(this.question);
            //console.log(this.question.id, value && value.map((answer) => answer()));
            const answered = value && value.filter((answer: ko.Observable<string>) =>
                Array.isArray(answer()) ? answer().length : answer()).length;
            const graded = this.question && this.question.feedback();
            const errored = graded && this.question.feedback().status === "error";
            const correct = graded && this.question.feedback().correct;
            if (graded) {
                if (errored) {
                    return 'error';
                } else if (correct) {
                    return 'correct';
                } else {
                    return 'incorrect';
                }
            } else {
                if (answered) {
                    return 'answered';
                } else {
                    return 'unanswered';
                }
            }
        }, this);
    }
}

ko.components.register("quizzer-question-status", {
    viewModel: QuizzerQuestionStatus,
    template: QUIZZER_QUESTION_STATUS_HTML
});