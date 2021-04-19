'use strict';

//Task#1 ver1

function countIncludes(first, second) {
    let count = 0;
    let arrayFromString = first.split(" ");
    for (let string of arrayFromString) {
        if (string.includes(second)) count +=1;
    }
    return count;
}

//Task#1 ver2

function countIncludes1(first, second) {
    let count = 0;
    let noSpaceString = first.toLowerCase().split(" ").join("");
    for (let i = 0; i < noSpaceString.length; i += 1) {
        if (noSpaceString.slice(i, i + second.length) === second) count +=1;
    }
    return count;
}

//Task#2

function checkPolindrom(string) {
    let noSpaceString = string.toLowerCase().split(" ").join("");
    let revercedString = noSpaceString.split("").reverse().join("");
    return noSpaceString === revercedString ?  "Полиндром" :  "Не полиндром";
}
