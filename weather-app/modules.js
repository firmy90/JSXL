const fs = require("fs");

let apikey = () => {
  try {
    let k = JSON.parse(fs.readFileSync("api-key.json"));
    return k["weather-app-key var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${md.apikey()}`;"];
  } catch (e) {
    return 0000;
  }
};

module.exports = { apikey };
