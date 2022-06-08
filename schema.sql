DROP DATABASE IF EXISTS qna;
CREATE DATABASE qna;
\c qna;


-- ---
-- Table 'answers_photos'
--
-- ---

DROP TABLE IF EXISTS answer_photos;

CREATE TABLE answer_photos (
  photo_id  SERIAL NOT NULL,
  answer_id INTEGER NOT NULL,
  photo_url VARCHAR(1024) NOT NULL,
  PRIMARY KEY (photo_id)
);

-- ---
-- Table 'answers'
--
-- ---

DROP TABLE IF EXISTS answers;

CREATE TABLE answers (
  answer_id       SERIAL NOT NULL,
  question_id     INTEGER NOT NULL,
  body            VARCHAR(1000) NOT NULL,
  date            VARCHAR(32) NOT NULL DEFAULT extract(epoch from now()),
  answerer_name   VARCHAR(60) DEFAULT 'Anonymous',
  answerer_email  VARCHAR(60) NOT NULL DEFAULT '',
  helpfulness     INTEGER DEFAULT 0,
  reported        BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (answer_id)
);

-- ---
-- Table 'questions'
--
-- ---

DROP TABLE IF EXISTS questions;

CREATE TABLE questions (
  question_id           SERIAL NOT NULL,
  product_id            INTEGER NOT NULL,
  question_body         VARCHAR(1000) NOT NULL,
  question_date         VARCHAR(32) NOT NULL DEFAULT extract(epoch from now()),
  asker_name            VARCHAR(60) DEFAULT 'Anonymous',
  asker_email           VARCHAR(60) NOT NULL DEFAULT 'NULL',
  question_helpfulness  INTEGER DEFAULT 0,
  reported              BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (question_id)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE answers ADD FOREIGN KEY (question_id) REFERENCES questions (question_id);
ALTER TABLE answer_photos ADD FOREIGN KEY (answer_id) REFERENCES answers (answer_id);


-- -- ---
-- -- Import CSV files
-- -- ---

-- COPY questions FROM '/Users/penpen/Documents/Coding/Data/questions.csv'
--   DELIMITER ','
--   CSV HEADER;

-- COPY answers FROM '/Users/penpen/Documents/Coding/Data/answers.csv'
--   DELIMITER ','
--   CSV HEADER;

-- COPY answer_photos FROM '/Users/penpen/Documents/Coding/Data/answers_photos.csv'
--   DELIMITER ','
--   CSV HEADER;