module.exports = {
  fetchAllData: function () {
    data = 'Data was fetched from db.json';
    return data;
  },

  fetchSingleData: function (id) {
    data = `Data with id ${id} was fetched from db.json`;
    return data;
  },

  addData: function () {
    data = 'Data was added to the db.json';
    return data;
  },
};
