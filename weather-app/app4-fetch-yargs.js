const yargs = require('yargs');

let command = process.argv[2];
fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${command}&appid=932e9946953aa6fbcc5b20db4e8051a0`
  )
    .then((response) => response.json())
    .then((data) => {console.log(data); console.log(data.coord.lat)})
    .catch((error) => console.log(error));