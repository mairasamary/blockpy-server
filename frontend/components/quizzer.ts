import {Server} from "./server";
import {User} from "../models/user";
import * as ko from 'knockout';
import {AssignmentInterface, AssignmentInterfaceJson, EditorMode} from "./assignment_interface";

import {Quiz, QuizMode} from './quizzes/quiz';
import {Question, subscribeToStudent} from './quizzes/questions';
import "./quizzes/quizzer_question_status";

// Maybe TODO: Add bookmarking
    // Add a question mark button that let's them flag this to return to later
// TODO: Attempt cooldowns
// TODO: Allow bulk regrading of students' feedbacks/scoring
// TODO: Check for orphaned feedbacks and answers
// TODO: Click to edit component in modal
// TODO: One question at a time

// TODO: Click to edit the markdown of a question

// Done:
// Show as [instructor|student] mode
// Hide feedback/score mode
// Allow instructors to see currently failed to grade assignments


export interface QuizzerJson {
    server: Server;
    courseId: number;
    user: User;
    currentAssignmentId: ko.Observable<number>;
    assignmentGroupId: number;
}



export class Quizzer extends AssignmentInterface {
    quiz: ko.Observable<Quiz>;

    forceQuiz: ko.Observable<boolean>;
    currentQuestion: ko.Observable<Question>;
    isReadOnly: ko.PureComputed<boolean>;

    editorMode: ko.Observable<EditorMode>;
    asStudent: ko.Observable<boolean>;
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
        this.asStudent = ko.observable(!this.isInstructor());
        this.editorMode = ko.observable(EditorMode.SUBMISSION);
        this.errorMessage = ko.observable("");

        this.subscriptions.currentAssignmentId = this.currentAssignmentId.subscribe((newId) => {
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
            this.quiz().hidePools();
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
                        console.log(submission, submission.code);
                        this.quiz(new Quiz(assignment, submission));
                        this.markClean();
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
        if (this.quiz().attemptStatus() === QuizMode.ATTEMPTING) {
            this.markDirty();
            this.saveFile("answer.py", this.quiz().submissionAsJson(), false, this.markClean.bind(this));
        }
    }

    saveSubmission() {
        this.markDirty();
        this.saveFile("answer.py", this.quiz().submissionAsJson(), true, this.markClean.bind(this));
    }

    saveSubmissionRaw() {
        this.markDirty();
        this.saveFile("answer.py", this.submission().code(), true, this.markClean.bind(this));
    }

    clearSubmission() {
        this.markDirty();
        this.saveFile("answer.py", "", true, this.markClean.bind(this));
        this.submission().code("");
    }

    markDirty() {
        this.isDirty(true);
    }

    markClean() {
        this.isDirty(false);
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
        this.saveFile("!instructions.md", this.assignment().instructions(), true, this.markClean.bind(this));
        this.saveFile("!on_run.py", this.assignment().onRun(), true, this.markClean.bind(this));
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
        // TODO: Skipping questions doesn't skip giving you points does it??
        BlockPyServer._postBlocking("updateSubmission", data, 3,
               (response: any) => {
                    //console.log(response.message.feedbacks);
                    if (response.success || response.message.message === "Generic LTI Failure - perhaps not logged into LTI session?") {
                        console.log(response);
                        this.quiz().includeFeedbacks(response.feedbacks || response.message.feedbacks);
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
    <!-- ko if: isDirty() -->
        <small class="alert alert-info p-1 border rounded float-right">Saving changes</small>
    <!-- /ko -->
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
            You have completed the quiz.<br>
            <span data-bind="switch: quiz()?.feedbackType()">
                <!-- ko case: 'IMMEDIATE' -->
                You can see the feedback for each question ${position}.<br>
                <!-- /ko -->
                <!-- ko case: 'NONE' -->
                However, you will <strong>not</strong> see any feedback.<br>
                <!-- /ko -->
            </span>
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
                <div data-bind="jsoneditor: {value: assignment().instructions}" style="width: 100%; height: 300px; resize: vertical; overflow: auto"></div><br>
                <h6>On Run</h6>
                <div data-bind="jsoneditor: {value: assignment().onRun}" style="width: 100%; height: 300px; resize: vertical; overflow: auto"></div><br>
                
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
                <div data-bind="jsoneditor: {value: assignment().settings}" style="width: 100%; height: 300px; resize: vertical; overflow: auto"></div><br>
                
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
        
        <!-- Interface Settings -->
        <div data-bind="visible: isInstructor">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" 
                    id="quizzer-as-student" name="quizzer-as-student"
                    class="form-control" data-bind="checked: asStudent">
                <label class="form-check-label"  for="quizzer-as-student">View As Student</label>
            </div>
            <!-- ko if: quiz() -->
            <div class="form-group">
                <label for="quizzer-seed-editor">
                    Current Seed:
                    <input type="text" id="quizzer-seed-editor" name="quizzer-seed-editor"
                        class="form-control" data-bind="value: quiz().seed">
                </label>
            </div>
            <!-- /ko -->
        </div>
        
        <!-- Quick Jump -->
        <div data-bind="visible: !asStudent() || quiz()?.attemptCount() > 0">
            <span>Overview: </span>
            <span data-bind="foreach: quiz()?.questions().filter(question => !asStudent() || question.visible())">
                <quizzer-question-status params="indexId: 1+$index(), status: student, 
                                                 question: $data, isAnchor: false, 
                                                 quiz: $component.quiz(), asStudent: $component.asStudent()"></quizzer-question-status>
            </span>
        </div>
    
    </div>
    
    <!-- ko if: editorMode() === 'SUBMISSION' -->
    <div data-bind="foreach: quiz()?.questions().filter(question => !asStudent() || question.visible())">
        <div class="card m-4">
            <div class="quizzer-question card-body">
                <quizzer-question-status params="indexId: 1+$index(), status: student, question: $data, isAnchor: true, 
                                                 quiz: $component.quiz(), asStudent: $component.asStudent()" class="float-right"></quizzer-question-status>
                <h5 class="card-title">Question <span data-bind="text: 1+$index()"></span></h5>
                <h6 class="card-subtitle mb-2 text-muted">
                    <!-- ko if: feedback() && (!$component.asStudent() || $component.quiz().feedbackType() !== 'NONE') -->
                    <span data-bind="text: Math.round(((feedback().score * points) + Number.EPSILON) * 100) / 100 + ' /'"></span>
                    <!-- /ko -->
                    <span data-bind="text: points"></span> points
                    <span data-bind="text: ' ('+id+')', visible: !$component.asStudent()"></span>
                </h6>
                <div data-bind="if: pool() && !$component.asStudent()">
                    Pool: <span data-bind="text: pool().name"></span>
                </div>
                <div data-bind="visible: !$component.asStudent() || $parent.quiz().attemptCount() > 0">
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
                                                           id: 'question-mcq-'+$parentContext.$index()}"
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
                                    data-bind="textInput: student, 
                                               disable: $component.isReadOnly(),
                                               attr: {id: 'question-sa-'+$index()}">
                            </div>
                        </div>
                        <div data-bind="case: 'essay_question'">
                        <textarea data-bind="textInput: student, 
                                               disable: $component.isReadOnly(),
                                               attr: {id: 'question-es-'+$index()}" style="width: 100%; height: 300px"></textarea><br>
                        </div>
                        <!-- Numerical Input -->
                        <div data-bind="case: 'numerical_question'">
                            <div class="form-group">
                                <input type="number" class="form-control"
                                    data-bind="textInput: student, 
                                               disable: $component.isReadOnly(),
                                               attr: {id: 'question-num-'+$index()}">
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
                <!-- ko if: feedback() && (!$component.asStudent() || $component.quiz().feedbackType() !== 'NONE') -->
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
