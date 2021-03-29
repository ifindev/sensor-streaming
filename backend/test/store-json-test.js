const accessJSON = require('../src/utils/access-json');

const dataPath = '../data/test_data.json';

// Test storing data
const data = {
  userId: 1,
  id: 101,
  title: 'qui ullam ratione',
  completed: false,
};

try {
  let storedJSON = accessJSON.readFromJSON(dataPath);
  storedJSON.push(data);
  accessJSON.storeToJSON(dataPath, storedJSON);
  console.log('Success adding new data!');
} catch (e) {
  console.log(e);
}
