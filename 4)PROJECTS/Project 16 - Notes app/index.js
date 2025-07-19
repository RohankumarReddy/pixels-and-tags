const express = require('express');
const app  = express();
const fs = require("fs");

app.set("view engine","ejs");
 

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"))
app.get('/',(req,res)=>{
    fs.readdir(`./files`,function(err,files){
        
        res.render("index",{files:files})
    })
    
    
});


app.post("/create", (req, res) => {
  fs.writeFile(`./files/${req.body.title.split('').join('')}.txt`, req.body.details, function(err) {
    if (err) throw err;
    res.redirect("/");
  });
});

app.get("/files/:filename", (req, res) => {
  const filename = req.params.filename;

  fs.readFile(`./files/${filename}`, "utf-8", function(err, data) {
    if (err) {
      return res.status(404).send("File not found");
    }

    res.render("show.ejs", {
      filename: filename,
      filedata: data
    });
  });
});

app.get('/edit/:filename',(req,res)=>{
   res.render("edit.ejs",{filename:req.params.filename});
    
});

app.post('/edit/', (req, res) => {
  fs.rename(`./files/${req.body.title}`, `./files/${req.body.details}`, function(err) {
    if (err) {
      return res.status(404).send("File not found");
    }
    res.redirect("/");
  });
});


app.listen(3000,()=>{
    console.log("rinning")
})