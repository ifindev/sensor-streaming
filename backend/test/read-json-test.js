const accessJSON = require('../src/utils/access-json');

const dataPath = '../data/test_data.json';

// Test reading data
const jsonData = accessJSON.readFromJSON(dataPath);
console.log(jsonData);
