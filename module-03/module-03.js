//                         Module 03-01

//        Що таке масив?
//            array.length

// const planets = ['Earth', 'Mars', 'Venus'];
// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(planets.length); // 3
// console.log(numbers.length); //6

/* 1.
Функція getOrderQuantity(order) приймає один параметр order - масив рядків, які описують продукти 
в замовленні клієнта. Доповни код функції таким чином, щоб вона повертала число, що дорівнює 
кількості елементів масиву.  */

// function getOrderQuantity(order) {
//   return order.length;
// }
// console.log(getOrderQuantity(['apple', 'peach', 'pear', 'banana'])); //4
// console.log(getOrderQuantity(['apple', 'banana'])); //2
// console.log(getOrderQuantity(['apple', 'banana', 'pear'])); //3
// console.log(getOrderQuantity([])); //0

//                    arrayName[index]

// const planets = ['Earth', 'Mars', 'Venus'];
// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(planets[0]); //Earth start

// console.log(planets[planets.length - 1]); //Venus end
// const lastPlanetsIndex = planets.length - 1;
// console.log(planets[lastPlanetsIndex]); //Venus  end

// console.log(numbers[0]); //1
// console.log(numbers[numbers.length - 1]); //6

// console.log(planets[planets.length]); //undefined

/*2.
Функція getLastElementMeta(array) приймає один параметр array - масив довільних значень. Доповни 
код функції таким чином, щоб вона повертала новий масив з двох елементів:
перший елемент - це індекс останнього елементу у масиві array
другий елемент - це значення останнього елементу у масиві array */

// function getLastElementMeta(array) {
//   //   return `${array.length - 1}, "${array[array.length - 1]}"`;
//   return [array.length - 1, array[array.length - 1]];
// }
// console.log(getLastElementMeta(['apple', 'peach', 'pear', 'banana']));  //[3, 'banana']
// console.log(getLastElementMeta(['apple', 'peach', 'pear']));  //[2, 'pear']
// console.log(getLastElementMeta(['apple', 'peach']));
// console.log(getLastElementMeta(['apple']));

// function getLastElementMeta(array) {
//   //   const lastElementIndex = array.length - 1;
//   //   return `${lastElementIndex}, "${array[lastElementIndex]}"`;
//   return `${array.length - 1}, ${array[array.length - 1]}`;
// }
// console.log(getLastElementMeta(['apple', 'peach', 'pear', 'banana'])); //3, banana
// console.log(getLastElementMeta(['apple', 'peach', 'pear']));  //2, pear
// console.log(getLastElementMeta(['apple', 'peach']));  //1, peach
// console.log(getLastElementMeta(['apple']));  //0, apple

/* 3.
Функція getExtremeElements(array) приймає один параметр array - масив елементів довільної довжини. 
Доповни код функції таким чином, щоб вона повертала масив з двох елементів - першого і останнього 
елементів параметра array.  */

// function getExtremeElements(array) {
//   return [array[0], array[array.length - 1]];
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));  //[1, 5]
// console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));  //['Earth', 'Venus']
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));  //['apple', 'banana']

//               Присвоєння

// let a = 5;
// let b = a;
// a = 10;
// console.log(a); // 10
// console.log(b); // 5

// const a = ['Mango', 'Poly'];
// const b = a;
// a[1] = 'Jacob';
// console.log(a); // ["Mango", 'Jacob']
// console.log(b); // ["Mango", 'Jacob']

// const a = ['Mango', 'Poly'];
// const b = a;
// a[2] = 'Jacob';
// console.log(a); // ["Mango", "Poly", 'Jacob']
// console.log(b); // ["Mango", "Poly", 'Jacob']
// console.log(a === b); //true
// console.log(a !== b);  //false

//      but

// const a = ['Mango', 'Poly'];
// const b = ['Mango', 'Poly'];
// console.log(a === b); //false

//        приведення типів до string, number, boolean

// const array = [1, true, 'Poly'];
// console.log(typeof array); //object
// console.log(typeof [array[0]]); //object
// console.log(array); //[1, true, 'Poly']
// console.log(String(array)); // 1,true,Poly
// console.log(Number(array)); //NaN
// console.log(Boolean(array)); //true

// console.log(array + '5'); // 1,true,Poly5
// console.log(String([array])); // 1,true,Poly
// console.log(String([array[0]])); //1
// console.log(typeof String(array[0])); string
// console.log(String([array[1]])); //true

// const array = [1, 3, 5, 7, 9];
// console.log(typeof array); //object
// console.log(Number([array])); //NaN
// console.log(typeof Number(array)); //number
// console.log(typeof array[0]); //number
// console.log(array[0]); //1

// const strArray = String([array]);
// console.log(typeof strArray); //string
// console.log(typeof Number(strArray)); //number

// const emptyArray = [];
// const nonEmptyArray = [1, 2, 3];
// console.log(Boolean(emptyArray)); // true
// console.log(Boolean(emptyArray[1])); //false
// console.log(Boolean(nonEmptyArray)); // true
// if (emptyArray) {
//   console.log('if is in progress');  //
// } else {
//   console.log('else is not performed');
// }

// const emptyArray = [];
// const nonEmptyArray = [1, 2, 3];
// if(nonEmptyArray) {
// 	console.log("if is in progress")  //
// } else {
// 	console.log("else is not performed")
// }

// const array = [false];
// console.log(array); //[false]
// const result = array ? 'A' : 'B';
// console.log(result); //A

//                               Методи масиву

//            Метод join() - дозволяє об'єднати елементи масиву в рядок.
//            Метод split() - перетв. рядок на мвсив.

// const words = ['JavaScript', 'is', 'amazing'];
// console.log(words.join('')); // 'JavaScriptisamazing'
// console.log(words.join(' ')); // 'JavaScript is amazing'
// console.log(words.join('-')); // 'JavaScript-is-amazing'
// console.log(words.join(' : ')); // 'JavaScript : is : amazing'

// function transformString(string) {
//   console.log(string); //'user_age'
//   const words = string.split('_');  //перетв. рядок на мвсив
//   console.log(words);  // ['user, 'age']
//   return words.join('-');  //об'єднує
// }
// console.log(transformString('user_age')); // "user-age"
// console.log(transformString('price_per_droid')); // "price-per-droid"

// function transformString(string) {
//   return string.split('_').join('-');
// }
// console.log(transformString('price_per_droid')); // "price-per-droid"

// let str = 'ab--cd--ef';
// // let arr = str.split('--');
// // console.log(arr); //['ab', 'cd', 'ef']

// console.log(str.split('--'));  //['ab', 'cd', 'ef']

/*4
Функція getLength(array) очікує один параметр array - масив довільних значень.
Доповни код функції так, щоб вона перетворювала масив у рядок, без роздільників,
і повертала кількість символів в отриманому рядку.  */

// function getLength(array) {
//   return array.join('').length;
// }
// console.log(getLength(['Mango', 'hurries', 'to', 'the', 'train'])); // 22
// console.log(getLength(['M', 'a', 'n', 'g', 'o'])); // 5
// console.log(getLength(['top', 'picks', 'for', 'you'])); // 14

/*5
Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування,
залежно від кількості слів і ціни за слово.
Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає
першим параметром рядок, що складається зі слів, розділених лише пробілами(параметр message)
та другим параметром - число, що містить ціну гравірування за одне слово(параметр pricePerWord).
Доповни тіло функції так, щоб вона повертала загальну вартість гравірування усіх слів в рядку. */

// function calculateEngravingPrice(message, pricePerWord) {
// //   message = message.split(' ').length;
// //   return message * pricePerWord;
//   return message.split(' ').length * pricePerWord;
// }
// console.log(calculateEngravingPrice('JavaScript is in my blood', 10)); //50
// console.log(calculateEngravingPrice('JavaScript is in my blood', 20)); //100
// console.log(calculateEngravingPrice('Web-development is creative work', 40)); //160
// console.log(calculateEngravingPrice('Web-development is creative work', 20)); //80

// function calculateEngravingPrice(message, pricePerLetter) {
//   message = message.split(' ').join('');
//   return message.split('').length * pricePerLetter;
// }
// console.log(calculateEngravingPrice('JavaScript is in my blood', 4)); //84

//                 Метод slice(StartIdx, EndIdx)

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'];
// console.log(planets.slice());  //['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn']
// console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
// console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
// console.log(planets.slice(1, 2)); // ['Mars']

/*6.
Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.
firstTwoEls - масив із перших двох елементів, nonExtremeEls - масив з усіх елементів, крім першого 
та останнього, lastThreeEls - масив із трьох останніх елементів  */

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 2);
// console.log(firstTwoEls); //['apple', 'plum']
// const nonExtremeEls = fruits.slice(1, length - 1);
// console.log(nonExtremeEls); //['plum', 'pear', 'orange']
// const lastThreeEls = fruits.slice(-3);  //три остатніх ел.
// console.log(lastThreeEls);  //['pear', 'orange', 'banana']

//                    Метод concat() - дозволяє об'єднати 2 ш більш масивів в масив.

// const firstArray = ['Mercury', 'Venus'];
// const secondArray = ['Mars', 'Jupiter'];
// const thirdArray = ['Saturn', 'Neptune'];
// console.log(secondArray.concat(firstArray, thirdArray));
//['Mars', 'Jupiter', 'Mercury', 'Venus', 'Saturn', 'Neptune']

/*7.
Оголоси змінну allClients та доповни код таким чином, щоб її значенням було посиланняна масив, що 
складається з усіх елементів масивів oldClients і newClients. Спочатку мають іти елементи з масива 
oldClients, а потім з newClients.  */

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients);
// console.log(allClients);

//               Метод indexOf() - indexEl

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.indexOf('Ajax')); //1
// console.log(clients.indexOf('Poly')); //2
// console.log(clients.indexOf('Jacob'));  //-1

/* 8.
Функція getSlice(array, value) приймає два параметра:
array - масив довільних елементів, value - значення елемента масиву для пошуку
Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value
у масиві array і повертала: порожній масив, якщо в array немає елемента зі значенням value; i 
підмасив, що починається з початку array і до елемента зі значенням value включно, якщо
такий елемент є в array */

// function getSlice(array, value) {
//   if (value === -1) {
//     return [];
//   } else {
//     return array.slice(0, array.indexOf(value) + 1);
//     // return array.slice(0, array.indexOf(value) + 1);
//   }
// }
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Poly')); //["Mango", "Poly"]
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Ajax')); //["Mango", "Poly", "Ajax"]
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Mango')); //["Mango"]
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Jacob')); //[]
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Casey')); //[]

//                   Метод push() - додавання одного фбо більш ел. в кінець масиву

// const planets = ['Earth', 'Mars', 'Venus'];
// planets.push('Jupiter');
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter']

// const tags = [];
// for (let i = 0; i < 3; i += 1) {
//   console.log(i); // 0  //1  //2
//   tags.push(`tag-${i}`);
// }
// console.log(tags); // ["tag-0", "tag-1", "tag-2"]

/*9.
Функція createArrayOfNumbers(min, max) приймає два параметра:
min - ціле число, з якого починаються обчислення
max - ціле число, до якого включно триватимуть обчислення
Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх 
цілих чисел від значення min до max включно.  */

// function createArrayOfNumbers(min, max) {
//   const arrNumbers = [];
//   for (let i = min; i <= max; i += 1) {
//     arrNumbers.push(i);
//   }
//   return arrNumbers;
// }
// console.log(createArrayOfNumbers(1, 3)); //[1, 2, 3]
// console.log(createArrayOfNumbers(14, 17)); //[14, 15, 16, 17]
// console.log(createArrayOfNumbers(29, 34)); //[29, 30, 31, 32, 33, 34]
// console.log(createArrayOfNumbers()); //повертає правильний масив

//                       Ітерація по масиву

// const planets = ['Earth', 'Mars', 'Venus'];
// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

// const planets = ['Earth', 'Mars', 'Venus'];
// for (const planet of planets) {
//   console.log(planet);
// }

/*10
Функція calculateTotalPrice(order) приймає один параметр order - масив чисел.
Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.  */

// function calculateTotalPrice(order) {
//   let sum = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     sum += order[i];
//   }
//   return sum;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4])); //138
// console.log(calculateTotalPrice([164, 48, 291])); //503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //1116
// console.log(calculateTotalPrice([])); //0

// function calculateTotalPrice(orders) {
//   let sum = 0;
//   for (const order of orders) {
//     sum += order;
//   }
//   return sum;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4])); //138
// console.log(calculateTotalPrice([]));  //0

/*11. - парні числа
Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами. Доповни код 
функції так, щоб вона повертала масив усіх парних чисел від start до end. Якщо жодного парного числа 
немає, то масив має бути пустим.Парним вважається число, яке ділиться на 2 без остачі(10 % 2 === 0). 
Використовуй цикл for. */

// function getEvenNumbers(start, end) {
//   const arrNumbers = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       arrNumbers.push(i);
//     }
//   }
//   return arrNumbers;
// }
// console.log(getEvenNumbers(2, 5)); //[2, 4]
// console.log(getEvenNumbers(3, 11)); //[4, 6, 8, 10]
// console.log(getEvenNumbers(6, 12)); //[6, 8, 10, 12]
// console.log(getEvenNumbers(8, 8)); //[8]
// console.log(getEvenNumbers(7, 7)); //[]
// console.log(getEvenNumbers()); //[]

//          Метод includes()  -  true/false
//         array.includes(el);

// const fruits = ['apple', 'banana', 'orange'];
// if (fruits.includes('banana')) {
//   console.log('The array has an element banana'); //
// } else {
//   console.log('Array does not contain banana element');
// }

/* 12.
Функція checkStorage(storage, item) приймає два параметри: storage - масив рядків, що описує 
доступні товари на складі, item - рядок з назвою товара, наявність якого потрібно перевірити.
Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і 
повертала: рядок "<item> is available to order!", де item - це назва товара, якщо товар було 
знайдено рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві.  Зроби так, щоб 
пошук за ім'ям товару був незалежний від регістру, тобто наприклад "plum" і "pLuM" мають бути 
знайдені у масиві["apple", "plum", "pear"].  */

// function checkStorage(storage, item) {
//   item = item.toLowerCase();
//   if (storage.includes(item)) {
//     return `"${item} is available to order!"`;
//   } else {
//     return `"Sorry! We are out of stock!"`;
//   }
//   //   const lowerCaseItem = item.toLowerCase();
//   //     if (storage.includes(lowerCaseItem)) {
//   //       return `"${lowerCaseItem} is available to order!"`;
//   //     } else {
//   //         return`"Sorry! We are out of stock!"`;
//   //   }
// }
// console.log(checkStorage(['apple', 'plum', 'pear'], 'plum')); //"plum is available to order!"
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pLuM')); //"plum is available to order!"
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pear')); //"pear is available to order!"
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pEAr')); //"pear is available to order!"
// console.log(checkStorage(['apple', 'plum', 'pear'], 'orange')); //"Sorry! We are out of stock!"
// console.log(checkStorage(['apple', 'plum', 'pear'], 'carrot')); //"Sorry! We are out of stock!"

/* 13. - спільні ел.
Функція getCommonElements(array1, array2), приймає два масиви довільної довжини в якості параметрів. 
Доповни код функції: Створи порожній масив для зберігання нового масиву. Використай цикл for для 
ітерації кожного елемента у array1. У тілі циклу перевір, чи поточний елемент існує у array2 за 
допомогою методу includes. Якщо він існує, то додай елемент до нового масиву. Поверни наповнений 
масив спільних елементів як результат роботи функції.  */

// function getCommonElements(array1, array2) {
//   const arrNumbers = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     // console.log(array1[i]);
//     if (array2.includes(array1[i])) {
//       arrNumbers.push(array1[i]);
//     }
//   }
//   return arrNumbers;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4])); //[2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //[1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //[12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); //[10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); //[]
// console.log(getCommonElements([])); //[]

// function getCommonElements(array1, array2) {
//   const arrNumbers = [];
//   for (const array of array1) {
//     // console.log(array1[i]);
//     if (array2.includes(array)) {
//       arrNumbers.push(array);
//     }
//   }
//   return arrNumbers;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4])); //[2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //[1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //[12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); //[10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); //[]
// console.log(getCommonElements([])); //[]

//                 cykl for ... of

// const planets = ['Earth', 'Mars', 'Venus'];
// for (const planet of planets) {
//   console.log(planet);
// }

/* 14. 
Доповни код функції calculateTotalPrice(order) так, щоб вона повертала загальну суму чисел в масиві 
order. Використай цикл for...of для перебору масиву. */

// function calculateTotalPrice(order) {
//   let sum = 0;
//   for (let num of order) {
//     sum += num;
//   }
//   return sum;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4])); //138
// console.log(calculateTotalPrice([164, 48, 291])); //503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //1116
// console.log(calculateTotalPrice([])); //0

//          Псевдомасив arguments

// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }
// sum(2, 5);

/*приклад використання arguments у функції, яка повертає результат множення будь-якої кількості 
аргументів.  */

// function multiply() {
//   let total = 1;
//   for (const arg of arguments) {
//     total *= arg;
//   }
//   return total;
// }
// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

//               метод Array.from()

// function foo() {
//   // У змінній args буде повноцінний масив з усіх аргументів
//   const args = Array.from(arguments);
//   return args.join('-');
// }
// foo(1, 2, 3); // "1-2-3"
// console.log(foo(1, 2, 3));

/* 15.
Функція createReversedArray() може приймати довільну кількість аргументів. Доповни код функції так, 
щоб вона повертала масив усіх аргументів, але в масиві вони повинні йти у зворотному порядку. Тобто, 
при виклику createReversedArray(1, 2, 3), функція має повернути масив [3, 2, 1]. Використовуй цикл 
або метод масиву toReversed()/reverse(), який застосовується до масиву і результатом роботи повертає новий 
масив з елементами у зворотньому порядку.  */

// function createReversedArray() {
//   const args = Array.from(arguments);
//   //   return args.reverse();
//   return args.toReversed();
// }
// console.log(createReversedArray(12, 85, 37, 4)); //[4, 37, 85, 12]
// console.log(createReversedArray(164, 48, 291)); //[291, 48, 164]
// console.log(createReversedArray(412, 371, 94, 63, 176)); //[176, 63, 94, 371, 412]
// console.log(createReversedArray()); //[]

// function createReversedArray() {
//   const args = Array.from(arguments);
//   const newArray = [];
//   for (let i = args.length - 1; i >= 0; i -= 1) {
//     newArray.push(args[i]);
//   }
//   return newArray;
// }
// console.log(createReversedArray(12, 85, 37, 4)); //[4, 37, 85, 12]
// console.log(createReversedArray(164, 48, 291)); //[291, 48, 164]
// console.log(createReversedArray(412, 371, 94, 63, 176)); //[176, 63, 94, 371, 412]
// console.log(createReversedArray()); //[]

//      Параметри за замовчуванням

// function greet(username = 'Guest') {
//   console.log(`Hello, ${username}!`);
// }
// greet('Jacob'); // "Hello, Jacob!"
// greet(); // "Hello, Guest!"

// function count(from, to, step = 1) {
//   console.log(`from: ${from}, to: ${to}, step: ${step}`);

//   for (let i = from; i <= to; i += step) {
//     // ...
//   }
// }
// count(1, 15, 4); // "from: 1, to: 15, step: 4"
// count(1, 15); // "from: 1, to: 15, step: 1"

/* 16.
Функція calculateTax(amount, taxRate) оголошує два параметри: amount - число, сума від якої потрібно 
обчислити податок. Обов'язковий параметр. taxRate - число, податкова ставка. Необов'язковий параметр. 
За замовчуванням його значення має бути 0.2. Доповни код функції так, щоб вона повертала суму 
податку - результат множення суми на податкову ставку. */

// function calculateTax(amount, taxRate = 0.2) {
//   return amount * taxRate;
// }
// console.log(calculateTax(100, 0.1)); //10
// console.log(calculateTax(200, 0.1)); //20
// console.log(calculateTax(100, 0.2)); //20
// console.log(calculateTax(200, 0.2)); //40
// console.log(calculateTax(100, 0.3)); //30
// console.log(calculateTax(200, 0.3)); //60
// console.log(calculateTax(100)); //20
// console.log(calculateTax(200)); //40

// var arr1 = [1, 2, 3, 4, 5, 8, 11, 16, 19];
// var arr2 = [90, 54, 34, 12, 1, 2, 3, 4, 5, 7, 82];

// function intersection(arr1, arr2) {
//     if (arr1.length <= arr2.length) {
//         var result = [];

//         for (var i = 0; i < arr1.length; ++i)
//             for (var j = 0; j < arr2.length; ++j)
//                 if (arr1[i] == arr2[j]) {
//                     result.push(arr1[i]);
//                     break;
//                 }

//         return result;
//     }
//     return intersection(arr2, arr1);
// }

// console.info(intersection(arr1, arr2));

/*                                 
                                    Practice M3-1             */

// console.log([8, 5, 3, 9, 3].indexOf(3));  // 2
// const str = "hello world";
// console.log(str.indexOf('w'));  //6
// console.log("hello world".indexOf("d"));   //10
// console.log("hello world".indexOf("o", 6));   //7
// console.log([7, 3, 8, 9, 2].slice(3));  // [9, 2]
// console.log([2, 4, 6].concat([1, 3], [5]));  // [2, 4, 6, 1, 3, 5]
// console.log([3, 5, 12, 7, 4].includes(8));  // false
// console.log([3, 5, 12, 7, 4].includes(5));  // true

//                  Що таке масив
// const array = ['Hello world', null, true, 15];
// console.log(array); //['Hello world', null, true, 15]

// const array = ['Hello world', , , 15];
// console.log(array); //['Hello world', empty x 2, 15]

// const array = ['Hello world', null, true, 15];
// console.log(typeof array); //object

// //метод Array.isArray()
// console.log(Array.isArray(array)); //true
// console.log(Array.isArray(['hello world'])); //true
// console.log(Array.isArray('Hello world')); //false

// console.log(array[0]); //'Hello world' - FirstEl
// console.log(array[array.length - 1]);  //15  - lastEl

//                      Цикл for

// const array = ['Hello world', null, true, 15];
// for (let i = 0; i < array.length; i += 1) {
//   console.log(array[i]);
// }

// const str = 'Hello world';
// for (let i = 0; i < str.length; i += 1) {
//   //   const item = str[i];
//   //   console.log(item);
//   console.log(str[i]);
// }

//                      Цикл for of

// const array = ['Hello world', null, true, 15];
// for (const item of array) {
//   console.log(item);
// }

// let strA = "Hello world";
// let strB = strA;
// console.log(strB === strA);  //true
// strA = "hello";
// console.log(strA === strB);  //false
// for (const item of strA){
//     console.log(item);  //h  //e  2//l  //o
// }

//                  Присвоєння за посиланням та за значенням

// Примітивні типи даних - Присвоєння за значенням

// let a = 1; //1
// let b = a; //1
// let c = b; //1
// a += 1;
// console.log('a', a); //2
// console.log('b', b); //1
// console.log('c', c); //1
// console.log(a === b); //false
// console.log(b === c); //true

// Складні типи даних - Присвоєння за посиланням

// const a = [1, 2, 3];
// let b = a;
// a[0] = 55;
// console.log(a);  // [55, 1, 2]
// console.log(b);  // [55, 1, 2]
// console.log(a === b);  //true

// Методи для роботи з масивом

// const a = [1, 2, 3];
// // a = [4, 5, 6];
// // console.log(a); //Error
// a[0] = 55;
// console.log(a); //[55, 2, 3]

// let a = [1, 2, 3, 'hello'];
// a = [4, 5, 6];
// console.log(a); //[4, 5, 6]
// a[0] = 55;
// console.log(a); //[55, 5, 6]

// push  &  pop
// push() - додає ел-т або декілька в кінець масиву
// const a = [1, 2, 3, 'hello'];
// console.log(a.push(5));  //5 - ост. ел-т якій
// a.push(5);
// console.log(a);  //1, 2, 3, 'hello', 5, 5]
// a.push(6, 'world');
// console.log(a);
// a.push(4);   //[1, 2, 3, 'hello', 5, 4]
// a.push([99, 4, 5, 6]);
// console.log(a)   //[1, 2, 3, 'hello', 5, 4, [99, 4, 5, 6]] & [1, 2, 3, 'hello', 5, 4, Array(4)]

//pop() - видаляє тільки ост. ел-т в масиві
// const a = [1, 2, 3, 'hello'];
// a.push([99, 4, 5, 6]);
// console.log(a);  //[1, 2, 3, 'hello', [99, 4, 5, 6]]
// a.pop();
// console.log(a);  //[1, 2, 3, 'hello']
// console.log(a.pop());  //hello
// console.log(a.pop(length-1));  //3
// console.log(a);  //[1, 2]
// console.log(a.push());  //2

//unshift & shift
// unshift - додає ел-т або декілька на початок масиву
// const a = [1, 2, 3, 'hello'];
// console.log(a.unshift(0)); //5
// console.log(a);  //[0, 1, 2, 3, 'hello']
// a.unshift(7);
// console.log(a);   //[7, 0, 1, 2, 3, 'hello']

// shift - видаляє тільки перший. ел-т в масиві
// const a = [1, 2, 3, 'hello'];
// a.shift();  //[2, 3, "hello"]
// console.log(a.shift()); //2
// console.log(a); //[3, "hello"]

// slice - робить копію масива(з якого по якій не вкл. якій)
// let a = [1, 2, 3, 'hello'];
// console.log(a);  //[1, 2, 3, 'hello']
// console.log(a.slice(0, 2));  //[1, 2]
// a.slice();
// console.log(a);   //[1, 2, 3, 'hello']
// console.log(a.slice(1, 3));  //[2, 3]
// console.log(a.slice(0) === a);  //false
// console.log(a);   //[1, 2, 3, 'hello']

// let b = "Hello world";
// console.log(b);  //Hello world
// b = b.slice(1, length - 2);
// console.log(b);   //ello wor
// console.log(b.slice(1, length - 1));  //llo wo
// console.log(b.slice(0, length-3));

// splice
// const a = [1, 2, 3, "hello"];
// console.log(a.splice(0, 1));
// console.log(a);  //[2, 3, "hello"]
// a.unshift(5, 6);
// console.log(a);  //[5, 6, 2, 3, "hello"]
// a.splice(2, 2, 'https://javascript109.slack.com/team/U07CRUM3L87');
// console.log(a);  //[5, 6, 'https://javascript109.slack.com/team/U07CRUM3L87', "hello"]
// a.splice(2, 1);  //'https://javascript109.slack.com/team/U07CRUM3L87'
// console.log(a);  //[5, 6, "hello"]
// a.splice(2, 1, "JS", "CSS");
// console.log(a);  //[5, 6, "JS", "CSS"]
// console.log(a.length);  //4
// console.log(a.splice(0, a.length, 4, 5, 6, 7));
// console.log(a);    //[4, 5, 6, 7];

// includes

// const a = [1, 2, 3, "hello"];
// console.log(a.includes(99));  //false
// console.log(a.includes("hello", 2));  //true
// console.log(a.includes(2, 3));  //false

// indexOf

// const a = [1, 2, 3, "hello"];
// console.log(a.indexOf(3));  //2
// console.log(a.indexOf("hello", 2));  //3
// console.log(a.indexOf(99));  //-1
// console.log(a.indexOf(2, 2));  //-1

// concat

// const a = [1, 2, 3, "hello"];
// console.log(a.concat([4, 5], [6, 7]));  //  [1, 2, 3, "hello", 4, 5, 6, 7]
// console.log(a.concat([4, 5], true, [6, 7])); //  [1, 2, 3, "hello", 4, 5, true, 6, 7]
// console.log(a);  //[1, 2, 3, "hello"]
// a.push(true, 6, 7);
// console.log(a);  //[1, 2, 3, "hello", true, 6, 7]
// a.push([4, 5], [6, 7]);
// console.log(a);  //[1, 2, 3, "hello", true, 6, 7, [4, 5], [6, 7]]
// console.log(a.push([4, 5], [6, 7]));   //11
// console.log(a.concat([8, 9], 10, 11)); //

// console.log(a)

// const fruits = ["Яблуко", "Груша", "Апельсин"];
// console.log(fruits);
// const shoppingCart = fruits;
// shoppingCart.push("Банан");
// console.log(shoppingCart);
// console.log(fruits.length);

// Task-1
// Напиши скрипт який буде перебирати масив та видаляти з нього (мутувати) всі елементи що не
// є типом даних Number.
// const arr = [3, "Hello", null, 42, false, "okay"];
// for (let index = 0; index < arr.length; index += 1) {
//         // console.log(arr[index]);
//         //    console.log(index, typeof arr[index]);
//         if (typeof arr[index] !== 'number') {
//                 arr.splice(index, 1);
//         }

// }
// console.log(arr);     // (4) [3, null, 42, 'okay']

// const arr = [3, "Hello", null, 42, false, "okay"];
// console.log(arr);
// for (let index = 0; index < arr.length; index += 1) {
//         // console.log(index, typeof arr[index]);
//         // console.log(arr[index], typeof arr[index]);
//         console.log(arr[index], typeof arr[index] !== 'number');
//         if (typeof arr[index] !== 'number') {
//                 arr.splice(index, 1);
//                 index -= 1;
//         }

// }
// console.log(arr);    // (2) [3, 42]

// ------реіндексація  ----
// const arr = [3, "Hello", null, 42, false, "okay"];
// console.log(arr);
// for (let index = arr.length - 1; index >= 0; index -= 1) {
//         // console.log(arr[index]);
//         //    console.log(index, typeof arr[index]);
//         //    console.log(index, typeof arr[index] !== 'number');
//         if (typeof arr[index] !== 'number') {
//                 arr.splice(index, 1);
//         }

// }
// console.log(arr);    // (2) [3, 42]

// Task-2
// Потрібно створити функцію яка буде приймати 1 параметр
// Функція повина відібрати з масиву тільки ті елементи що дублюються в ньому та повернути
//  їх в вигляді нового масиву як результат виконання функції

// function getCommonElements(arr) {
//         const result = [];
//         for (let i = 0; i < arr.length; i += 1) {
//                 console.log(arr[i]);
//                 if (arr.includes(arr[i], i + 1)) {
//                         result.push(arr[i]);
//                 }
//         }
//         return result;
// }
// console.log(getCommonElements([1, 2, 3, 2, 1, 17, 19]));  // [1, 2]
// console.log(getCommonElements([1, 2, 3, 2, 2, 1, 17, 19])); //[1, 2, 2]

// function getCommonElements(arr) {
//         const result = [];
//         for (let i = 0; i < arr.length; i += 1) {
//                 // console.log(arr[i]);
//                 // console.log(arr.includes(arr[i], i + 1));
//                 if (arr.includes(arr[i], i + 1)) {
//                         result.push(arr[i])
//                 }
//         }

//         return result;
// }

// console.log(getCommonElements([1, 2, 3, 2, 1, 17, 19]));  // [1, 2]
// console.log(getCommonElements([1, 2, 3, 2, 2, 1, 17, 19])); //[1, 2, 2]

// function getCommonElements(arr) {
//         const result = [];
//         for (let i = 0; i < arr.length; i += 1) {
//                 console.log(arr[i]);
//                 if (arr.includes(arr[i], i + 1) && !result.includes(arr[i])) {
//                         result.push(arr[i]);
//                 }
//         }
//         return result;
// }

// console.log(getCommonElements([1, 2, 3, 2, 2, 1, 17, 19]));  //1, 2

// Task-3
//Потрібно створити функцію яка буде приймати 2 параметри
//1 параметр це масив всіх юзерів
//2 параметр це масив з чоловічими іменами.
//Функція повина відібрати з масиву всіх юзерів лише жіночі імена та повернути їх в результаті свого виканання.

// const users = ["Artem", "Anna", "Larisa", "Maksim", "Svetlana", "David",  "Roman", "Olga"];
// const men = ["Artem", "Maksim", "David", "Roman"];

// function getWomen(users, men) {
//         const women = [];
//         for (const user of users) {
//                 // console.log(user);
//                 if (!men.includes(user)) {
//                         women.push(user);
//                 }
//         }
// //         for (const user of users) {
// //                 console.log(user);
// //                 if (!men.includes(user)) {
// //                         women.push(user);
// //                 }
// //         }
//         return women;
// }
// console.log(getWomen(users, men));  //["Anna", "Larisa", "Svetlana", "Olga"]

// Task-4 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок літер) і виводить його в консоль.

// const string = 'Welcome to the future';
// console.log(typeof string);
// console.log(string.split('').reverse().join());

// Task-5
// Напиши скрипт який буде перевіряти чи елементи в масиві розташовані в порядку зростання,
// якщо ні то замінювати елементи на вірнi

// const numbers = [1, 2, 3, 1, 5, 6, 1, 1, 9];
// console.log(numbers);
// const arrayNumbers = [];
// for (let index = 1; index <= numbers.length; index++) {
//         arrayNumbers.push(index);
// }
// console.log(arrayNumbers);  //[1, 2, 3, 4, 5, 6, 7, 8, 9]  my kod

// const numbers = [1, 2, 3, 1, 5, 6, 1, 1, 9];
// for (let i = 1; i <= numbers.length; i += 1) {
//         const currentEl = numbers[i];
//         console.log(currentEl);
//         const prevEl = numbers[i - 1];
//         console.log(numbers[i - 1]);
//         if (currentEl <= prevEl) {
//                 numbers[i] = prevEl + 1;
//         }
// }
// console.log(numbers);  //[1, 2, 3, 4, 5, 6, 7, 8, 9]   correct

// Task-6
// Напиши функцію яка на основі масиву користувачів що поставили лайк формує та повертає рядок.
// Функцію має повернути текст

// function createStr(arr) {
//         console.log(arr.length);
//         // switch (arr.length) {
//         //         case 0:
//         //                 return `"no one likes this"`;
//         //         case 1:
//         //                 return `"${arr[0]} likes this"`;
//         //         case 2:
//         //                 return `"${arr[0]} and ${arr[1]} likes this"`;
//         //         case 3:
//         //                 return `"${arr[0]}, ${arr[1]} and ${arr[2]} likes this"`;
//         //         default:
//         //                 return `"${arr[0]}, ${arr[1]} and ${arr.length - 2} others likes this"`;

//         // }
// }

// console.log(createStr([]));  //"no one likes this"
// console.log(createStr(["Peter"]));  //"Peter likes this"
// console.log(createStr(["Jacob", "Alex"]));  //"Jacob and Alex like this"
// console.log(createStr(["Max", "John", "Mark"]));  //"Max, John and Mark like this"
// console.log(createStr(["Mark", "Alex", "Jacob", "Mark"]));  //"Alex, Jacob and 2 others like this"

//Question & answers
//1
// let x = 5;
// console.log(x);   //6
// let y = x++;
// console.log(x);
// console.log(y); //5

// const a = [1, 2, 3];
// const b = a;
// console.log('a', a);
// console.log('b', b);
// console.log(a === b);  //true

//створення копії масиву slice(), Array.from(), spread operator  [...]
//.slise()
// const a = [1, 2, 3];
// const b = a.slice();
// console.log('a', a);
// console.log('b', b);
// console.log(a === b);   //false

//Array.from()
// const a = [1, 2, 3];
// const b = Array.from(a);
// console.log('a', a);
// console.log('b', b);
// console.log(a === b);   //false

//оператор spread
// const a = [1, 2, 3];
// const b = [4, 5, 6, ...a];
// console.log('a', a);  //[1, 2, 3]
// console.log('b', b);  //[4, 5, 6, 1, 2, 3]
// console.log(a === b);   //false

//  Module 03-02

//  3
// const c = 20;   //20
// function foo(a, b) {
//         const c = 10;  //10
//         // return a + b + c;
// }
// // foo(5, 15);
// console.log(foo(5, 15);    //30

//  5
// greet()
// const greet = function () {
//         console.log('Welcome');  // Error cannot 'greet'
// }

//  8
// function foo() {
//       console.log(arguments);
// }
// foo(5, 'Mango', true);       // (3) [5, 'Mango', true]

//  10
// let a = 5;
// let b = a;
// console.log(a === b);   // true
// a = 10;
// console.log(a === b);   // false a = 10, b = 5

// const numbers = [1, 2, 3, 4, 5];
// const a = numbers;
// console.log(numbers === a);  //true
// numbers.splice(0, 1);
// console.log(numbers === a);  //true
// console.log('numbers', numbers);   //[2, 3, 4, 5]
// console.log('a', a);    //[2, 3, 4, 5]
// a.splice(0, 1);
// console.log('numbers', numbers);   //[3, 4, 5]
// console.log('a', a);    //[3, 4, 5]

//===
// function foo(array) {
//       for (let i = 0; i < array.length; i++) {
//              array[i] *= 2;
//             // console.log(array[i]);   //2  //4  //6  //8  //10
//       }

// }
// const numbers = [1, 2, 3, 4, 5];  //перевизнач. array
// foo(numbers); //виклик ф-ии
// console.log(numbers);   //(5) [2, 4, 6, 8, 10]

//або
// function foo(array) {
//         array = [1, 2, 3, 4, 5];
//         const numbers = array;
//         for (let i = 0; i < array.length; i++) {
//                 array[i] *= 2;
//         }
//         return numbers; //повернення знач. numbers
// }
// console.log(foo());

// Function expression

// const foo = function (a, b) {
//         console.log('a', a);  // a 10
//         console.log("b", b);  //b 15

//         // console.log(a + b);
//         // const sum = a + b;
//         // return sum;
// }
// // foo(10, 15);
// // console.log(foo(10, 15));
// const sum = foo(10, 15);
// console.log(sum);

// const foo = function (a, b) {
//         console.log("a", a);  // a 10
//         a = 20;
//         console.log('a', a);  // a 20
//         console.log("b", b);  //b 15
// };
// foo(10, 15);

// const foo = function (a, b) {
//         console.log("a", a);  // a 10
//         console.log("b", b);  //b undefined
// };
// foo(10);

// const foo = function (a, b = a) {
//         console.log("a", a);  // a 10
//         console.log("b", b);  //b 10
// };
// foo(10);

// const foo = function (a, b = a) {
//         console.log("a", a);  // a 10
//         console.log("b", b);  //b 10
//         return a + b;
// };
// console.log(foo(10));  //20 = 10+10

// const foo = function (a, b = []) {
//   console.log('a', a)
//   a = 20;
//   console.log("a", a);
//   console.log("b", b);
//   return a + b;
// };

// console.log(foo(10));  //20
// console.log(foo(10, [1, 2, 3]));  // 201, 2, 3 201 = 20+1
// console.log(foo(10, 20, 30, 40, 50, 60));  //40

// Function declaration

// hoisting https://codeguida.com/post/199
// foo(10, 20, 30);
// function foo(a = 0, b = 1, c = 2) {
//   console.log("a", a);  //10
//   console.log("b", b);  //20
//   console.log("c", c);  //30
// }

// foo(undefined, null, 30);
// function foo(a = 0, b = 1, c = 2) {
//   console.log("a", a);  // 0
//   console.log("b", b);  // null
//   console.log("c", c);  // 30
// }

// foo();
// function foo(a = 0, b = 1, c = 2) {
//   console.log("a", a);  //0
//   console.log("b", b);  //1
//   console.log("c", c);  //2
// }
// console.log(foo(10, 20, 30)); //10  //20 //30

// Псевдомасив arguments

// function getSum () {
//         console.log(arguments);
// }
// getSum(1, 2, 3);
// getSum(1, 2, 3, 4, 5);
// getSum(1, 2, 3, 4, 5, 6, 7);

// function getSum () {
//         console.log(arguments);
//           for(const argum of arguments){
//             console.log(argum)
//           }
// }
// getSum(1, 2, 3);  //1  //2  //3
// getSum(1, 2, 3, 4, 5);  //1  //2  //3  //4  //5
// getSum(1, 2, 3, 4, 5, 6, 7);  //1  //2  //3  //4  //5  //6 //7

// function getSum () {
//         console.log(arguments);
//         for (let i = 0; i = arguments.length; i += 1){
//                 console.log(arguments[i]);
//           }
// }
// getSum(1, 2, 3);  //1  //2  //3
// getSum(1, 2, 3, 4, 5);  //1  //2  //3  //4  //5
// getSum(1, 2, 3, 4, 5, 6, 7);  //1  //2  //3  //4  //5  //6 //7

// function getSum () {
//         const array = Array.from(arguments);    //metode Array.from()
//         console.log(array);

// }
// getSum(1, 2, 3);  //1  //2  //3
// getSum(1, 2, 3, 4, 5);  //1  //2  //3  //4  //5
// getSum(1, 2, 3, 4, 5, 6, 7);  //1  //2  //3  //4  //5  //6 //7

// function getSum () {
//         const array = [...arguments]   //metode [...]
//         console.log(array)

// }
// getSum(1, 2, 3);  //1  //2  //3
// getSum(1, 2, 3, 4, 5);  //1  //2  //3  //4  //5
// getSum(1, 2, 3, 4, 5, 6, 7);  //1  //2  //3  //4  //5  //6 //7

// Області видимості, присвоєння за посиланням та значенням

// Example 1
// let someValue = 4;
// if (true) {
//         console.log(someValue);  //4
//         someValue = 11;
//         console.log(someValue);  //11
// }
// console.log(someValue);  //11

// let someValue = 4;
// if (true) {
//         let someValue = 12;
//         console.log(someValue);  //12
// }
// console.log(someValue);  //4

// let someValue = 4;
// if (true) {
//         let someValue = 12;
//         console.log(someValue);  //12
//         if (true) {
//                 let someValue = 10;
//                 console.log(someValue); // 10
//         }
//         console.log(someValue); //12
// }
// console.log(someValue);  //4

// let someValue = 4;
// if (true) {
//         let someValue = 12;
//         console.log(someValue);  //12
//         if (true) {
//                 someValue = 10;
//                 console.log(someValue); // 10
//         }
//         console.log(someValue); //10
// }
// console.log(someValue);  //4

// let someValue = 4;
// if (true) {
//         someValue = 12;
//         console.log(someValue);  //12
//         if (true) {
//                 someValue = 10;
//                 console.log(someValue); // 10
//         }
//         console.log(someValue); //10
// }
// console.log(someValue);  //10

// Example 2
// let someValue = 4;
// if (true) {
//     let someValue = 11;
//     console.log('local',someValue);  //11
// }
// console.log('global',someValue);  //4

// Example 3
// let someValue = 4;
// if (true) {
//     if (true) {
//             someValue = 24;
//             console.log(someValue);
// }
//         let someValue = 11;
//         console.log(someValue);
// }
// console.log(someValue);   //Error

// let someValue = 4;
// if (true) {
//         console.log(someValue); //4
//     if (true) {
//             let someValue = 11;
//             console.log(someValue);  //11
//         }
//         someValue = 24;
//         console.log(someValue); //24
// }
// console.log(someValue);  //24

// Example 4
// let someValue = 2;
// function checkScope(someValue) { // let someValue = 2
//     someValue = 45;
//     return someValue;
// }
// checkScope(someValue);
// console.log(someValue);  //2

// let someValue = 2;
// function checkScope() { // let someValue = 2
//     someValue = 45;
//         return someValue;
// }
// // checkScope(someValue);
// // console.log(someValue);  //45

// let someValue = 2;
// function checkScope() { // let someValue = 2
//     someValue = 45;
//     return someValue;
// }
// console.log(checkScope(someValue)); //45

// Example 5
// let someValue = 2;
// function checkScope() {
//     someValue = 45;
//     return someValue;
// }
// checkScope(someValue)
// console.log(someValue); //45

// Example 6
// let someValue = 2;
// function checkScope() {
//     someValue = 42;
//     return someValue;
// }
// console.log(someValue);
// checkScope(); //2

// Example 7
// let someArray = ['Hello', 'my', 'name', 'scope'];
// function checkScope(arr) {
//         console.log(arr);  //['Hello', 'my', 'name', 'scope']
//         arr.splice(0, 3);
//         console.log(arr);  //['scope']
// }
// checkScope(someArray);
// console.log(someArray);  //['scope']

// Example 8
// let someArray = ['Hello', 'my', 'name', 'scope'];
// function checkScope(arr) {
//         console.log(arr);  //['Hello', 'my', 'name', 'scope'] copy
//         arr = Array.from(arr);
//         console.log(arr);  //['Hello', 'my', 'name', 'scope'] copy
//         arr.splice(0, 3);
//         console.log(arr);  //['scope'] copy
// }
// checkScope(someArray);
// console.log(someArray); //['Hello', 'my', 'name', 'scope'] global

// Практика

// Task-1;
// Створи функцію яка буде перевіряти чи кожен елемент масиву більше ніж вказане значення.
// Функція приймає два параметри (Масив чисел; Число яке потрібно порівнювати з усіма
// елементами масиву.
// Функція повертає повідомлення: "Success ✅" abo "Fail ❌"

// const numbers = [25, 12, 67, 40, 18];
// function checkValue(values, target) {
//         let message = "Success ✅";
//         for (const value of values) {
//                 if (value < target) {
//                         message = "Fail ❌";
//                         break;
//                 }
//         }
//         return message;
// }
// console.log(checkValue(numbers, 10));
// console.log(checkValue(numbers, 13));

// Застосування функції + патерн раннє повернення
// const numbers = [25, 12, 67, 40, 18];
// function checkValue(values, target) {
//         for (const value of values) {
//                 if (value < target) {
//                         return "Fail ❌";
//                 }
//         }
//         return "Success ✅";
// }
// console.log(checkValue(numbers, 10));
// console.log(checkValue(numbers, 13));

// Task-2
// Створити функцію яка буде розбивати початковий масив на потрібну кількість елементів
// розділюячи на декілька масивів.Функція приймає 2 параметри
// 1 - масив значень
// 2 - потрібну кількість елементіа в масиві
//  Функція повертає масив масивів

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function getCombination(arr, count) {
//         const result = [];
//         for (let i = 0; i < arr.length; i += count) {
//                 // console.log(arr[i]);
//                 const combination = arr.slice(i, i + count);
//                 console.log(combination);
//                 result.push(combination);
//         }
//         return result;
// }
// console.log(getCombination(data, 2)); // [[1, 2], [3, 4],[5, 6],[7, 8]]
// console.log(getCombination(data, 3)); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// Task 3 - Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
// значення яких будуть передані до параметра dimensions у вигляді рядка. Значення
// гарантовано розділені пробілом.

// function getRectArea(dimensions) {
//         const arr = dimensions.split(' ');
//         // console.log(arr);
//         // return arr[0] * arr[1];
//         const firstValue = Number(arr[0]);
//         const secondValue = Number(arr[1]);
//         return firstValue * secondValue;
// }
// console.log(getRectArea("8 11"));
// console.log(getRectArea("15 11"));

// // Питання з чату
// function getRectArea(dimensions) {
//         const arr = dimensions.split(' ');
//         // console.log(arr);
//         // const result = [];
//         // for (const value of arr) {
//         //         result.push(Number(value));
//         //         console.log(result);
//         // }
//         let result = 1;
//         for (const value of arr) {
//                 result *= Number(value);
//         }
//         return result;
// }
// console.log(getRectArea("8 11 15 16"));  //21120

// Task-4
// Напишіть функції для роботи з колекцією навчальних курсів courses:

// 1 addCourse(name) - додає курс до кінця колекції
// 2 removeCourse(name) - видаляє курс із колекції
// 3 updateCourse(oldName, newName) - змінює ім'я на нове

// 1 addCourse(name) - додає курс до кінця колекції

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
// function addCourse(name) {
//         if (courses.includes(name)) {
//                 return 'Ви вже маєте такий курс';
//         }
//         courses.push(name);
// }

// addCourse("Express");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// console.log(addCourse("CSS")); // 'Ви вже маєте такий курс'

// 2 removeCourse(name) - видаляє курс із колекції

// function removeCourse(name) {
//         if (!courses.includes(name)) {
//             return "Курс із таким ім'ям не знайдено";
//         }
//         const idx = courses.indexOf(name);
//         courses.splice(idx, 1);
// }
// removeCourse("React");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// console.log(removeCourse("Vue")); // 'Курс із таким ім'ям не знайдено'

// abo
// function removeCourse(name) {
//         const idx = courses.indexOf(name);
//         console.log(idx);
//         if (idx === -1) {
//             return "Курс із таким ім'ям не знайдено";
//         }
//         courses.splice(idx, 1);
// }
// removeCourse("React");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// console.log(removeCourse("Vue")); // 'Курс із таким ім'ям не знайдено'

//abo
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
// function removeCourse(name) {
//   const idx = courses.indexOf(name);
// //   0 => false
// //  -1 => true
// // console.log(~-1)
// // console.log(-(idx + 1 ))
//   if (!~idx) { // idx === -1
//     return "Курс із таким ім'ям не знайдено";
//   }

//   courses.splice(idx, 1);
// }
// removeCourse("React");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// console.log(removeCourse("Vue")); // 'Курс із таким ім'ям не знайдено'

// 3 updateCourse(oldName, newName) - змінює ім'я на нове
// const courses = ["HTML", "CSS", "Express", "JavaScript", "React", "PostgreSQL"];
// function updateCourse(oldName, newName) {
//         const idx = courses.indexOf(oldName);
//         console.log(idx);
//         if (idx === -1) {
//                 return "Курс із таким ім'ям не знайдено";
//         }
//         if (courses.includes(newName)) {
//                 return 'Ви вже маєте такий курс';
//         }
//         courses[idx] = newName;
// }

// updateCourse("HTML", "NestJS");
// console.log(courses); // ['NestJS', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

// console.log(updateCourse("NestJS", "CSS"));  //
// console.log(updateCourse("qwerty", "NestJS"));  //

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
// function addCourse(name) {
//   if (courses.includes(name)) {
//     return 'Ви вже маєте такий курс';
//   }
//   courses.push(name);
// }
// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// console.log(addCourse('CSS')); // 'Ви вже маєте такий курс'

// function removeCourse(name) {
//   const idx = courses.indexOf(name);
//   //   0 => false
//   //  -1 => true
//   // console.log(~-1)
//   // console.log(-(idx + 1 ))
//   if (!~idx) {
//     // idx === -1
//     return "Курс із таким ім'ям не знайдено";
//   }

//   courses.splice(idx, 1);
// }
// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// console.log(removeCourse('Vue')); // 'Курс із таким ім'ям не знайдено'
