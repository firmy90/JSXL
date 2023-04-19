const express = require("express");
let app = express();
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

module.export={
    app,

}
