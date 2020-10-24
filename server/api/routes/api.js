const router = require('express').Router();
const api = require('../controllers/api');
const apiController = require('../controllers/api');

router.get('/developers', apiController.getAllDevs);
router.get('/projects', apiController.getAllProjects);

module.exports = router;
