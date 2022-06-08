const { Sequelize } = require('sequelize');
require('dotenv').config();

const {
  HOST, USERNAME, DATABASE, POSTGRESPORT, PORT
} = process.env;

const sequelize = new Sequelize({
  host: HOST,
  port: PORT,
  database: DATABASE,
  username: USERNAME,
  dialect: 'postgres',
});

module.exports = sequelize;