'use strict'

class Person {

    constructor() {
        this.personsArray = [];
        this.nameInput = document.getElementById("name");
        this.surnameInput = document.getElementById("surname");
        this.ageInput = document.getElementById("age");
        this.phoneInput = document.getElementById("phone");
        this.formOutput = document.getElementById("form-output");
        this.addButton = document.getElementById("add-btn");
        this.readButton = document.getElementById("read-btn");
        this.outputTable = document.getElementById("output-table");
        this.submitForm();
    }

    submitForm() {
        this.addButton.addEventListener("click", () => {
            const personRecord = new PersonRecord(
                this.nameInput.value,
                this.surnameInput.value,
                this.ageInput.value,
                this.phoneInput.value);
            this.personsArray.push(personRecord);
            this.saveRecord();
        })
    };

    saveRecord() {
        localStorage.setItem("person", JSON.stringify(this.personsArray));
    }

    readData() {
        this.readButton.addEventListener("click", () => {
            const person = JSON.parse(localStorage.getItem("person"));
            for (let i = 0; i < person.length; i++) {
                this.outputTable.innerHTML +=
                    "<tr><td>" + person[i].name + "</td><td>" + person[i].surname + "</td></tr>";
            }
        });
    }

}

// chybí mi výpis dat
