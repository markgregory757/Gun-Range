var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = +process.env.SALT; // 10
const Person = require("../models/Person");
const createUser = require("../views/createUser");
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET;

router.get("/", async (req, res) => {
  res.render("createUser");
  console.log(await Person.find({}));
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const { name, password, age, image, abilities } = req.body;
  console.log(name, password, age, image, abilities);

  //If no password check
  if (password == false) {
    //   res.send("Please enter a password");
    res.redirect("/");
  } else {
    // Register a new user
    //   res.send("POST registered a new user");

    // Hash password with Bcrypt
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    console.log("password hash is ", hash);
    // Create new user using your Person model
    const newUser = new Person({
      name,
      password: hash,
      age,
      image,
      abilities,
    });
    // Save username and hashed password
    await newUser.save();
    res.render("index");
  }
  res.redirect("createUser")
});

module.exports = router;
