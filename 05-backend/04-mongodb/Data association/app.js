const express = require("express");
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");


app.get("/",(req,res)=>{
res.send("hi");
});

app.get("/create", async(req,res)=>{
     
let u =  await userModel.create({
    username:"Reddy",
    email:"reddy@gmail.com",
    age:19,

});

res.send(u);

});

app.get("/post/create", async(req,res)=>{
     

let  p  = await postModel.create({
    postdata:"Hello",
    user: "6880a6a8111333fdeefe1477",

});

let user = await userModel.findOne({_id:"6880a6a8111333fdeefe1477"});
user.posts.push(p._id);
await user.save();
res.send({p,user});




});






 


app.listen(3000,()=>{
    console.log("runnin");
});