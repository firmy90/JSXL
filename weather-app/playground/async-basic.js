console.log("Start");
setTimeout(() => {
  console.log("Wewnatrz callbacka");
}, 2000);
setTimeout(()=>{
    console.log("Drugi callback");
},0);
console.log("Stop");
//javascript@java:~/Documents/JavaScriptXL/JSXL/weather-app/playground$ node async-basic.js 
// Start
// Stop
// Drugi callback
// Wewnatrz callbacka


