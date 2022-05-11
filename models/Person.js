const mongoose = require('mongoose');
const Schema = mongoose.Schema


const personSchema = new Schema({
    name: String,
    imageURL: String,
    password: String,
    about: String,
    review: [{ 
      type: Schema.Types.ObjectId, 
      ref:'Review'}]
});


module.exports = mongoose.model("Person", personSchema);


/* DEMO */
//  const personSchema = new mongoose.Schema({
//     name: String
// })

// personSchema.methods.shoot = function shoot() {
//     const fire = this.name
//     ? "At noon " + this.name + " will dule."
//     : "No dule"

//     console.log(fire)
// }

// const Person = mongoose.model("Person", personSchema)

// const shooter = new Person({name : "Wyatt"})

// shooter.shoot()

// console.log("My names: ", shooter)

// shooter.save().then(() => console.log("Bang!"));