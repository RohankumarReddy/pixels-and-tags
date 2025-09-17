const express = require("express");
const mongoose = require("mongoose");
const app = express();
const user = require("./other");

mongoose.connect("mongodb://localhost:27017/GettingStarted");

app.get("/", (req, res) => {
  res.send("hi");
});

app.get("/create", async (req, res) => {
  let use = await user.create({
    name: "ram",
    username: "ram1",
    email: "ram@gamail.com",
  });
  res.send(use);
});
app.get("/update",async(req,res)=>{
     let up = await user.findOneAndUpdate({username:"Rohan1"},{name:"Reddy"},{new:true});
res.send(up);
});
app.get("/read",async(req,res)=>{
     let up = await user.find();
res.send(up);
});

app.get("/del",async(req,res)=>{
     let up = await user.findOneAndDelete({name:"Rohan"});
res.send(up);
});




app.listen(3000, function () {
  console.log("running");
});
