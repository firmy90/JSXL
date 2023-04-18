const yargs = require("yargs");
const md = require("./modules");




let command = process.argv[2];
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${command}&appid=${md.apikey()}`
)
  .then((response) => response.json())
  // .then((data) => {console.log(data); console.log(data.coord.lat)})
  .then((d) => {
    console.log(d.weather[0].description);
  })
  .catch((error) => console.log(error));
