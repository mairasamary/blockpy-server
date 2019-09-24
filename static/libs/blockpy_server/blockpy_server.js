
function submitGrade(submissionId, courseId, score, correct) {
    let data = {
        submission_id: submissionId,
        score: score,
        correct: correct,
        force_update: true,
        course_id: courseId,
    };
    return $.post(URLS_UPDATE_SUBMISSION, data);
}