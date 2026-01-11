 const express = require('express')
 const app = express()
 app.get('/',function(req,res){
    res.send("Hello")

 })
 app.use(function(req,res,next){
    console.log("Middleware")
    next()
 })

 app.get('/home',function(req,res){
    res.send("HOMEEEEE")
 })

 app.get('/home/account',function(req,res){
    res.send("Account!")
  
 })

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send("Something Broke");
});

 app.listen(3000)