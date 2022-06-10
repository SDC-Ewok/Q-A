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

  },
  report:(req,res) => {

  }
}