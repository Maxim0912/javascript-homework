'use strict';

//Task#2

function createTables(where, arr) {
    let tableArt = document.createElement("table");
    let firstTrArt = document.createElement("tr");
    for (let article = 0; article < 1; article +=1) {
        for (let i of Object.keys(arr[article])) {
            let firstTrArt = document.createElement("th");
            firstTrArt.innerText = i;
            console.log(i);
            tableArt.append(firstTrArt);
        }
    }
    for (let item of arr) {
        let trArt = document.createElement("tr");
        tableArt.append(trArt);
        for (let property in item) {
            let tdArt = document.createElement("td");
            tdArt.innerText = item[property];
            tableArt.append(tdArt);
        }
    }
    where.append(tableArt);
} 

createTables(document.querySelector("main"), goods);