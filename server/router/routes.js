const router = require('express').Router();
const controller = require('../controller/controller.js');


router.route('/food')
  .post(controller.food);

router.route('/active')
  .post(controller.active);

router.route('/movies')
  .post(controller.movies);

router.route('/entertainment')
  .post(controller.entertainment);

router.route('/random')
  .post(controller.random);

module.exports = router;
