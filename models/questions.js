const db = require('../db');

module.exports = {
  getQ:(params) => {
    let query =
    `SELECT questions.product_id,
    (
      SELECT JSON_AGG(
        JSON_BUILD_OBJECT(
          'question_id',questions.question_id,
          'question_body', questions.question_body,
          'question_date', questions.question_date,
          'asker_name', questions.asker_name,
          'question_helpfulness', questions.question_helpfulness,
          'reported', questions.reported,
          'answers', (
            SELECT
              COALESCE(
                JSON_OBJECT_AGG(
                  answers.answer_id, (
                    SELECT
                      JSON_BUILD_OBJECT(
                        'id', answers.answer_id,
                        'body', answers.body,
                        'date', answers.answer_date,
                        'answerer_name', answers.answerer_name,
                        'helpfulness', answers.helpfulness,
                        'photos', (
                          SELECT COALESCE(JSON_AGG(ROW_TO_JSON(photo)),'[]')
                          FROM (
                            SELECT photo_id, photo_url
                            FROM answer_photos
                            WHERE answer_photos.answer_id = answers.answer_id
                          ) AS photo
                        )
                      )
                  )
                ),'{}')
              FROM (
                SELECT *
                FROM answers
                WHERE answers.question_id = question_id
                ORDER BY helpfulness
                LIMIT 2
              ) AS answers
          )
        )
      )
    ) AS results
    FROM questions
    WHERE questions.product_id = 1
    GROUP BY questions.product_id;`

    return db.query(query);
  },
  addQ:(params) =>{
    let query = `INSERT INTO questions (product_id, question_body, question_date, asker_name, asker_email)
    VALUES (${params.product_id}, '${params.body}', NOW(), '${params.name}', '${params.email}');`;
    return db.query(query);

  },
  markHelpful:(id) => {
    let query = `
    UPDATE questions
    SET question_helpfulness = question_helpfulness + 1
    WHERE question_id = ${id};`
    return db.query(query);
  },
  report:(id) =>{
    let query = `
    UPDATE questions
    SET reported = true
    WHERE question_id = ${id};`
    return db.query(query);
  }
}
