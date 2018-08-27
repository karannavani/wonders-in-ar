const router = require('express').Router();
const wonders = require('../controllers/wonders');
const weatherController = require('../controllers/weatherController');

router.route('/wonders')
  .get(wonders.index)
  .post(wonders.create);
router.route('/wonders/:id')
  .get(wonders.show)
  .put(wonders.update)
  .delete(wonders.delete);

router.route('/weather')
  .get(weatherController.forecast);


module.exports = router;
