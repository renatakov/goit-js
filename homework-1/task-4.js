"use strict";

// Напиши скрипт проверки количества товаров на складе. Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).

// Сравни эти значения и по результатам выведи:

// __MCE_ITEM____MCE_ITEM__·       Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно товаров!".

// __MCE_ITEM____MCE_ITEM__·       В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".

// Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.

const total = 100;
const ordered = 130;

if (ordered > total) {
    console.log("На складе недостаточно товаров")
} else {
    console.log("Заказ оформлен, с вами свяжется менеджер")
}
