"use strict";

// FUNCTION EXPRESSION - ОБЪВЛЕНИЕ ФУНКЦИИ
//                       ПАРАМЕТРЫ
const  class6 = function(math, english, history) {
    return;
};
//     АРГУМЕНТЫ  
class6(8, 7, 6); // ЭТО ВЫЗОВ ФУНКЦИИ

const goToShop = function(milk, meat, eggs) {
    return;
};

goToShop("coconut", "chicken", "ostrich");
//                           ПАРАМЕТРЫ ПО УМОЛЧАНИЮ   
const buyProducts = function(milk = "cow", meat = "chicken", eggs = "quail") {
    return;
}

buyProducts(); // СЮДА ПОДСТАВЯТСЯ ПАРАМЕТРЫ ПО УМОЛЧАНИЮ

buyProducts("coconut", undefined, "ostrich"); // ПЕРВЫЙ ПАРАМЕТР МЫ ПЕРЕЗАПИСАЛИ, 
// ВТОРОЙ УКАЗАЛИ КАК UNDEFINED, ДЛЯ ТОГО, ЧТОБЫ ПОДСТАВИЛОСЬ ЗНАЧЕНИЕ ПО УМОЛЧАНИЮ И ИЗМЕНИТЬ ТРЕТИЙ ПАРАМЕТР

// ПОРЯДОК ВЫПОЛНЕНИЯ ФУНКЦИЙ
const firstFunc = function() {
    console.log("Начало выполнения функции firstFunc"); // 2.1
    secondFunc();
    console.log("Завершение выполнния функции firstFunc"); // 2.3
}; 

const secondFunc = function() {
    console.log("Тут выполняется функция secondFunc"); // 2.2
};

let name = "Renata";
console.log(name); // Выполнилась первая
firstFunc(); // Выполнилась 2-я 
name = "Renatochka";
console.log(name); // Выполнилась третья