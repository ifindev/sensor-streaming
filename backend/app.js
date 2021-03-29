const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

const sensorRouter = require('./src/routes/sensor-route');
app.use('/sensor', sensorRouter);

app.listen(port, () => {
  console.log(`Server runs on port ${port}`);
});
