const Sequelize = require('sequelize');
const DB = require ('../dbconfig.js');

const Messages = DB.define('messages', {
	user: {
		type: Sequelize.STRING,
		allowNull: false
	},
	message: {
		type: Sequelize.STRING,
		allowNull: false
	}
})

Messages.sync({ force: true }).then(() => {
	return Messages.create({
		user: 'Alex',
		message: 'who is going on Saturday?'
	}).then(() => {
			return Messages.create({
			user: 'Jake',
			message: 'I am!'
		});
	});
});