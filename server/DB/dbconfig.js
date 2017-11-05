const Sequelize = require('sequelize');
require('dotenv').config()

const DB = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
	dialect: 'postgres',
	host: process.env.DB_HOST,
	port: process.env.DB_PORT
});

DB.authenticate()
	.then(() => console.log('database authenticated'))
	.catch((err) => console.log('unable to connect to the database', err));

module.exports = DB;
