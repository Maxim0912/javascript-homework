'use strict';

let taskForm = document.forms["task-form"];

function retrieveStorageData() {
    let storageData = [];
    if (localStorage.getItem("array")) {
        storageData = JSON.parse(localStorage.getItem("array"));
    }
    return storageData;
};

function prepareData(form) {
    let singleTask = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        date: form.elements.date.value,
    }
    return singleTask;
};

function sendDataToStorage() {
    let arrayTasks = retrieveStorageData();
    let singleTask = prepareData(taskForm);
    let arrToJson;
    arrayTasks.push(singleTask);
    arrToJson = JSON.stringify(arrayTasks);
    localStorage.setItem("array", arrToJson);
};

let titleRules = {
    elem: taskForm.elements.title,
    minLength: 1,
    maxLength: 15,
    errorField: document.getElementById("title-error"),

    checkLength() {
        if (this.elem.value.length < this.minLength || this.elem.value.length > this.maxLength) {
            this.errorField.innerText = 
            `Значение должно быть в диапазоне от ${this.minLength} до ${this.maxLength} символов
            `; return false;
        } 
        this.errorField.innerText = "";
        return true;
    }
};

let dateRules = {
    elem: taskForm.elements.date,
    errorField: document.getElementById("date-error"),

    validateDate() {
        let usersDate = Date.parse(this.elem.value);
        if (this.elem.value.length === 0) {
            this.errorField.innerText =
            "Поле Дата обязательно к заполнению";
            return false;
        }
        if (usersDate < new Date()) {
            this.errorField.innerText =
            `Дата не может быть в прошлом`;
            return false;
        }
        this.errorField.innerText = "";
        return true;
    }
};

taskForm.elements.title
    .addEventListener("keyup", titleRules.checkLength.bind(titleRules));

taskForm.elements.date
    .addEventListener("change", dateRules.validateDate.bind(dateRules));

taskForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    if (!titleRules.checkLength() || !dateRules.validateDate()) {
        console.log("Данные нельзя отправить на сервер");
    } else {
        let success = document.getElementById("success-message");
        success.innerText = "Задача была успешно добавлена";
        console.log("Данные можно отправить на сервер");
        sendDataToStorage();
    } 
})