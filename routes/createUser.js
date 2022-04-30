var express = require('express');
var router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = +process.env.SALT; // 10
const Person = require('../models/Person')
const createUser = require("../views/createUser");
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET;

router.get("/", async (req, res) => {
    res.render("createUser")
    console.log( await Person.find({}));
  });
  
  router.post("/", async (req, res) => {
    console.log(req.body);
    const { name, password, age, image, abilities } = req.body;
    console.log(name, password, age, image, abilities);
  
    // Compare pw1 and pw2, if match...
    if (password == false) {
      res.send("passwords don't match");
      // res.render('/register, {error: "Passwords don't match"})
    } else {
      // Register a new user
      res.send("POST registered a new user");
  
      // Hash password with Bcrypt
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(password, salt);
      console.log("password hash is ", hash);
      // Create new user using your User model
      const newUser = new Person({
        name,
        password: hash
      });
      // Save username and hashed password
  await newUser.save() 
}

res.redirect("login")
});


module.exports = router