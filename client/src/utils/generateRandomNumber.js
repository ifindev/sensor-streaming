module.exports = {
  randomNumber: function (min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
  },
};
