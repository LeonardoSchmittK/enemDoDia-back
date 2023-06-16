const express = require("express");
const lodash = require("lodash");
const cors = require("cors");
const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());
app.use(cors());

const banco = require("./bancoDeQuestoes.js");
const getRandomNumber = require("./Utils/randomNumber.js");

app.get("/enemDoDia/aleatorio", (req, res) => {
  const randomQuestion = banco[getRandomNumber(1, banco.length)];
  res.json(randomQuestion);
  console.log(randomQuestion);
  console.log("---- QUESTAO -----\n\n");
});

app.listen(4000, () => {
  console.log("API server is running");
});
