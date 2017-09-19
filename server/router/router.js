const router = require('express').Router();
const controller = require('../controller/controller.js');

router.route('/shows')
  .get(controller.getShows)
	.post(controller.postShow)
	.delete(controller.deleteShow);

router.route('/messages')
	.get(controller.getMessages)
	.post(controller.postMessage);

router.route('/login')
	.get(controller.getLogin)
	.post(controller.postLogin);

router.route('/signup')
	.get(controller.getSignup)
	.post(controller.postSignup);

router.route('/logout')
	.get(controller.logout);

module.exports = router;