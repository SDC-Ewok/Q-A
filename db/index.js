const {Client} = require ('pg');
require('dotenv').config();

const {
  HOST, USERNAME, DATABASE, POSTGRESPORT, PORT
} = process.env;

const db = new Client({
  host: HOST,
  user: USERNAME,
  port: POSTGRESPORT,
  password:'',
  database: DATABASE
});

db.connect();

module.exports = db;