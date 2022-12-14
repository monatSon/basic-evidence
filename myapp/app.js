const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const assert = require('assert');
const bodyParser = require('body-parser');
const url = "mongodb+srv://sony-admin:admin1234@cluster0.hxwuk9f.mongodb.net/persons"

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(url, { useNewUrlParser: true }, { useUnifiedTopology: true });

// serving static js scripts
app.use(express.static('./public'));

// GET home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/html/index.html'));
});

app.listen(3000, () => {
    console.log("server running on 3000")
});


// creating schema for mongo
const personSchema = {
    name: String,
    surname: String,
    age: Number,
    phone: Number
}

const Person = mongoose.model("Person", personSchema);

app.post("/", (req, res) => {
    let newPerson = new Person({
        name: req.body.name,
        surname: req.body.surname,
        age: req.body.age,
        phone: req.body.phone
    })
    newPerson.save();
    res.redirect("/")
})
