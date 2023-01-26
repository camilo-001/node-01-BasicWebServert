require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const port = process.env.PORT;
const app = express();

hbs.registerPartials(__dirname + "/views/partials", function (err) {
  if (err) {
    console.log("Partial NOT FOUND");
  }
});

app.set("view engine", "hbs"); // para poder usar el hbs

app.use(express.static("public")); // carga las primera vista inicial

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "UN CURSO DE NODE CON HANDLEBARS",
    titulo: "UN CURSO MAS DE NODE",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "UN CURSO DE NODE CON HANDLEBARS",
    titulo: "PAGINA GENERIC",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "UN CURSO DE NODE CON HANDLEBARS",
    titulo: "PAGINA ELEMENTS",
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/back/templates/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
