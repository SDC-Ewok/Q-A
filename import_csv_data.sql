\c qna
COPY questions(question_id, product_id, question_body, question_date, asker_name, asker_email, reported, question_helpfulness)
  FROM '/Users/penpen/Documents/Coding/SDC-Q-A/Data/Sdc/questions.csv'
  DELIMITER ','
  CSV HEADER;

COPY answers(answer_id, question_id, body, date, answerer_name, answerer_email, reported, helpfulness)
  FROM '/Users/penpen/Documents/Coding/SDC-Q-A/Data/Sdc/answers.csv'
  DELIMITER ','
  CSV HEADER;

COPY answer_photos(photo_id, answer_id, photo_url)
  FROM '/Users/penpen/Documents/Coding/SDC-Q-A/Data/Sdc/answers_photos.csv'
  DELIMITER ','
  CSV HEADER;