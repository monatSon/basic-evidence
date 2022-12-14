const express = require('express');
const app = express();
const path = require('path');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const url = "mongodb+srv://sony-admin:admin1234@cluster0.hxwuk9f.mongodb.net/persons";
const ejs = require("ejs");
const { nextTick } = require('process');

app.use(express.json());
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(url, { useNewUrlParser: true }, { useUnifiedTopology: true });

// serving static js scripts
app.use(express.static('./public'));

// GET home page

app.get("/", (req, res) => {
    res.render(path.join(__dirname, '/views/index.ejs'));
});


app.listen(3000, () => {
    console.log("server running on 3000")
});


// creating schema for mongo and adding to DB

const personSchema = {
    name: String,
    surname: String,
    age: Number,
    phone: Number
}

const Person = mongoose.model("Person", personSchema);

// adding new person to db 
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
// 


// getting data from mongo 
app.get("/read", (req, res) => {
    Person.find({}, (err, data) => {
        res.render("read", { data })
    })
});




