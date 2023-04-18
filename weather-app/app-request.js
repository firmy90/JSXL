const request = require("request");
const md = require("./modules");

request(
  {
    url: `https://api.openweathermap.org/data/2.5/weather?q=Warsaw&appid=${md.apikey()}`,
    json: true,
  },
  (error, response, body) => {
    console.log("request");
    console.log("error: ", error);
    console.log("status kod: ", response && response.statusCode);
    console.log("zawartosc", body);
    console.log(JSON.stringify(body, undefined, 2));
  }
);
// request
// error:  null
// status kod:  401
// zawartosc {
//   cod: 401,
//   message: 'Invalid API key. Please see https://openweathermap.org/faq#error401 for more info.'
// }

