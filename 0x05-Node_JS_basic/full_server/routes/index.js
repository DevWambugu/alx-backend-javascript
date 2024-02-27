// Link the route / to the AppController
// Link the route /students and /students/:majorto the StudentsController
const express = require('express');
const router = express.Router();
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

// Define the Route for the homepage
router.get('/', AppController.getHomepage);

// Define the Routes for students
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
