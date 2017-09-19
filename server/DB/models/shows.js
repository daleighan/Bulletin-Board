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
		name: 'Storm of Sedition, Corrupt Vision and Loathing',
		flyerUrl: 'https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/20615656_1950259008586193_6949531731565472864_o.jpg?oh=6893587829142dfe484e2e652b7e16bf&oe=5A3E2021',
		date: '9/21/2017',
		location: 'Programme Skate and Sound',
		price: 5,
	}).then(() => {
		return Shows.create({
			name: "Blazing Eye, Dead Tribe, Flesh Trade, Headdress, Lost Lands",
			flyerUrl: 'https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/21368968_478724439161077_1876526001059864101_o.jpg?oh=7fb385f558c7baf465a29437d75af715&oe=5A5EA7F4',
			date: '9/22/2017',
			location: '5 Star Bar',
			price: 5,
		});
	});
});

module.exports = Shows;





