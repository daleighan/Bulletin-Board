const Sequelize = require('sequelize');
const DB = require ('../dbconfig.js');

const Users = DB.define('users', {
	user: {
		type: Sequelize.STRING,
		allowNull: false
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false
	}
});

Users.sync().then(() => {
	return Users.create({
		user: 'Alex',
		password: 'Password'
	}).then(() => {
		Users.create({
			user: 'Zack',
			password: 'password'
		});
	});
});

module.exports = Users;