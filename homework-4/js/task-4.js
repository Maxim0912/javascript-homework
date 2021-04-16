'use strict';

//Task#1

function getEnds(nums) {
    let end;
    if (nums > 4 && nums < 21) end = "товаров";
    else if (nums % 10 === 1) end = "товар";
    else if (nums % 10 === 2 || nums % 10 === 3 || nums % 10 === 4) end = "товара";
    else end = "товаров";
    return end;
}


//Task#2

function range(start, end, step=1) {
    if (end > start && step > 0) {
        let rangeArray = [];
        for (let i = start; i <= end; i += step) {
            rangeArray.push(i);
        }
        return rangeArray;
    }
    else if (end < start && step < 0) {
        let rangeArray = [];
        for (let i = start; i >= end; i += step) {
            rangeArray.push(i);
        }
        return rangeArray;
    }
    return "Введите другие данные";
}

//Task#3 ver1

let myString = "lorem ipsum dolor sit amet ipsum consectetur ipsum adipisicing elit unde aut cupiditate illum rerum aspernatur voluptas mollitia voluptate recusandae architecto autem rem laborum temporibus lorem odio eius voluptas lorem molestiae qui laboriosam illo voluptates veritatis corrupti dolor autem suscipit ab iure excepturi nesciunt iure ipsa perferendis corporis saepe natus sint dolores harum quibusdam dolor"

function findSpam(text, ...words) {
    let count = 0;
    let myArray = text.split(" ");
    for (let i of myArray) {
        for (let k of words) {
            if (k === i) count += 1;
        }
    }
    return count >= 5 ? 5 : count;
}

//Task#3 ver2

let myString1 = "lorem ipsum dolor sit amet ipsum consectetur ipsum adipisicing elit unde aut cupiditate illum rerum aspernatur voluptas mollitia voluptate recusandae architecto autem rem laborum temporibus lorem odio eius voluptas lorem molestiae qui laboriosam illo voluptates veritatis corrupti dolor autem suscipit ab iure excepturi nesciunt iure ipsa perferendis corporis saepe natus sint dolores harum quibusdam dolor"

function findSpam1(text, ...words) {
    let spamWords = text.split(" ").filter(elem => words.includes(elem));
    return spamWords.length >= 5 ? 5 : spamWords.length;
}
// console.log(findSpam1(myString, 'lorem', 'dolor', 'ipsum'));

//Task#4

let numsArr = [
    [3, 5, -1, 6, 0],
    [56, -9, 111, 6],
    [11, 86, -12],
];

numsArr.forEach(elem => elem.forEach((elem, index, arr) => arr[index] += 10));

let evenArray = numsArr.join(",").split(",").filter(elem => elem > 0);
