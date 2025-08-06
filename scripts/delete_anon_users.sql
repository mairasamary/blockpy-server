CREATE TEMP TABLE anons AS
SELECT id
FROM "user"
WHERE anonymous = TRUE;

DELETE FROM log WHERE subject_id IN (SELECT id FROM anons);
DELETE FROM grade_history WHERE user_id IN (SELECT id FROM anons);
DELETE FROM authentication WHERE user_id IN (SELECT id FROM anons);
DELETE FROM role WHERE user_id IN (SELECT id FROM anons);
DELETE FROM submission WHERE user_id IN (SELECT id FROM anons);
DELETE FROM assignment WHERE user_id IN (SELECT id FROM anons);
DELETE FROM assignment_group WHERE user_id IN (SELECT id FROM anons);
DELETE FROM course WHERE user_id IN (SELECT id FROM anons);
DELETE FROM "user" WHERE id IN (SELECT id FROM anons);