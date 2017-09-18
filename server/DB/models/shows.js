const Sequelize = require('sequelize');
const DB = require ('../dbconfig.js');

const Shows = DB.define('shows', {
	name: {
		type: Sequelize.STRING,
		unique: true,
		allowNull: false
	},
	flyerUrl: {
		type: Sequelize.STRING,
		allowNull: false,
		isUrl: true
	},
	date: {
		type: Sequelize.STRING,
		allowNull: false
	},
	location: {
		type: Sequelize.STRING,
		allowNull: true
	},
	price: {
		type: Sequelize.FLOAT,
		allowNull: true
	},
	ticketLink: {
		type: Sequelize.STRING,
		allowNull: true,
		isUrl: true
	}
});

Shows.sync({force: true}).then(() => {
	return Shows.create({
		name: 'Nails',
		flyerUrl: 'http://rrrrasdfv.com/sasd.jpg',
		date: '9/30/2017',
		location: 'the echoplex',
		price: 9,
		ticketLink: 'http://fasdvvv.com/sasdd'
	}).then(() => {
		return Shows.create({
			name: 'Nails2',
			flyerUrl: 'http://rrrrasdfv.com/sasd.jpg',
			date: '9/30/2017',
			location: 'the echoplex',
			price: 9,
			ticketLink: 'http://fasdvvv.com/sasdd'
		})
	})
})





