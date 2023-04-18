const axios = require("axios");
const md = require("./modules");
const url = `https://api.openweathermap.org/data/2.5/weather?q=Kielce&appid=${md.apikey()}`;

axios
  .get(url)
  .then((response) => {
    console.log(response.data);
    console.log(response.data.coord.lat);
  })
  .catch((error) => {
    console.log(error);
  });
