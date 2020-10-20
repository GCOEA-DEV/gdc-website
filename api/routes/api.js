const router = require('express').Router();
const apiController = require('../controllers/api');

router.get('/developers', apiController.getAllDevs);

module.exports = router;
