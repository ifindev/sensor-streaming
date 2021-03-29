const accessJSON = require('../utils/access-json');

module.exports = {
  fetchAllData: function () {
    data = 'Data was fetched from db.json';
    return data;
  },

  fetchSingleData: function (id) {
    data = `Data with id ${id} was fetched from db.json`;
    return data;
  },

  addData: function (data) {
    /* get data on json file */
    let filename = `${process.cwd()}/data/sensor_data.json`;
    let storedData = accessJSON.readFromJSON(filename);

    /* Check whether data with this id has been stored before */
    let exist = storedData.find((item) => item.id === data.id);

    if (!exist) {
      /* store data on json file */
      storedData.push(data);
      accessJSON.storeToJSON(filename, storedData);
      let status = {
        success: true,
        msg: 'data added successfully',
      };
      return status;
    } else {
      let status = {
        success: false,
        msg: 'data with that id is already exist!',
      };
      return status;
    }
  },
};
