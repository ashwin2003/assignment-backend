const express = require("express");
const cors = require("cors");
const connect = require("./config/database");
const Case = require("./Model/Case");

const app = express();

require("dotenv").config();

connect();

app.use(express.json());

app.use(cors());

app.get("/", async (req, res) => {
  res.json("hello");
});

app.get("/cases", async (req, res) => {
  const filterParams = req.query;
  try {
    const cases = await Case.find(filterParams);

    return res.status(200).send(cases);
  } catch (error) {
    return res.status(404).send(error);
  }
});

app.post("/add", async (req, res) => {
  const data = req.body;

  try {
    const newCase = new Case(data);
    const add = await newCase.save();

    return res.status(200).send(add);
  } catch (error) {
    return res.status(500).send(error);
  }
});

app.put("/:caseNo", async (req, res) => {
  const caseNo = req.params.caseNo;

  const data = req.body;

  try {
    const oldCase = await Case.findOneAndUpdate({ caseNo }, data, {
      returnOriginal: false,
    });

    return res.status(200).send(oldCase);
  } catch (error) {
    return res.status(404).send(error);
  }
});

app.delete("/:caseNo", async (req, res) => {
  const caseNo = req.params.caseNo;

  try {
    const del = await Case.deleteOne({ caseNo });

    return res.status(200).send(del);
  } catch (error) {
    return res.status(404).send(error);
  }
});

module.exports = app;
