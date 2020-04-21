"use strict";

function myFunc() {
    console.log(this);
}
myFunc();

const renata = {
    name: "Renata",
    showThis() {
        console.log(this);
    },
    showName() {
        console.log(this.name);
    },
};

renata.showThis();
renata.showName();

function showThis() {
    console.log(console.log("this is showThis: ", this));
}
showThis();

const user = {
    name: "Рената",
};

user.newMethod = function() {
    console.log("добавление метода с ссылкой на контекст: ", this);
};
user.newMethod();

user.showContext = showThis;
user.showContext();

const hotel = {
    name: "Hilton",
    showThis() {
        console.log(this);
    },
};

const fn = function (callback) {
    callback();
};
fn(hotel.showThis);

const arrowThis1 = () => {
    console.log("this in arrowThis1: ", this);
};

arrowThis1();

const newUser = { name: "Alex" };
newUser.showContext = arrowThis1;

newUser.showContext();

const hotel2 = {
    name: "Hoiday Inn",
    showThis1() {
        const fn1 = () => {
            console.log(this);
        };

        fn1();
        console.log(this);
    },
};

hotel2.showThis1();

const hotel3 = {
    name: "Hotel777",
    showThis: function showThis() {
        const context = this;

        const fn2 = function fn2() {
            console.log(context);
        };

        fn2();
        console.log(this);
    },
};

hotel3.showThis();

const greet = function () {
    return `Welcome to ${this.name} !`
};

const hotel4 = { name: "Hotel777" };

console.log(greet.call(hotel4)); // "Wellcome to Resort Hotel!"
console.log(greet.apply(hotel4)); // "Wellcome to Resort Hotel!"

const greet1 = function (guest, stars) {
    return `${guest}, welcome to ${stars}-star ${this.name}`
};

const hotel5 = { name: "hh5" };
const motel = { name: "ff7" };

console.log(greet1.call(hotel5, "Mango", 5));
console.log(greet1.call(motel, "Poly", 8));

const greet2 = function (guest, stars) {
    return `${guest}, welcome to ${stars}-star ${this.name}`
};

const hotel6 = { name: "h5" };
const motel1 = { name: "f7" };

console.log(greet2.apply(hotel6, ["Mango", 5]));
console.log(greet2.apply(motel1, ["Poly", 8]));

const greet3 = function (guest) {
    return `${guest}, welcome to ${this.name}`
};

const hotel7 = { name: "Ромашка" };
const hotelGreeter = greet3.bind(hotel7, "Banana");
console.log(hotelGreeter());

const hotel8 ={
    name: "Rixos",
    showThis() {
        console.log(this);
    },
};

const fn3 = function (callback) {
    callback();
};

fn3(hotel8.showThis.bind(hotel8));
fn3(hotel.showThis);

