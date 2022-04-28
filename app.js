const { mainModule } = require('process');
require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const path = require('path');
const hbs = require('hbs')
const mongoose = require('mongoose');
const Person = require('./models/Person');

// ROUTES

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const rangeRouter = require('./routes/range');
const createRouter = require('./routes/create');
const skills = require('./routes/skills');
const blogRouter = require('./routes/blogs');
const { appendFile } = require('fs');

mongoose.connect(process.env.DB_URI, {
    dbName: process.env.DB_NAME, 
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(res => console.log("db connected"))
  .catch(err => console.log(err))

hbs.registerPartials(path.join(__dirname, '/views/partials'), (err) => {});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(session({ secret: 'secret',
                    }))