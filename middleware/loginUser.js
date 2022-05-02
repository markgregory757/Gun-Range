const jwt = require("jsonwebtoken");

const secretKey = process.env.SECRET;

const loginUser = async (req, res, next) => {
    jwt.verify(req.cookies.accessToken, secretKey, (err, decoded) => {
    if(err) {
        console.log("Access denied");
        res.redirect("/login");
    } else {
    console.log("your good")
    next();
        }
    })
}

module.exports = loginUser;