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
};
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
};
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

// SPREAD ОПЕРАТОР(РАСПЫЛЕНИЕ)

// С МАССИВАМИ 
const arr = [1, 34, 56, 78, 90];
const minArr = Math.min(...arr); // МЕТОДЫ ОБЪЕКТА Math РАБОТАЮТ С МАССИВОМ ТОЛЬКО ЧЕРЕЗ SPREAD ОПЕРАТОР
// const minArr = Math.min(arr); //ОБРАЩНИЕ НАПРЯМУЮ К МАССИВУ ПО ИМЕННИ ВОЗВРАЩАЮТ NaN
console.log(minArr);

//  альтернатива метода slice() - создани дубликата (копирование) массива

const marvelHeroes = [
    "Captain Marvel",
    "Thanos",
    "Black Panter",
    "Goose the Cat",
    "Black Widow",
    "Captain America"
];

console.log("исходный массив героев", marvelHeroes);

const copyOfMarvelHeroes = [...marvelHeroes];
console.log("Дубликат исходного массива", copyOfMarvelHeroes);
console.log("сторогое равенство исходного массива и дубликата", marvelHeroes === copyOfMarvelHeroes); // false потому что разные ссылки на массивы

const newCopyOfMarvelHeros = [...marvelHeroes, "halk", "spider-man"];
console.log("дубликат исходного массива + дополнительные елементы", newCopyOfMarvelHeros);

// канкатенация массивов при распылении полностью
// альтернатива метода concat()

const firstNum = [21, 43, 890];
const secondNum = ["1", "1234", "453"];
const AllNums1 = [...firstNum, ...secondNum];
console.log("... allnums1", AllNums1);

// канкатенация массивов при распылении частично
// спред операдор и метод slice()

const notAllNums = [...firstNum.slice(1, 2), ...secondNum.slice(-1)];
console.log("канкатенация отдельных элементов разных массивов в один массив", notAllNums);

const notAllNums1 = [...firstNum.slice(1, 2), 146000, 15000, ...secondNum.slice(-1), 5678];
console.log("канкатенация отдельных элементов разных массивов в один массив и своих элементов", notAllNums1);

// С ОБЪЕКТАМИ

const fruits = {
    yellow: "banana",
    green: "kiwi",
    red: "apple"
};

const berries = {
    black: "blackberry",
    white: "grape",
    red: "cherry"
};

const sweets = Object.assign({}, fruits, berries);
console.log("Object.assign", sweets);

const sweets1 = {...fruits, ...berries};
console.log("...spread", sweets1);

const a = {x: 1, y: 2};

const b = {x: 0, z: 3};

const c = {x: 5, j: 10, ...a, z: 15, ...b};
//         X: 5, 
//               j: 10, 
//         X: 1,      , y: 2
//                           , Z: 15
//         X: 0,      ,      , Z: 3

console.log(c);

const d = {...a, ...b, x: 5, j: 10, z: 15};
//         X: 1,      , y: 2
//         X: 0,      ,      , Z: 3
//         X: 5, 
//               j: 10, 
//                           , Z: 15

console.log(d);

// REST ОПЕРАТОР(ЭТО СБОРКА)

const showTestScore = function(...args) {
    console.log("массив всех аргументов функции", args);
};
showTestScore("a1", "b1", "c1");
showTestScore(56, 345, 78, 132, 640);

const toAddTest = function(val1, val2, ...args) {
    console.log("Первый аргумент", val1);
    console.log("Вторый аргумент", val2);
    console.log("Массив всех оставшихся аргументов", args);
};
toAddTest("name", "test1", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12);

// ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ - ПРЕВРАТИТЬ КЛЮЧ СВОЙСТВА В ПЕРЕМЕННУЮ
// ПРИ ЕТОМ ЗНАЧЕНИЕ КЛЮЧА МТАНЕТ ЗНАЧЕНИЕМ ПЕРЕМЕННОЙ

const hotel = {
    hotelName: "Rixos",
    stars: 5,
    capasity: 1000
};
console.log(hotel);
// const {hotelName, stars, capasity} = hotel; // деструктуризация
// console.log("Значения деструктуризированых свойств:", hotelName, stars, capasity);

// const {hotelName, stars, status} = hotel; // ЕСЛИ СВОЙСТВО НЕ НАЙДНО ТО ЗНАЧЕНИЕ ВЫВИДЕТЬСЯ UNDEFINED
// console.log("Значения деструктуризированых свойств:", hotelName, stars, status);

// const {hotelName, stars, status = "empty"} = hotel; // ЕСЛИ СВОЙСТВО НЕ НАЙДНО ТО МОЖНО УКАЗАТЬ ЗНАЧЕНИЕ ПО УМОЛЧАНИЮ
// console.log("Значения деструктуризированых свойств:", hotelName, stars, status);

// ЧАСТИЧНАЯ ДЕСТРУКТУРИЗАЦИЯ С ПОМОЩЮ ...rest

const {hotelName, ...rest} = hotel; // ЧАСТИЧНАЯ ДЕСТРУКТУРИЗАЦИЯ
console.log(hotelName);
console.log(rest);

// ДЕСТРУКТУРИЗАЦИЯ МАССИВОВ

const rgb = [200, 255, 100];
let red, blue, green;
[red, blue, green] = rgb; // ДЕСТРУКТУРИЗАЦИЯ МАССИВА
console.log("Исходный массив элемента", rgb);
console.log("Значние преобразованых элементов массива", red, blue, green);

// ==============================================================

// Если переменных больше чем элементов массива, им будет присвоено undefined,
// поэтому можно указывать значения по умолчанию.
const rgb2 = [200, 100, 255];

const [red2, green2, blue2, alfa2 = 0.3] = rgb2;

console.log(`Red: ${red2}, Green: ${green2}, Blue: ${blue2}, Alfa: ${alfa2}`);
// Red: 200, Green: 100, Blue: 255, Alfa: 0.3

// можно распаковать и присвоить оставшуюся часть элементов массива переменной
const rgb3 = [200, 255, 100];

const [red3, ...colors] = rgb3;

console.log(`Red: ${red3}, Colors: ${colors}`);
// Red: 200, Colors: [255, 100]

// Элементы можно пропускать. Допустим из массива rgb необходимо взять только последнее значение.
// Используется это крайне редко.
const rgb4 = [200, 100, 255];

const [, , blue4] = rgb4;

console.log(`Blue: ${blue4}`); // Blue: 255
