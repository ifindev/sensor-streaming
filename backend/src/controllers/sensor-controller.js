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
    const addedData = sensorModel.addData();
    res.send({ data: addedData });
  },
};
