const express = require("express");
const Register = require("./routes/user.routes.js");
const db = require("./config/db.js");
const Home  =  require('./routes/index.routes.js')
const cookieParser = require('cookie-parser');
const {body, validationResult} = require('express-validator');
const app = express();
app.use(cookieParser());
require('dotenv').config();
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", Register);
app.use('/',Home)
app.listen(3000, () => {
  console.log("listening on port 3000");
});
