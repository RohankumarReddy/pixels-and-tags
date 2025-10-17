const express = require('express');
const router  = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const userModel = require('../models/user.models.js');
const jwt = require('jsonwebtoken');

router.get('/register', (req,res) => {
  res.render('register');
});

router.post('/register', 
  body('username').not().isEmpty().trim().escape(),
  body('email').isEmail().normalizeEmail().trim(),
  body('password').isLength({ min: 8 }),
  async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({
        errors: errors.array(),
        message: "Invalid data"
      });
    }

    try {
      const { username, email, password } = req.body;

      const existingUser = await userModel.findOne({ $or: [{ username }, { email }] });
      if(existingUser) return res.status(400).json({ message: "Username or email already exists" });

      const hash = await bcrypt.hash(password, 10);

      const new_User = await userModel.create({
        username,
        email,
        password: hash
      });

      res.json(new_User);

    } catch(err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  }
);

router.get('/login', (req,res) => {
  res.render('login');
});

router.post('/login',
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }),
  async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({
        errors: errors.array(),
        message: 'Invalid entry'
      });
    }

    try {
      const { email, password } = req.body;

      const user = await userModel.findOne({ email });
      if(!user) {
        return res.status(400).json({ message: "Username or password is incorrect" });
      }

      const match = await bcrypt.compare(password, user.password);
      if(!match) {
        return res.status(400).json({ message: "Username or password is incorrect" });
      }

      const token = jwt.sign(
        {
          userID: user._id,
          email: user.email,
        },
        process.env.JWT_SECRET,
      );

      res.cookie("token", token, { httpOnly: true, secure: false });
      res.json({ message: "Login successful", token });

    } catch(err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  }
);

module.exports = router;
