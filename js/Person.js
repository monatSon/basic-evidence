'use strict'

class Person {

    constructor() {
        const recordsFromStorage = localStorage.getItem("records");
        this.records = recordsFromStorage ? JSON.parse(recordsFromStorage) : [];

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

            this.records.push(personRecord);
            this.saveRecord();

        })
    };

    saveRecord() {
        localStorage.setItem("records", JSON.stringify(this.records));
    }

    readData() {
        this.outputTable.innerHTML = "";

        this.readButton.addEventListener("click", () => {
            for (var i = 0; i < this.records.length; i++) {
                this.outputTable.innerHTML += "<tr><td>" + this.records[i].name + "</td><td>" + this.records[i].surname + "</td><td>" + this.records[i].age + "</td><td>" + this.records[i].phone + "</td></tr>";
            }

        });
    }

}

// chybí mi výpis dat
