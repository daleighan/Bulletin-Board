const Shows = require('../DB/models/shows.js');
const Messages = require('../DB/models/messages.js');
const Users = require('../DB/models/users.js');

module.exports.getShows = (req, res) => {
	Shows.findAll().then((shows) => {
		res.status(200).json(shows);
	}).catch((err) => {
		res.json(err);
	});
}

module.exports.postShow = (req, res) => {
	Shows.create({
		name: req.body.name,
		flyerUrl: req.body.flyerUrl,
		date: req.body.date,
		location: req.body.location,
		price: req.body.price,
		ticketLink: req.body.ticketLink
	}).then((show) => {
		res.status(201).json(show);
	}).catch((err) => {
		res.json(err);
	});
}

module.exports.deleteShow = (req, res) => {
	Shows.destroy({
		where: { id: req.body.id }
	}).then((todo) => {
		res.status(204).json('show deleted');
	}).catch((err) => {
		res.json(err);
	});
}

module.exports.getMessages = (req, res) => {
	Messages.findAll().then((messages) => {
		res.json(messages);
	}).catch((err) => {
		res.json(err);
	});
}

module.exports.postMessage = (req, res) => {
	console.log(req.body);
	Messages.create({
		user: req.body.user,
		message: req.body.message,
		showId: req.body.showId
	}).then((message) => {
		res.status(201).json(message);
	}).catch((err) => {
		res.json(err);
	});
}

module.exports.getLogin = (req, res) => {
	res.sendFile(__dirname + '/authentication/login.html');
}

module.exports.postLogin = (req, res) => {
	Users.findOne({
		where: {
			user: req.body.username,
			password: req.body.password
		}
	}).then((found) => {
		if(found) {
			req.session.regenerate(() => {
        req.session.user = req.body.username;
        res.redirect('/');
      })
		} else {
			res.redirect('/login');
		}
	})
}

module.exports.getSignup = (req, res) => {
	res.sendFile(__dirname + '/authentication/signup.html');
}

module.exports.postSignup = (req, res) => {
	Users.create({
		user: req.body.username,
		password: req.body.password
	}).then(() => {
		req.session.regenerate(() => {
      req.session.user = req.body.username;
      res.redirect('/');
    })
	})
}

module.exports.logout = (req, res) => {
	req.session.destroy();
  res.status(302).redirect('/');
}


