fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=Warsaw&appid=932e9946953aa6fbcc5b20db4e8051a0"
)
  .then((response) => response.json())
  .then((data) => {console.log(data); console.log(data.coord.lat)})
  .catch((error) => console.log(error));
//   {
//     coord: { lon: 21.0118, lat: 52.2298 },
//     weather: [
//       { id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' }
//     ],
//     base: 'stations',
//     main: {
//       temp: 287.74,
//       feels_like: 287.11,
//       temp_min: 285.59,
//       temp_max: 289.06,
//       pressure: 1023,
//       humidity: 71
//     },
//     visibility: 10000,
//     wind: { speed: 3.6, deg: 40 },
//     clouds: { all: 20 },
//     dt: 1681812280,
//     sys: {
//       type: 2,
//       id: 2032856,
//       country: 'PL',
//       sunrise: 1681788781,
//       sunset: 1681839440
//     },
//     timezone: 7200,
//     id: 756135,
//     name: 'Warsaw',
//     cod: 200
//   }
//{ lon: 21.0118, lat: 52.2298 }