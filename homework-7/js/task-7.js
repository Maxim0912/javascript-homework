'use strict';

function getCats() {
    return [
        {
            "name": "Люся",
            "age": "1 год",
            "color": "трехцветная",
            "additional_info": {"vaccinations": true, "passport": true}
        },
        {
            "name": "Том",
            "age": "3 месяца",
            "color": "белый",
            "additional_info": {"vaccinations": false, "passport": false}
        },
        {
            "name": "Макс",
            "age": 2,
            "color": "серый",
            "additional_info": {"vaccinations": false, "passport": true}
        },
        {
            "name": "Василий",
            "age": 3,
            "color": "черный",
            "additional_info": {"vaccinations": true, "passport": true}
        }
    ];
}

//Task#1

function convertData(cats) {
    for (let cat of cats) {
        for (let singleCat in cat) {
            if (typeof(cat[singleCat]) === "object") {
                for (let data in cat[singleCat]) {
                    if (cat[singleCat][data] === true) cat[singleCat][data] = "Есть";
                    else if (cat[singleCat][data] === false) cat[singleCat][data] = "Нет";
                }
            }           
        }
    }
    return cats;
}

function getPetsInfo(where, pets) {
    let container = document.createElement("div");
    container.classList.add("items");
    for (let card of pets) {
        let smallContainer = document.createElement("div"), addInfo;
        smallContainer.classList.add("card");
        smallContainer.innerHTML = `
            <h3>Имя:${card.name}</h3>
            <p>Возраст:${card.age}</p>
            <p>Окрас:${card.color}</p>
        `;
        for (let item in card) {
            if (typeof(card[item]) === "object") console.log(item);
            addInfo = document.createElement("p");
            addInfo.innerText = `Дополнительная информация: 
                Вакцинация: ${card[item].vaccinations}, Паспорт: ${card[item].passport}
            `;
        }
        smallContainer.append(addInfo);
        container.append(smallContainer);       
    }
    where.append(container);
}


getPetsInfo(document.querySelector("main"), convertData(getCats()));

let articles = [
    {
        id: 1,
        title: "JS",
        text: "Статья про JS",
        author: "Александр"
    },
    {
        id: 2,
        title: "PHP",
        text: "Статья про PHP",
        author: "Виталий"
    },
    {
        id: 3,
        title: "Базы Данных",
        text: "Статья про Базы Данных",
        author: "Евгения"
    },
    {
        id: 4,
        title: "HTML",
        text: "Статья про HTML",
        author: "Виталий"
    }
];

let goods = [
    {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    {
        title: "Флейта",
        price: 900,
        count: 50
    },
    {
        title: "Арфа",
        price: 3400,
        count: 5
    }
];

//Task#2

function createTables(where, arr) {
    let tableArt = document.createElement("table");
    let firstTrArt = document.createElement("tr");
    for (let article = 0; article < 1; article +=1) {
        for (let i of Object.keys(arr[article])) {
            let firstTrArt = document.createElement("th");
            firstTrArt.innerText = i;
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

//Task#2 teachers version

function generateTable(arr) {
    let table = document.createElement("table");
    let captionRow = document.createElement("tr");
    for (let propertyName in arr[0]) {
        let captionCell = document.createElement("th");
        captionCell.innerText = propertyName.toUpperCase();
        captionRow.append(captionCell);
    }
    table.append(captionRow);

    for (let element of arr) {
        let row = table.insertRow();
        for (let propertyName in element) {
            let cell = row.insertCell();
            cell.innerText = element[propertyName];
        }
    }
    return table;
}

document.body.append(
    generateTable(goods),
    generateTable(articles)
);

//Task#3

function generateField(n, data) {
    n = n >= 3 ? n : 3;
    let field = document.createElement("div");
    field.style.cssText =
        "margin: 0 auto;" + // сверху и снизу нет отступов по бокам автомат
        "width: 40vw;" +
        "display: flex;" +
        "flex-wrap: wrap;";

    for (let i = 0; i < n*n; i += 1) {
        let cell = document.createElement("div");
        cell.style.border = "1px solid black";
        cell.style.boxSizing = "border-box";
        cell.style.width = cell.style.height = 40 / n + "vw";// к числу приклеили строку получили строку
        // раз нет содержимого то надо задать выстоту
        field.append(cell);
    }
    addRandomData(field, data);
    return field;
}

let prises = {
    headphones: "Наушники",
    book: "Книга",
    postcard: "Открытка"
};

function addRandomData(field, dataObject) {
    let attrValues = Object.keys(dataObject);
    for (let attrValue of attrValues) {
        let randomIndex = Math.floor(Math.random() * field.children.length);
        field.children[randomIndex].setAttribute("prise", attrValue);    //массивоподобная коллкция
    }
} 

document.body.append(generateField(4, prises));
