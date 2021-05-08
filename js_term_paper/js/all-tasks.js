'use strict';

let tasks = JSON.parse(localStorage.getItem("array"));

tasks.sort(function(a, b) {
    let dateA = new Date(a.date);
    let dateB = new Date(b.date);
    return dateA - dateB;
});

function getDataFromStorage(where, array) {
    let container = document.createElement("section"), followers;
    for (let task of tasks) {
        let oneTask = document.createElement("div");
        oneTask.innerHTML = `
            <h2>${task.title}</h2>
            <p>${task.description}</p>
            <p>Выполнить к ${task.date}</p>
            <p>Участники: ${task.followers.join(",")}</p>
        `;
        container.append(oneTask);        
    }
    where.append(container);
};

getDataFromStorage(document.querySelector("main"), tasks);

let allTasks = document.querySelectorAll("section > div");

for (let task of allTasks) {
    task.addEventListener("click", selectTask);
};

function selectTask() {
    this.classList.toggle("painted");
};

function delChoice() {
    let arrayToDell = [];
    let selectedTasks = document.getElementsByClassName("painted");
    for (let item = selectedTasks.length - 1; item >= 0; item -=1) {
        arrayToDell.push(selectedTasks[item].querySelector("h2")['innerText']);
        selectedTasks[item].remove();
    }
    return arrayToDell;   
};

function delItemsFromTasks() {
    let arrayTo = delChoice();
    console.log(arrayTo);
    for (let i = tasks.length - 1; i >= 0; i -=1) {
        if (arrayTo.includes(tasks[i]['title'])) tasks.splice(i, 1);
    };
    
    let arrToJson = JSON.stringify(tasks);
    localStorage.setItem("array", arrToJson);    
}

let subButton = document.querySelector("button");
subButton.addEventListener("click", delItemsFromTasks);
