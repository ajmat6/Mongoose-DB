const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.connect("mongodb://127.0.0.1/ajmatKart",{ //error was because of the localhost, you have to write IP Address here.
    useNewUrlParser:true,useUnifiedTopology:true
});

const kittySchema = new mongoose.Schema({ //Schema sets some restrictions on the data going inside the DB like here name should be string.
    name: String
});

kittySchema.methods.speak = function speak() {
    const greeting = "My name is " + this.name;
    console.log(greeting);
};
  
const Kitten = mongoose.model('ajmatman', kittySchema);//Converting the schema into a model(Locking your schema and once it is locked it cant be altered)
//Model is a compiled schema
//ajmatman plural form means ajmatmen collection will be created in the ajmatKart database.

const ajmatkitty = new Kitten({ name: 'ajmatkitty' });//Creating an object corresponding to the model.
// console.log(ajmatkitty.name);
// ajmatkitty.speak();

ajmatkitty.save(); //Saving the data

// Kitten.find({ name: "ajmatkitty"});

run();
async function run(){
    const kitty = await Kitten.find(); //to find the the documents in the ajmatmen collection and to print them in the console.
    console.log(kitty);
}

app.listen(3000, () => {
    console.log("Sab badhiya he bhai ab to chal jaa!");
})