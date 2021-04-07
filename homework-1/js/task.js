'use strict';
//Task#1
let n;
let res = n % 10 + (n - n % 10) / 10;
console.log(res);

//Task#2 ver1
let a, b;
a = a + b;
b = a - b;
a = a - b;
console.log(a);

//Task#2 ver2
let c, d;
[c, d] = [d, c];
console.log(c);

//Task#3
let length, width, height;
let area = 2 * (height * length + height * width + length * width);
console.log(area);

//Task#4
let start, end;
let between = start < end ? end - start : -1;
console.log(between);
