const express = require("express")
const app = express();
const path = require("path");
const bodyParser = require("body-parser")
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(3000, () => {
    console.log("server running on 3000")
})

mongoose.connect("mongodb+srv://sony-admin:admin1234@cluster0.hxwuk9f.mongodb.net/persons", { useNewUrlParser: true }, { useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB!'))
    .catch(error => console.error('Could not connect to MongoDB... ', error));

// data schema
const personSchema = new mongoose.Schema({
    name: String,
    surname: String,
    age: Number,
    phone: Number,
});


const Person = mongoose.model('Person', personSchema);

async function savePerson() {
    const person1 = new Person({
        name: "Karel",
        surname: "Cihla",
        age: 42,
        phone: 111222333,

    });

    const result = await person1.save();
    console.log(result.id);
}

savePerson();







