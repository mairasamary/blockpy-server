import {Server} from "./server";
import {User} from "../models/user";
import * as ko from 'knockout';
import {Assignment} from "../models/assignment";
import {Submission, SubmissionStatus} from "../models/submission";
import {AssignmentInterface, AssignmentInterfaceJson} from "./assignment_interface";

// TODO: Add bookmarking
// TODO: Add progress bar at top
// TODO: Event logging
// TODO: Question pool
// TODO: Instructor view vs. student view
// TODO: Add start/stop buttons
// TODO: Randomize matching order

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

export const getDefaultValue = (question: Question, answer: any): any => {
    switch (question.type) {
        case QuizQuestionTypes.multiple_answers_question:
            return ko.observable(answer && answer.length ? answer: []);
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
}

export const matchKeyInBrackets = (key: string) => new RegExp(`(?<!\\\))(\\[${key}\\])(?!\\()`);
export const SQUARE_BRACKETS = /(?<!\\)(\[.*?\])(?!\()/

export class Quiz {
    questionMap: Record<string, Question>;
    questions: ko.ObservableArray<Question>;
    attempting: ko.Observable<boolean>;

    // TODO: Status

    constructor(assignment: Assignment, submission: Submission) {
        this.questions = ko.observableArray([]);
        this.questionMap = {};
        this.attempting = ko.observable(false);
        this.loadAssignment(assignment, submission);
    }

    loadAssignment(assignment: Assignment, submission: Submission) {
        this.questions.removeAll();
        this.questionMap = {};
        let currentAnswer = JSON.parse(submission.code() || "{}");
        if (!("studentAnswers" in currentAnswer)) {
            currentAnswer.studentAnswers = {};
        }
        if (!("feedback" in currentAnswer)) {
            currentAnswer.feedback = {};
        }
        if (!("attempt" in currentAnswer)) {
            currentAnswer.attempt = {attempting: false};
        }
        //console.log("Loading Answer:", currentAnswer);
        let instructions = JSON.parse(assignment.instructions());
        for (const questionId in instructions.questions) {
            let answer = currentAnswer.studentAnswers[questionId];
            let question = {...instructions.questions[questionId], id: questionId,
                            feedback: ko.observable(null)} as Question;
            question.student = getDefaultValue(question, answer);
            this.questionMap[questionId] = question;
            this.questions.push(question);
        }
        this.attempting(currentAnswer.attempt.attempting);
        this.includeFeedbacks(currentAnswer.feedback);
    }

    includeFeedbacks(feedbacks: {[key: string]: Feedback}) {
        for (const questionId in feedbacks) {
            let feedback = feedbacks[questionId];
            if (questionId in this.questionMap) {
                this.questionMap[questionId].feedback(feedback);
            }
        }
    }

    submissionAsJson(): string {
        // Build up the fields that need to be edited to save the submission
        let result = {studentAnswers: {}};
        this.questions().forEach((question: Question) => {
            // @ts-ignore
            result.studentAnswers[question.id] = getValue(question);
        });
        return JSON.stringify(result, null, 2);
    }

    makeBody(question: Question, index: number): string {
        let body = question.body;
        if (question.type === 'multiple_dropdowns_question') {
            let answers = question.answers as {[key: string]: string[]};
            for (let key in answers) {
                let options: string[] = ["", ...answers[key]];
                let optionsStr = options.map((option: string) => (`<option>${option}</option>`)).join("")
                body = body.replace(matchKeyInBrackets(key), `<select id="question-md-${index}" data-bind="value: student['${key}'], disable: $component.isReadOnly()">${optionsStr}</select>`)
            }
        } else if (question.type === 'fill_in_multiple_blanks_question') {
            body = body.split(SQUARE_BRACKETS).map((part: string) => {
                if (part.startsWith('[') && part.endsWith(']')) {
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
    READ_ONLY = "READ_ONLY",
    STARTED = "STARTED",
    EDITABLE = "EDITABLE",
    REVIEWING = "REVIEWING",
    ERROR = "ERROR"
}


export class Quizzer extends AssignmentInterface {
    server: Server;
    courseId: number;
    user: User;
    assignmentGroupId: number;

    currentAssignmentId: ko.Observable<number>;
    assignment: ko.Observable<Assignment>;
    quiz: ko.Observable<Quiz>;
    submission: ko.Observable<Submission>;

    forceQuiz: ko.Observable<boolean>;
    currentQuestion: ko.Observable<Question>;
    isReadOnly: ko.PureComputed<boolean>;

    errorMessage: ko.Observable<string>;

    constructor(params: AssignmentInterfaceJson) {
        super(params);

        this.quiz = ko.observable(null);

        this.errorMessage = ko.observable("");

        this.currentAssignmentId.subscribe((newId) => {
            this.loadQuiz(newId);
        }, this);
        this.loadQuiz(this.currentAssignmentId());
        this.quiz.subscribe((quiz) => {
            this.quiz().questions().map((question: Question) => {
                subscribeToStudent(question).map((subscribable) => {
                    subscribable.subscribe((value: any) => {
                        this.onChange();
                    })
                })
            });
        });

        this.isReadOnly = ko.pureComputed<boolean>(() => {
            const status = this.submission().submissionStatus();
            return status === SubmissionStatus.SUBMITTED || status === SubmissionStatus.COMPLETED ||
                    status === SubmissionStatus.INITIALIZED;
        }, this);
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

    startQuiz() {
        this.errorMessage("");
        this.submission().submissionStatus(SubmissionStatus.STARTED);
    }

    saveAssignment() {
        this.quiz().loadAssignment(this.assignment(), this.submission());
        this.saveFile("!instructions.md", this.assignment().instructions(), true);
        this.saveFile("!on_run.py", this.assignment().onRun(), true);
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
                    if (response.success) {
                        console.log(response);
                        this.quiz().includeFeedbacks(response.feedbacks);
                    } else {
                        console.error(response);
                        this.errorMessage(response.message.message);
                    }
                    this.submission().submissionStatus(response.message.submission_status);
               },
               (e: any, textStatus: string, errorThrown: any) => {
                    console.error("Failed to load (HTTP LEVEL)", e, textStatus, errorThrown);
                });
    }
}


export const QUIZZER_HTML = `
<div data-bind="if: assignment">
    <div>
    <p>
        <div class="bg-danger" data-bind="text: errorMessage, hidden: errorMessage.length"></div>
        <div data-bind="switch: submission()?.submissionStatus()">
            <!-- ko case: ['Initialized', 'inProgress'] -->
                To Begin, click "Start Quiz" below. You have multiple attempts.
                <button data-bind="click: startQuiz" class="btn btn-success">Start Quiz</button>
            <!-- /ko -->
            <!-- ko case: 'Started' -->
                <span>Quiz In Progress!</span>
                <button data-bind="click: saveSubmission">SAVE</button><br>
                <button data-bind="click: submit">Submit answer</button><br>
            <!-- /ko -->
            <!-- ko case: 'EDITING' -->
                <button data-bind="click: saveAssignment">Save Assignment</button><br>
                <h6>Instructions</h6>
                <textarea data-bind="textInput: assignment().instructions" style="width: 100%; height: 300px"></textarea><br>
                <h6>On Run</h6>
                <textarea data-bind="textInput: assignment().onRun" style="width: 100%; height: 300px"></textarea><br>
                <h6>Submission</h6>
                <!-- ko if: submission -->
                <textarea data-bind="textInput: submission().code" style="width: 100%; height: 300px"></textarea><br>
                <button data-bind="click: saveSubmissionRaw">Save code changes</button>
                <!-- /ko -->
            <!-- /ko -->
            <!-- ko case: ['Submitted', 'Completed'] -->
                <button data-bind="click: startQuiz" class="btn btn-success">Try Quiz Again</button>
            <!-- /ko -->
        </div>
    </p>
    <!-- Quick Jump -->
    <div>
        <span>Overview: </span>
        <span data-bind="foreach: quiz()?.questions()">
        <quizzer-question-status params="indexId: 1+$index(), status: student, question: $data, isAnchor: false"></quizzer-question-status>
        </span>
    </div>
    
    </div>
    <!-- border border-secondary rounded p-4 m-4 -->
    <div data-bind="foreach: quiz()?.questions()">
    <div class="card m-4">
        <div class="quizzer-question card-body">
            <quizzer-question-status params="indexId: 1+$index(), status: student, question: $data, isAnchor: true" class="float-right"></quizzer-question-status>
            <h5 class="card-title">Question <span data-bind="text: 1+$index()"></span></h5>
            <h6 class="card-subtitle mb-2 text-muted" data-bind="text: id"></h6>
            
            <div data-bind="markdowned: $parent.quiz().makeBody($data, $index())"></div>
            
            <div data-bind="switch: type">
                <!-- True/False Question -->
                <div data-bind="case: 'true_false_question'">
                    <div class="form-check">
                      <input data-bind="checked: student,
                                    disable: $component.isReadOnly(),
                                    attr: {name: 'question-tf-'+$index(),
                                           id: 'question-tf-'+$index()+'-t'}"
                        class="form-check-input" type="radio" value="true">
                      <label class="form-check-label" data-bind="attr: {for: 'question-mcq-'+$index()+'t'}">
                        True
                      </label>
                    </div>
                    <div class="form-check">
                      <input data-bind="checked: student,
                                    disable: $component.isReadOnly(),
                                    attr: {name: 'question-tf-'+$index(),
                                           id: 'question-tf-'+$index()+'-f'}"
                        class="form-check-input" type="radio" value="false">
                      <label class="form-check-label" data-bind="attr: {for: 'question-mcq-'+$index()+'f'}">
                        False
                      </label>
                    </div>
                </div>
                <!-- Multiple Choice -->
                <div data-bind="case: 'multiple_choice_question'">
                    <!-- ko foreach: answers -->
                    <div class="form-check">
                      <input data-bind="checked: $parent.student,
                                        value: $data,
                                        disable: $component.isReadOnly(),
                                        attr: {name: 'question-mcq-'+$parentContext.$index(),
                                               id: 'question-mcq-'+$index()}"
                        class="form-check-input" type="radio">
                      <label data-bind="text: $data, attr: {for: 'question-mcq-'+$index()}" class="form-check-label">
                      </label>
                    </div>
                    <!-- /ko -->
                </div>
                <!-- Multiple Answers Question -->
                <div data-bind="case: 'multiple_answers_question'">
                    <!-- ko foreach: answers -->
                    <div class="form-check">
                      <input data-bind="checked: $parent.student,
                                        checkedValue: $data,
                                        disable: $component.isReadOnly(),
                                        attr: {id: 'question-maq-'+$parentContext.$index()+'-'+$index(),
                                               name: 'question-maq-'+$parentContext.$index()+'-'+$index()}"
                        class="form-check-input" type="checkbox">
                      <label data-bind="text: $data, attr: {for: 'question-maq-'+$parentContext.$index()+'-'+$index()}" class="form-check-label">
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
                        <div class="col" data-bind="text: $data"></div>
                        <div class="col">
                            <select class="custom-select"
                                data-bind="options: $parent.answers,
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
            <!-- ko if: feedback() -->
            <div class="border rounded m-2 p-2" data-bind="class: feedback().status == 'error' ? 'bg-dark' :
                                                       feedback().correct ? 'bg-success' : 'bg-danger'">
                <span data-bind="text: feedback().message" class="text-white"></span>
            </div>
            <!-- /ko -->
        </div>
    </div>
    </div>
    
</div>
<div data-bind="if: server.isLoading()">
    Loading!
</div>

`;

ko.components.register("quizzer", {
    viewModel: Quizzer,
    template: QUIZZER_HTML
});

// TODO: Question Pool

export const QUIZZER_QUESTION_STATUS_HTML = `
<a data-bind="attr: { href: '#quizzer-question-anchor-'+indexId() }">
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
</a>
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
            const answered = value && value.filter((answer: ko.Observable<string>) => answer()).length;
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