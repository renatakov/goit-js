"use strict";
// 1
const var1 = 1;
const var2 = 0;
const var3 = true;

console.log(var1 > var2); // true
console.log(var1 == var3); // true
console.log(var1 === var3); // false
console.log(var1 != var3); // false
console.log(var2 != var3); // true
console.log(var1 > var2 == var3); // true
console.log(var1 > var2 > var3); // false

// 2
let val;
console.log(val);

val = "River";
console.log(typeof val); // string
console.log(isNaN(val)); // true

val = "Mountain";
console.log(typeof val); // string
console.log(isNaN(val)); // true

val = 232;
console.log(typeof val); // number
console.log(isNaN(val)); // false

val = true;
console.log(typeof val); // boolean
console.log(isNaN(val)); // false

val = null;
console.log(typeof val); // object
console.log(isNaN(val)); // false

// 3

const alfa = 0.2;
const beta = 0.4;

let result = ((alfa * 10 + beta * 10) / 10);

console.log(result); // 0.6
console.log(result === 0.6); // true

// 4
let tetra;
tetra = "12px"; 
console.log(tetra); // 12px

tetra = "13.34em"; 
console.log(tetra); // 13.34em

// 5

console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18));
console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18));

// 6

let random;

random = (Math.random() * (19 - 3) + 3).toFixed(2);
console.log(random);