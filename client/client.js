const axios = require('axios');
const sensorData = require('./src/utils/generateSensorData');

/* backend end-point */
let testEndpoint = 'https://jsonplaceholder.typicode.com/posts';
let endpoint = 'localhost:3000/add';

/* Sensor data from client (e.g. Raspberry pi) */
let id = 1;
let temperature = 21.279782079384667;
let humidity = 87.2525512400796;
let area = ['roomArea1', 'roomArea2', 'roomArea3'];
let roomArea = area[0];

setInterval(() => {
  let data = {
    id: id,
    temperature: temperature,
    humidity: humidity,
    roomArea: roomArea,
  };

  // request options
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  axios
    .post(endpoint, options)
    .then((response) => {
      console.log(response.data);
      // Set new value to data
      id += 1;
      temperature = sensorData.getTemperature();
      humidity = sensorData.getHumidity();
      roomArea = area[id % 3];
    })
    .catch(function (error) {
      console.log(error.data);
    });
}, 2000);
