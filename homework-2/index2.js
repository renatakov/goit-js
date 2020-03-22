"use strict";

// const arr = [];
// console.log(arr);

// const students = ["Den", "Nick", "Dave", "Helen"];
// console.log(students);

// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);
// console.log(students[4]);

// students[0] = "Roy";
// console.log(students[0]);
// console.log(students);

// students[4] = "Mary";
// onsole.log(students[4]);
// console.log(students);

// students.length = 6;
// console.log(students.length);
// console.log(students);

// students.length = 10;
// console.log(students.length);
// console.log(students);

// students.length = 4;
// console.log(students.length);
// console.log(students);

// for (let i = 1; i < students.length; i += 2) {
//     console.log("studens item: " , students[i]);
// }

// for (let i = 5; i <= 6; i += 2) {
//     students.push(`The best student - ${i}`);
// }
// console.log("students list: ", students);
// console.log(students.length);

// for (const student of sudents) {
//     console.log(student);
// }

// const house = ["flat-1","flat-2","flat-3","flat-4"]c
// for (const aFlat of house){
//     console.log(aFlat);
// }

// const house = ["пн","вт","ср","чт"]
// for (const aDay of week){
//     console.log(aDay);
// }

let studentName;
console.log("имя студента" , studentName);
// studentName = prompt("Enter your name please");

const studentsNew = [
    "Roy",
    "Nick",
    "Dave",
    "Helen",
    "Mary",
    "Sarah",
    "Charly",
    "Bob"
  ];
  console.log("список студентов", studentsNew);

  const studentsNotNew = [
      "Roy",
      "Nick",
      "Dave",
      "Dick",
      "Mary",
      "Olga",
      "Charly",
      "Bob"
    ];
     studentName = studentsNotNew[Math.floor(studentsNotNew.length * Math.random())];

  let message;

  for (const student of studentsNew) {
      if (student === studentName) {
        message = "A student with this name already is in the database";
        break;
      }

      message = "Welcome in our database of unique names!";
    }
    console.log(`${studentName}, ${message}`);
    console.log(message);

    // continue
const nums = [1, 5, 13, 45, 467, 99, 3, 23];
const numMore = 34;
 
for (let i = 0; i < nums.length; i += 1) {
      if (nums[i] < numMore) {
        continue;
      }
      console.log(`This number is more then ${numMore}: ${nums[i]}`);
    }

    const test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const minLevel = 12;

    for (let i = 0; i < test1.length) {
        if (test1[i] < minLevel) {
       continue;
        }
        console.log(`student: `, test1[i]);
    }

    const matrix = [
          [1, 2, 3, 4], // [0]
          [11, 22, 33], // [1]
          [111, 222, 333] // [2]
        ];
        console.log(matrix);
        console.log(matrix[0][0]);
        console.log(matrix[0][1]); 
        console.log(matrix[0][2]);   

        console.log(matrix[1][0]); // 11
        console.log(matrix[1][1]); // 22
        console.log(matrix[1][2]); // 33

        console.log(matrix[2][0]); // 111
        console.log(matrix[2][1]); // 222
        console.log(matrix[2][2]); // 333

         let total = 0;

        for (let i = 0; i < matrix.length; i += 1) {
              console.log("Вложенный массив ", matrix[i]);
              for (let j = 0; j < matrix.length; j += 1) {
                console.log("Элемент вложенного массива", matrix[i][j]);
                total += matrix[i][j];
              }
            }
            console.log(total);
