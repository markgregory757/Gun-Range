const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = +process.env.SALT; // 10
const Person = require("../models/Person");
const createUser = require("../views/createUser");
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET;
const existingUsers = []


router.get("/", async (req, res) => {
  res.render("createUser");
  userCheck = await Person.find({})
  userCheck.forEach(user => {
    existingUsers.push(user.name) 
  });
});

router.post("/", async (req, res) => {

// console.log(req.body);
  const { name, password, location, imageURL, about } = req.body;
// console.log(name, password, age, image, abilities);

//If no password check
  if (password == false) {
      res.send("Please enter a password");
  
// Check username is not already in use
  } else if (existingUsers.includes(name)) {
    res.send("User already exists")
    console.log("User already exists")

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
      location,
      imageURL,
      about,
    });

    if(typeof window !== "undefined") {
    window.addEventListener("paste", e => {
      if (e.clipboardData.files.length > 0) {
        const fileInput = document.querySelector("#myFile");
        fileInput.files = e.clipboardData.files;

        if (e.clipboardData.files[0].type.startWith("image/")) {
          setPreviewImage(e.clipboardData.files[0])
        }
      }
    })
  }

    function setPreviewImage(file) {
      const fileReader = FileReader();

      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        document.querySelector("#imagePreview").src = fileReader.result;
      }
    }
// Save username and hashed password
    await newUser.save();
    res.render("index");
  }
  res.redirect("createUser")
});

module.exports = router;
