const express = require("express");
const hbs = require("hbs");
const routing = require("./routing");
const fs = require("fs");
let app = express();
let p = 3000;

app.listen(p, () => {
  console.log(`Serwer dziala na porcie ${p}`);
});
app.use(express.static(__dirname + "/public"));
app.use((req, res, next) => {
  let now = new Date().toString();
  let log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFileSync("server.log", log + "\n", (err) => {
    if (err) {
      console.log("Unable to append server.log");
    }
  });
  next();
});

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear();
});

hbs.registerHelper("screamIt", (text) => {
  return text.toUpperCase();
});





app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/about", (req, res) => {
  res.send({ name: "Andrew", likes: ["Biking", "Cities"] });
});

app.get("/bad", (req, res) => {
  res.send("<h1>Nie udalo sie!</h1>");
});

app.get("/person", (req, res) => {
  res.render("person.hbs", {
    pageTitle: "PersonPage",
    message: "Hello there!",
  });
});
