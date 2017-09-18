const Shows = require('../DB/models/shows.js')
const Messages = require('../DB/models/messages.js');

module.exports.getShows = (req, res) => {
	Shows.findAll().then((shows) => {
		res.json(shows);
	})
}

module.exports.postShow = (req, res) => {
	res.json('test');
}

module.exports.deleteShow = (req, res) => {
	res.json('test');
}

module.exports.getMessages = (req, res) => {
	res.json('test');
}

module.exports.postMessage = (req, res) => {
	res.json('test')
}