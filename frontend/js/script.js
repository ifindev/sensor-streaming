const axios = require('axios');
var app = new Vue({
  el: '#app',
  sensors: {
    id: 1,
    message: 'Hello Vue!',
    data: [],
  },
  created() {
    this.getTodos();
    // setInterval(() => this.getTodos(), 2000);
  },

  methods: {
    randomNumber(min, max) {
      const r = Math.random() * (max - min) + min;
      return Math.floor(r);
    },

    async getTodos() {
      this.id = this.id + 1;
      axios
        .get(`http://localhost:3000/sensor/fetch/${this.id}`)
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
    },
  },
});
