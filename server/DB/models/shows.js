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

Shows.sync().then(() => {
	return Shows.create({
		name: "Blazing Eye, Dead Tribe, Flesh Trade, Headdress, Lost Lands",
		flyerUrl: 'https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/21368968_478724439161077_1876526001059864101_o.jpg?oh=7fb385f558c7baf465a29437d75af715&oe=5A5EA7F4',
		date: '09/22/2017',
		location: '5 Star Bar',
		price: 5,
	}).then(() => {
		return Shows.create({
			name: 'Systematic Death, Infest, FYPM',
		  flyerUrl: 'https://pbs.twimg.com/media/DJ9lnaAV4AA0Y1K.jpg',
		  date: '11/3/2017',
		  location: 'Los Globos',
		  price: 20,
    }).catch((err) => console.log(err));
	});
});

module.exports = Shows;





