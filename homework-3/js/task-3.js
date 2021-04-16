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

//Task#3 решение от маэстро 
nums = [34, 89, -12, -1, 0];
let newNums = [];
for (let i = nums.length; i >=0; i -=1) {
    if (nums[i] < 0) newNums.push(nums[i]);
    // if (nums[i] < 0) newNums.push(nums.splice(i, 1)[0]);
}

//Task#2 решение от маэстро 

// nums1 = [34, 78, 10, -90, 1, 0, 5];
// let min3 = Number.MAX_VALUE;
// let max3 = Number.MIN_VALUE;

// for (let i = 0; i < nums1.length; i+=1) {
//     if (nums1[i] < min3) min3 = nums1[i];
// }