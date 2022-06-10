const models = require('../models');

module.exports = {
  getQs: async (req,res) => {
    let page = req.query.page || 1;
    let count = req.query.count || 5;
    let productId = req.query.product_id;
    let inputQ =  {product_id: productId, page: page, count: count};
    try {
      const output = await models.questions.getQ(inputQ);
      res.status(200).send(output.rows);
    }catch(err){
      res.status(500).send(err)
    }
  },
  addNew:(req,res) => {

  },
  markHelpful:(req,res) => {
    models.questions.markHelpful(req.params.question_id)
    .then(response => {
      res.status(201).send(response.command);
    })
    .catch(err => res.status(404).send(err))
  },
  report:(req,res) => {
    models.questions.report(req.params.question_id)
    .then(response => {
      res.status(201).send(response.command);
    })
    .catch(err => res.status(404).send(err))
  }
}