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
app.put('/qa/questions/helpful/:question_id',controller.questions.markHelpful);
app.put('/qa/questions/report/:question_id',controller.questions.report);

/*------Answers--------------*/
app.get('/qa/answers',controller.answers.getAs);
app.post('/qa/answers',controller.answers.addNew);
app.put('/qa/answers/helpful/:question_id',controller.answers.markHelpful);
app.put('/qa/answers/report/:question_id',controller.answers.report);

app.listen(PORT,() => { console.log(`Server running on port ${PORT}...`); },);