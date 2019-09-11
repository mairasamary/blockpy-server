


function submitGrade(submissionId, score, correct) {
    let data = {
        submission_id: submissionId,
        score: score,
        correct: correct,
        force_update: true,
    };
    $.post(URLS_UPDATE_SUBMISSION, data);
}