import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
 
  res.sendFile(__dirname + "/public/index.html");
});

function bandname(req,res,next){
  console.log(req.body["street"]+req.body["pet"]);
  next();
}
app.use(bandname);
app.post('/submit',bandname,(req,res)=>{
  const bandName = req.body["street"] + req.body["pet"];
   res.send(`<h1>Your Band Name is: ${bandName}</h1>`);
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

