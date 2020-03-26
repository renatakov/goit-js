"use strict";

// ================ 1 =============

const arr = [];
 console.log(arr);

const fruits = ["яблоки", "бананы", "апельсины"];
console.log(fruits);

fruits[1] = "киви";
console.log(fruits[1]);

fruits[3] = "груши";
console.log(fruits[3]);
 console.log(fruits);

 fruits[4] = "виноград";
 console.log(fruits[4]);
 console.log(fruits);

fruits[5] =  "персики"
 console.log(fruits[5]);
 console.log(fruits);

// ====================== 2 ==============

const test1 = [4, 12, 6, 16, 13, 8, 13, 4, 15, 11, 14, 10, 15, 12];
const minLevel = 12;

    for (let i = 0; i < test1.length) {
        if (test1[i] < minLevel) {
       continue;
        }
        console.log(`student: `, test1[i]);
    }

//  ====================== 3 ===============

const test2 = [17, 13, 4, 15, 10, 12, 16, 21, 13, 8, 14, 18, 15, 20];
const minLevel = 15;

for (let i = 0; i < test1.length) {
    if (test1[i] < minLevel) {
   continue;
    }
    console.log(`student: `, test1[i]);
} 

//  ======================= 4 ================

const test3 = [20, 12, 16, 22, 13, 8, 13, 4, 15, 10, 14, 18, 15, 22];
const minLevel = 16;

for (let i = 0; i < test1.length) {
    if (test1[i] < minLevel) {
   continue;
    }
    console.log(`student: `, test1[i]);
} 

// ========================= 5 =================

const tests = [
    [4, 12, 6, 16, 13, 8, 13, 4, 15, 11, 14, 10, 15, 12],
    [17, 13, 4, 15, 10, 12, 16, 21, 13, 8, 14, 18, 15, 20],
    [ 20, 12, 16, 22, 13, 8, 13, 4, 15, 10, 14, 18, 15, 22]
];

for (let i = 0; i < tests.length; i += 1) {
                  console.log("Вложенный массив ", tests[i]);
                  for (let j = 0; j < tests.length; j += 1) {
                    console.log("Элемент вложенного массива", tests[i][j]);
                    total += tests[i][j];
                  }
                }