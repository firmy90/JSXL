const express = require("express");
let app = express();
let p = 3000;

app.listen(p, () => {
  console.log(`Serwer dziala na porcie ${p}`);
});
app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
hbs.registerParials(__dirname + "/views/partials");

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
    currentYear: new Date().getFullYear(),
    message: "Hello there!",
  });
});
