 "use strict";

// // Процедурный код

// // const test1 = 16;
// // // ============================
// // const test2 = 22;
// // // ============================
// // const test3 = 23;
// // // ============================
// // const score = (test1, test2, test3) => {
// //     return console.log(test1 + test2 + test3);
// // };

// // score(test1, test2, test3);

// OOП

// // const totalScore = {
// //     test1: 16,
// //     test2: 22,
// //     test3: 23,
// //     toGetSum() {
// //         this.test1 + this.test2 + this.test3
// //     },
// // };
// // console.log(totalScore.toGetSum());

// // const project = new Project ("manager","human", "all types");
// // console.log(project);

const Human = function (arms = null, legs = null, head = 1, body = 1) {
this.arms = arms;
this.legs = legs;
this.body = body;
this.head = head;
};
const Renata = new Human(2, 2);
console.log(Renata);

// const Sasha = new Human();
// console.log(Sasha);

// const Movie = function (name, rate, category) {
//     this.name = name;
//     this.rate = rate;
//     this.category = category;
//     this.countUser = 0;

//     this.greet = function (userName) {
//         console.log(`Hello ${userName}, welcome to ${this.name}`);
//     };

//     this.addUser = function (newUser) {
//         this.countUser += newUser;
//         console.log(this.countUser); 
//     };

//     this.removeUser = function (newUser) {
//         this.countUser -= newUser;
//         console.log(this.countUser); 
//     };
// };

// const movie = new Movie("hero", 9, 100, 1);
// console.log(movie);

// movie.greet("aleks");
// movie.addUser(40);
// movie.removeUser(30);

// const House = function (a, b) {
// this.colors = a;
// this.floors = b;
// this.windows = 20;
// this.doors = 2;
// this.wall = 2.8;
// };

// const myHouse = new House("red", 6);
// console.log(myHouse);

// myHouse.windows = 15;
// console.log(myHouse);

// const salesManager_1 = {
//     name: "olena",
//     sales: 5,
//     sell(product) {
//         this.sales += 1;
//         return `Manager ${this.name} sold ${product}`;
//     },
// };

// console.log(salesManager_1.sales);
// console.log(salesManager_1.sell("Club Card"));
// console.log(salesManager_1.sell("Training card"));
// console.log(salesManager_1.sales);


// const salesManager_2 = {
//     name: "kostya",
//     sales: 15,
//     sell(product) {
//         this.sales += 1;
//         return `Manager ${this.name} sold ${product}`;
//     },
// };

// console.log(salesManager_2.sales);
// console.log(salesManager_2.sell("Club Card"));
// console.log(salesManager_2.sell("Training card"));
// console.log(salesManager_2.sales);

// const Manager = function (name = "manager", sales = 0) {
//     this.name = name;
//     this.sales = sales;

//     this.sell = function (product) {
//         this.sales += 1;
//         return `Manager ${this.name} sold ${product}`;
//     };
// };

// const manager_1 = new Manager("Sasha");
// console.log(manager_1.name);
// console.log(manager_1.sales);

// console.log(manager_1.sell("Club card"));
// console.log(manager_1.sell("training card"));

// console.log(manager_1.sales);


// const manager_2 = new Manager("Sasha", 5);
// console.log(manager_2.name);
// console.log(manager_2.sales);

// console.log(manager_2.sell("Club card"));
// console.log(manager_2.sell("training card"));

// console.log(manager_2.sales);

// const teacher = { lang_1: "html" };
// const children = { lang_2: "css" };

const animal = { eats: true};
const cat = Object.create(animal);
console.log(cat);

cat.braks = true;
console.log(cat);

// Свойство F.prototype - объект с методом constructor, в него можно записывать
// свойства и методы, кот удут доступны по ссылке в __proto__
const Guest = function (name, room) {
    this.name = name; /// свойство, запишеться в тело
    this.room = room;
  };
  console.log("объект с методом constructor", Guest.prototype);
  
  const newGuest = new Guest("ALeks", 30);
  console.log("newGuest", newGuest); // новый экземпляр
  
  Guest.prototype.newMethod = function () {
    // добавляем метод в ф-к,
    // чтобы его могли использовать все экземпляры
    console.log(
      `метод функции-конструктора - name: ${this.name}, room: ${this.room}`
    );
  };
  
  newGuest.newMethod(); // применяем новый метод ф-к к потомку, он работает


// НАСЛЕДОВАНИЕ 
// true
const Hero1 = function (name, xp) {
  this.name = name;
  this.xp = xp;
};

Hero1.prototype.gainXp = function (amount) {
  console.log(`${this.name} gained ${amount} experience points`);
  this.xp += amount;
};

const Warrior1 = function (name, xp, weapon) {
  Hero1.call(this, name, xp); // в ES6 это не надо делать

  this.weapon = weapon;
};
// записыаем в прото ссылку на объект Hero1.prototype
Warrior1.prototype = Object.create(Hero1.prototype);
Warrior1.prototype.constructor = Warrior1;
// и в конструктор привязываем новый конструктор Warrior1

Warrior1.prototype.attack = function () {
  console.log(`${this.name} attacks with ${this.weapon}`);
};

const poly1 = new Warrior1("Poly", 200, "sword");
poly1.attack(); // Poly attacks with sword

poly1.gainXp();

// ОБЪЯВЛЕНИЕ ES6 класса

class Hero_1 {

  constructor(name, xp) {

    // constructor вместо function

    this.name = name;

    this.xp = xp;

  }

}



const newHero_1 = new Hero_1("Sonia", 1000);

console.log(newHero_1);



console.log(

  "сравнение прототипа экземпляра и объекта функции-конструктора: ",

  newHero_1.__proto__ === Hero_1.prototype

); // true



// МЕТОДЫ КЛАССА - альтернатива методов конструктора через prototype

class Hero_2 {

  constructor(name, xp) {

    this.name = name;

    this.xp = xp;

  }



  gainXp() {

    console.log(`Hero ${this.name}, xp ${this.xp}`);

  } // то же самое, что и Hero.prototype.gainXp в ES5

}



const newHero_2 = new Hero_2("Sonia", 1000);

console.log(newHero_2);



// СТАТИЧЕСКИЕ СВОЙСТВА И МЕТОДЫ - не идут в prototype

// не работает в браузерах, кроме Хрома (от 74 версии)

class Hero_3 {

  //доступны только конструктору

  static staticProp = "abc";

  static staticMethod() {}

  //доступны только конструктору

  constructor(name, xp) {

    this.name = name;

    this.xp = xp;

  }



  gainXp() {

    // этот метод запишется в свойство prototype

    console.log(`Hero ${this.name}, xp ${this.xp}`);

  } // то же самое, что и Hero.prototype.gainXp в ES5

}

console.log(Hero_3.staticProp); // abc

console.log(Hero_3.staticMethod()); // undefined



const newHero_3 = new Hero_3("Sonia", 1000);

console.log(newHero_3);



// ГЕТТЕРЫ И СЕТТЕРЫ - применяются для внешнего доступа к методам объекта

// имя одно для гета и сета, не должно совпадать со именами св-в экземляров

// применяются в разработке, когда имена свойств могут меняться, согласно изменений спецификации

// а имена геттеров и сеттеро останутся неизменными

class Hero_4 {

  constructor(name, xp) {

    this._name = name;

    this.xp = xp;

  }

  // changeName(name) { // обычный метод

  //   this._name = name;

  // }

  // getName() {  // обычный метод

  //   return console.log(this.name);

  // }



  // сеттер записывает

  set name(newName) {

    this._name = newName;

  }

  // геттер читает

  get name() {

    return console.log(this._name);

  }

}

const newHero_4 = new Hero_4("Sonia", 1000);

console.log(newHero_4);

// newHero_4.changeName("Alf"); // обычный метод класса

// newHero_4.getName(); // обычный метод класса

newHero_4.name = "Drago"; // сеттер

newHero_4.name; // геттер



// ПУБЛИЧНЫЕ СВОЙСТВА И МЕТОДЫ (public class fields)

class Hero_5 {

  constructor(name, xp) {

    this.name = name;

    this.xp = xp;

  }

  // на экземпляр, не в prototype, не нужно привязывать контекст

  publicProp = 5;

  publicMethod = (amount) => {

    this.xp += amount;

    console.log(this.xp);

  };

  // на экземпляр, не в prototype, не нужно привязывать контекст



  gainXp(amount) {

    this.xp += amount;

    console.log(this.xp);

  }

}

const newHero_5 = new Hero_5("Sonia", 1000);

console.log(newHero_5);



const fn = function (callback) {

  callback(100);

};

fn(newHero_5.publicMethod); // вызов публичного метода не нуждается в привязке контекста

fn(newHero_5.gainXp.bind(newHero_5));



// НАСЛЕДОВАНИЕ

class Heroes {

  constructor(name, xp) {

    this.name = name;

    this.xp = xp;

  }

  gainXp(amount) {

    this.xp += amount;

    console.log(`${this.name} gained ${amount} experience points`);

  }

}

class Warwar extends Heroes {

  // связка прототипов

  constructor(name, xp, weapon) {

    super(name, xp);

    this.weapon = weapon;

  }

  attack() {

    console.log(`${this.name} attacks with ${this.weapon}`);

    // вызов родительского метода

    // super.gainXp(10); === Heroes.prototype.gainXp.call(this)

  }

}

const warwar = new Warwar("John", 10, "axe");

console.log(warwar);



warwar.gainXp(1000);

console.log(warwar);



warwar.attack();



class Berserk extends Warwar {

  constructor(roar) {

    super();

    this.roar = roar;

  }

}

const ggg = new Berserk(1);

console.log(ggg);

// // Приватные и защищённые методы и свойства



// // Приватные и защищённые методы и свойства

// // Внутренний интерфейс – методы и свойства, доступные из других методов класса,

// // но не снаружи класса.



// // Внешний интерфейс – методы и свойства, доступные снаружи класса.



// class Auto {

//   fuel = 0; // публичное свойство

//   _oil = 1;

//   set oil(value) {

//       if (value < 0) throw new Error("отрицательное значение");

//       this._oil = value;

//   };

//   get oil() {

//       return this._oil;

//   }

//   constructor(speed) {

//       this.speed = speed; // публичное свойство

//       console.log(speed)

//   };

// };



// const mazda = new Auto(200);

// console.log(mazda);



// mazda.fuel = 20; // публичное свойство

// mazda.speed = 170; // публичное свойство

// // mazda.oil = -2;

// // console.log(mazda.oil); // Auto.set oil [as oil]



// // свойство только для чтения



// class Moto {

//   constructor(power) {

//       this._power = power;

//   };

//   get power() {

//       this._power;

//   };

// };



// const harley = new Moto(200);

// console.log(harley);