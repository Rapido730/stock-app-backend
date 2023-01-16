const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT =  process.env.PORT || 3000;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");
// dotenv.config({ path: "./config.env" });

const cors = require("cors");
require("./db/conn.js");

app.use(cors());
app.use(express.json());
app.use(require("./router/auth"));
app.use("/companyApi", require("./router/companyStockApi"));
app.use("/sensexApi", require("./router/nseOrBseApi"));
const User = require("./models/userinfo.js");

app.listen(PORT, () => {
  console.log("successfully connected");
});

// app.post('/register',async(req,res)=>{
//     console.log(req.body);
//     const {name,email,phone,password,cpassword}=req.body;

//     if(!name || !email || !phone  || !password || !cpassword){
//         res.json({error:"you missed some information"});
//     }
//     else if(password!=cpassword){
//         res.json({error:"password and cpassword not matching"});
//     }

//     try{
//         const userExist=await User.findOne({email:email})

//             if(userExist){
//                 return res.status(422).json({error:"this info already present"});
//             }

//             const user_info =new User(req.body);

//             await user_info.save()

//             res.status(201).json({message:'successfully register'});

//     }
//     catch(err){
//        console.log(err);
//     }
// })
