const axios = require('axios');
const sensorData = require('./src/utils/generateSensorData');

/* backend end-point */
const testEndpoint = 'https://jsonplaceholder.typicode.com/posts';
const endpoint = 'http://localhost:3000/sensor/add';

/* Sensor data from client (e.g. Raspberry pi) */
let id = 1;

setInterval(() => {
  const temperature = sensorData.getTemperature();
  const humidity = sensorData.getHumidity();
  const area = [
    'roomArea1',
    'roomArea2',
    'roomArea3',
    'roomArea4',
    'roomArea5',
  ];
  const roomArea = area[id % 5];

  const data = {
    id: id,
    temperature: temperature,
    humidity: humidity,
    roomArea: roomArea,
  };

  axios({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    url: endpoint,
    data: data,
  })
    .then((response) => {
      console.log(response.data);
      id += 1;
    })
    .catch((error) => {
      console.log(error.message);
    });
}, 2000);
