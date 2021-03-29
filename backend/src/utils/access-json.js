const fs = require('fs');

module.exports = {
  readFromJSON: (filename) => {
    const jsonData = fs.readFileSync(filename);
    try {
      return JSON.parse(jsonData);
    } catch (e) {
      console.log('Make sure json file contain at least an empty array!!');
      return [];
    }
  },

  storeToJSON: (filename, data) => {
    const stringifyData = JSON.stringify(data);
    fs.writeFileSync(filename, stringifyData);
  },
};
