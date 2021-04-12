'use strict';

//Task#1

let my_Array = [
    [23, 56, 75, -90, 123],
    [17, 0, -6429, -122],
    [19, 86, 55, -3, 900, 0, 0],
    [4, 9, -2]
];

for (let i = my_Array.length - 1; i >= 0; i -= 1) {
    for (let k = my_Array[i].length - 1; k >= 0; k -= 1)
        my_Array[i][k] += 10;
}

//Task#2 var1

let randArray = [];

for (let i = 0; i < 7; i +=1 ) {
    randArray[i] = Math.floor(Math.random() * 100);
}

let min = randArray[0], max = min, maxIndex, minIndex;

for (let i = 0; i < randArray.length; i += 1) {
    if (randArray[i] >= max) {
        max = randArray[i];
        maxIndex = i;
    } 

    if (randArray[i] <= min) {
        min = randArray[i];
        minIndex = i;
    }
}
randArray.splice(maxIndex, 1, min);
randArray.splice(minIndex, 1, max);

//Task#2 var2

let randArray1 = [];

for (let i = 0; i < 7; i +=1 ) {
    randArray1[i] = Math.floor(Math.random() * 100);
}

let max1 = Math.max.apply(null, randArray1), min1 = Math.min.apply(null, randArray1);
randArray1.splice(randArray1.indexOf(max1), 1, min1);
randArray1.splice(randArray1.indexOf(min1), 1, max1);

//Task#3

let newArray = [], oddsArray = [], start = -100, finish = 100, lengthArray = 10;
for (let i = 0; i < lengthArray; i +=1 ) {
    newArray[i] = Math.floor(Math.random() * (finish - start) + start);
    if (newArray[i] < 0) oddsArray.push(newArray[i]);
}
