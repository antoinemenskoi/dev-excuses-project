const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

const excuses = require("./excuses.json");

console.log(excuses);

app.use(express.json());

app.use(cors());

app.get("/excuses", (req, res) => {
  res.json(excuses);
});

app.post("/excuses", (req, res) => {
  const newExcuse = req.body;
  excuses.push(newExcuse);
  res.status(201).json(newExcuse);
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
