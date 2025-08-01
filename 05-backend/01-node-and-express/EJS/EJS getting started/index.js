import express from "express";
const app = express();
const port =3000;

app.get("/",(req,res)=>{

    const today = new Date();
    const day = today.getDay();
    let type ="Weekday";
    let adv = "Run everyday";

    if(day==0 || day ==6){
         type ="Weekend";
        adv = "Enjoy"; 
    }

    res.render("index.ejs",{
        daytype: type,
        advice: adv,
    });
});




app.listen(port,()=>{
        console.log("Running port 3000");
});