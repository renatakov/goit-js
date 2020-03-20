"use strict"

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

let val = "River";
console.log(val.length); // 5

val = "Mountain";
console.log(val.length); // 8

val = 232;
console.log(val.length); // 8

val = true;
console.log(val.length); 

val = null;
console.log(val.length); 

const alfa = 0.2;
const beta = 0.4;
console.log(alfa + beta);
console.log(alfa + beta === 0.6);

console.log(Number.parseInt("12px"));
console.log(Number.parseInt("13.34em"));

console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18));
console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18));

console.log(Math.random() * 3+(19 - 1) +1)