const axios = require("axios");

let id = 1;

setInterval(() => {
  axios
    .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response) => {
      console.log(response.data);
      if (id < 10) {
        id += 1;
      } else {
        id = 1;
      }
    })
    .catch((err) => console.log(err));
}, 2000);
