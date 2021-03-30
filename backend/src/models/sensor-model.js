const accessJSON = require('../utils/access-json');
const process = require('process');

module.exports = {
  fetchAllData: function () {
    data = 'Data was fetched from db.json';
    return data;
  },

  fetchSingleData: function (id) {
    /* get data on json file */
    const filename = `${process.cwd()}/data/sensor_data.json`;
    const storedData = accessJSON.readFromJSON(filename);

    /* Check whether data with this id exists in our storage or not */
    const exist = storedData.find((item) => item.id == id);

    if (exist) {
      const status = {
        success: true,
        msg: 'data fetched successfully',
        data: exist,
      };
      return status;
    } else {
      const status = {
        success: false,
        msg: "data with that id doesn't exist",
      };
      return status;
    }
  },

  addData: function (data) {
    /* get data on json file */
    const filename = `${process.cwd()}/data/sensor_data.json`;
    const storedData = accessJSON.readFromJSON(filename);

    /* Check whether data with this id has been stored before */
    const exist = storedData.find((item) => item.id === data.id);

    if (!exist) {
      /* Add timestamp field to data */
      const timestamp = Date.now();
      data = { ...data, timestamp: timestamp };

      /* store data on json file */
      storedData.push(data);
      accessJSON.storeToJSON(filename, storedData);
      const status = {
        success: true,
        msg: 'data added successfully',
      };
      return status;
    } else {
      const status = {
        success: false,
        msg: 'data with that id is already exist!',
      };
      return status;
    }
  },
};
