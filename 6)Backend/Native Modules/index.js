
 const fs =require("fs");
 fs.writeFile("msg.txt","first file created using js",(err)=>{
     if (err) throw err;
     console.log("file is created")
 })

fs.readFile("msg.txt","utf8",(rrr, data)=>{
    if(rrr) throw rrr
    console.log(data)
})
