// ============== 1 ===============================================

// Создай массив authors с именами авторов:

// William Shakespeare, Guy de Maupassant, Dante Alighieri, Mikhail Bulgakov, Albert Camus, Erich Maria Remarque

// С помощью методов массива, добавь в конец массива authors три элемента со значениями:

// Honore de Balzac, Miguel de Cervantes, Anton Chekhov

// а в начало массива, три элемента со значениями:

// Charles Dickens, Edgar Allan Poe, Gabriel Garcia Marquez

// Выведи обновленный массив в консоль. В комментарии после команды консоль укажи количество элементов измененного массива

const authors = ["William Shakespeare", "Guy de Maupassant", "Dante Alighieri", "Mikhail Bulgakov", "Albert Camus", "Erich Maria Remarque"];
authors.push("Honore de Balzac", "Miguel de Cervantes", "Anton Chekhov");
authors.unshift("Charles Dickens", "Edgar Allan Poe", "Gabriel Garcia Marquez");
console.log(authors);

// ============== 2 ===============================================

// Создай массив scores с элементами:

// 12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42

// с помощью методов массива shift() и pop(), удали первые два и последние три элемента

// Выведи результат в консоль

const score = [12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42];
score.shift();
score.shift();
score.pop();
score.pop();
score.pop();
console.log(score);

// ============== 3 ===============================================

// Создай массив results с элементами:

// 12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42

// с помощью метода splice(), удали первые два и последние три элемента, записав удаленные элементы

// в отдельные массивы removeFromStart и removeFromEnd

// Выведи в консоль все массивы

//                0,   1,  2,  3, 4, 5, 6, 7,   8,   9,   10,  11, 12
const results = [ 12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42];
const removeFromStart  = results.splice(0, 2);
const removeFromEnd = results.splice(8, 3);
console.log(results)

// ============== 4 ===============================================

// Создай массив partOfResults и скопируй в него элементы от 3 до 532 включительно

// из измененного массива results из задания 3 (т.е. все задание 3 и массив results должны быть 
//раскомментированы)

const partOfResults = [15, 17, 3, 4, 98, 67, 532, 611];
console.log(partOfResults.slice(2, 7));

// ============== 5 ===============================================

// Создай массив doubleResults и скопируй в него все элементы из измененного массива results из задания 3

