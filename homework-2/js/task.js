'use strict';

//Task#1

let count;

if (count < 0) console.log("Да ты издеваешься!!!");
else if (count < 40) console.log("Попробуй потом");
else if (count < 60) console.log("Удовлетворительно");
else if (count < 90) console.log("Хорошо");
else if (count <= 100) console.log("Отлично");
else console.log("Опять?!");

//Task#2

let first, second, third, res;

switch (third) {
    case 3:
        res = first + second;
        break;
    case 5:
        res = first - second;
        break;
    case 7:
        res = first * second;
        break;
    case 9:
        res = first / second;
        break;
    default:
        res ="Абра-Кадабра! :)";

}
console.log(res);

//Task#3var1

let max = 500, min = 10, myRandom;
myRandom = Math.random() * (max - min + 1) + min;
let checkRandom = myRandom >= 25 && myRandom <= 200 ? `Число ${myRandom} содержится в интервале (25;200)` : `Число ${myRandom} не содержится в интервале (25;200)`;
console.log(checkRandom);

//Task3var2

let max2 = 500, min2 = 10, myRandom2, checkRandom2;
myRandom2 = Math.random() * (max2 - min2 + 1) + min2;

if (myRandom2 >= 25 && myRandom2 <= 200) checkRandom2 = `Число ${myRandom2} содержится в интервале (25;200)`;
else checkRandom2 = `Число ${myRandom2} не содержится в интервале (25;200)`; 

console.log(checkRandom2);

//Task4

for (let i = 2; i <= 40; i += 2) {
    console.log(i);
}

//Task#5 

let prev = 0, next = 1, n;

for (let i = 0; i <= n; i +=1){
    console.log(prev);
    next = prev + next;
    prev = next - prev;     
}

//Task#6

let table = 5, operand = 10;

for (let i = 1; i <= table; i += 1) {
    for(let k = 1; k <= operand; k += 1){
        console.log(`${k} * ${i} = ${i * k}`);
    }
}

//Task#7

let minimum = 1, maximum = 100, tryGuess,
userInput = (prompt(`Загадайте число от ${minimum} до ${maximum}.`));
while (true) {
    tryGuess = Math.round((maximum + minimum) / 2);
    userInput = parseInt(prompt(`Число равно ${tryGuess}? Если да, нажмите один`));
    if (userInput === 1) {
        // alert('Это было легко. Гони пять баксов!'); 
        break;
    } else {
        userInput = parseInt(prompt(`Число больше ${tryGuess}? Если да, нажмите один`));
        if (userInput === 1) minimum = tryGuess;
        else maximum = tryGuess;
    }
}



