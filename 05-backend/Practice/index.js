const express = require("express")
const app = express()
const dbconnect = require('./config/db')
const userModel = require('./models/user')

app.use(express.static("public"))
app.set("view engine", "ejs")
app.use(express.json()) 
app.use(express.urlencoded({extended:true}))
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  
res.render("index")

})


app.post('/get', (req, res) => {
  
  console.log(req.body)
  res.send("data recieved")

})

app.post('/register', async (req, res) => {
  try {
    const { username, email, password,age } = req.body;  // extract data

    const new_user =await userModel.create({
      username,
      email,
      password,
      age
    });

    res.send(new_user);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error registering user");
  }
});


app.get('/getData', (req,res)=>{
  userModel.find().then((users)=>{
    
    res.send(users)
  })
})

app.get('/update', async (req,res)=>{
  await userModel.findOneAndUpdate({
    username:'Rohan'
  },{
    email:'reddy@gmail.com'
  })
  res.send("update")
})
app.get('/del', async (req,res)=>{
  await userModel.findOneAndDelete({
    username:'Rohan'

  })
  res.send('deleted')
})


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000")
})
