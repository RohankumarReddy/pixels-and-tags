const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const userModel = require("./models/user");


app.set("view engine","ejs");

app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));


app.get("/", (req, res) => {
  res.render("index");
});

app.get("/read", async (req, res) => {
  let users =  await userModel.find();
  res.render("read",{ users});
});

app.post("/create", async (req, res) => {
 let {name,email,image}= req.body;
 let user =  await userModel.create({
  name,
  email,
  image,


 });
 res.redirect("/read");

});
app.get("/delete/:id", async (req, res) => {
  await userModel.findByIdAndDelete(req.params.id);      // Delete user
  const users = await userModel.find();                  // Get remaining users
  res.render("read", { users });                         // Render the updated list
});
app.get("/edit/:userid", async (req, res) => {
  let edit = await userModel.findOne(req.params.id); 
       res.render("edit",{edit});
                         
});
app.post("/edit/:userid", async (req, res) => {
  let {name,email,image} =req.body;
  let edit = await userModel.findOneAndUpdate({_id:req.params.userid}, {name,email,image},{new:true}); 
       res.redirect("/read");
                         
});





app.listen(3000, function () {
  console.log("running");
});