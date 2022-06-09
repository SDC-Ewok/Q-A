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
    answers.answer_id;`
    return db.query(query);
  },

  addA:(params) => {

  },

  markH:(id) => {

  },

  report:(id) => {


  },
  test:(amount) => {

    // let text = `select answers.answer_id AS id, answers.body, jsonb_agg(to_jsonb(answer_photos.photo_id)) AS items
    // FROM answers
    // WHERE answers.answer_id < 5
    // GROUP BY
    // answers.answer_id
    // ;
    // `
    // console.log('here',db.query(text))
    // return db.query(text);
  }
}


