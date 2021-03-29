require('dotenv').config();
const express = require('express');
const process = require('process');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const sensorModel = require('../models/sensor-model');

module.exports = {
  fetchAllData: function (req, res) {
    const fetchData = sensorModel.fetchAllData();
    res.send({ data: fetchData });
  },

  fetchSingleData: function (req, res) {
    const id = req.params.id;
    const fetchData = sensorModel.fetchSingleData(id);
    res.send({ data: fetchData });
  },

  addData: function (req, res) {
    return new Promise((resolve, reject) => {
      const data = req.body;

      /* Validate that there's no missing field */
      if (
        data.id == null ||
        data.temperature == null ||
        data.humidity == null ||
        data.roomArea == null
      ) {
        let failMessage = { error: true, msg: 'There is a missing data' };
        res.status(401).send(failMessage);
        reject(failMessage);
      } else {
        /* Add data to json storage */
        let addDataStatus = sensorModel.addData(data);
        res.status(200).send(addDataStatus);
        resolve(addDataStatus);
      }
    });
  },
};
