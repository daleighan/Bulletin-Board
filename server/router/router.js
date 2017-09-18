const router = require('express').Router();
const controller = require('../controller/controller.js');

router.route('/shows').get(controller.getShows)
.post(controller.postShow)
.delete(controller.deleteShow);

router.route('/messages')
.get(controller.getMessages)
.post(controller.postMessage);

module.exports = router;