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
	},
	showId: {
		type: Sequelize.INTEGER
	}
})

Messages.sync({ force: true }).then(() => {
	return Messages.create({
		user: 'Alex',
		message: 'who is going on Saturday?',
		showId: 1
	}).then(() => {
			return Messages.create({
			user: 'Jake',
			message: 'I am!',
			showId: 2
		});
	});
});

module.exports = Messages;