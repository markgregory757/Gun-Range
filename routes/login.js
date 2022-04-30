var express = require("express");
var router = express.Router();

router.get("/", async (req, res) => {
        res.render("login", {title: "Welcome Back" });
        console.log("login reached")
      });

      router.post("/login", async (req, res, next) => {
        const {username, password} = req.body
        const user = await User.findOne({ username: username});
        const match = await bcrypt.compare(password, user.password)
      
        console.log(match)
      
        if (match) {
          const payload = {id: user._id, username: username}
          const token = jwt.sign(payload, secretKey)
          res.cookie("accessToken", token);
          console.log("access cookie")
      
          res.redirect("/")
        } else {
        res.redirect("login");
      }
      });

      module.exports = router