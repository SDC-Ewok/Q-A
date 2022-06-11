# Questions & Answers API
A back end service-oriented api scaled to support more than half a thousand requests per second for the questions and answers section of an eCommerce website.

## Technologies Used
[![My Skills](https://skills.thijs.gg/icons?i=nodejs,js,postgres,express&theme=light)](https://skills.thijs.gg)

## Getting Start
1. Fork and Clone: `git clone https://github.com/SDC-Ewok/SDC-Q-A`




## API Endpoints
Method | Endpoint | Description | Parameters
-------| ---------| ------------| ----------
GET | /qa/questions | Retrieves questions | product_id, page(optional), count(optional)
GET | /qa/answers | Retrieves answers | question_id, page(optional), count(optional)
POST | /qa/questions | Add new question | product_id, body, name, email, photos(optional)
POST | /qa/questions | Add new answer | question_id, body, name, email, photos(optional)
PUT | /qa/questions/helpful/:question_id | Mark question as helpful | question_id
PUT | /qa/questions/report/:question_id | Report question | question_id
PUT | /qa/answers/helpful/:question_id | Mark answer as helpful | answer_id
PUT | /qa/answers/report/:question_id | Report answer | answer_id


## Contributor
### Jin Peng
<div id="badges">
<a href="https://www.linkedin.com/in/jinpeng307/">
<img src="https://img.shields.io/badge/LinkedIn-blue?logo=linkedin&logoColor=white&style=for-the-badge" alt="LinkedIn Badge">
</div>
