let db = require('../db');

module.exports = {

  getA: (params) => {
    console.log('modle',params)
    let query = `
    SELECT answers.answer_id, answers.body, answers.answer_date, answers.answerer_name, answers.helpfulness
    COALESCE(
      ARRAY_AGG(
        CASE
          WHEN answer_photos.photo_id is not null THEN JSON_BUILD_OBJECT('id', (answer_photos.photo_id), 'url', (answer_photos.photo_url))
        END
      ) FILTER (WHERE answer_photos.photo_id is not null),'{}') AS photos
    FROM answers LEFT JOIN answer_photos ON answers.answer_id = answer_photos.answer_id
    WHERE answers.question_id=$1
    GROUP BY answers.answer_id
    ORDER BY answers.answer_id
    LIMIT $2
    OFFSET $3;`
    let arr = [params.question_id, params.count, params.page * params.count];
    return db.query(query, arr);
  },

  addA:(params) => {

  },

  markH:(id) => {

  },

  report:(id) => {


  },
  test:(amount) => {

    let text = `select question_date from questions where question_id < 5;`
    console.log('here',db.query(text))
    return db.query(text);
  }
}