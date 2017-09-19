const router = require('express').Router();
const controller = require('../controller/controller.js');

router.route('/page/shows').get(controller.getShows)
	.post(controller.postShow)
	.delete(controller.deleteShow);

router.route('/page/messages')
	.get(controller.getMessages)
	.post(controller.postMessage);

router.route('/login')
	.get(controller.getLogin)
	.post(controller.postLogin);

router.route('/signup')
	.get(controller.getSignup)
	.post(controller.postSignup)

module.exports = router;