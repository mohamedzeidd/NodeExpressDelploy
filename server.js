const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ route: "Home", data: "Sample Data" });
});

app.get("/about", (req, res) => {
  res.json({ route: "About", data: "Sample Data" });
});

app.get("/contact", (req, res) => {
  res.json({ route: "Contact", data: "Sample Data" });
});

app.listen(3000);
