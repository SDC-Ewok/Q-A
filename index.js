require('dotenv').config();
const express = require('express');
const controller = require('./controllers');
const app = express();
const { PORT } = process.env;
app.use(express.json());


/* -----------------------------ROUTES----------------------------- */

/*------Questions------------*/
app.get('/qa/questions',controller.questions.getQs);
app.post('/qa/questions',controller.questions.addNew);
app.put('/qa/questions/:question_id/helpful',controller.questions.markHelpful);
app.put('/qa/questions/:question_id/report',controller.questions.report);

/*------Answers--------------*/
app.get('/qa/answers',controller.answers.getAs);
app.post('/qa/answers',controller.answers.addNew);
app.put('/qa/answers/:question_id/helpful',controller.answers.markHelpful);
app.put('/qa/answers/:question_id/report',controller.answers.report);

app.get('/qa/test', controller.answers.test)
app.listen(PORT,() => { console.log(`Server running on port ${PORT}...`); },);