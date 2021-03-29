const fs = require('fs');

module.exports = {
  readFromJSON: (filename) => {
    const jsonData = fs.readFileSync(filename);
    return JSON.parse(jsonData);
  },

  storeToJSON: (filename, data) => {
    const stringifyData = JSON.stringify(data);
    fs.writeFileSync(filename, stringifyData);
  },
};
