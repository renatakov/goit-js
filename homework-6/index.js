"use strict";

const array = [5, 6, 7, 8, 9];

const dirtyMultiply = (arr, value) => {
    for (let i = 0; i < arr.length; i += 1) {
        arr[i] *= value;
    }
};

console.log(array);
dirtyMultiply(array,5);
console.log(array);

const cleanMultiply = (arr, value) => {
    const result = [];
    for (let i = 0; i < arr.length; i += 1) {
        result.push(arr[i] * value);
    }
    return console.log(result);
};

console.log(array);
cleanMultiply(array,5);
console.log(array);

const arrNumber = [1, 2, 3, 4, 5, 6];

for (let k = 0; k < arrNumber.length; k += 1) {
    console.log(arrNumber[k]);
}

arrNumber.forEach((el) => console.log("forEach", el));

arrNumber.forEach((el, x) => console.log(`forEach: index ${x}, value ${el}`));

const tests = ["test-1", "test-2", "test-3", "test-4"];
tests.forEach((test) => console.log(test));

console.log(arrNumber);

// example 1
console.log("исходный массив", arrNumber);

const doubleNumbers = arrNumber.map((num) => num * 2);
console.log("map:", doubleNumbers);
console.log("исходный массив", arrNumber);

// example 2

const users = [
    { name: "jack", isActive: true },
    { name: "john", isActive: false },
    { name: "Susan", isActive: true },
  ];

  
// example 1
console.log("исходник", arrNumber); //  [1, 4, 3, 14, 16, 2, 90]
const n1 = [1, 4, 3, 14, 5, 5, 5, 16, 2, 90];
const filteredArray = arrNumber.filter((el) => el > 10);
console.log("filter-1:", filteredArray);

const filteredArray1 = arrNumber.filter((num) => num < 5);
console.log("filter-2:", filteredArray1);

const filteredArray2 = n1.filter((num) => num === 5);
console.log("filter-3:", filteredArray2);

// example 2

// Для каждого элемента коллекции (user) проверим поле isActive.
// Если оно true, то текущий элемент (user) будет записан в результирующий массив.

// const activeUsers = users.filter((user) => user.isActive === true);

const activeUsers = users.filter((user) => user.isActive);
console.log("filter: active", activeUsers);

// const inActiveUsers = users.filter((user) => user.isActive !== true);
// const inActiveUsers = users.filter((user) => user.isActive === false);

const inActiveUsers = users.filter((user) => !user.isActive);

console.log("filter: inactive", inActiveUsers);


const newArr = [1, 2, 3, 4, 5];

const nextToThree = newArr.find((el) =>  el > 3);
console.log(nextToThree);

const beforeThree = newArr.find((num) => num < 2);
console.log(beforeThree);

const five = newArr.find((num) => num === 5);
console.log(five);

const newUsers = [
    { id: "01", name: "Mango", isActive: true },
    { id: "01", name: "Poly", isActive: false },
    { id: "002", name: "Ajax", isActive: true },
    { id: "003", name: "Chelsey", isActive: false },
  ];
  
const user = newUsers.find((el) => el.id === "002");
console.log(user);


const getUserById = (array, id_value) => array.find((el) => el.id === id_value);
console.log(getUserById(newUsers, "003"));
console.log(getUserById(newUsers, "01"));
console.log(getUserById(newUsers, "000"));

const sumNums = [1, 2, 3, 4, 5];
const isBig = (val) => val >= 10;

console.log(sumNums.every(isBig));
console.log(sumNums.some(isBig));

const isBig1 = (val) => val >= 1;
console.log(sumNums.every(isBig1));
console.log(sumNums.some(isBig1));


const isBig2 = (val) => val >= 501;
console.log(sumNums.every(isBig2));
console.log(sumNums.some(isBig2));

const fruits = [
    { name: "apples", amount: 3 }, // true
    { name: "bananas", amount: 10 }, // true
    { name: "oranges", amount: 1 }, // true
  ];
  
const allAvaible = fruits.some((andrei) => andrei.amount > 0);
console.log(allAvaible);


const anyAvaible = fruits.some((andrei) => andrei.amount >= 10);
console.log(anyAvaible);

console.log(sumNums);
const newSum = sumNums.reduce((acc, el) => acc + el, 1000);

console.log(newSum);

let total = 0;

for (let el of sumNums) {
    total += el;
}

console.log(total);

const tweets = [
    // 0
    { id: "000", likes: 5, tags: ["js", "nodejs"] }, // 5
    { id: "001", likes: 2, tags: ["html", "css"] }, // 7
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] }, // 24
    { id: "003", likes: 8, tags: ["css", "react"] }, // 32
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] }, // 32
  ];

const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes,0);
console.log(likes);

const countLikes = (arr) => arr.reduce((acc, el) => acc + el.likes, 0);

console.log(countLikes(tweets));

const getTags = (array) =>
  //             acc, element => {/////}, начальное значение acc
  array.reduce((acc, elem) => {
    acc.push(...elem.tags);
    //["js", "nodejs", "html", "css", "html", "js", "nodejs", "css", "react", "js", "nodejs", "react"]

    return acc;
  }, []);

const tags = getTags(tweets);
console.log("все теги объектов", tags);

const getTagStats = (acc, tag) => {
    if (!acc.hasOwnProperty(tag)) {
        acc[tag] = 0;
    }
    acc[tag] += 1;
    return acc;
};

const countTags = (tags) => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount);

const alpha = [1, 3, 5, 7, 4];

console.log("before sort:", alpha);
console.log("after sort", alpha.sort());

const clients = ["Jane", "Jack", "Cecile", "Arlo", "Susan"];
console.log("before sort:", clients);
console.log("after sort", clients.sort());