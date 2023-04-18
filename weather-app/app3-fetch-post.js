const md = require("./modules");

let url =
  `https://api.openweathermap.org/data/2.5/weather?q=Warsaw&appid=${md.apikey()}`;
  data = 'the end data';
fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.log(data.coord.lat);
  })
  .catch((error) => console.log(error));
