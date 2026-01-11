const { name } = require('ejs')
const express = require('express')
const app =express()
const path =require('path')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render("index")
})
app.get('/profile/:name',(req,res)=>{
    req.params.name
    res.send(req.params.name)
})

app.listen(3000, () => {
    console.log('server is running');
});
