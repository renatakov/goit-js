 "use strict";

// // const arr = [];
// // console.log(arr);

// // const students = ["Den", "Nick", "Dave", "Helen"];
// // console.log(students);

// // console.log(students[0]);
// // console.log(students[1]);
// // console.log(students[2]);
// // console.log(students[3]);
// // console.log(students[4]);

// // students[0] = "Roy";
// // console.log(students[0]);
// // console.log(students);

// // students[4] = "Mary";
// // onsole.log(students[4]);
// // console.log(students);

// // students.length = 6;
// // console.log(students.length);
// // console.log(students);

// // students.length = 10;
// // console.log(students.length);
// // console.log(students);

// // students.length = 4;
// // console.log(students.length);
// // console.log(students);

// // for (let i = 1; i < students.length; i += 2) {
// //     console.log("studens item: " , students[i]);
// // }

// // for (let i = 5; i <= 6; i += 2) {
// //     students.push(`The best student - ${i}`);
// // }
// // console.log("students list: ", students);
// // console.log(students.length);

// // for (const student of sudents) {
// //     console.log(student);
// // }

// // const house = ["flat-1","flat-2","flat-3","flat-4"]c
// // for (const aFlat of house){
// //     console.log(aFlat);
// // }

// // const house = ["пн","вт","ср","чт"]
// // for (const aDay of week){
// //     console.log(aDay);
// // }

// let studentName;
// console.log("имя студента" , studentName);
// // studentName = prompt("Enter your name please");

// const studentsNew = [
//     "Roy",
//     "Nick",
//     "Dave",
//     "Helen",
//     "Mary",
//     "Sarah",
//     "Charly",
//     "Bob"
//   ];
//   console.log("список студентов", studentsNew);

//   const studentsNotNew = [
//       "Roy",
//       "Nick",
//       "Dave",
//       "Dick",
//       "Mary",
//       "Olga",
//       "Charly",
//       "Bob"
//     ];
//      studentName = studentsNotNew[Math.floor(studentsNotNew.length * Math.random())];

//   let message;

//   for (const student of studentsNew) {
//       if (student === studentName) {
//         message = "A student with this name already is in the database";
//         break;
//       }

//       message = "Welcome in our database of unique names!";
//     }
//     console.log(`${studentName}, ${message}`);
//     console.log(message);

//     // continue
// const nums = [1, 5, 13, 45, 467, 99, 3, 23];
// const numMore = 34;
 
// for (let i = 0; i < nums.length; i += 1) {
//       if (nums[i] < numMore) {
//         continue;
//       }
//       console.log(`This number is more then ${numMore}: ${nums[i]}`);
//     }

//     const test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
//     const minLevel = 12;

//     for (let i = 0; i < test1.length) {
//         if (test1[i] < minLevel) {
//        continue;
//         }
//         console.log(`student: `, test1[i]);
//     }

//     const matrix = [
//           [1, 2, 3, 4], // [0]
//           [11, 22, 33], // [1]
//           [111, 222, 333] // [2]
//         ];
//         console.log(matrix);
//         console.log(matrix[0][0]);
//         console.log(matrix[0][1]); 
//         console.log(matrix[0][2]);   

//         console.log(matrix[1][0]); // 11
//         console.log(matrix[1][1]); // 22
//         console.log(matrix[1][2]); // 33

//         console.log(matrix[2][0]); // 111
//         console.log(matrix[2][1]); // 222
//         console.log(matrix[2][2]); // 333

//          let total = 0;

//         for (let i = 0; i < matrix.length; i += 1) {
//               console.log("Вложенный массив ", matrix[i]);
//               for (let j = 0; j < matrix.length; j += 1) {
//                 console.log("Элемент вложенного массива", matrix[i][j]);
//                 total += matrix[i][j];
//               }
//             }
// //             console.log(total);

// // ========================= занятие 2 ================
       
// let a = 5;
// let b = a;
// console.log(a);
// console.log(b);

// a = 10;
// console.log(a);
// console.log(b);

// let lastName = "Kovalova";
// let newlastName = lastName;

// console.log(lastName);
// console.log(newlastName);

// lastName = 10;
// console.log(lastName);
// console.log(newlastName);

// const units = ["alfa", "beta", "gamma"];
// const newUnits = units;
// console.log(units);
// console.log(newUnits);

// units[0] = "1";
// console.log(units);
// console.log(newUnits);

// units.push("delta");
// console.log(units);
// console.log(newUnits);      

// newUnits.unshift("epsilon");
// console.log(newUnits); 
// console.log(units);

// units.pop("");
// console.log(units);
// console.log(newUnits);
// newUnits.pop();
// console.log(newUnits); 
// console.log(units);

// newUnits.shift();
// console.log(units);
// console.log(newUnits);

// console.log(units.join(""));
// console.log(units.join(", "));
// console.log(units.join(" - "));
// console.log(units.join("xy"));

// const msg = "Welcome to my world!))";
// console.log(msg.split(" "));
// console.log(msg.split("m"));
// console.log(msg.split(""));

// const msg1 = "Welcome,to,my,world!))";
// console.log(msg1.split(","));

// console.log(units.indexOf("beta"));
// console.log(units.indexOf("b"));

// console.log(msg.includes("to"));
// console.log(msg.includes("WORLD"));
// console.log(msg.includes("world"));
// console.log(msg.includes("!"));
// console.log(msg.includes("t"));
       
// // const fruit = "apple";
// // if (fruit === "apple" || fruit === "strawberry") {
// //     console.log("its a red fruit");
// // }

// // const redFruits = ["apple", "strawberry"];
// // const fruit = prompt("Enter a fruit");

// // if (redFruits.includes(fruit)) {
// //     console.log("its a red fruit");
// // } else{
// //     console.log("its not a red fruit");
// // }

const numList = [0, 1, 2, 3, 4, 5, 6, 7];
console.log(numList.slice(0, 3));
console.log(numList.slice(1, 2));
console.log(numList.slice(1, 5));
console.log(numList.slice(2, 4));

// console.log(numList.slice(1));
// console.log(numList.slice(3));
// console.log(numList.slice());

// console.log(numList.slice(-1));
// console.log(numList.slice(-2));
// console.log(numList.slice(-3));
// console.log(numList.slice(-4));

// const newNumList = numList.slice(-4);
// console.log(newNumList);

// console.log(numList);
// const spliceArr = numList.splice(0, 2);
// console.log(spliceArr);

// console.log(numList.splice(0, 0, 1));
// console.log(spliceArr);
// console.log(numList);

// console.log(numList.splice(7, 0, "8", "9"));
// console.log(spliceArr);
// console.log(numList);

// console.log(numList.splice(3, 0, 9889));
// console.log(spliceArr);
// console.log(numList);

// console.log(numList.splice(4, 0, "a"));
// console.log(numList);

// console.log(numList.splice(3, 1, "Js"));
// console.log(numList);
// console.log(numList.splice(3, 3, "alfa"));
// console.log(numList);
// console.log(numList.splice(3, 3, "BETA", "GAMMA"));
// console.log(numList);

// const arr1 = ["Hello"]
// const arr2 = ["World!"]
// const lang = arr1.concat(arr2);
// console.log(lang.join(","));

// const test1 = [4, 12, 6, 16, 13, 8, 13, 4, 15, 11, 14, 10, 15, 12];
// const test2 = [17, 13, 4, 15, 10, 12, 16, 21, 13, 8, 14, 18, 15, 20];
// const test3 = [20, 12, 16, 22, 13, 8, 13, 4, 15, 10, 14, 18, 15, 22];

// const allTests = test1.concat(test2).concat(test3);
// console.log(allTests.join(","));

const add = function(a, b, c) {
return a + b + c;  
}

const result = add(1, 2, 3);
console.log(result);

console.log(add(5, 10, 15));
console.log(add(299, 14, 121));

let myName;
myName = "Renata";
console.log(myName);

const fnA = function() {
  console.log('Начала выполняться [fnA]');
  fnB();
  console.log('Продолжила выполняться [fnA] после выхода из [fnB]');
};

const fnB = function() {
  console.log('Выполняется [fnB]');
};

console.log('Начал выполнение [main]');
fnA();
console.log('Продолжил выполняться [main] после выхода из [fnA]');

/*
 * Начал выполнение [main]
 * Начала выполняться [fnA]
 * Выполняется [fnB]
 * Продолжила выполняться [fnA] после выхода из [fnB]
 * Продолжил выполняться [main] после выхода из [fnA]
 */

