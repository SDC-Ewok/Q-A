const models = require('../models');

module.exports = {
  getAs:(req,res) => {

    let page = req.query.page || 0;
    let count = req.query.count || 5;
    let questionId = req.query.question_id;
    let input = {question_id: questionId, page: page, count: count};
    models.answers.getA(input)
    .then(response => {
      let result = {...input, results: response.rows};
      console.log('res', result)
      res.status(200).send(result);
    })
    .catch(err => res.status(500).send(err))
  },
  addNew:(req,res) => {

  },
  markHelpful:(req,res) => {

  },
  report:(req,res) => {

  },
  test:(req,res) => {
    models.answers.test(res.body).then(result => {
      console.log(result.rows,'dpasnda')
      res.status(200).send(result.rows)})
  }
}