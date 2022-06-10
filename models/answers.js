let db = require('../db');

module.exports = {

  getA: (params) => {

    let query = `SELECT
    answers.answer_id, answers.body, answers.answer_date AS date, answers.answerer_name, answers.helpfulness,
    COALESCE(
      ARRAY_AGG (
        CASE
          WHEN answer_photos.photo_id is not null THEN JSON_BUILD_OBJECT('id', (answer_photos.photo_id), 'url', (answer_photos.photo_url))
        END
      ) FILTER (WHERE answer_photos.photo_id is not null),'{}') AS photos
    FROM
      answers LEFT JOIN answer_photos ON answers.answer_id=answer_photos.answer_id
    WHERE
      answers.question_id = ${params.question_id}
    GROUP BY
    answers.answer_id
    LIMIT ${params.count}
    OFFSET ${params.page * params.count};
    `
    return db.query(query);
  },

  addA:(params) => {

  },

  markH:(id) => {
    let query = `
    UPDATE answers
    SET helpfulness = helpfulness + 1
    WHERE answer_id = ${id};`
    return db.query(query);
  },

  report:(id) => {
    let query = `
    UPDATE answers
    SET reported = true
    WHERE answer_id = ${id};`
    return db.query(query);
  }
}


