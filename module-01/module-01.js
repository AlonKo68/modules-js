/*                                           module m1                              */

/*                        вывод на консоль*/

// console.log('Всем привет!');  //Всем привет!

// function showMessage(message) {
//   return 'Всем привет!';
// }
// console.log(showMessage());  //Всем привет!

// function showMessage(message) {
//   return "Привет, я JavaScript!";
// }
// alert(showMessage());   // выведение на экран: Привет, я JavaScript!

// function showMessage(message) {
//     return message;
// }
// console.log(showMessage('Всем привет!'));  //Всем привет!

/*                         вызов функции */

// function showMessage() {
//     console.log('Всем привет!') ;
// }
// showMessage();

// function showMessage() {
//     console.log('Всем привет!') ;
// }
// showMessage();   // выведение на консоль дважды
// showMessage();

// function showMessage() {
//     let message = "Привет, я JavaScript!"; // локальная переменная
//     let newMessage = "Ha-Ha-Ha"

//     console.log(message);
//     console.log(newMessage);
// }

// showMessage();  // Привет, я JavaScript!

// let userName = 'Вася';
// function showMessage() {
//   let message = 'Привет, ' + userName;
//   console.log(message);
// }
// showMessage(); // Привет, Вася

//У функции есть доступ к внешним переменным
// let userName = 'Mary';
// function showMessage() {
//     return `Hello, ${userName}!`;
// }
// console.log(showMessage());

// Функция обладает полным доступом к внешним переменным и может изменять их значение.
// let userName = 'Mary';
// function showMessage() {
//     userName = "Anna";
//     userName = "Ann";
//     return `Hello, ${userName}!`;
// }
// console.log(showMessage());

// Если одноимённая переменная объявляется внутри функции, тогда она перекрывает внешнюю.
// let userName = 'Mary';
// function showMessage() {
//     let userName = "Anna";
//     return `Hello, ${userName}!`;
// }
// console.log(showMessage());

// Желательно сводить использование глобальных переменных к минимуму.
// В современном коде обычно мало или совсем нет глобальных переменных.
// Хотя они иногда полезны для хранения важнейших «общепроектовых» данных.

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFree = 50;
// function totalPrice() {
//     let sum = pricePerDroid * orderedQuantity + deliveryFree;
//     const message = `You ordered droids worth ${sum} credits`;
//     return message;
// }
// console.log(totalPrice());

// function totalPrice() {
//     const pricePerDroid = 800;
//     const orderedQuantity = 6;
//     const deliveryFree = 50;
//     let sum = pricePerDroid * orderedQuantity + deliveryFree;
//     const message = `You ordered droids worth ${sum} credits`;
//     return message;
// }
// console.log(totalPrice());

// Мы можем передать внутрь функции любую информацию, используя параметры.

// function totalPrice (pricePerDroid, orderedQuantity, deliveryFree) {
//     const sum = pricePerDroid * orderedQuantity + deliveryFree;
//     const message = `You ordered droids worth ${sum} credits`;
//     return message;
// }
// console.log(totalPrice(800, 6, 50));

// function totalPrice(pricePerDroid, orderedQuantity, deliveryFree) {
//     pricePerDroid = 1000;
//     const sum = pricePerDroid * orderedQuantity + deliveryFree;
//     const message = `You ordered droids worth ${sum} credits`;
//     return message;
// }
// console.log(totalPrice(800, 6, 50));

// function totalPrice(pricePerDroid, orderedQuantity, deliveryFree) {
//     pricePerDroid = 1000;
//     let sum = pricePerDroid * orderedQuantity + deliveryFree;
//     sum = pricePerDroid * orderedQuantity - deliveryFree
//     const message = `You ordered droids worth ${sum} credits`;
//     return message;
// }
// console.log(totalPrice(800, 6, 50));

// функция изменяет значение name, но это изменение не видно снаружи.
// Функция всегда получает только копию значения:
// function message(name, text) {
//     name = "*" + name + "*";
//     return name + ": " + text;
//
// }
// console.log(message("Mary", "hello!"));

// function message(name, text) {
//     name = "*" + name + "*";
//     return name + ": " + text;
//
// }
// console.log(message("Mary"));  // *Mary*: underfined

// Если мы хотим задать параметру text значение по умолчанию,
// мы должны указать его после =:
// function message(name, text = "hello!") {
//     name = "*" + name + "*";
//     return name + ": " + text;

// }
// console.log(message("Mary"));

// Альтернативные параметры по умолчанию

// явная проверка на undefined: Или с помощью оператора ||
// function showMessage(from, text) {
//   if (text === undefined) {
//     text = 'текст не добавлен';
//   }
//   return from + ": " + text;
// }
// console.log(showMessage("Mary"));

// function showMessage(from, text) {
//   // Если значение text ложно, тогда присвоить параметру text значение по умолчанию
//   // заметим, что при этом пустая строка text === "" будет также считаться отсутствующим значением
//     text = text || 'текст не добавлен';
//     return from + ": " + text;
// }
// console.log(showMessage("Mary"));

// Современные движки JavaScript поддерживают оператор нулевого слияния ??.
// Его использование будет лучшей практикой, в случае, если большинство ложных значений,
// таких как 0, следует расценивать как «нормальные».
// function showCount(count) {
//   // если count равен undefined или null, показать "неизвестно"
//     console.log(count ?? "неизвестно");
// }
// showCount(0); // 0
// showCount(null); // неизвестно
// showCount(); // неизвестно

// function sum(a, b) {
//   return a + b;
// }
// let result = sum(1, 2);
// console.log(result); // 3

// const add = function (a, b, c) {
//   console.log(a + b - c);
// }
// add(12, 10, 6);

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(6, 7));

// function min(a, b) {
//     return a < b ? a : b;
//     // if (a > b) {
//     //     return b;
//     // } else {
//     //     return a;
//     // }
// }
// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));

// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

// console.log( pow(2, 4 ));

// console.log(pow(3, 2));
// console.log(pow(3, 3));
// console.log(pow(1, 100));
// let value = true;
// // value = String(value);
// // const str = ""
// // console.log(typeof Boolean(value));
// console.log(`"${value}"`);
// console.log(value);

// let value = 25

// // value = 45.5;

// // value = "awserdtgyuhjiko";

// value = Number(value);
// console.log(value);

// const userName = "Poly";
// const message = "Welcome " + userName + "!";
// console.log(Number(message));

// let character = 'Hello';
// console.log(character);
// character = "World";
// let secondCharacter;
// secondCharacter = "Test";
// console.log(secondCharacter);

// const value = "25.a";
// console.log(typeof Number(value));  //number

// console.log(!!undefined);  //false
// console.log(typeof(!undefined));  //boolean

// function makeTransaction(quantity, pricePerDroid) {
//   const totalPrice = quantity * pricePerDroid;
//   return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }
// console.log(makeTransaction(5, 3000));
// console.log(makeTransaction(10, 500));
// console.log(makeTransaction(4, 700));

// makeTransaction(3, 3000);
// console.log(makeTransaction);

// const makeTransaction = (quantity, pricePerDroid) => {
//   return `You ordered ${quantity} droids worth ${
//     quantity * pricePerDroid
//   } credits!`;
// };
// console.log(makeTransaction(5, 3000));
// console.log(makeTransaction(10, 500));
// console.log(makeTransaction(4, 700));

/*                              
                                            module M1 mentor     */

/*1.
Виконавши математичні операції та застосувавши шаблоні рядки виведи в консоль кількість та
загальну вартість за кожен продукт. */

// const apple = "🍎";
// const appleQuantity = 8;
// const applePrice = 34;
// const appleMessage = `${apple} total cost ${appleQuantity * applePrice}`;
// console.log(appleMessage);

// const cherry = "🍒";
// const cherryQuantity = 3;
// const cherryPrice = 72;
// const cherryMessage = `${cherry} total cost ${cherryQuantity * cherryPrice}`;
// console.log(cherryMessage);

// const apple = "🍎";
// const appleQuantity = 8;
// const applePrice = 34;
// const cherry = "🍒";
// const cherryQuantity = 3;
// const cherryPrice = 72;
// function getTotalCost(productName, Quantity, Price) {
//     return `${productName} total cost ${Quantity * Price}`;
// }
// console.log(getTotalCost(apple, appleQuantity, applePrice));
// console.log(getTotalCost(cherry, cherryQuantity, cherryPrice));

/*2.
Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі 
годин та хвилинHH:MM.  */

// function getTime(minutes) {
//   const hours = Math.floor(minutes / 60);
//   //   console.log(hours);
//   const remainingMinutes = minutes % 60;
//   //   console.log(remainingMinutes);
//   return `${hours.toString().padStart(2, '0')} : ${remainingMinutes
//     .toString()
//     .padStart(2, '0')}`;
// }
// console.log(getTime(70)); //01:10
// console.log(getTime(450)); //07:30
// console.log(getTime(1441)); //24:01

// // const userName = 'Harry';
// // const message = 'Hello my name is ${userName}';
// // console.log(message);

// const delivery = 25;
// const price = 190;
// const message = `Total purchase, price ${delivery + price}`;
// console.log(message);

// let character = 'Hello';
// character = String(character);
// console.log(character);

// function foo() {
//     const value = 5;
// }
// foo();
// console.log(value);  //Error

// const totalPrice = 100;
// const delivery = undefined;
// console.log(Number.isNaN(delivery));  //false
// console.log(isNaN(delivery));  //true
// const result = totalPrice + delivery;
// console.log(`Total sum ${result}`);  //Total sum NaN
// if (isNaN(delivery)) {
//     console.log('not delivery');  //not delivery
// }

// Task - 1
// Сума цифр числа
// Напишіть функцію sumOfDigits, яка приймає одне ціле число
// (гарантовано трьох значне) як аргумент.
// Функція повинна повертати суму всіх цифр у числі.

// function sumOfDigits(value) {
//     const toString = value.toString();
//     console.log(value);
//     return Number(toString[0]) + Number(toString[1]) + Number(toString[2]);
//  }
// console.log(sumOfDigits(567));  // 5+6+7=18

// Task - 2

// Напишіть функцію getLastDigit, яка приймає ціле число
//  як аргумент і повертає останню цифру цього числа.
// Вам дозволяється використовувати тільки математичні операції.

// function getLastDigit(value) {
//     // const num = Math.abs(value % 10);
//     // console.log(num);
//     // return num;
//     return Math.abs(value % 10);
// //     // const toString = value.toString().padStart(4, "0");
// //     // return toString[3];
// }
// console.log(getLastDigit(123)); // 3
// console.log(getLastDigit(-456)); // 6
// console.log(getLastDigit(7890)); // 0

// Task - 3
// Напишіть функцію qwerty, яка приймає температуру у градусах
//  Цельсія як аргумент і повертає температуру у градусах
// Фаренгейта.Формула для переведення:
// F = C * 9/5 + 32.

// function qwerty(celsius) {
//     return celsius * 9 / 5 + 32;
// }
// console.log(qwerty(0)); // 32
// console.log(qwerty(100)); // 212
// console.log(qwerty(-40)); // -40

// / Task - 4
// Напишіть функцію convertMilesToKilometers,
// яка приймає відстань у милях як аргумент і
// повертає відстань у кілометрах.
// 1миля ~ 1.60934km.

// function convertMilesToKilometers(miles) {
//     const answer = prompt(`${miles}miles in km ?`);
//     console.log(Number(answer));
//     // const answer = Number(prompt(`${miles}miles in km ?`));
//     // console.log(answer);
//     return Number(answer * 1.60934.toFixed(2));
// }
// console.log(convertMilesToKilometers());
// console.log(result);

// function convertMilesToKilometers(miles) {
//     const answer = Number(prompt(`${miles} miles in km ?`));
//     const DIFERENCE_IN_KILOMETRES = 1.60934;
//     const kilometres = Math.floor(miles * DIFERENCE_IN_KILOMETRES);
//     console.log(kilometres);
//     return answer === kilometres;
// }
// console.log(convertMilesToKilometers(5));

// let userName = "Maria";
// const lengthName = userName.length;
// console.log(lengthName);  //5
// const message = `"Username ${userName} is ${userName.length} characters long"`;
// console.log(message);  //Usermame Maria is 5 characters long);
// console.log(userName[userName.length - 2]);  //i
// console.log(userName[0].toLowerCase()); //m
// console.log(userName[0]); //M

// const courseTopic = "JS essentials";
// console.log(courseTopic[0]);  //J
// console.log(courseTopic[courseTopic.length - 2]);  //l

// let age = "17";
// age = Number(age);
// console.log(typeof age);  //number
// const adultAge = age >= 18;
// console.log(adultAge);  //false

// const value1 = 17;
// const value2 = 46;
// const value3 = 87;
// const value4 = 100;
// console.log(Math.max(value1, value2, value3, value4));  //10

let value;
value = 0.1 + 0.2;
console.log(value.toFixed(2)); //0.30
console.log(value.toFixed(1)); //0.3

const add = function (val1, val2) {
  console.log('val1', val1); //val1 10
};
add(10, 20);
