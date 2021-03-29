const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());

const sensorRouter = require('./src/routes/sensor-route');
app.use('/sensor', sensorRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server runs on port ${port}`);
});
