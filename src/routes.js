const express = require('express');
const routes = express.Router();

const SchoolController = require('./controllers/SchoolController');
const LabScheduleController = require('./controllers/LabScheduleController');

// List Schools
routes.get('/', SchoolController.listSchools)
// Add School
routes.post('/', SchoolController.addSchool);

// List time available
routes.get('/labs', LabScheduleController.listAvailableTimes);
// Add time available
routes.post('/labs', LabScheduleController.addAvailableTime);
// Search Labs


module.exports = routes;