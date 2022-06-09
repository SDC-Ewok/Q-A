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
  photo_url TEXT NOT NULL,
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
  body            TEXT NOT NULL,
  answer_date     BIGINT NOT NULL,
  answerer_name   VARCHAR(60) DEFAULT 'Anonymous',
  answerer_email  VARCHAR(60) NOT NULL DEFAULT '',
  reported        BOOLEAN DEFAULT FALSE,
  helpfulness     INTEGER DEFAULT 0,
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
  question_body         TEXT NOT NULL,
  question_date         BIGINT NOT NULL,
  asker_name            VARCHAR(60) DEFAULT 'Anonymous',
  asker_email           VARCHAR(60) NOT NULL DEFAULT 'NULL',
  reported              BOOLEAN DEFAULT FALSE,
  question_helpfulness  INTEGER DEFAULT 0,
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

COPY questions FROM '/Users/penpen/Documents/Coding/Data/Sdc/questions.csv'
  DELIMITER ','
  CSV HEADER;

COPY answers FROM '/Users/penpen/Documents/Coding/Data/Sdc/answers.csv'
  DELIMITER ','
  CSV HEADER;

COPY answer_photos FROM '/Users/penpen/Documents/Coding/Data/Sdc/answers_photos.csv'
  DELIMITER ','
  CSV HEADER;


-- ---
-- Reformat Data
-- ---

ALTER TABLE answers ADD COLUMN temp_date TIMESTAMP WITHOUT TIME ZONE NULL;
UPDATE answers SET temp_date = to_timestamp(answer_date/1000)::TIMESTAMP;
ALTER TABLE answers ALTER COLUMN answer_date TYPE TIMESTAMP WITHOUT TIME ZONE USING temp_date;
ALTER TABLE answers DROP COLUMN temp_date;

ALTER TABLE questions ADD COLUMN temp_date TIMESTAMP WITHOUT TIME ZONE NULL;
UPDATE questions SET temp_date = to_timestamp(question_date/1000)::TIMESTAMP;
ALTER TABLE questions ALTER COLUMN question_date TYPE TIMESTAMP WITHOUT TIME ZONE USING temp_date;
ALTER TABLE questions DROP COLUMN temp_date;

