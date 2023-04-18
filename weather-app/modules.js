const fs = require("fs");

let apikey = () => {
  try {
    let k = JSON.parse(fs.readFileSync("api-key.json"));
    return k["weather-app-key"];
  } catch (e) {
    return 0000;
  }
};

module.exports = { apikey };
