const Sequelize = require('sequelize');

const DB = new Sequelize('data', 'Alex', '', {
	dialect: 'sqlite',
	storage: 'server/DB/data.sqlite'
});

DB.authenticate()
.then(() => console.log('database authenticated'))
.catch((err) => console.log('unable to connect to the database', err));

module.exports = DB;