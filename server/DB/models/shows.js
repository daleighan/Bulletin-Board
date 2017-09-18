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
		name: 'Damnation AD, Battery',
		flyerUrl: 'http://hardcoreshowflyers.net/wp-content/uploads/2011/10/10041196.jpg',
		date: '7/11/2017',
		location: 'Fort Reno',
		price: 7,
		ticketLink: ''
	}).then(() => {
		return Shows.create({
			name: "25 Ta Life, Crown of Thornz, Leeway, Murphy's Law",
			flyerUrl: 'http://hardcoreshowflyers.net/wp-content/uploads/2007/10/10280702-782x1024.jpg',
			date: '4/22/2017',
			location: 'Coney Island High 15 St. Marks',
			price: 9,
			ticketLink: ''
		});
	});
});

module.exports = Shows;





