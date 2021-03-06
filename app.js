// const { mainModule } = require("process");
require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const favicon = require('serve-favicon');
const path = require("path");
const hbs = require("hbs");
const exphbs = require("express-handlebars")
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = +process.env.SALT; 



// ROUTES

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/createUser");
const loginRouter = require("./routes/login");
const logoutRouter = require("./routes/logout")
const rangeRouter = require("./routes/addRange");
const detailsRouter = require("./routes/details");
const personDetsRouter = require("./routes/personDetails");
const blogRouter = require("./routes/blogs");
const reviewRouter = require("./routes/addReview")
const { appendFile } = require("fs");
const app = express();

mongoose
  .connect(process.env.DB_URI, {
    dbName: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(res => console.log("db connected"))
  .catch(err => console.log(err));

  
  app.use(favicon(path.join(__dirname, 'public/images/favicon.ico')))
  app.set("view engine", "hbs");
  
  app.set("views", path.join(__dirname, "/views"));
  hbs.registerPartials(path.join(__dirname, "/views/partials"), (err) => {});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(session({
//     secret: "secret",
//     httpOnly: true,
//     secure: true,
//     resave: true,
//     saveUnitialized: true
//   }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/createUser', usersRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter)
app.use('/details', detailsRouter);
app.use('/personDetails', personDetsRouter)
app.use('/addRange', rangeRouter);
app.use('/addReview', reviewRouter);
app.use('/blogs', blogRouter);


app.use(function(req, res, next) {
    next(createError(404))
})

app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
})



module.exports = app
