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
// const Person = require('./models/Person');



mongoose.connect(process.env.DB_URI, {
    dbName: process.env.DB_NAME, 
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(res => console.log("db connected"))
  .catch(err => console.log(err))


   const personSchema = new mongoose.Schema({
    name: String
})

personSchema.methods.shoot = function shoot() {
    const fire = this.name
    ? "At noon " + this.name + " will dule."
    : "No dule"

    console.log(fire)
}

const Person = mongoose.model("Person", personSchema)

const shooter = new Person({name : "Billie"})

shooter.shoot()

console.log("My names: ", shooter)

shooter.save().then(() => console.log("Bang!"));