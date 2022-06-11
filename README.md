# Questions & Answers API
A back end service-oriented api scaled to support more than half a thousand requests per second for the questions and answers section of an eCommerce website.

## Technologies Used
[![My Skills](https://skills.thijs.gg/icons?i=nodejs,js,postgres,express&theme=light)](https://skills.thijs.gg)

## API Endpoints
Method | Endpoint | Description | Parameters
-------| ---------| ------------| ----------
GET | /qa/questions | Retrieves questions | product_id, page(optional), count(optional)
GET | /qa/answers | Retrieves answers | question_id, page(optional), count(optional)