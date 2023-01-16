const { application } = require("express");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("../db/conn.js");

router.use(express.json());

const User = require("../models/userinfo.js");

router.get("/", (req, res) => {
  res.send("Hello , I am flipr");
});

router.post("/user/register", async (req, res) => {
  console.log(req.body);
  const { name, email, age, password } = req.body;

  if (!name || !email || !age || !password) {
    res.json({ error: "you missed some information" });
  }
  //    else if (password != cpassword) {
  //     res.json({ error: "password and cpassword not matching" });
  //   }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "this info already present" });
    }

    const user_info = new User({ name, email, age, password });

    await user_info.save();

    res.status(201).json({ message: "successfully register" });
  } catch (err) {
    console.log(err);
  }
});

router.get("/user/me", async (req, res) => {
  const { token1 } = req.body;
  console.log(token1);
  const curUser = await User.findOne({ "tokens.token": token1 });
  res.status(201).json(curUser);
});

router.post("/user/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);

    if (!email || !password) {
      return res.status(400).json({ error: "please filled both information" });
    }

    const User_info = await User.findOne({ email: email });
    //   console.log(User_info);

    const match = await bcrypt.compare(password, User_info.password);
    const token = await User_info.generateAuthToken();
    console.log(token);

    if (!match) {
      console.log(match);
      return res.status(400).json({ error: "invalid increndtials" });
    }

    res.status(201).json(User_info);
  } catch (err) {
    console.log(err);
  }
});

router.get("/user/logout", async (req, res) => {
  const { token1 } = req.body;
  console.log(token1);
  // const findtoken=await User.find({
  //     tokens :[
  //         {
  //         token : token
  //     }
  // ]
  // })
  const curUser = await User.findOne({ "tokens.token": token1 });
  // console.log(findtoken);
  // User.updateOne(findtoken.tokens)
  curUser.tokens = curUser.tokens.filter((token) => {
    return token.token !== token1;
  });
  await curUser.save();
  res.status(201).json(curUser);
});

module.exports = router;
