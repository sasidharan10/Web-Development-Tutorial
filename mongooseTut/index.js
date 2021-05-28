// getting-started.js  //connecting
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cricket', { useNewUrlParser: true, useUnifiedTopology: true });

// checking that the mongoose is connected to our database
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // confirming that we are connecting
  // console.log("We are connected guys...");
});

// creating a schema (format of our document to be saved)
const cricketSchema = new mongoose.Schema({
  name: String,
  jerseyNo: Number,
  role: String
});

// speak function
cricketSchema.methods.speak = function () {
  const greeting = "\nPlayer name is : " + this.name + "\nPlayer number is : " + this.jerseyNo + "\nPlayer role is : " + this.role;
  console.log(greeting);
}

// model is a compiled schema (finaling our schema)
// this is a model
// now a collection named crickets will be created(and stored in DB) where all our data will be stored
const cricket = mongoose.model('cricket', cricketSchema);

// making a object to add data to the model
// adding the data of a player in the model using a object raj
const raj = new cricket({ name: "Raj", jerseyNo: 10, role: "Batsman" });
const shyam = new cricket({ name: "shyam", jerseyNo: 14, role: "Bowler" });
// console.log(` Name : ${raj.name}\n Number: ${raj.jerseyNo}\n Role : ${raj.role}\n`); 

// calling the speak function to print the info
// raj.speak();
// shyam.speak();

// finally saving the object to the database using the save(err,anyArgumentName)
raj.save(function (err, arg) {
  if (err) return console.error(err);
  arg.speak();
});
shyam.save(function (err, shyam) {
  if (err) return console.error(err);
  shyam.speak();
});

// Note : The object gets saved in the DB everytime you run the program

// Now finding the objects stored in the collection
cricket.find(function (err, arg) {
  if (err) return console.error(err);
  console.log(arg);
});