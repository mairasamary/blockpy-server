import {GradingStatus, Submission, SubmissionStatus} from "../models/submission";
import {Review} from "../models/review";
import {User} from "../models/user";
import {Assignment} from "../models/assignment";
import * as ko from 'knockout';
import {hideOverlay, showOverlay} from "./ajax";


export function explainGradingStatus(status: GradingStatus) {
    switch (status.toLowerCase()) {
        case GradingStatus.FULLY_GRADED.toLowerCase():
           return "Student's submission is currently graded and visible to them. Use this button to hide and make further changes to their feedback.";
       case GradingStatus.PENDING_MANUAL.toLowerCase(): case GradingStatus.PENDING.toLowerCase():
           return "Student's submission is currently hidden while the instructor adds more feedback. Use this button to release the feedback to the student and update their grade in Canvas.";
       case GradingStatus.FAILED.toLowerCase():
           return "Something went wrong during the grading upload. Check your internet connection, make sure you have recently opened the BlockPy dashboard, and try again.";
       case GradingStatus.NOT_READY.toLowerCase():
           return "The student has not yet requested any feedback on this assignment.";
    }
}

export function colorGradingStatus(status: GradingStatus) {
    switch (status.toLowerCase()) {
        case GradingStatus.FULLY_GRADED.toLowerCase():
           return "btn-info";
       case GradingStatus.PENDING_MANUAL.toLowerCase(): case GradingStatus.PENDING.toLowerCase():
           return "btn-success";
       case GradingStatus.FAILED.toLowerCase():
           return "btn-danger";
       case GradingStatus.NOT_READY.toLowerCase():
           return "btn-warning";
    }
}

export function labelGradingStatus(status: GradingStatus) {
    switch (status.toLowerCase()) {
        case GradingStatus.FULLY_GRADED.toLowerCase():
           return "Hide and Revise feedback";
       case GradingStatus.PENDING_MANUAL.toLowerCase(): case GradingStatus.PENDING.toLowerCase():
           return "Release feedback";
       case GradingStatus.FAILED.toLowerCase():
           return "Failed to release feedback!";
       case GradingStatus.NOT_READY.toLowerCase():
           return "Release feedback early";
    }
}

export enum ReviewModelState {
    DRAFT= "DRAFT",
    SAVED= "SAVED",
    EDITING= "EDITING",
    EXPANDED= "EXPANDED"
}


export class Tag {
    id: number;
    name: string;
    kind: string;
    description: string;
    level: string;
    version: number;
    ownerId: number;
    courseId: number;
}

function findReviewByLocation(reviews: KnockoutObservableArray<SingleReviewInterface>, location: number): SingleReviewInterface|null {
    let potentialReviews = reviews().filter((review: SingleReviewInterface) => parseInt(review.review.location(), 10) === location);
    if (potentialReviews.length) {
        return potentialReviews[0];
    } else {
        return null;
    }
}

export class LineReviewInterfaceJson {
    location: number;
    reviewInterface: SingleReviewInterface;
}

export class LineReviewInterface {
    location: KnockoutObservable<number>;
    reviewInterface: SingleReviewInterface;
    review: KnockoutReadonlyComputed<Review>;
    private quickButtonIcon: KnockoutReadonlyComputed<string>;

    constructor(params: LineReviewInterfaceJson) {
        this.location = ko.observable(params.location);
        this.reviewInterface = params.reviewInterface;
        /*this.review = ko.pureComputed(() => findReviewByLocation(this.reviews, this.location()));


        this.quickButtonIcon = ko.pureComputed(() => {
            if (this.review() === null) {
                if (this.parent.canEditFeedback()) {
                    return "fa-plus-circle";
                } else {
                    return "fa-circle";
                }
            }
            switch (this.review().state()) {
                case ReviewModelState.DRAFT:
                    return "fa-save";
                case ReviewModelState.EDITING:
                    return "fa-save";
                case ReviewModelState.SAVED:
                    return "fa-chevron-circle-right";
                case ReviewModelState.EXPANDED:
                    return "fa-chevron-circle-left";
            }
        });*/
    }
}

export enum InheritOptions {
    NOTHING="Nothing",
    TAG="Tag",
    REVIEW="Review"
}

export interface SingleReviewInterfaceJson {
    review: Review;
    parent: SubmissionReviewInterface;
    state: ReviewModelState;
    inherits: string;
}

export class SingleReviewInterface {
    review: Review;
    parent: SubmissionReviewInterface;
    state: KnockoutObservable<ReviewModelState>;
    inherits: KnockoutObservable<string>;
    private getScoreText: KnockoutReadonlyComputed<string>;
    getScore: KnockoutReadonlyComputed<number>;
    private getText: KnockoutReadonlyComputed<string>;

    constructor(params: SingleReviewInterfaceJson, startSaved: boolean) {
        this.parent = params.parent;
        if (startSaved) {
            this.state = ko.observable(ReviewModelState.SAVED);
        } else {
            this.state = ko.observable(params.state);
        }
        this.inherits = ko.observable(params.inherits);
        // If we change inherits type, then clear out other settings
        this.inherits.subscribe(this.clearOtherInherits.bind(this));
        this.getScoreText = ko.pureComputed<string>( this.calculateScoreText.bind(this));
        this.getScore = ko.pureComputed<number>( this.calculateScore.bind(this));
        this.getText = ko.pureComputed<string>( this.calculateText.bind(this));
    }

    clearOtherInherits(newInheritMode: string) {
        if (newInheritMode === InheritOptions.REVIEW) {
            this.review.tagId(null);
        } else if (newInheritMode === InheritOptions.TAG) {
            this.review.forkedId(null);
        } else {
            this.review.tagId(null);
            this.review.forkedId(null);
        }
    }

    calculateScoreText(): string {
        let score = this.calculateScore();
        if (score > 0) {
            return "+"+score;
        } else if (score == null) {
            return "";
        } else {
            return ""+score;
        }
    }

    calculateScore(): number {
        let score = this.review.score();
        if (score === null) {
            let parent = this.getParentReview();
            if (parent !== null) {
                score = parent.score();
            }
        }
        return score;
    }

    getParentReview(): Review|null {
        let genericReviewId = this.review.forkedId();
        if (genericReviewId === null) {
            return null;
        }
        let genericReview = this.parent.lookupGenericReviews[genericReviewId];
        if (genericReview != null) {
            return genericReview;
        } else {
            return null;
        }
    }

    getParentTag(): Tag|null {
        let tagId = this.review.tagId();
        if (tagId === null) {
            return null;
        }
        let tag = this.parent.lookupTags[tagId];
        if (tag != null) {
            return tag;
        } else {
            return null;
        }
    }

    calculateText(): string {
        let text = this.review.comment();
        switch (this.inherits()) {
            case "nothing": return text;
            case "tag":
                let tag = this.getParentTag();
                if (tag !== null) {
                    text = tag.name+(text ? "- "+text : "");
                }
                return text;
            case "review":
                let parent = this.getParentReview();
                if (parent !== null) {
                    text = parent.comment+(text ? "- "+text : "");
                }
                return text;
        }
    }
}


function parseReviewInheritance(review: Review): InheritOptions {
    if (review.tagId() != null) {
        return InheritOptions.TAG;
    } else if (review.forkedId() != null) {
        return InheritOptions.REVIEW;
    } else {
        return InheritOptions.NOTHING;
    }
}

export interface SubmissionReviewInterfaceJson {
    submission: Submission;
    assignment: Assignment;
    author: User;
    reviews: Review[];
    genericReviews: Review[];
    tags: Tag[];
    isGrader: boolean;
}

export class SubmissionReviewInterface {
    // The submission being reviewed
    submission: Submission;
    author: User;
    assignment: Assignment;
    // Reviews used in just this submission
    reviews: KnockoutObservableArray<SingleReviewInterface>;
    // Read-only Reviews available from the global site context
    genericReviews: Review[];
    // Read-only Tags available from the global assignment context
    tags: Tag[];

    // UI
    isGrader: KnockoutObservable<boolean>;

    // Fast-lookups of the read-only Generic Reviews and Tags
    readonly lookupGenericReviews: Record<number, Review>;
    readonly lookupTags: Record<number, Tag>;
    private canSeeFeedback: KnockoutReadonlyComputed<boolean>;
    private canEditFeedback: KnockoutReadonlyComputed<boolean>;
    private totalScore: KnockoutReadonlyComputed<number>;
    private releaseFeedbackExplanation: KnockoutReadonlyComputed<string>;
    private releaseFeedbackColor: KnockoutReadonlyComputed<string>;
    private releaseFeedbackLabel: KnockoutReadonlyComputed<string>;
    private closeSubmissionLabel: KnockoutReadonlyComputed<string>;
    private generalReviews: KnockoutReadonlyComputed<SingleReviewInterface>;
    private lineReviews: KnockoutReadonlyComputed<SingleReviewInterface>;
    
    constructor(params: SubmissionReviewInterfaceJson) {
        // Readonly data setup
        this.submission = params.submission;
        this.author = params.author;
        this.assignment = params.assignment;
        this.lookupGenericReviews = {};
        this.lookupTags = {};
        this.tags = params.tags.map(
            (tag: Tag) => {
                this.lookupTags[tag.id] = tag;
                return tag;
            }
        );
        this.genericReviews = params.genericReviews.map(
            (review: Review) => {
                this.lookupGenericReviews[review.id] = review;
                return review;
            }
        );
        // Actual review management
        this.reviews = ko.observableArray<SingleReviewInterface>(params.reviews.map(
            (review: Review) => {
                let sri = new SingleReviewInterface({
                    review: review,
                    parent: this, // Get actual proper review from ID
                    state: ReviewModelState.SAVED,
                    inherits: parseReviewInheritance(review)
                }, false);
                return sri;
            }
        ));
        // UI Seeing/Editing Stuff
        this.isGrader = ko.observable(params.isGrader);
        this.canSeeFeedback = ko.pureComputed<boolean>( () => {
            return this.isGrader() ||
                this.submission.checkGrading(GradingStatus.FULLY_GRADED);
        });
        this.canEditFeedback = ko.pureComputed<boolean>( () => {
            return this.isGrader();
        });

        this.totalScore = ko.pureComputed<number>( () => {
            let totalReviewScore = this.reviews().map( (reviewInterface: SingleReviewInterface) =>
                reviewInterface.calculateScore() ? reviewInterface.calculateScore() : 0
            ).reduce( (score, total) => score+total, 0);
            return this.submission.score() + totalReviewScore;
        });

        this.releaseFeedbackExplanation = ko.pureComputed<string>( () => explainGradingStatus(this.submission.gradingStatus()));
        this.releaseFeedbackColor = ko.pureComputed<string>( () => colorGradingStatus(this.submission.gradingStatus()));
        this.releaseFeedbackLabel = ko.pureComputed<string>( () => labelGradingStatus(this.submission.gradingStatus()));
        this.closeSubmissionLabel = ko.pureComputed<string>( () =>
            this.submission.checkSubmission(SubmissionStatus.COMPLETED) ?
                "Close submission" : "Reopen submission"
        );
    }

    releaseFeedback() {
        showOverlay();
        let newStatus = this.submission.checkGrading(GradingStatus.FULLY_GRADED) ?
            GradingStatus.FULLY_GRADED : GradingStatus.PENDING_MANUAL;
        let endpoint = window["$URL_ROOT"] + "grading/update_grading_status";
        $.post(endpoint, {
            submission_id: this.submission.id,
            new_grading_status: newStatus,
        }, (data) => {
            if (data.new_status) {
                this.submission.gradingStatus(data.new_status);
            } else {
                alert("Grading status update failed!\n"+JSON.stringify(data));
            }
        }).always(hideOverlay);
    }

    closeSubmission() {
        showOverlay();
        let newStatus = this.submission.checkSubmission(SubmissionStatus.COMPLETED) ?
            SubmissionStatus.COMPLETED : SubmissionStatus.IN_PROGRESS;
        let endpoint = window["$URL_ROOT"] + "grading/update_submission_status";
        $.post(endpoint, {
            "submission_id": this.submission.id,
            "new_submission_status": newStatus,
        }, (data) => {
            if (data.new_status) {
                this.submission.submissionStatus(data.new_status);
            } else {
                alert("Submission status update failed!\n"+JSON.stringify(data));
            }
        }).always(hideOverlay);
    }

    addGeneralFeedback() {
        let draftReview = new Review({
            assignment_version: this.assignment.version(),
            author_id: this.author.id,
            comment: "New Comment",
            date_created: ""+new Date(),
            date_modified: ""+new Date(),
            forked_id: null,
            forked_version: null,
            generic: false,
            id: null,
            location: null,
            score: null,
            submission_id: this.submission.id,
            submission_version: this.submission.version(),
            tag_id: null,
            version: 0
        });
        let draftReviewInterface = new SingleReviewInterface({
            inherits: "review",
            parent: this,
            review: draftReview,
            state: ReviewModelState.DRAFT
        }, false);
        this.reviews.push(draftReviewInterface);
    }
}

export const SUBMISSION_REVIEW_INTERFACE_TEMPLATE = `
<!-- ko if: canSeeFeedback -->

<!-- Errors -->
{% if is_grader and not session['is_lti_active'] or g.course.id != submission.course_id %}
    <!-- ko if: canEditFeedback -->
    <div class="alert alert-warning" role="alert">
        You are not in a grading LTI session for this course.
        Launch an LTI session by opening any random BlockPy question.
        This will store a cookie that lets Canvas recognize that you can grade questions.
    </div>
    <!-- /ko -->
{% endif %}

<!-- Controls -->
<!-- ko if: canEditFeedback -->
<p class="col-lg-6 col-md-12">
    <button type="button" class="btn btn-sm"
        data-bind="text: ui.releaseFeedback.text, click: ui.releaseFeedback.submit,
                    class: ui.releaseFeedback.color"></button>
    <span data-bind="text: ui.releaseFeedback.explain"></span>
</p>
<p class="col-lg-6 col-md-12">
    <button type="button" class="btn btn-sm btn-info"
        data-bind="text: ui.closeSubmission.text, click: ui.closeSubmission.submit"></button>
    Closed assignments prevent students from submitting.
</p>
<!-- /ko -->


<!-- Summary Area -->
<div class="col-lg-6 col-md-12">
<table class="review-report table table-bordered table-hover table-sm">
    <thead>
        <th>Grading</th>
        <th>Score</th>
    </thead>
    <tr>
        <td>Passed all autograder tests?</td>
        <td data-bind="html: submission.ui.correct"></td>
    </tr>
    <tr>
        <td>Autograder submission score:</td>
        <td data-bind="text: submission.score"></td>
    </tr>
    <tr>
        <th>General Feedback</th>
        <th>Score Modifier</th>
    </tr>
    <!-- ko foreach: ui.generalReviews -->
    <tr>
        <td data-bind="text: $data.getText(), css: {'draft-comment': $data.state() === 'DRAFT'}"></td>
        <td data-bind="text: $data.getScoreText()"></td>
    </tr>
    <!-- /ko -->
    <tr>
        <th>Line Feedback</th>
        <th>Score Modifier</th>
    </tr>
    <!-- ko foreach: ui.lineReviews -->
    <tr>
        <!-- TODO: Markdown -->
        <td data-bind="text: $data.getText(), css: {'draft-comment': $data.state() === 'DRAFT'}"></td>
        <td data-bind="text: $data.getScoreText()"></td>
    </tr>
    <!-- /ko -->
    <tr class="table-active total-row">
        <td>Total</td>
        <td data-bind="text: ui.totalScore"></td>
    </tr>
</table>
</div>

<!-- General Feedback -->
<div class="col-lg-6 col-md-12">
    <h4>General Feedback</h4>

    <!-- ko if: canEditFeedback -->
    <button type="button" class="btn btn-sm btn-success"
        data-bind="click: ui.generalFeedback.add">Add feedback</button>
    <!-- /ko -->

    <div class="list-group d-flex w-100 justify-content-between"
         data-bind="foreach: ui.generalReviews">
        <!-- ko if: state() !== 'SAVED' -->
        <div data-bind='component: {name: "individual-review-editor", params: $data}'></div>
        <!-- /ko -->
        <!-- ko if: state() === 'SAVED' -->
        <div data-bind='component: {name: "individual-review-show", params: $data}'></div>
        <!-- /ko -->
    </div>

</div>

<!-- Line Feedback -->
<div class="col-lg-6 col-md-12">
    <h4>Line Feedback</h4>
</div>

<!-- /ko -->`;


export const INDIVIDUAL_REVIEW_EDITOR_TEMPLATE = `
<!-- Template for Individual Review Editing -->
<div class="form-group draft-review">
    <div class="form-inline mb-2">
        <label class="mr-2" for="iret-inherit">Inherit from:</label>
        <select class="custom-select form-control" id="iret-inherit"
            data-bind="value: inherits">
            <option value="nothing">Nothing</option>
            <option value="tag">Tag</option>
            <option value="review">Review</option>
        </select>
    </div>
    <!-- ko if: inherits() == 'tag' -->
    <div class="form-inline mb-2">
        <label class="mr-2" for="iret-tag">Tag:</label>
        <select class="custom-select" id="iret-tag"
            data-bind="value: tagId, options: $root.tags, valueAllowUnset: true,
                       optionsText: 'name'">
        </select>
    </div>
    <!-- /ko -->
    <!-- ko if: inherits() == 'review' -->
    <div class="form-inline mb-2">
        <label class="mr-2" for="iret-forked">Parent:</label>
        <select class="custom-select" id="iret-forked"
            data-bind="value: forkedId, options: $root.genericReviews, valueAllowUnset: true,
                        optionsText: 'comment'">
        </select>
    </div>
    <!-- /ko -->
    <div class="mb-2">
        <label class="mr-2" for="iret-comment">Additional Comment:</label>
        <textarea data-bind="value: comment" class="form-control form-control-sm" id="iret-comment"></textarea>
    </div>
    <div class="form-inline mb-2">
        <label class="mr-2" for="iret-score">Score Modifier:</label>
        <input data-bind="value: score" class="form-control form-control-sm" id="iret-score" size="5"/>
        <!-- ko if: score() == null || score() === '' -->
        <span class="ml-2">(Modifier blank, will use <code data-bind="text: getScore"></code>)</span>
        <!-- /ko -->
    </div>
    <button type="button" class="btn btn-outline-secondary btn-sm mr-2"
            data-bind="click: cancel">Cancel</button>
    <div class="float-right">
        <button type="button" class="btn btn-success btn-sm mr-2"
            data-bind="click: save">Save</button>
    </div>
</div>`;

ko.components.register("individual-review-editor", {
    template: INDIVIDUAL_REVIEW_EDITOR_TEMPLATE
});

export const INDIVIDUAL_REVIEW_SHOW_TEMPLATE = `
<!-- ko if: $root.canSeeFeedback -->
<div class="individual-review-show-box">
    <code data-bind="text: getScore"></code>
    <span data-bind="text: getText"></span>
    <!-- ko if: $root.canEditFeedback() -->
    <button type="button" class="btn btn-sm btn-danger float-right"
        data-bind="click: remove">Remove</button>
    <button type="button" class="btn btn-sm btn-outline-secondary mr-2 float-right"
        data-bind="click: edit">Edit</button>
    <!-- /ko -->
</div>
<!-- /ko -->
`;

ko.components.register("individual-review-show", {
    template: INDIVIDUAL_REVIEW_SHOW_TEMPLATE
});

export const LINE_REVIEW_BUTTON_TEMPLATE = `
<!-- ko if: $root.canSeeFeedback -->
<div data-bind="template: {afterRender: fixPopoverPosition }"
    class="line-review-box">
<span class="line-review-quick-button fas"
      data-bind="click: quickButtonClick,
                 class: quickButtonIcon"></span>
<div class="popover bs-popover-right static-popover"
    data-bind="css: {inactive: review() == null},
               click: takeFocus" style="display:none">
<!-- ko if: review() !== null -->
    <div class="arrow"></div>
    <div class="popover-body popover-header-sm">
    <!-- ko if: !review().isEditing() -->
        <code data-bind="text: review().getScoreText()"></code>
        <span data-bind="text: review().getText()"></span>
        <!-- ko if: $parent.canEditFeedback() -->
        <span class="fas fa-trash float-right popover-control"
              data-bind="click: remove"></span>
        <span class="fas fa-edit float-right mr-2 popover-control"
              data-bind="click: edit"></span>
        <span class="fas fa-chevron-left float-right mr-2 popover-control"
              data-bind="click: collapse"></span>
        <!-- /ko -->
    <!-- /ko -->
    <!-- ko if: review().isEditing() -->
        <div data-bind='component: {name: "individual-review-editor", params: review()}'></div>
    <!-- /ko -->
    </div>
<!-- /ko -->
</div>
</div>
<!-- /ko -->
`;

ko.components.register("line-review", {
    model: LineReviewInterface,
    template: LINE_REVIEW_BUTTON_TEMPLATE
});

ko.components.register("submission-review-interface", {
    model: SubmissionReviewInterface,
    template: SUBMISSION_REVIEW_INTERFACE_TEMPLATE
})