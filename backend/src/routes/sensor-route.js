const express = require('express');
const router = express.Router();

const sensorController = require('../controllers/sensor-controller');

// Fetch all data route
router.get('/fetch', sensorController.fetchAllData);

// Fetch single data route
router.get('/fetch/:id', sensorController.fetchSingleData);

// Add data route
router.post('/add', sensorController.addData);

module.exports = router;
