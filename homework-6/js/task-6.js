'use strict';

function isObject(item) {
    return (typeof(item) === "object" && !Array.isArray(item) && item !== null);
}

// boolen можно преобразовать в число, но, мне кажется, что логика функции
// изменится (не жду на вход true), null решил оставить

function isNumb(num) {
    return (typeof(num) !== 'boolean' && !isNaN(Number(num)));
}

let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

//Task#1

function checkPrice(obj, from, to) {
    if (isObject(obj) === false || isNumb(from) === false || isNumb(to) === false) return false;
    let newObj = {};
    for (let prop in obj) {
        if (obj[prop]['price'] > from && obj[prop]['price'] <= to)
            newObj[prop] = obj[prop];
    }
    return newObj;
}

//Task#2

function cutAmount(obj, title, countToCart) {
    if (isObject(obj) === false || isNumb(countToCart) === false || typeof(title) !== "string") return false;
    for (let prop in obj) {
        if (Object.values(obj[prop]).includes(title) && obj[prop]['count'] >= countToCart) {
            obj[prop]['count'] = obj[prop]['count'] - countToCart;
            return true;
        }
    }
    return `${false}, нет в наличии`;
};

//Task#3

let books = [
    { author: 'Пушкин', title: 'Пир во время чумы'},
    { author: 'Толстой', title: 'Война и мир'},
    { author: 'Лермонтов', title: 'Тамань'},
    { author: 'Гончаров', title: 'Обломов'},
    { author: 'Лермонтов', title: 'Герой Нашего Времени'},
    { author: 'Пушкин', title: 'Руслан и Людмила'},
    { author: 'Лермонтов', title: 'И скучно, и грустно'},
];

function findBooks(arr, author) {
    let arrBooks = [];
    for (let item of arr) {
        if (item["author"] === author) arrBooks.push(item['title']);
    }
    return arrBooks;
};

//Task#4

function sortByTitle(arr) {
    arr.sort((a, b) => a.title > b.title ? 1 : -1);
    return arr;
};
