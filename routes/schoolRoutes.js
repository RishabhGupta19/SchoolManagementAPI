const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');
const { addSchool, listSchools } = require('../controllers/schoolController');

router.post('/addSchool', addSchool);
router.get('/listSchools', listSchools);
router.get('/api/listSchools', schoolController.listSchools);


module.exports = router;
