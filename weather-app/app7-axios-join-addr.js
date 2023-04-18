const axios = require("axios");
const md = require("./modules");
let city = "London";
var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${md.apikey()}`;

axios
  .get(url)
  .then((response) => {
    // console.log(response.data);
    console.log(response.data.coord.lat);
    return axios.get(url)
  }).then(r=>{
    console.log(r.data.name);
  })
  .catch((error) => {
    console.log(error.response);
  });


