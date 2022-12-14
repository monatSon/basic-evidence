const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const mongodb = require("mongodb");
const mongoose = require("mongoose")

// serving static js scripts
app.use(express.static('./public'));

// GET home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/html/index.html'));
});

app.listen(3000, () => {
    console.log("server running on 3000")
})

// creating schema for mongo
const personSchema = {
    name: String,
    surname: String,
    age: Number,
    phone: Number
}

const Person = mongoose.model("Person", personSchema);


