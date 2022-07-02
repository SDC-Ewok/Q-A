const {Client} = require ('pg');
require('dotenv').config();

const {
  HOST, USERNAME, PASSWORD, DATABASE, POSTGRESPORT, PORT
} = process.env;

const db = new Client({
  host: HOST,
  user: USERNAME,
  port: POSTGRESPORT,
  password: PASSWORD,
  database: DATABASE
});

db.connect();

module.exports = db;