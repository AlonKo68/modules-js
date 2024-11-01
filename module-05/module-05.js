//                  1. Колбек-функції

//   1.  Функція як значення
// function greet(name) {
//   return `Welcome ${name}!`;
// }
// console.log(greet('Mango')); // "Welcome Mango!" - Викликаємо функцію greet і виводимо результат у консоль
// console.log(greet); // ƒ greet() {return `Welcome ${name}!`} - Виводимо функцію greet у консоль, не викликаючи її

/* .1.
Функція makePizza повертає рядок з повідомленням клієнту. Доповни код таким чином, щоб у змінній result
був результат виконання функції makePizza, а у змінній pointer було посилання на функцію makePizza. */
// function makePizza() {
//   return 'Your pizza is being prepared, please wait.';
// }
// const result = makePizza();
// console.log(result);
// const pointer = makePizza;
// console.log(pointer);

//2.   Колбек-функції
// function greet(name) {
//   console.log(`Welcome ${name}!`); // "Welcome Mango!"
// }
// function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`); // "Dear Mango, your room will be ready in 30 minutes"
// }
// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`); // "Registering Mango!"  // "Registering Mango!"
//   callback(name);
// }
// registerGuest('Mango', greet);
// registerGuest('Mango', notify);

/*1.2.
Функція makeMessage приймає один параметр ім'я піци, що доставляється, pizzaName та повертає рядок з
повідомленням клієнту. Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром
(параметр callback) колбек-функцію і повертала результат її виклику. Функції deliverPizza або makePizza
будуть передаватися як колбек для makeMessage і очікувати аргументом ім'я готової піци, що доставляється.*/
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }
// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }
// function makeMessage(pizzaName, callback) {
//   callback(pizzaName);
//   return callback(pizzaName);
// }
// makeMessage('Ultracheese', deliverPizza);
// makeMessage('Royal Grand', makePizza);
// console.log(makeMessage('Ultracheese', deliverPizza));
// console.log(makeMessage('Royal Grand', makePizza));

//3.         Інлайн-колбеки

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`); //Registering Mango! //Registering Poly!
//   callback(name);
// }
// registerGuest('Mango', function greet(name) {
//   console.log(`Welcome ${name}!`); //Welcome Mango! - Передаємо інлайн-функцію greet у якості колбека
// });
// registerGuest('Poly', function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`); //Dear Poly, your room will be ready
//in 30 minutes -  Передаємо інлайн-функцію notify у якості колбека
// });

/* 1.3.
Функція makePizza має два параметри: pizzaName - ім'я піци та callback - колбек-функцію. Під час виконання,
makePizza викликає цей колбек, передаючи йому pizzaName як аргумент.
Доповни другий виклик функції makePizza(pizzaName, callback), передавши другим аргументом інлайн
колбек-функцію eatPizza(pizzaName). Колбек eatPizza логує рядок "Eating pizza <назва піци>", де
<назва піци> це значення параметра pizzaName.  */

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza('Ultracheese', function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

//      Метод forEach(callback) - метод перебирання масиву

// const numbers = [5, 10, 15, 20, 25];
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`); /// Класичний for
// }
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`); // Перебираючий метод forEach
// });

/* 1.4.1.
Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел, і розраховує
загальну суму його елементів, яка зберігається у змінній totalPrice і повертається як результат роботи
функції. Доповни виклик метода forEach, передавши йому колбек-функцію, яка на кожній ітерації додає до
totalPrice значення поточного елемента масива orderedItems. */

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (number, index) {
//     // console.log(number, index);
//     totalPrice += number;
//   });

//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291])); //503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //1116
// console.log(calculateTotalPrice([])); //0

/* 1.4.2.
Функція filterArray(numbers, value) приймає першим параметром масив чисел numbers і повертає новий масив,
в якому будуть тільки ті елементи оригінального масиву, які більші за значення другого параметра числа
value. Якщо таких значень не буде знайдено, функція повертає порожній масив.
Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach. */

// function filterArray(numbers, value) {
//   let newArr = [];
//   numbers.forEach(function (number, index) {
//     if (number > value) {
//       newArr.push(number);
//     }
//   });
//   return newArr;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3)); //[4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); //[5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); //[]
// console.log(filterArray([12, 24, 8, 41, 76], 38)); //[41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); //[24, 41, 76]
// console.log(filterArray([])); //[]

//                               2.    Стрілочні функції

//1.   Стрілочні функції: синтаксис

// // Звичайне оголошення функції
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // Те саме стрілочною функцією
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };

/* 2.1.
Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона була оголошена як стрілочна.
function calculateTotalPrice(quantity, pricePerItem) {
  return quantity * pricePerItem;
}  */
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };
// console.log(calculateTotalPrice(5, 100)); //500
// console.log(calculateTotalPrice(8, 60)); //480
// console.log(calculateTotalPrice(3, 400)); //1200
// console.log(calculateTotalPrice()); //0

//2.            Неявне повернення

// const add = (a, b, c) => {
//   console.log(a, b, c); //явне повернення (explicit return)
//   return a + b + c;
// };
// const add = (a, b, c) => a + b + c; //неявне повернення (implicit return)

//3.          Псевдомасив arguments

// const add = (...args) => {
//   console.log(args); // [1, 2, 3]
// };
// add(1, 2, 3);

//4.               Колбеки

// const numbers = [5, 10, 15, 20, 25];
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`); // Звичайна анонімна функція
// });

// const numbers = [5, 10, 15, 20, 25];
// numbers.forEach((number, index) => {
//   console.log(`Index ${index}, value ${number}`); // Стрілочна анонімна функція
// });

// const numbers = [5, 10, 15, 20, 25];
// const logMessage = (number, index) => {
//   console.log(`Index ${index}, value ${number}`); //одна функція використовується в декількох місцях
//   // програми або якщо вона громіздка
// };
// numbers.forEach(logMessage);

// const numbers = [5, 10, 15, 20, 25];
// let totalPrice = 0;
// numbers.forEach((number, index) => {
//   totalPrice += number;
// });
// console.log(totalPrice);  //75

/* 2.4.1.
Виконай рефакторинг функції calculateTotalPrice(orderedItems), замінивши її оголошення на стрілочну
функцію. Також заміни колбек-функцію, передану в метод forEach(), на стрілочну функцію.
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (item) {
    totalPrice += item;
  });

  return totalPrice;
}*/

// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;
//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });
//   return totalPrice;
// };
// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138;
// console.log(calculateTotalPrice([164, 48, 291])); //503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //1116
// console.log(calculateTotalPrice([])); //0

// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;
//   const orderedItemsforEach = item => {
//     totalPrice += item;
//   };
//   orderedItems.forEach(orderedItemsforEach);
//   return totalPrice;
// };
// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138;
// console.log(calculateTotalPrice([164, 48, 291])); //503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //1116
// console.log(calculateTotalPrice([])); //0

/*2.4.2  «Фільтр чисел»
Заміни оголошення функції filterArray() і колбек для методу forEach() на стрілочні функції.
function filterArray(numbers, value) {
  const filteredNumbers = [];

  numbers.forEach(function (number) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
}*/

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];
//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   return filteredNumbers;
// };
// console.log(filterArray([1, 2, 3, 4, 5, 6, 7], 5));  //[6, 7]

//                   3.    Методи map і flatMap

//1.    Чисті функції
//Функція з побічними ефектами

// const dirtyMultiply = (array, value) => {
//   // console.log(array); //[1, 2, 3, 4, 5] numbers = array
//   for (let i = 0; i < array.length; i += 1) {
//     // console.log(array[i]); //1    //2    //3    //4    //5
//     array[i] = array[i] * value;
//     console.log(array[i]); //2 //4  //6  //8  //10
//   }
// };
// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// // Відбулася мутація вихідних даних - масиву numbers
// console.log(numbers); // [2, 4, 6, 8, 10]

//Чиста функція (pure function)

// const pureMultiply = (array, value) => {
//   const newArray = [];
//   array.forEach(element => {
//     newArray.push(element * value);
//   });
//   return newArray;
// };
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);
// console.log(numbers); // [1, 2, 3, 4, 5] -  Мутація вихідних даних не відбулася
// console.log(doubledNumbers); // [2, 4, 6, 8, 10] - Функція повернула новий масив зі зміненими даними

/*3.1
Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення
якого - це парне число, додаючи до нього значення параметра value, який точно є числом.
Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers,
а створювала, наповнювала і повертала новий масив з оновленими значеннями.
// function changeEven(numbers, value) {
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
//   return numbers;
// } */

// function changeEven(numbers, value) {
//   const newNumbers = [];
//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       number = number + value;
//     }
//     newNumbers.push(number);
//   });
//   return newNumbers;
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10)); //[1, 12, 3, 14, 5]
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); //[12, 18, 3, 7, 14, 16]
// console.log(changeEven([17, 24, 68, 31, 42], 100)); //[17, 124, 168, 31, 142]
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); //[144, 13, 81, 192, 136, 154]
// console.log(changeEven([])); //[]

//2.     Перебираючі методи

// array.method((item, idx, arr) => {
//   // логіка, яка буде виконуватися на кожній ітерації
// });

// ||

// array.method(item => {
//   // логіка, яка буде виконуватися на кожній ітерації
// });

// 3.     Метод map()

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"] - Оригінальний масив не змінився

//3.2
// В масиві planets зберігаються назви планет. Доповни код таким чином, щоб у змінній planetsLengths
// вийшов масив, що буде складатися з довжин назв кожної планети з масиву planets. Обов'язково
// використовуй метод map().

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);
// console.log(planets);

//4.        Масив об'єктів

// const students = [
//   { name: 'Mango', score: 83 }, { name: 'Poly', score: 59 }, { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 }, { name: 'Houston', score: 64 },
// ];
// const names = students.map(student => student.name);
// console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]

//4.1
// Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, author,
// rating.Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв усіх книг
// (властивість title) з масиву books.
// const books = [
//   { title: 'The Last Kingdom', author: 'Bernard Cornwell', rating: 8.38, },
//   { title: 'Beside Still Waters', author: 'Robert Sheckley', rating: 8.51, },
//   { title: 'The Dream of a Ridiculous Man', author: 'Fyodor Dostoevsky', rating: 7.75, },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const titles = books.map(book => book.title);
// console.log(titles); //["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man",
// // "Redder Than Blood", "Enemy of God"]

//5.      Метод flatMap()

// const students = [
//   { name: 'Mango', courses: ['mathematics', 'physics'] },
//   { name: 'Poly', courses: ['science', 'mathematics'] },
//   { name: 'Kiwi', courses: ['physics', 'biology'] },
// ];
// const mappedCourses = students.map(student => student.courses);
// console.log(mappedCourses); // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

// const flattenedCourses = students.flatMap(student => student.courses);
// console.log(flattenedCourses); // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];

//5.1.1
// Масив books містить колекцію об'єктів книг, кожен з яких містить властивість genres, значенням
// якої є масив жанрів.Використовуючи метод flatMap(), зроби так, щоб у змінній genres вийшов масив
// жанрів усіх книг(властивість genres) з масиву books.
// const books = [
//   { title: 'The Last Kingdom', author: 'Bernard Cornwell', genres: ['adventure', 'history'], },
//   { title: 'Beside Still Waters', author: 'Robert Sheckley', genres: ['fiction'], },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', genres: ['horror', 'mysticism'], },
// ];

// const genres = books.flatMap(book => book.genres);
// console.log(genres); //["adventure", "history", "fiction", "horror", "mysticism"]

//5.1.2.  задачу «Пошти користувачів»
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com', eyeColor: 'blue',friends: ['Sharron Pace'],
//     isActive: false, balance: 2811, skills: ['ipsum', 'lorem'], gender: 'male', age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com', eyeColor: 'blue', friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true, balance: 3821, skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'], gender: 'female', age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com', eyeColor: 'green', friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false, balance: 3793, skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'], gender: 'male', age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com', eyeColor: 'green', friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true, balance: 2278, skills: ['adipisicing', 'irure', 'velit'], gender: 'female', age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com', eyeColor: 'blue', friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true, balance: 3951, skills: ['ex', 'culpa', 'nostrud'], gender: 'male', age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com', eyeColor: 'brown', friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false, balance: 1498, skills: ['non', 'amet', 'ipsum'], gender: 'male', age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com', eyeColor: 'brown', friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true, balance: 2764, skills: ['lorem', 'veniam', 'culpa'], gender: 'female', age: 39,
//   },
// ];
// const getUserEmails = users => {
//   return users.map(user => user.email);
// };
// console.log(getUserEmails(users));

//                   4.             Методи filter() і find()

//         1.   Метод filter()

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42] - до positiveValues потрапили всі елементи масиву
// // values, які задовольнили умову колбека, тобто були >= 0

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37] - до negativeValues потрапили всі елементи масиву
// // values, які задовольнили умову колбека, тобто були < 0

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // [] - до negatibigValues eValues потрапили всі елементи масиву values,
// // які задовольнили умову колбека, тобто були > 1000

// console.log(values); // [51, -3, 27, 21, -68, 42, -37]  -  Оригінальний масив values не змінився

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log(evenNumbers);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// console.log(oddNumbers);

//            2.    Метод filter() на масиві об'єктів
// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'Poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 },
//   { name: 'Houston', score: 64 },
// ];
// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Mango і Kiwi
// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Ajax
// const average = students.filter(
//   student => student.score >= LOW_SCORE && student.score < HIGH_SCORE
// );
// console.log(average); // Масив об'єктів з іменами Poly і Houston

//4.2.1.
//Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, author, rating.
// Використовуючи метод filter(), доповни код таким чином, щоб:
// У змінній topRatedBooks утворився масив книг, рейтинг яких (властивість rating) більший за або
// дорівнює значенню змінної MIN_RATING.
// У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям (властивість author),
// яке збігається зі значенням у змінній AUTHOR.
// const books = [
//   { title: 'The Last Kingdom', author: 'Bernard Cornwell', rating: 8.38 },
//   { title: 'Beside Still Waters', author: 'Robert Sheckley', rating: 8.51 },
//   { title: 'The Dream of a Ridiculous Man', author: 'Fyodor Dostoevsky', rating: 7.75, },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// console.log(topRatedBooks);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.log(booksByAuthor);

//4.2.2.
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com', eyeColor: 'blue', friends: ['Sharron Pace'],
//     isActive: false, balance: 2811, skills: ['ipsum', 'lorem'], gender: 'male', age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com', eyeColor: 'blue', friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true, balance: 3821, skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'], gender: 'female', age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com', eyeColor: 'green', friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false, balance: 3793, skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'], gender: 'male', age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com', eyeColor: 'green', friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true, balance: 2278, skills: ['adipisicing', 'irure', 'velit'], gender: 'female', age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com', eyeColor: 'blue', friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true, balance: 3951, skills: ['ex', 'culpa', 'nostrud'], gender: 'male', age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com', eyeColor: 'brown', friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false, balance: 1498, skills: ['non', 'amet', 'ipsum'], gender: 'male', age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com', eyeColor: 'brown', friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true, balance: 2764, skills: ['lorem', 'veniam', 'culpa'], gender: 'female', age: 39,
//   },
// ];
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color);
// };
// console.log(getUsersWithEyeColor(users, 'blue'));
// console.log(getUsersWithEyeColor(users, 'green'));
// console.log(getUsersWithEyeColor(users, 'brown'));
// console.log(getUsersWithEyeColor(users));
// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(user => user.age >= minAge && user.age < maxAge);
// };
// console.log(getUsersWithAge(users, 20, 30));
// console.log(getUsersWithAge(users, 30, 40));
// console.log(getUsersWithAge(users, 80, 100));
// console.log(getUsersWithAge(users));

//        3.    Метод find()

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];
// console.log(colorPickerOptions.find(option => option.label === 'blue')); // { label: "blue", color: "#2196F3" }
// console.log(colorPickerOptions.find(option => option.label === 'pink')); // { label: "pink", color: "#E91E63" }
// console.log(colorPickerOptions.find(option => option.label === 'white')); // undefined

//4.3.1.
// const books = [
//   { title: 'The Last Kingdom', author: 'Bernard Cornwell', rating: 8.38, },
//   { title: 'Beside Still Waters', author: 'Robert Sheckley', rating: 8.51, },
//   { title: 'The Dream of a Ridiculous Man', author: 'Fyodor Dostoevsky', rating: 7.75, },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// console.log(bookWithTitle);
// const bookByAuthor = books.find(book => book.author === AUTHOR);
// console.log(bookByAuthor);

//4.3.2.
// Цей масив об'єктів ми будемо передавати в параметр users під час виклику функції із завдання.
//const users = [];

// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email);
// };
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
// console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
// console.log(getUserWithEmail(users, 'blackburndotson@furnigeer.com'));
// console.log(getUserWithEmail(users));

//              5.       Методи every, some і reduce

//      1.     Метод every()

// const products = [
//   { name: 'apple', quantity: 2 },
//   { name: 'orange', quantity: 5 },
//   { name: 'plum', quantity: 0 },
// ];

// const hasEveryProduct = products.every(product => product.quantity > 0);
// console.log(hasEveryProduct); // false

//5.1.
// Доповни функцію isEveryUserActive(users) таким чином, щоб вона перевіряла, чи всі користувачі
// зараз активні(властивість isActive) і повертала true або false.
// const users = [];
// const isEveryUserActive = users => {
//   return users.every(user => user.isActive === true);
// };
// console.log(isEveryUserActive(users)); //false

//       2.      Метод some()

//5.2.
// Доповни функцію isAnyUserActive(users) таким чином, щоб вона перевіряла наявність хоча б одного
// активного користувача(властивість isActive) і повертала true або false.
// const users = [];
// const isAnyUserActive = users => {
//   return users.some(user => user.isActive === true);
// };
// console.log(isAnyUserActive(users)); //true

//        3.      Метод reduce()
/*Метод reduce(callback, initialValue) використовується для послідовної обробки кожного елемента
масиву із збереженням проміжного результату. Трохи складніший за інші методи для засвоєння, але
результат вартий того.  */

// const total = [2, 7, 3].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 12

/*5.3
Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх, одним гравцем.
У змінній players зберігається об'єкт, де ключ це ім'я гравця, а значення - його ігровий час. У
змінній playtimes зберігається масив значень об'єкта players, тобто масив ігрового часу усіх гравців.
Значенням змінної averagePlayTime буде середній час, проведений одним гравцем в іграх.
Доповни код таким чином, щоб у змінній totalPlayTime вийшов загальний ігровий час з масиву playtimes.
Використовуй метод reduce(). */
// const players = { mango: 1270, poly: 468, ajax: 710, kiwi: 244, };

// const playtimes = Object.values(players);
// console.log(playtimes); // [1270, 468, 710, 244]
// const totalPlayTime = playtimes.reduce((totalPlayTime, value) => {
//   return totalPlayTime + value;
// }, 0);
// console.log(totalPlayTime); // 2692
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime); //673

//4.     Метод reduce() і масив об'єктів

// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'Poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 },
//   { name: 'Houston', score: 64 },
// ];
// // Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);
// console.log(totalScore); //337
// const averageScore = totalScore / students.length;
// console.log(averageScore.toFixed(0)); //67.4 = 67

/*5.4.1
Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця, і отримати
загальну суму цих значень часу у змінній totalAveragePlaytimePerGame. Розрахувати час для кожного з гравців
можна, розділивши його час (властивість playtime) на кількість ігор (властивість gamesPlayed).
Поради:
Використовуй метод reduce() для ітерації по масиву players та обчислення загальної суми середнього часу на одну
гру.
Усередині колбек функції reduce(), поділи playtime гравця на gamesPlayed, щоб отримати середній час, витрачений
на одну гру кожним гравцем.
Накопичуй результат у змінній acc і повертай його в кінці кожної ітерації.
Ініціалізуй параметр acc методу reduce() початковим значенням 0, щоб уникнути отримання NaN при виконанні
обчислень.
В результаті змінна totalAveragePlaytimePerGame міститиме загальну суму середнього часу на одну гру для всіх
гравців.  */
// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   const averagePlayTime = player.playtime / player.gamesPlayed;
//   console.log(averagePlayTime);
//   return total + averagePlayTime;
// }, 0);
// console.log(totalAveragePlaytimePerGame); //1023

/*5.4.2.
const users = []  */
// const calculateTotalBalance = users.reduce((total, user) => {
//   return total + user.balance;
// }, 0);
// console.log(calculateTotalBalance);

//                    6.    Метод toSorted()

//  1. Метод toSorted()

// Масив чисел

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = scores.toSorted();
// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// const scores = [27, 2, 41, 4, 7, 3, 75];
// console.log(scores.toSorted()); // [2, 27, 3, 4, 41, 7, 75]

// Масив рядків

// const students = ['Jacob', 'Artemis', 'Solomon', 'Adrian', 'Kai', 'Ganymede'];
// console.log(students.toSorted()); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

//6.1.
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = ['Tanith Lee', 'Bernard Cornwell', 'Robert Sheckley', 'Fyodor Dostoevsky',];

// const ascendingReleaseDates = releaseDates.toSorted().reverse();
// console.log(ascendingReleaseDates); //[1967, 1973, 1984, 1997, 2008, 2012, 2016]
// const alphabeticalAuthors = authors.toSorted();
// console.log(alphabeticalAuthors); //["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"]

//        2.   Свій порядок сортування чисел

// const students = ['Jacob', 'Artemis', 'Solomon', 'Adrian', 'Kai', 'Ganymede'];

// const inAlphabetOrder = students.toSorted((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

// const inReversedOrder = students.toSorted((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]

// const inAlphabetOrder = students.toSorted((a, b) => a.localeCompare(a));
// console.log(inAlphabetOrder); // ['Jacob', 'Artemis', 'Solomon', 'Adrian', 'Kai', 'Ganymede']

/* 6.2.
Онлайн бібліотеці необхідно відображати книги, відсортовані за автором в алфавітному і в зворотному
алфавітному порядку. Доповни код таким чином, щоб у змінній authorsInAlphabetOrder вийшла копія масиву
authors, відсортована за алфавітом, а у змінній authorsInReversedOrder - копія, відсортована у зворотному
алфавітному порядку. */
// const authors = ['Tanith Lee', 'Bernard Cornwell', 'Robert Sheckley', 'Fyodor Dostoevsky', 'Howard Lovecraft',];

// const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));
// console.log(authorsInAlphabetOrder);
// //["Bernard Cornwell", "Fyodor Dostoevsky", "Howard Lovecraft", "Robert Sheckley", "Tanith Lee"]
// const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));
// console.log(authorsInReversedOrder);
// //["Tanith Lee", "Robert Sheckley", "Howard Lovecraft", "Fyodor Dostoevsky", "Bernard Cornwell"]

//       3.   Сортування об'єктів
// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'Poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 },
// ];
// const inAscendingScoreOrder = students.toSorted(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );
// console.log(inAscendingScoreOrder);

// const inDescendingScoreOrder = students.toSorted(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
// console.log(inDescendingScoreOrder);

// const inAlphabeticalOrder = students.toSorted((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );

/*6.3.
У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному
алфавітному порядку.
У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу. */
// const books = [
//   { title: 'The Last Kingdom', author: 'Bernard Cornwell', rating: 8.38, },
//   { title: 'Beside Still Waters', author: 'Robert Sheckley', rating: 8.51, },
//   { title: 'The Dream of a Ridiculous Man', author: 'Fyodor Dostoevsky', rating: 7.75, },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94, },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67, },
// ];

// const sortedByAuthorName = books.toSorted((firstBook, secondBook) =>
//   firstBook.author.localeCompare(secondBook.author)
// );
// console.log(sortedByAuthorName);
// const sortedByReversedAuthorName = books.toSorted((firstBook, secondBook) =>
//   secondBook.author.localeCompare(firstBook.author)
// );
// console.log(sortedByReversedAuthorName);

// const sortedByAscendingRating = books.toSorted(
//   (firstBook, secondBook) => firstBook.rating - secondBook.rating
// );
// console.log(sortedByAscendingRating);

// const sortedByDescentingRating = books.toSorted(
//   (firstBook, secondBook) => secondBook.rating - firstBook.rating
// );
// console.log(sortedByReversedAuthorName);

//      4.    Ланцюжки методів

// const students = [
//   { name: 'Mango', score: 83, courses: ['mathematics', 'physics'] },
//   { name: 'Poly', score: 59, courses: ['science', 'mathematics'] },
//   { name: 'Ajax', score: 37, courses: ['physics', 'biology'] },
//   { name: 'Kiwi', score: 94, courses: ['literature', 'science'] },
// ];
// // const sortedByAscendingScore = students.toSorted((a, b) => a.score - b.score);
// // const names = sortedByAscendingScore.map(student => student.name);
// // console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]

// const names = students
//   .toSorted((a, b) => a.score - b.score)
//   .map(student => student.name);
// console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]

// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .toSorted((a, b) => a.localeCompare(b));

// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .toSorted((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]

/*6.4.
Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку, рейтинг книг
яких більший за значення змінної MIN_BOOK_RATING. Використовуй ланцюжок методів.
Змінна names повинна формуватися за допомогою ланцюжка методів filter, map, toSorted, при цьому інші змінні
не повинні оголошуватись  */
// const books = [
//   { title: 'The Last Kingdom', author: 'Bernard Cornwell', rating: 8.38, },
//   { title: 'Beside Still Waters', author: 'Robert Sheckley', rating: 8.51, },
//   { title: 'The Dream of a Ridiculous Man', author: 'Fyodor Dostoevsky', rating: 7.75, },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94, },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67, },
// ];

// const MIN_BOOK_RATING = 8;

// const names = books
//   .map(book => book.author)
//   .filter((rating, index, array) => rating > MIN_BOOK_RATING);
// // .toSorted((a, b) => a.localeCompare(b));

// const names = books
//   .filter(book => book.rating >= MIN_BOOK_RATING)
//   .map(book => book.author)
//   .toSorted((firstBook, secondBook) => firstBook.localeCompare(secondBook));
// console.log(names); //["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]

// console.log(String(true));
// console.log(toString(true));
//

//                                     Practice m5 - 1
//
//         Kahut
//3
// function foo(callback) {
//   callback(10);  //Error
// }
// function logger(value) {
//   console.log(value);   //5
// }
// foo(logger(5));

//8
// const foo = () => { 'Mango' };
// console.log(foo());  //undefined

// const foo = () => { str = 'Mango' };
// console.log(foo());  // undefined - перевизначчення str

// const foo = () => 'Mango';
// console.log(foo());  //Mango

// const foo = () => return 'Mango';
//   console.log(foo());  //Error

// *******************************      Стрілочна функція (Arrow function)     ************************\\

// JSDoc - comment коротка відомість про функцію яка допомагає іншому розробнику швидше зрозуміти що робить,
// приймає та повертає функція.
// Для створення JSDoc - comment на рядку перед створеною функціює натискаємо /**
// Далі описуємо нашу функцію.

// function declaration

/**
 * Buy product, log message with purchase info
 * @param {string} productName
 * @param {number} productQty
 * @param {number} price - price per one item
 * @returns {string}
 */
// function buyProduct(productName, productQty, price) {
//   console.log(
//     `You buy ${productQty} ${productName}'s, cost per item ${price}, total cost ${
//       productQty * price
//     }`
//   );

//   return "hello world";
// }

// buyProduct("apple", 10, 35);
// function expression

// const buyProduct = function(productName, productQty, price){
//     console.log(`You buy ${productQty} ${productName}'s, cost per item ${price}, total cost ${productQty * price}`);
// }
// buyProduct('apple', 10, 35)

// arrow function

// const buyProduct = (productName, productQty, price) => {
//   console.log(
//     `You buy ${productQty} ${productName}'s, cost per item ${price}, total cost ${
//       productQty * price
//     }`
//   );
// };
// buyProduct('apple', 10, 35)

// ***********  Явне  / Неявне повернення      ******** \\

// Явне повернення
/**
 * Get product total price
 * @param {number} qty - quantity items
 * @param {number} price - price per item
 * @returns {number} - total price
 */
// const getTotalPrice = (qty, price) => {
//   return qty * price;
// };
// console.log(getTotalPrice(3, 150))  //450

// Неявне повернення

// const getTotalPrice = (qty, price) => (qty * price).toString();
// console.log(getTotalPrice(3, 150))  //450
// *****Можливість не огортати параметри в круглі дужки якщо параметр один*****\\

// Один параметр з дужками
/**
 * Check user strong password 😂
 * @param {String} password
 * @returns {Boolean}
 */
// const checkPassword = (password) => password === "qwerty111";
// console.log(checkPassword('qwerty111'));

// Один параметр без

// const checkPassword = password => password === "qwerty111";
// console.log(checkPassword('qwerty111'));

// ***********     Відсутність псевдомасиву arguments ******** \\

//           function declaration
/**
 * Log items
 */
// function getProductList() {
//   // console.log(Array.from(arguments));  //[]
//   console.log([...arguments]); //[]

//   for (const product of arguments) {
//     console.log(product.indexOf('Apple'));  //0  //0  //-1
//   }
// }
// getProductList("Apple", "Banana", "Orange", "Mango");
// getProductList("Apple", "Banana", "Orange", "Mango", "Watermelon");
// getProductList("Mango");

//                 arrow function
// const getProductList = () => {
//   console.log(argsument);  //Error
// };
// getProductList("Apple", "Banana", "Orange", "Mango");

// const getProductList = (...args) => {
//   console.log(args);
//   // console.log(args.indexOf('Apple'));
// };
// getProductList("Apple", "Banana", "Orange", "Mango");
// getProductList("Apple", "Banana", "Orange", "Mango", "Watermelon");
// getProductList("Mango");

// *************Callback function*********************\\

// function add(a, b) {
//   return a + b;
// }
// console.log(add(5, 5))//10  виклик функції
// console.log(add) // посилання на функцію - код функції

// *******      Callback функція у вигляді посилання на функції     *****\\

// function logResult(a, b, callback) {
//   console.log(callback);
//   const result = callback(a, b);
//   console.log(`Result is ${result}`);
// }
// logResult(4, 5, add);
// logResult(4, 5, sum);

// function add(a, b) {
//   return a + b;
// }
// function sum(a, b) {
//   return a * b;
// }

// ******************      Інлайнова Callback функція     ******************\\

// function logResult(a, b, callback) {
//   console.log(callback);
//   const result = callback(a, b);
//   console.log(`Result is ${result}`);
// }
// logResult(4, 5, (a, b) => a + b)
// logResult(4, 5, (a, b) => a * b)

// function logResult(a, b, callback) {
//   console.log(callback);
//   const result = callback(a, b);
//   console.log(`Result is ${result}`);
// }
// logResult(4, 5, (a, b) => a + b)
// logResult(4, 5, function (a, b) {
//   return a / b
// })

// ************************************** Метод forEach *********************************************\\
// const products = ["Apple", "Banana", "Orange", "Mango", "Watermelon"];

// Цикл for
// for (let i = 0; i < products.length; i += 1) {
//   const product = products[i];

//   console.log(`${i + 1} - ${product}`);  //1 - Apple //2 - Banana //3 - Orange
// }

// forEach
// products.forEach((product, idx, arr) => {
//   console.log('product', product);
//   console.log('idx', idx);
//   console.log('arr', arr);
// });

// products.forEach((product, _, arr) => {
//   console.log('product', product);
//   // console.log('idx', idx);
//   console.log('arr', arr);
// });

// products.forEach((_, __, arr) => {
//   // console.log('product', product);
//   // console.log('idx', idx);
//   console.log('arr', arr);
// });

// function logProduct(product, idx, arr) {
//   console.log('product', product);
//   console.log('idx', idx);
//   console.log('arr', arr);
// }
// products.forEach(logProduct);

// function customForEach(callback) {
//   for (let i = 0; i < this.length; i += 1) {
//     callback(this[i], i, this);
//   }
// }

// Array.prototype.customForEach = customForEach;

// products.customForEach((product, idx, arr) => {
//   console.log("product", product);
//   console.log("idx", idx), console.log("arr", arr);
// });

// const result = products.forEach((product, idx, arr) => {
//   console.log('product', product);
//   return 'Hello world';
//   console.log('idx', idx),
//     console.log('arr', arr)
// });
// console.log(result);

// ********** Практика ***************************\\

// Task - 1
// Напишіть наступні функції: createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек.
// Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек
// передаючи йому створений об'єкт.
// logProduct(product) - колббек що приймає об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

// function createProduct(obj, callback) {
//   const product = { id: Date.now(), ...obj };
//   console.log(product);
//   // callback(product);
// }

// function logProduct(product) {
//   console.log('Product', product);
// }

// function logTotalPrice({ price, quantity }) {
//   console.log(`Product total price ${price * quantity}`);
// }

// createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
// createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);

// Task - 2
// Напишіть функцію яка буде отримувати 2 параметри.
// 1 - масив чисел.
// 2 - функцію яка має опрацювати кожен елемент масиву.
//
// Функція повертає новий масив кожен елемент якого є результатом виконання колбек функції
// function each(arr, action) {
//   const items = [];
//   arr.forEach((elem) => {
//     const result = action(elem);
//     items.push(result);
//   });
//   return items;
// }
// console.log(each([64, 49, 36, 25, 16], (value) => value * 2));
// console.log(each([64, 49, 36, 25, 16], (value) => value - 10));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.ceil(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.floor(value)));

// function each(arr, action) {
//   const result = arr.map(elem => action(elem));
//   return result;
// }
// console.log(each([64, 49, 36, 25, 16], (value) => value * 2));  //[128, 98, 72, 50, 32]
// console.log(each([64, 49, 36, 25, 16], (value) => value - 10));  //[54, 39, 26, 15, 6]
// console.log(each([1.5, 2.1, 16.4, 9.7, -11.3], (value) => Math.ceil(value))); //[2, 3, 17, 10, -11]
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.floor(value)));

// Task-3
// Напишіть функцію getProductDetails, яка приймає ідентифікатор товару productId та дві колбек-функції
// successCallback та errorCallback. Функція getProductDetails повинна отримати деталі про вказаний товар
// та передати їх у successCallback.
// У випадку якщо товар не знайдено, викликається errorCallback і передається повідомлення про помилку.
// const products = [
//   {
//     id: 1, name: "Телефон", price: 10000,
//     description: "Смартфон з високоякісним дисплеєм та потужним процесором.",
//   },
//   {
//     id: 2, name: "Ноутбук", price: 25000,
//     description: "Легкий та потужний ноутбук для роботи та розваг.",
//   },
//   {
//     id: 3, name: "Планшет", price: 8000,
//     description: "Компактний планшет для перегляду контенту.",
//   },
// ];

// function getProductDetails(id, success, error) {
//   for (const product of products) {
//     // console.log(product.id);
//     if (product.id === id) {
//       return success(product);
//     }
//   }
//   error(id);

// }
// getProductDetails(3, handleSuccess, handleError);
// getProductDetails(44, handleSuccess, handleError);

// function handleSuccess(message) {
//   console.log(`✅ Success!`, message);
// }

// function handleError(productId) {
//   console.log(`❌ Error! Product with ${productId} id not found`);
// }

// Task-4
// Напишіть функцію calculateAveragePrice, яка приймає на вхід масив об'єктів, що представляють товари, та
// колбеки onSuccess та onError. Функція повинна обчислювати середню ціну товарів у масиві та викликати
// колбек onSuccess, передаючи йому отриману середню ціну як аргумент. Якщо масив товарів порожній, функція
// повинна викликати колбек onError, передаючи йому рядок "No products found". Для форматування середньої
// ціни використовується метод toFixed(2), щоб обмежити число до двох десяткових знаків.
// 6 значень які завжди повернуть false

// 1 false
// 2 "" - порожній рядок
// 3 0  - число нуль
// 4 null
// 5 undefined
// 6 NaN

// const products = [
//   { name: "Apple", price: 0.99 },
//   { name: "Banana", price: 0.49 },
//   { name: "Orange", price: 0.79 },
//   { name: "Mango", price: 1.99 },
// ];
// function calculateAveragePrice(products, onSuccess, onError) {
//   if (!products.length) {
//     onError("no found");
//     return; // шоб не рахувати середню вартість
//   }
//   let total = 0;
//   products.forEach(({ price }) => total += price);
//   console.log(total); //4.26
//   const averagePrice = total / products.length;
//   console.log(averagePrice); //1.065
//   onSuccess(averagePrice)
// }
// const onSuccess = (averagePrice) =>
//   console.log("Average price: ", averagePrice);

// const onError = (errorMessage) => console.log("Error ❌", errorMessage);

// calculateAveragePrice(products, onSuccess, onError);

//2
// const arr = [1, 2, 3, [4, 5, [7, 8, [9, 10]]]];

// function getTotal(numbers) {
//   let total = 0;

//   for (const number of numbers) {
//     if (Array.isArray(number)) {
//       total += getTotal(number);
//     } else {
//       total += number;
//     }
//   }

//   return total;
// }

// console.log(getTotal(arr));  //49

//4
// const arr = [1, 4, 2, 3];

// console.log(arr.sort((a, b) => a - b));  //[1, 2, 3, 4]
// console.log(arr.sort((a, b) => b - a));  //[4, 3, 2, 1]
// console.log('Original array', arr);  //[4, 3, 2, 1]

// console.log(arr.toSorted((a, b) => a - b)); //[1, 2, 3, 4]
// console.log("Original array", arr);  //[1, 4, 2, 3]
//

//                                    Practice M5-2 mentor

// ********                    map((item, idx, arr) => {})     ******** \\
// const users = [
//   { id: 1, name: "John", age: 28, skills: ["JavaScript", "HTML", "CSS"] },
//   { id: 2, name: "Alice", age: 32, skills: ["Python", "Data Analysis"] },
//   { id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] },
//   { id: 4, name: "Emily", age: 40, skills: ["Java", "Spring"] },
//   { id: 5, name: "David", age: 22, skills: ["C++", "C#"] },
// ];

// const names = users.map((item, idx, arr) => {
//   // console.log(item);
//   return item.name;
// });
// console.log(names); //['John', 'Alice', 'Bob', 'Emily', 'David']

// const names = users.map((item, idx, arr) => item.name);
// console.log(names); //['John', 'Alice', 'Bob', 'Emily', 'David']

// const names = users.map(({ name }) => name);
// console.log(names);

// function customMap() {
//   const result = [];
//   for (let i = 0; i < array.length; i += 1) {
//     result.push(callback(array[i], i, array));
//   }
//   return result;
// }

// ********                    flatMap                   ******** \\
// const users = [
//   { id: 1, name: 'John', age: 28, skills: ['JavaScript', 'HTML', 'CSS'] },
//   { id: 2, name: 'Alice', age: 32, skills: ['Python', 'Data Analysis'] },
//   { id: 3, name: 'Bob', age: 24, skills: ['JavaScript', 'React', 'Node.js'] },
//   { id: 4, name: 'Emily', age: 40, skills: ['Java', 'Spring'] },
//   { id: 5, name: 'David', age: 22, skills: ['C++', 'C#'] },
// ];

// const result = users.flatMap(({ skills }) => {
//   return skills;
// })
// console.log(result); //['JavaScript', 'HTML', 'CSS', 'Python', 'Data Analysis', 'JavaScript', 'React', 'Node.js', 'Java', 'Spring', 'C++', 'C#']

// const result = users.flatMap(({ skills }) => skills);
// console.log(result); //['JavaScript', 'HTML', 'CSS', 'Python', 'Data Analysis', 'JavaScript', 'React', 'Node.js', 'Java', 'Spring', 'C++', 'C#']

// const numbers = [1, 2, 3, 4, [5, 6, [7, 8]]];
// const result = numbers.flatMap(number => number);
// console.log(result); // [1, 2, 3, 4, 5, 6, Array(2)]


// ********             flat             ******** \\

// const numbers = [1, 2, 3, 4, [5, 6, [7, 8]]];

// const result = numbers.flat(2);
// console.log(result);  //[1, 2, 3, 4, 5, 6, 7, 8]

// const result = numbers.flat(999);
// console.log(result);  //[1, 2, 3, 4, 5, 6, 7, 8]

// const result = numbers.flat(0);
// console.log(result);  //[1, 2, 3, 4, Array(3)]

// const result = numbers.flat(1);
// console.log(result);  //[1, 2, 3, 4, 5, 6,  Array(2)]

// function factorial(n) {
//   if (n === 1) {
//     return 1;
//   }
//   else {
//     return n * factorial(n - 1);
//   }
// }
// const result = factorial(4);
// console.log(result); // 24


// ********               filter                         ******** \\
// const users = [
//   { id: 1, name: "John", age: 28, skills: ["JavaScript", "HTML", "CSS"] },
//   { id: 2, name: "Alice", age: 32, skills: ["JavaScript", "Data Analysis"] },
//   { id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] },
//   { id: 4, name: "Emily", age: 40, skills: ["Java", "JavaScript"] },
//   { id: 5, name: "David", age: 22, skills: ["JavaScript", "C#"] },
// ];

// const result = users.filter((user, idx, arr) => user.age > 30);
// console.log(result); //[{ id: 2, name: "Alice", age: 32, skills: ["JavaScript", "Data Analysis"] }, 
// // { id: 4, name: "Emily", age: 40, skills: ["Java", "JavaScript"] }]

// const result = users.filter(({ skills }) => skills.includes("React"));
// console.log(result);  //[{ id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] }]

// const result = users.filter((user, idx, arr) => {
//   if (user.age >= 40) {
//     return true;
//   }
// });
// console.log(result); //[{ id: 4, name: "Emily", age: 40, skills: ["Java", "JavaScript"] }]

// const result = users.filter((user, idx, arr) => {
//   if (user.age >= 50) {
//     return true;
//   }
// });
// console.log(result); //[] 

// const arrSkills = users
//   .flatMap(({ skills }) => skills)
//   .filter((skill, idx, array) => array.indexOf(skill) === idx);
// console.log(arrSkills); //[ "JavaScript", "HTML", "CSS", "Data Analysis", "React", "Node.js", "Java", "C#"]

// const arr = users.flatMap(({ skills }) => skills);
// const result = arr.filter((skill, idx, array) => array.indexOf(skill) === idx);
// console.log(result);

// const arr = users.flatMap(({ skills }) => skills);
// const result = arr.filter((skill, idx, array) => !array.includes(skill, idx + 1));
// console.log(result);


// ********************                       find                      ******** \\
// const users = [
//   { id: 1, name: "John", age: 28, skills: ["JavaScript", "HTML", "CSS"] },
//   { id: 2, name: "Alice", age: 32, skills: ["Python", "Data Analysis"] },
//   { id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] },
//   { id: 4, name: "Emily", age: 40, skills: ["Java", "Spring"] },
//   { id: 5, name: "David", age: 22, skills: ["C++", "C#"] },
// ];
// const result = users.find((user) => user.skills.includes("Python"));
// console.log(result);  //{ id: 2, name: "Alice", age: 32, skills: ["Python", "Data Analysis"] }


// const result = users.find(({ skills }) => skills.includes("Python"));
// console.log(result);  //{ id: 2, name: "Alice", age: 32, skills: ["Python", "Data Analysis"] }

// ********                          findIndex                      ********\\
// const idx = users.findIndex((user) => user.id === 3);
// console.log(idx);  //2

// const result = users.find((user) => user.id === 3);
// console.log(result); //{ id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] }

// ********                       some                        ********\\
// const isKnow = users.some((user) => user.skills.includes("Python"));
// console.log(isKnow);  //true

// const isKnow = users.some(({ skills }) => skills.includes("GraphQL"));
// console.log(isKnow);  //false

// ********                     every                        ********\\

// const result = users.every((user) => user.age > 20 && user.age <= 40);
// console.log(result);  //true

// const result = users.every(({ age }) => age > 35 && age < 40);
// console.log(result);

// ********                    sort               ********\\
// const users = [
//   { id: 1, name: "John", age: 28, skills: ["JavaScript", "HTML", "CSS"] },
//   { id: 2, name: "Alice", age: 18, skills: ["Python", "Data Analysis"] },
//   { id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] },
//   { id: 4, name: "Emily", age: 40, skills: ["Java", "Spring"] },
//   { id: 5, name: "David", age: 22, skills: ["C++", "C#"] },
// ];

// const result = users.sort((currentUser, nextUser) => currentUser.age - nextUser.age);
// console.log(result); //[ возрастание ]

// const result = users.sort((currentUser, nextUser) => nextUser.age - currentUser.age);
// console.log(result); //[ убываание ]

// users.sort((currentUser, nextUser) => nextUser.age - currentUser.age);
// console.log(users);  //[ убываание ]

// ********                    toSorted()               ********\\

// const result = users.toSorted((current, next) => next.age - current.age);
// console.log(result); //[{4}, {1}, {3}, {5}, {2}]
// console.log(users);  ////[{1}, {2}, {3}, {4}, {5}]

// const result = users.toSorted((a, b) => a.name.localeCompare(b.name));
// console.log(result);  //[ возрастание ]

// const result = users.toSorted((a, b) => b.name.localeCompare(a.name));
// console.log(result);  //[ убываание ]

// const result = users.toSorted((a, b) => a.name - b.name);
// console.log(result);  //[original masiv bez zminy]

// ********             reduce(() => {}, )              ********\\
const users = [
  { id: 1, name: "John", age: 28, skills: ["JavaScript", "HTML", "CSS"] },
  { id: 2, name: "Alice", age: 18, skills: ["Python", "Data Analysis"] },
  { id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] },
  { id: 4, name: "Emily", age: 40, skills: ["Java", "Spring"] },
  { id: 5, name: "David", age: 22, skills: ["C++", "C#"] },
];

// const totalAge = users.reduce((acc, item) => {
//   acc += item.age;
//   return acc;
// }, 0);
// console.log(totalAge);  //132

// const totalAge = users.reduce((total, { age }) => total + age, 0);
// console.log(totalAge);  //132

// const result = users.reduce((arr, { name }) => arr.push(name), []);
// console.log(result);

// const result = users.reduce((arr, { name }) => {
//   arr.push(name);
//   return arr;
// }, []);
// console.log(result); //["John", "Alice", "Bob", "Emily", "David"]


// const result = users.reduce((acc, { name }) => acc.push(name), []);
// console.log(result);  //TypeError: acc.push is not a function


// ****************            Практика            **************** \\
// Task-1
// Напишіть функцію, яка використовує метод map, щоб створити новий масив об'єктів, в якому буде 
// інформація про середній бал кожного студента.
// const students = [
//   { name: "John", grades: [80, 85, 90] },
//   { name: "Alice", grades: [90, 95, 92] },
//   { name: "Bob", grades: [70, 80, 75] },
//   { name: "Emily", grades: [95, 92, 88] },
//   { name: "David", grades: [] },
// ];

// function getAverage(arr) {
//   return arr.map(({ name, grades }) => {
//     const total = grades.reduce((acc, value) => acc + value, 0);
//     return {
//       name,
//       average: grades.length ? Math.round(total / grades.length) : total
//     };
//   });
// }
// console.log(getAverage(students));

// Task-2
// Напишіть функцію, яка використовує метод filter, щоб створити новий масив, в якому будуть тільки 
// студенти які старше 20 років
// const students = [
//   { name: "John", age: 20, gpa: 3.8 },
//   { name: "Alice", age: 21, gpa: 3.2 },
//   { name: "Bob", age: 19, gpa: 3.5 },
//   { name: "Emily", age: 22, gpa: 3.9 },
//   { name: "David", age: 20, gpa: 3.7 },
// ];
// function getAdult(arr) {
//   // return arr.filter(({ age }) => age > 20).map(({ name }) => name);
//   return arr.filter(({ age }) => age > 20).map(({ name }) => name).join(', ');
// }
// // console.log(getAdult(students));  //['Alice', 'Emily']
// console.log(getAdult(students));  //['Alice', 'Emily']

// Task-3
// Напишіть функцію, яка використовує метод find, щоб знайти книжку за її назвою (title).
// Якщо книгу не знайдено повертається рядок 'Not found'.
// const books = [
//   { title: "JavaScript: The Good Parts", author: "Douglas Crockford", year: 2008, },
//   { title: "Clean Code: A Handbook of Agile Software Craftsmanship", author: "Robert C. Martin", year: 2008, },
//   { title: "The Pragmatic Programmer: Your Journey to Mastery", author: "Andrew Hunt, David Thomas", year: 1999, },
//   { title: "Design Patterns: Elements of Reusable Object-Oriented Software", author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides", year: 1994, },
//   { title: "Refactoring: Improving the Design of Existing Code", author: "Martin Fowler", year: 1999, },
// ];
// function getBook(arr, title) {
//   const book = arr.find(({ title: bookTitle }) => bookTitle === title);
//   // return book ? book : 'Not found';
//   return book || "Not found";
// }
// console.log(getBook(books, "Design Patterns: Elements of Reusable Object-Oriented Software"));
// console.log(getBook(books, "qwerty"));


// Task-4
// Напишіть функцію, яка використовує метод reduce, щоб обчислити загальну вартість всіх товарів у 
// масиві, яка розраховується як добуток ціни товару на його кількість, а потім сумується з іншими 
// товарами.
//  Результат повинен бути загальною вартістю всіх товарів.
// const products = [
//   { id: 1, name: "T-shirt", price: 20, quantity: 3 },
//   { id: 2, name: "Jeans", price: 50, quantity: 2 },
//   { id: 3, name: "Sneakers", price: 80, quantity: 1 },
//   { id: 4, name: "Hat", price: 15, quantity: 4 },
//   { id: 5, name: "Socks", price: 5, quantity: 6 },
// ];
// function getTotal(arr) {
//   return arr.reduce((total, { price, quantity }) => {
//     total += price * quantity;
//     return total;
//   }, 0);
// }
// console.log(getTotal(products));  //320

// const getTotal = (arr) => arr.reduce((total, { price, quantity }) => total + price * quantity, 0);
// console.log(getTotal(products));


// Task-5
// Напишіть функцію, яка використовує метод sort, щоб відсортувати книжки за роком видання у 
// спадаючому порядку.
// Результат повинен бути відсортованим масивом книжок за роком видання.
const books = [
  { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008 },
  { title: 'Refactoring: Improving the Design of Existing Code', author: 'Martin Fowler', year: 1999 },
  { title: 'Clean Code: A Handbook of Agile Software Craftsmanship', author: 'Robert C. Martin', year: 2008 },
  { title: 'The Pragmatic Programmer: Your Journey to Mastery', author: 'Andrew Hunt, David Thomas', year: 1999 },
  { title: 'Design Patterns: Elements of Reusable Object-Oriented Software', author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides', year: 1994 },
];
// function sortDesc(arr) {
//   return arr.sort((a, b) => b.year - a.year);
// }
// console.log(sortDesc(books));  //copy sort
// console.log(books) //copy

// function sortDesc(arr) {
//   return [...arr].sort((a, b) => b.year - a.year);
// }
// console.log(sortDesc(books));  //copy sort
// console.log(books); //original

// function sortDesc(arr) {
//   return arr.toSorted((a, b) => b.year - a.year);
// }
// console.log(sortDesc(books));  //copy sort
// console.log(books); //original


// Task-6
// Напишіть функцію, яка використовує перебираючі методи масиву map та filter, щоб отримати масив назв 
// продуктів, ціна яких менше 2 доларів та відсортуй їх за алфавітним порядком.
// const products = [
//   { id: 2, name: "Banana", price: 0.99 },
//   { id: 1, name: "Apple", price: 1.99 },
//   { id: 3, name: "Orange", price: 2.49 },
//   { id: 4, name: "Grapes", price: 3.99 },
// ];
// function getProducts(arr) {
//   return arr
//     .filter(({ price }) => price > 2)
//     .map(({ name }) => name)
//     .sort((a, b) => a.localeCompare(b));
// }
// console.log(getProducts(products)); //['Grapes', 'Orange']
// console.log(products); //[{2}, {1}, {3}, {4}] 

// const arr = ["A", "c", "B", "a", "C", "b"];
// console.log(arr.sort((a, b) => a.localeCompare(b))); //['a', 'A', 'b', 'B', 'c', 'C']
// console.log(arr.toSorted());  //['A', 'B', 'C', 'a', 'b', 'c']

// Task-7 HARD 😈
// Є рядок в якому довільна кількість літер, гарантовано в рядку немає пробілів та розділових знаків, 
//потрібно повернути об'єкт де кожна літера буде ключем, а кількість разів яку вона дублюється буде 
//значенням ключа
// Результат на який очікуємо:
// const obj = { a: 3, b: 4, s: 3,
//  // ...
// }

// const str = "absdabsrgbadgtdswwbetflg";
// const result = str.split("").reduce((total, item) => {

//   if (item in total) {
//     total[item] += 1;
//   } else {
//     total[item] = 1;
//   }
//   return total;
// }, {});

// console.log(result);


// const result = str.split("").reduce((acc, item) => {
//   if (item in acc) {
//     //acc.hasOwnProperty(item)
//     acc[item] += 1;
//   } else {
//     acc[item] = 1;
//   }

//   return acc;
// }, {});

// console.log(result);

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];
//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   return filteredNumbers;
// };
// // Добрий вечір. Можна ще раз проговорити про параметри в callback functions. a, b одні і ті самі в обох функціях. Чому вони самі себе повторюють в двох функціях? (дякую)
// function logResult(a, b, callback) {
//   console.log(callback);
//   const result = callback(a, b);
//   console.log(`Result is ${result}`);
// }
// logResult(4, 5, add);

// function add(a, b) {
//   return a + b;
// }
