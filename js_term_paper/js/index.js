'use strict';

let taskForm = document.forms["task-form"];

function addFollowers() {
    let container = document.createElement("div");
    let input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("name","followers");
    let btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("name", "delete");
    btn.addEventListener("click", delFollowers);
    btn.innerText = "X";
    container.append(input);
    container.append(btn);
    document.querySelector("section").append(container);
};

let addId = document.getElementById("add");
addId.addEventListener("click", addFollowers);

function delFollowers() {
    this.parentElement.remove();
};

function retrieveStorageData() {
    let storageData = [];
    if (localStorage.getItem("array")) {
        storageData = JSON.parse(localStorage.getItem("array"));
    }
    return storageData;
};

function createFollowersArray() {
    let followersArray = [];
    let followersHtmlCollection = document.getElementsByName("followers");
    for (let follower of followersHtmlCollection) {
        followersArray.push(follower.value);
    }
    return followersArray;
};

function prepareData(form) {
    let singleTask = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        date: form.elements.date.value,
        followers: createFollowersArray(),
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
    maxLength: 20,
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

function TimeoutSuccessMessage(message) {
    message.innerText = "";
};

function cleanForm(form) {
    let followers = document.querySelector("section").children;
    for (let item = followers.length - 1; item >= 0; item -=1)
        followers[item].remove();
    form.reset();
}

taskForm.elements.title
    .addEventListener("keyup", titleRules.checkLength.bind(titleRules));

taskForm.elements.date
    .addEventListener("change", dateRules.validateDate.bind(dateRules));

taskForm.addEventListener("submit", (event)=>{
    let success = document.getElementById("success-message");
    event.preventDefault();
    if (!titleRules.checkLength() || !dateRules.validateDate()) {
        success.innerText = "Данные нельзя отправить на сервер";
        setTimeout(TimeoutSuccessMessage, 1200, success);
    } else {
        success.innerText = "Задача была успешно добавлена";
        sendDataToStorage();
        setTimeout(TimeoutSuccessMessage, 1200, success);
        cleanForm(taskForm);
    } 
})