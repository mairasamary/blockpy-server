import * as ko from 'knockout';
import {Assignment} from "../../models/assignment";
import {Submission} from "../../models/submission";
import {subsetRandomly} from "../../utilities/random";
import {clearValue, Feedback, getDefaultValue, getValue, Question, SQUARE_BRACKETS, matchKeyInBrackets} from "./questions";

export enum QuizMode {
    ATTEMPTING = "ATTEMPTING",
    COMPLETED = "COMPLETED",
    READY = "READY"
}

export enum QuizFeedbackType {
    // TODO: Support other kinds besides immediate
    IMMEDIATE = "IMMEDIATE", NONE = "NONE", SUMMARY = "SUMMARY"
}

export enum QuizPoolRandomness {
    ATTEMPT = "ATTEMPT", SEED="SEED", NONE="NONE"
}

export interface QuestionPool {
    questions: string[]
    amount: number
    name: string
}

export interface QuizInstructionsSettings {
    /** How many times you can attempt a quiz; -1 is infinite attempts */
    attemptLimit?: number
    /** How many minutes you must wait between attempts; -1 is no minutes */
    coolDown?: number
    feedbackType?: QuizFeedbackType
    /** How many questions to show on each "page"; -1 is all questions on one page */
    questionsPerPage?: number
    /** What to use when choose the pool, for consistency */
    poolRandomness?: QuizPoolRandomness
}

export interface QuizInstructions {
    questions?: Record<string, Question>
    settings?: QuizInstructionsSettings
    pools?: QuestionPool[]
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
        questionsPerPage: -1,
        poolRandomness: QuizPoolRandomness.SEED
    },
    pools: []
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
    if (!("pools" in quizInstructions)) {
        quizInstructions.pools = [];
    }
    quizInstructions.settings.attemptLimit ??= -1;
    quizInstructions.settings.coolDown ??= -1;
    quizInstructions.settings.feedbackType ??= QuizFeedbackType.IMMEDIATE;
    quizInstructions.settings.questionsPerPage ??= -1;
    quizInstructions.settings.poolRandomness ??= QuizPoolRandomness.ATTEMPT;
}



export class Quiz {
    questionMap: Record<string, Question>;
    questions: ko.ObservableArray<Question>;

    seed: ko.Observable<number>;
    poolRandomness: ko.Observable<QuizPoolRandomness>;

    attemptCount: ko.Observable<number>;
    attempting: ko.Observable<boolean>;
    attemptStatus: ko.PureComputed<QuizMode>;
    attemptMulligans: ko.Observable<number>;

    feedbackType: ko.Observable<QuizFeedbackType>;

    attemptLimit: ko.Observable<number>;
    attemptsLeft: ko.PureComputed<string>;
    canAttempt: ko.PureComputed<boolean>;

    pools: ko.Observable<QuestionPool[]>;

    constructor(assignment: Assignment, submission: Submission) {
        this.questions = ko.observableArray([]);
        this.questionMap = {};
        this.attempting = ko.observable(false);
        this.attemptCount = ko.observable(0);
        this.attemptMulligans = ko.observable(0);
        this.attemptLimit = ko.observable<number>(-1);
        this.feedbackType = ko.observable<QuizFeedbackType>(QuizFeedbackType.IMMEDIATE);

        this.pools = ko.observable<QuestionPool[]>([]);
        this.poolRandomness = ko.observable<QuizPoolRandomness>(QuizPoolRandomness.SEED);

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
            // Create the new question
            let question = {...instructions.questions[questionId],
                            id: questionId,
                            feedback: ko.observable(null),
                            visible: ko.observable(true),
                            pool: ko.observable(null)} as Question;
            question.student = getDefaultValue(question, answer);
            this.questionMap[questionId] = question;
            this.questions.push(question);
        }
        this.attempting(currentAnswer.attempt.attempting);
        this.attemptCount(currentAnswer.attempt.count);
        this.attemptMulligans(currentAnswer.attempt.mulligans);
        this.attemptLimit(instructions.settings.attemptLimit);
        this.feedbackType(instructions.settings.feedbackType);
        this.poolRandomness(instructions.settings.poolRandomness);
        this.includeFeedbacks(currentAnswer.feedback);
        this.includePools(instructions.pools || []);
    }

    includeFeedbacks(feedbacks: {[key: string]: Feedback}) {
        for (const questionId in feedbacks) {
            let feedback = feedbacks[questionId];
            if (questionId in this.questionMap) {
                this.questionMap[questionId].feedback(feedback);
            }
        }
    }

    includePools(pools: QuestionPool[]) {
        this.pools(pools);
        this.pools().forEach((pool: QuestionPool) => {
            pool.questions.forEach((questionId: string) => {
                if (questionId in this.questionMap) {
                    this.questionMap[questionId].pool(pool);
                }
            });
        });
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
            const seed = this.poolRandomness() === QuizPoolRandomness.SEED ?
                this.seed() :
                this.poolRandomness() === QuizPoolRandomness.ATTEMPT ?
                this.seed() + this.attemptCount() :
                0;
            const chosenQuestions = subsetRandomly(allQuestions, pool.amount, seed);
            allQuestions.forEach((questionId: string) => {
                this.questionMap[questionId].visible(chosenQuestions.includes(questionId));
            })
        })
    }

    submissionAsJson(): string {
        // Build up the fields that need to be edited to save the submission
        let result: QuizSubmission = {
            studentAnswers: {},
            feedback: {},
            attempt: {
                attempting: this.attempting(),
                count: this.attemptCount(),
                mulligans: this.attemptMulligans()
            }
        } as QuizSubmission;
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
                    return `<span class="d-inline-block"><input id="question-fimb-${index}-${part}" type="text" class="form-control" data-bind="textInput: student['${key}'], disable: $component.isReadOnly()"></span>`;
                } else {
                    return part;
                }
            }).join('');
        }
        return body
    }

}
