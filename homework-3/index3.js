"use strict";

// const object = {
//     key: value,
//     key: value
// };

const frontend = {
    language1: "html",
    language2: "css",
    language3: "js"
};
console.log(frontend);

const student = {
    name: "Renata",
    lastName: "Kovalova",
    age: 11,
    course: frontend
};
console.log(student);

console.log(student.name);
console.log(student.lastName);
console.log(student.age);
console.log(student.course);
console.log(frontend["language1"]);
console.log(frontend["language2"]);
console.log(frontend["language3"]);

student.lastName = "Ivanova";
console.log(student.lastName);
console.log(student);

frontend["language1"] = "HTML";
console.log(frontend.language1);
console.log(frontend);

student.adress = "Petra Radchenka, 6";
console.log(student.adress);
console.log(student);

student["phone number"] = "+38 0972211792";
console.log(student["phone number"]);
console.log(student);

delete frontend.language2
console.log(frontend.language2);
console.log(frontend);

delete frontend["language2"];
console.log(frontend["language2"]);
console.log(frontend);

const myTeacher = "Sasha";
const course = "Frontend";

const group_4 = {
    myTeacher,
    course,
    count: 9
};
console.log(group_4);

const key = "test";
const name = "Luci";
const age = "age1";
const getKey = function() {
    return "score";
}
const testResults = {
    key,
    [key]: "2",
    [getKey()]: "22",
    [name]: "my_friend",
    [age]: "32"
};
console.log(testResults);

const myProducts = {
    milk: 0.5,
    eggs: 10,
    apples: 5,
    toCheck() {
        console.log("Проверь наличие");
    },
    orange: 15
};
myProducts.toCheck();
console.log(myProducts);

myProducts.toBuySweets = function() {
    console.log("Купи сладость");
};

myProducts.toBuySweets();
console.log(myProducts);

delete myProducts.toBuySweets;
console.log(myProducts);

const product = {
  type: "wellness & spa",
  category: "hair care",
  productName: "shampoo",
  price: 76.94,
  showProductName() {
    console.log(this.productName); // внутри объекта образаемся через this
  },
  changePrice(value) {
    this.price = value; // внутри объекта образаемся через this
  }
};

product.showProductName();
product.changePrice(89.5);
console.log(product.price);

const myCars = {
    subaru: "Forester",
    mazda: "626",
    volkswagen: "Golf",
    landRover: "Range Rover"
};

for (const key in myCars) {
    console.log(key);
}

for (const key in myCars) {
    console.log(myCars[key]);
}

const hero = {
    name: "Spider-mun",
    speed: 100,
    power: 67,
    lifes: 30
}
console.log(hero);

const keysOfHero = Object.keys(hero);
console.log(keysOfHero);

for (const key of keysOfHero) {
    console.log("ключь", key);
    console.log("значение", hero[key]);
}

const entriesOfHero = Object.entries(hero);
console.log("entriesOfHero", entriesOfHero);

// for (const entry of entriesOfHero) {
//     const key = entries[0];
//     const value = entries[1];

//     console.log(`пакет - ${key}: сколько единиц - ${value}`);
// };

// const valuesOfHero = Object.values(hero);
// console.log(valuesOfHeroes);

// const testScore = {
//     test_1: 16,
//     test_2: 21,
//     test_3: 22,
//     test_4: 23
// };

// const arrValues = Object.values(testScore);
// console.log(arrValues); // [16, 21, 22, 23]

// let totalScore = 0;

// for (const value of arrValues) {
//   totalScore += value; // || totalScore = totalScore + value;
//   console.log("totalScore на каждой итерации", totalScore);
// //   0 + 16 = 16; - 1 итерация
// //   16 + 21 = 37; - 2 итерация
// //   37 + 22 = 59; - 3 итерация
// //   59 + 23 = 82; - 4 итерация - последняя, потому что больше нет
// //   элементов массива для перебора
// //   последнее значение totalScore становится итоговым по работе цикла
// }
// console.log(totalScore); // 82