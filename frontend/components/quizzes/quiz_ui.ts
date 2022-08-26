export const QUIZ_PREVIEW = `
<div data-bind="switch: quiz()?.attemptStatus()">
<p>
    <!-- ko case: 'READY' -->
        There is a quiz below this reading, which you have not started yet.
        You have <span data-bind="text: quiz()?.attemptsLeft()"></span><br>
        <div class="text-center" data-bind="visible: quiz()?.canAttempt()">
            <a href="#quiz-start">Jump down</a> to begin the quiz.
        </div>
    <!-- /ko -->
    <!-- ko case: 'ATTEMPTING' -->
        There is a quiz in progress below this reading. 
        <div class="text-center">
            <a href="#quiz-start">Jump down</a> to return to the quiz.
        </div>
    <!-- /ko -->
    <!-- ko case: 'COMPLETED' -->
        You have completed the quiz below this reading.<br>
        <span data-bind="switch: quiz()?.feedbackType()">
            <!-- ko case: 'IMMEDIATE' -->
            You can see the feedback for each question below.<br> 
            <!-- /ko -->
            <!-- ko case: 'NONE' -->
            However, you will <strong>not</strong> see any feedback.<br>
            <!-- /ko -->
        </span>
        You have <span data-bind="text: quiz()?.attemptsLeft()"></span><br>
        <div class="text-center" data-bind="visible: quiz()?.canAttempt()">
            <a href="#quiz-start">Jump down</a> to return to the quiz.
        </div>
    <!-- /ko -->
</p>
</div>
`;


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
            You have <span data-bind="text: quiz()?.attemptsLeft()"></span><br>
            <div class="text-center" data-bind="visible: quiz()?.canAttempt()">
                To try again, click "Start Quiz".<br>
                <button data-bind="click: startQuiz" class="btn btn-success">Try Quiz Again</button>
            </div>
        <!-- /ko -->
    </div>
</p>
`

export const QUIZZER_HTML = `
<div data-bind="if: assignment" style="background-color: #fcf8e3; padding-bottom: 1px; padding-top: 1px">
    <div>
        <!-- Errors -->
        <div class="alert alert-warning p-1 border rounded float-right" data-bind="text: errorMessage, visible: errorMessage().length"></div>
    
        <!-- Instructor Editor Mode Selector -->
        <div data-bind="if: isInstructor()">
            <!-- Instructor Editor Mode Selector -->
            <div class="btn-group-toggle mt-2 mb-2">
                <label class="btn btn-outline-secondary mr-4" for="quizzer-editor-mode-radio-raw"
                    data-bind="css: { active: editorMode()=='RAW'}">
                    <input data-bind="checked: editorMode"
                           id="quizzer-editor-mode-radio-raw" name="quizzer-editor-mode-radio"
                           class="btn-check" type="radio" value="RAW" autocomplete="off">
                    Raw Editor
                </label>
                <label class="btn btn-outline-secondary mr-4" for="quizzer-editor-mode-radio-form"
                    data-bind="css: { active: editorMode()=='FORM'}">
                    <input data-bind="checked: editorMode"
                               id="quizzer-editor-mode-radio-form" name="quizzer-editor-mode-radio"
                               class="btn-check" type="radio" value="FORM" autocomplete="off">
                    Form Editor
                </label>
                <label class="btn btn-outline-secondary" for="quizzer-editor-mode-radio-submission"
                    data-bind="css: { active: editorMode()=='SUBMISSION'}">
                    <input data-bind="checked: editorMode"
                       id="quizzer-editor-mode-radio-submission" name="quizzer-editor-mode-radio"
                       class="btn-check" type="radio" value="SUBMISSION" autocomplete="off">
                    Actual Quiz
                </label>
                <br><hr>
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
                <div data-bind="jsoneditor: {value: assignment().instructions}" style="width: 100%; height: 500px; resize: vertical; overflow: auto"></div><br>
                <h6>On Run</h6>
                <div data-bind="jsoneditor: {value: assignment().onRun}" style="width: 100%; height: 500px; resize: vertical; overflow: auto"></div><br>
                
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
        
        <!-- Interface Settings -->
        <div data-bind="visible: isInstructor">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" 
                    id="quizzer-as-student" name="quizzer-as-student"
                    class="form-control" data-bind="checked: asStudent">
                <label class="form-check-label"  for="quizzer-as-student">View As Student</label>
            </div>
        </div>
        
        <!-- Reading Preamble -->
        <div data-bind="if: quiz()?.readingId() && editorMode() === 'SUBMISSION' && asStudent()">
            <reader params="server: server,
                            courseId: courseId,
                            currentAssignmentId: quiz().readingId(),
                            assignmentGroupId: assignmentGroupId,
                            isInstructor: isInstructor,
                            markCorrect: ()=>{},
                            asPreamble: true,
                            user: user"></reader>
        </div>
        <div data-bind="if: quiz()?.readingId() && editorMode() === 'SUBMISSION' && !asStudent()">
            <strong>Reading is hidden; Click "View as Student" to preview the Reading.</strong>
            <hr>
        </div>
        
        <!-- Main Instructions -->
        ${INSTRUCTIONS_BAR_HTML('below')}
        
        <!-- Interface Settings -->
        <div data-bind="visible: isInstructor">
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
    
    <a id="quiz-start"></a>
    
    <!-- ko if: editorMode() === 'SUBMISSION' -->
    <div data-bind="foreach: quiz()?.questions().filter(question => !asStudent() || question.visible())">
        <div class="card m-4">
            <div class="quizzer-question card-body">
                <quizzer-question-status params="indexId: 1+$index(), status: student, question: $data, isAnchor: true, 
                                                 quiz: $component.quiz(), asStudent: $component.asStudent()" class="float-right"></quizzer-question-status>
                <h5 class="card-title">Question <span data-bind="text: 1+$index()"></span></h5>
                <div data-bind="if: !$component.asStudent()" style="float: right">
                    <button class="btn btn-sm mr-2"
                        data-bind="click: ()=>$component.changeEditing($data, true),
                                   visible: $data.editing()">Save</button>
                   <button class="btn btn-sm mr-2"
                        data-bind="click: ()=>$component.changeEditing($data, false),
                                   text: $data.editing() ? 'Cancel' : 'Edit'"></button>
                </div>
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
                    <!-- ko if: $data.editing() -->
                    <textarea data-bind="markdowneditor: {value: $data.rawBody}" style="width: 100%; height: 200px"></textarea>
                    <!-- /ko -->
                    <div data-bind="visible: !$data.editing(), 
                                    markdowned: {value: $parent.quiz().makeBody($data, $index())}"></div>
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
                                        data-bind="options: $parent.retainOrder ? $parent.answers : $parent.answers.sort(() => Math.random() - 0.5),
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