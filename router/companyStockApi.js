const express = require("express");
const router = express.Router();

router.use(express.json());
require("../db/conn.js");

const ashokley = require("../models/ashokleyStock.js");
const cipla = require("../models/ciplaStock.js");
const eichermot = require("../models/eichermotStock.js");
const reliance = require("../models/relianceStock.js");
const tatasteel = require("../models/tatasteelStock.js");
router.post("/", async (req, res) => {
  res.json({ status: "hello" });
});

router.get("/ashokley", async (req, res) => {
  try {
    const dataLoad = await ashokley.find({}).clone();
    const result = dataLoad.sort((a, b) => {
      const A = new Date(a.Date);
      const B = new Date(b.Date);
      return A.getTime() - B.getTime();
    });
    res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ error: error });
  }
});

router.get("/cipla", async (req, res) => {
  try {
    const dataLoad = await cipla.find({}).clone();
    const result = dataLoad.sort((a, b) => {
      const A = new Date(a.Date);
      const B = new Date(b.Date);
      return A.getTime() - B.getTime();
    });
    res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ error: error });
  }
});

router.get("/eichermot", async (req, res) => {
  try {
    const dataLoad = await eichermot.find({}).clone();
    const result = dataLoad.sort((a, b) => {
      const A = new Date(a.Date);
      const B = new Date(b.Date);
      return A.getTime() - B.getTime();
    });
    res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ error: error });
  }
});

router.get("/reliance", async (req, res) => {
  try {
    const dataLoad = await reliance.find({}).clone();
    const result = dataLoad.sort((a, b) => {
      const A = new Date(a.Date);
      const B = new Date(b.Date);
      return A.getTime() - B.getTime();
    });
    res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ error: error });
  }
});

router.get("/tatasteel", async (req, res) => {
  try {
    const dataLoad = await tatasteel.find({}).clone();
    const result = dataLoad.sort((a, b) => {
      const A = new Date(a.Date);
      const B = new Date(b.Date);
      return A.getTime() - B.getTime();
    });
    res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ error: error });
  }
});

module.exports = router;
