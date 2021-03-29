const random = require('./generateRandomNumber');

module.exports = {
  getTemperature: function () {
    /* Base temperature between 20 - 30 deg C */
    let temperature = random.randomNumber(20, 30) + Math.random();
    return temperature;
  },

  getHumidity: function () {
    /* Base humidity between 80 - 90 % */
    let humidity = random.randomNumber(80, 90) + Math.random();
    return humidity;
  },
};
