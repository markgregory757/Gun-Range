var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = +process.env.SALT; // 10
const Person = require('../models/Person');
const jwt = require("jsonwebtoken");
// const { cannotHaveAUsernamePasswordPort } = require("whatwg-url");
const secretKey = process.env.SECRET;

router.get("/", async (req, res) => {
        res.render("login", {title: "Welcome Back" });
        console.log("login reached")
      });

      router.post("/", async (req, res, next) => {
        const {username, password} = req.body
        console.log('req.body is: ', req.body, 'and name, password is: ', username, password)
        const person = await Person.findOne({ name: username});
        const match = await bcrypt.compare(password, person.password)
      
        console.log(match)
      
        if (match) {
          const payload = {id: person._id, name: username}
          const token = jwt.sign(payload, secretKey)
          res.cookie("accessToken", token);
          res.cookie("username", username)
          console.log("access cookie", username)
      
          res.redirect("/")
        } else  {
        res.redirect("/");
      }
      });

      module.exports = router