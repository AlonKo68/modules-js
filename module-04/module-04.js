//                        1.       об'єкт

//            Створення об'єкта

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };
// console.log(apartament);

//     Вкладені властивості i Доступ до властивостей через крапку

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// const apartamentImgUrl = apartment.imgUrl;
// console.log(apartamentImgUrl); //'https://via.placeholder.com/640x480'

// console.log(apartment.tags); //['premium', 'promoted', 'top']
// console.log(apartment.tags[0]); //premium
// console.log(apartment.tags.length); //3

// const ownerName = apartment.owner.name;
// console.log(ownerName); //Henry
// const ownerPhone = apartment.owner.phone; //'982-126-1588'
// const ownerEmail = apartment.owner.email; //'henry.carter@aptmail.com'

//           Доступ до вкладених властивостей

// const numberOfTags = apartment.tags.length;
// console.log(numberOfTags); //3
// const firstTag = apartment.tags[0];
// console.log(firstTag); //premium
// const lastTag = apartment.tags[apartment.tags.length - 1]; //'top'
// console.log(lastTag);

//     Доступ до властивостей через квадратні дужки
// console.log(apartment.price); //2153
// console.log(apartment['price']); //2153

// const propKey = 'rating';
// console.log(apartment.propKey); //undefined
// // but
// console.log(apartment[propKey]); //4

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
//   location: {
//     country: 'Jamaica',
//     city: 'Kingston',
//   },
// };
//          Зміна значення властивостей

// apartment.rating = 4.7;
// console.log(apartment.rating); //4.7
// console.log((apartment.price = 5000)); //5000

// apartment.tags.push('trusted');
// console.log(apartment.tags); //['premium', 'promoted', 'top', 'trusted']

//      Додавання властивостей

// apartment.area = 60;
// apartment.rooms = 3;
// console.log(apartment);

//           Короткі

// const name = "Henry Sibola";
// const age = 25;
// const user = {
//   name,
//   age,
// };
// console.log(user.name); // "Henry Sibola"
// console.log(user.age); // 25

//         Обчислювальні властивості

// const propName = "name";
// const user = {
//   age: 25,
//   [propName]: 'Henry Sibola', // ключ цієї властивості буде взято зі значення змінної propName
// };
// console.log(user.name); // "Henry Sibola"

//                      2.   Перебір об'єкта

//         Цикл for...in

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };
// for (const key in book) {
//   console.log(key);
// }

/* 2.1 
Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі, а в 
масив values всі значення його властивостей.  */

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [apartment.descr, apartment.rating, apartment.price];
// console.log(values);
// for (const key in apartment) {
//   keys.push(key);
// }
// console.log(keys);  //['descr', 'rating', 'price']

//     Метод Object.keys()

// const keys = Object.keys(apartment);
// console.log(keys);

// const book = {
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// // console.log(keys);  //['author', 'denres', 'rating']
// for (const key of keys) {
//   console.log(key); //'author'  //denres'  //'rating'
//   console.log(book[key]); //'Bernard Cornwell'  //['historical prose', 'adventure']  //8.38
// }

/* 2.2.1
Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of. Запиши у змінну keys 
масив ключів властивостей об'єкта apartment, і додай в масив values всі значення його 
властивостей. */

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// console.log(keys);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(values);

/* 2.2.2
Виконай рефакторинг функції countProps(object), замінивши перебір ключів за допомогою циклу for…in 
на метод Object.keys() для отримання масиву властивостей. Функція має повернути кількість 
властивостей в об'єкті object. */

// function countProps(object) {
//   //   let propCount = 0;
//   //   for (const key in object) {
//   //     if (object.hasOwnProperty(key)) {
//   //       propCount += 1;
//   //     }
//   //   }
//   //   return propCount;

//   //   const keys = Object.keys(object);
//   //   console.log(keys);
//   //   return keys.length;

//   let propCount = 0;
//   for (const key in object) {
//     propCount += 1;
//   }
//   return propCount;
// }
// console.log(countProps({})); //0
// console.log(countProps({ name: 'Mango', age: 2 })); //2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); //3

//            Метод Object.values()
// 3.1
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// console.log(keys); //['author'  //denres'  //'rating']
// console.log(values); //['Spacious apartment in the city center', 4, 2153]

/* 3.2
Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries) в якості параметра. Кожна 
властивість об'єкта salaries — це ключ, що містить ім'я співробітника, та значення - його відповідна 
зарплатня. Доповни код функції countTotalSalary(salaries) так, щоб вона повертала загальну суму 
зарплат всіх співробітників.
Поради:
Ініціалізуй змінну totalSalary зі значенням 0, яка буде відповідати за загальну суму зарплат усіх 
співробітників
Використай метод Object.values() для отримання значень (зарплат) з об'єкта salaries
Пройдись по отриманих значеннях за допомогою циклу та додай кожне значення до змінної totalSalary.
Поверни totalSalary як результат */

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const values = Object.values(salaries);
//   for (const value of values) {
//     totalSalary += value;
//   }
//   return totalSalary;
// }
// console.log(countTotalSalary({})); //0
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); //330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); //400

//             3.   Масив об’єктів

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

//    Пошук об'єкта за значенням властивості

/* 3.1
Доповни код функції так, щоб вона шукала об'єкт продукту з певним ім'ям (властивість name) в масиві 
products і повертала його ціну (властивість price). Якщо продукт з такою назвою не знайдений, функція 
повинна повертати null. */

// function getProductPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
//   for (const product of products) {
//     // console.log(product.name);
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
// }
// console.log(getProductPrice('Radar')); //1300
// console.log(getProductPrice('Grip')); //1200
// console.log(getProductPrice('Scanner')); //2700
// console.log(getProductPrice('Droid')); //400
// console.log(getProductPrice('Engine')); //undefined / null

//      Колекція значень властивості
// const books = [
//   { title: 'The Last Kingdom', author: 'Bernard Cornwell', rating: 8.2 },
//   { title: 'Beside Still Waters', author: 'Robert Sheckley', rating: 9 },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 6.8,
//   },
// ];
// const titles = [];
// for (const book of books) {
//   titles.push(book.title);
// }
// console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]

// let totalRating = 0;
// for (const book of books) {
//   totalRating += book.rating;
// }
// console.log(totalRating); //24
// const averageRating = totalRating / books.length;
// console.log(averageRating); // 8

/* 3.2 
Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) 
властивості. Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного 
об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна 
повернути порожній масив.  */

// function getAllPropValues(propName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
//   const result = [];
//   for (const product of products) {
//     if (product[propName] !== undefined) {
//       result.push(product[propName]);
//     }
//   }
//   return result;
// }
// console.log(getAllPropValues('name')); //["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues('quantity')); //[4, 3, 7, 9]
// console.log(getAllPropValues('price')); //[1300, 2700, 400, 1200]
// console.log(getAllPropValues('category')); //[]

/* 3.2.2    "Вартість товару"
Доповни код функції так, щоб вона повертала загальну вартість (ціна * кількість) товару з таким 
ім'ям з масиву products. Якщо продукту з такою назвою немає, то функція повинна повертати рядок 
"Product <productName> not found!" , де <productName> — це ім'я товару.  */

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }
//   return `Product ${productName} not found!`;
// }
// console.log(calculateTotalPrice('Blaster')); //"Product Blaster not found!"
// console.log(calculateTotalPrice('Radar')); //5200
// console.log(calculateTotalPrice('Droid')); //2800
// console.log(calculateTotalPrice('Grip')); //10800
// console.log(calculateTotalPrice('Scanner')); //8100

//                  Методи об'єкта

// const bookShelf = {
//   books: ['The Last Kingdom', 'Dream Guardian'],
//   // Це метод об'єкта
//   getBooks() {
//     return 'Returning all books';
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
// };
// // Виклики методів
// bookShelf.getBooks();
// console.log(bookShelf.getBooks()); //"Returning all books"
// bookShelf.addBook('New book 1');
// console.log(bookShelf.addBook('New book 1')); //"Adding book New book 1"
// bookShelf.addBook('New book 2');
// console.log(bookShelf.addBook('New book 2')); //"Adding book New book 2"

/* 4.
До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення інвентарю. 
Програма має додавати, видаляти, шукати та оновлювати зілля */

// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return 'List of all available potions';
//   },
//   addPotion(potionName) {
//     return `Adding ${potionName}`;
//   },
// };
// atTheOldToad.addPotion('Invisibility');
// console.log(atTheOldToad.getPotions('Invisibility')); //Adding Invisibility
// atTheOldToad.addPotion('Power potion');
// console.log(atTheOldToad.getPotions('Power potion')); //Adding Power potion
// atTheOldToad.getPotions();
// console.log(atTheOldToad.getPotions()); //List of all available potions

//        Доступ до властивостей об'єкта

// const bookShelf = {
//   books: ['The Last Kingdom', 'The Mist'],
//   getBooks() {
//     console.log(this); // {books: ["The Last Kingdom", "The Mist"], getBooks: f}
//   },
// };

// bookShelf.getBooks();

//  this

// const bookShelf = {
//   books: ['The Last Kingdom', 'The Mist'],
//   getBooks() {
//     return this.books;
//   },
// };

// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist']

//4.1
// const atTheOldToad = {
//   potions: ['Speed potion', 'Stone skin'],
//   getPotions() {
//     return this.potions;
//   },
// };
// console.log(atTheOldToad.getPotions());

//        Зміна за посиланням

// const bookShelf = {
//   books: ['The Last Kingdom'],
// };
// bookShelf.books.push('The Mist');
// console.log(bookShelf.books); // ["The Last Kingdom", "The Mist"]

// const bookShelf = {
//   books: ['The Last Kingdom'],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
// };
// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook('The Mist');
// bookShelf.addBook('Dream Guardian');
// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]

//4.2
// const atTheOldToad = {
//   potions: ['Speed potion', 'Stone skin'],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     return this.potions.push(potionName);
//   },
// };
// atTheOldToad.getPotions();
// console.log(atTheOldToad.getPotions()); //["Speed potion", "Stone skin"]
// atTheOldToad.addPotion('Invisibility');
// console.log(atTheOldToad.getPotions());
// atTheOldToad.addPotion('Power potion');
// console.log(atTheOldToad.getPotions());

// const atTheOldToad = {
//   potions: ['Speed potion', 'Stone skin'],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
// };
// atTheOldToad.getPotions();
// console.log(atTheOldToad.getPotions()); //["Speed potion", "Stone skin"]
// atTheOldToad.addPotion('Invisibility');
// console.log(atTheOldToad.getPotions());
// atTheOldToad.addPotion('Power potion');
// console.log(atTheOldToad.getPotions());

//       Масив об’єктів

// const bookShelf = {
//   books: [
//     { title: 'The Last Kingdom', rating: 8 },
//     { title: 'The Mist', rating: 6 },
//   ],
//   getBooks() {
//     return this.books;
//   },
//   addBook(newBook) {
//     this.books.push(newBook);
//   },
// };
// bookShelf.addBook({ title: 'Dream Guardian', rating: 9 });
// console.log(bookShelf.getBooks());

// const bookShelf = {
//   books: [
//     { title: 'The Last Kingdom', rating: 8 },
//     { title: 'The Mist', rating: 6 },
//   ],
//   getAvarageRating() {
//     let totalRating = 0;
//     for (const book of this.books) {
//       console.log(book.rating);
//       totalRating += book.rating;
//     }
//     return totalRating / this.books.length;
//   },
// };
// bookShelf.getAvarageRating();
// console.log(bookShelf.getAvarageRating()); // 7

// 4.3
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;
//     for (const potion of this.potions) {
//       totalPrice += potion.price;
//     }
//     return totalPrice;
//   },
// };
// atTheOldToad.getPotions(); // console.log(atTheOldToad.getPotions());
// atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
// atTheOldToad.addPotion({ name: 'Power potion', price: 270 }); // console.log(atTheOldToad.getPotions());
// atTheOldToad.getTotalPrice();
// console.log(atTheOldToad.getTotalPrice());

//                  Зміна об'єкта в масиві

// const bookShelf = {
//   books: [
//     { title: 'The Last Kingdom', rating: 8 },
//     { title: 'The Mist', rating: 6 },
//   ],
//   changeRating(bookName, newRating) {
//     for (const book of this.books) {
//       if (book.title === bookName) {
//         book.rating = newRating;
//       }
//     }
//   },
// };
// bookShelf.changeRating('The Mist', 9);
// bookShelf.changeRating('The Last Kingdom', 4);
// console.log(bookShelf.books);

/* 4.4.
Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName на 
newName в масиві зілля у властивості potions.  */
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//   },
// };
// atTheOldToad.updatePotionName('Stone skin', 'Invisibility'); //[{ name: "Speed potion", price: 460 }, { name: "Invisibility", price: 520 } ]
// atTheOldToad.updatePotionName('Speed potion', 'Polymorth'); //[{ name: "Polymorth", price: 460 }, { name: "Invisibility", price: 520 } ]
// console.log(atTheOldToad.potions);

//                     5. Синтаксис spread і rest

//              Залишкові параметри   ...rest

/* 5.1
Використовуючи синтаксис залишкових параметрів, доповни код функції add() так, щоб вона приймала будь-яку 
кількість аргументів у параметр args і повертала їхню суму.  */
// function add(...args) {
//   //   console.log(args);
//   let sum = 0;
//   for (const arg of args) {
//     sum += arg;
//   }
//   return sum;
// }
// console.log(add(15, 27)); //42
// console.log(add(12, 4, 11, 48)); //75
// console.log(add(32, 6, 13, 19, 8)); //78

//             Збір частини аргументів

/* 5.2.
Функція addOverNum() приймає довільну кількість аргументів чисел.
Доповни код функції таким чином, щоб вона обчислювала суму тільки тих аргументів, які більші за задане 
число. Це число завжди буде передано першим аргументом.  */
// function addOverNum(value, ...args) {
//   let sum = 0;
//   for (const arg of args) {
//     if (arg > value) {
//       sum += arg;
//     }
//   }
//   return sum;
// }
// console.log(addOverNum(50, 15, 27)); //0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); //71
// console.log(addOverNum(15, 32, 6, 13, 19, 8)); //51
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); //218

//           Входження параметрів ...spread
/* 5.3.
Доповни код функції так, щоб вона повертала об'єкт із двома властивостями:

Властивість best має містити найбільше число з масиву scores
Властивість worst має містити найменше число з масиву scores.
Використовуй оператор (...spread) і методи Math.max() і Math.min().  */
// function getExtremeScores(scores) {
//   let minMaxes = {};
//   let best = Math.max(...scores);
//   let worst = Math.min(...scores);
//   return { best, worst };
// }
// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26])); //{ best: 93, worst: 17 }
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));

//             Створення масиву  ...spread
// const temps = [14, -4, 25, 8, 11];
// const copyOfTemps = [...temps]; // Це точна, але незалежна копія масиву temps
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// 5.4.
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// console.log(allScores); //[64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
// const bestScore = Math.max(...allScores);
// console.log(bestScore); //97
// const worstScore = Math.min(...allScores);
// console.log(worstScore); //14

//      Створення об'єкта  ...spread

// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }
// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };
// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }
// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }
// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

// 5.5.
// Доповни код таким чином, щоб у змінній finalSettings утворився об'єкт фінальних налаштувань тесту.
// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);

/*************              ptactice m4-1 mentor               ****************/
// const userA = {
//   username: 'Mango',
//   age: 20,
// };
// const userB = userA;
// console.log(userA === userB);
// userB.age = 30;
// console.log(userB.age); //30
// console.log(userA.age, userB.age);

/**************                    Об'єкт        ******************/
// const user = {
//   name: 'Alice',
//   skills: {
//     html: true,
//     css: true,
//     react: false,
//   },
//   case2: 'some value',
// };
// console.log(user); //{    }

//                          Звернення до властивостей об'єкта //

// const user = {
//   name: 'Alice',
//   skills: {
//     html: true,
//     css: true,
//     react: false,
//   },
//   case2: 'some value',
// };

// console.log(user.name); //Alice
// console.log(user['name']); //Alice

// const objectKey = 'name';
// console.log(user[objectKey]); // = user['name'] Alice

// console.log(user.case2); //some value

//             вкладенність          //

// console.log('css', user.skills.css); //css true
// console.log('css', user['skills'].css); //css true

// console.log('css', user['skills']['css']); //css true
// console.log('css', user.skills['css']); //css true

// const userA = {
//   general: {},
//   basket: {},

//   about: {},
// };
// console.log(userA); //{....}
// console.log(userA.general); //{}

// ****************Зміна значення властивості**************** \\
// const user = {
//   name: 'Alice',
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };
// user.skills.css = false;

// user['skills']['css'] = false;

// user.skills['css'] = false;
// console.log(user.skills.css); //false

// user.city = 'Lviv';
// user['age'] = 28;
// console.log(user); // + city & age

// user.city = 'Odessa';
// user['age'] = 38;
// console.log(user);

// ****************Object.freeze**************** \\
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
// const user = {
//   name: 'Alice',
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };
// Object.freeze(user);
// user.name = 'Kate';
// user.city = 'Lviv';

// user.skills.css = 'some value'; //css = 'some value'

// Object.freeze(user.skills);
// user.skills.css = 'some value'; //css = true
// console.log(user);

// *************       Методи об'єкта       **************** \\
//function declaration
// const user = {
//   name: 'Alice',
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
//   sayHello(city) {
//     console.log(city); //Lviv
//     console.log(`Hello my name ${this.name}`); //Hello my name Alice
//   },
// };
// user.sayHello('Lviv');

// function expt
// const user = {
//   name: 'Alice',
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
//   sayHello: function (city) {
//     console.log(city);
//     console.log(`Hello my name ${this.name}`); //Hello my name Alice
//   },
// };
// user.sayHello('lviv');
// const userA = {
//   name: 'Kate',
//   sayHello: user.sayHello, // посилання на user.sayHello
// };
// userA.sayHello(); //Hello my name Kate

// function sayHello(city) {
//   console.log(this); //object
//   console.log(`Hello my name ${this.name}`); //Hello my name Alice
// }
// console.log(sayHello); //тіло ф-іі
// const user = {
//   name: 'Alice',
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
//   sayHello: sayHello,
// };
// user.sayHello('lviv');

// const user = {
//   name: 'Alice',
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
//   sayHello(city) {
//     console.log(this); //object
//     return `Hello my name ${this.name}`;
//   },
// };
// document.querySelector('h1').textContent = user.sayHello('Lviv');

// ****************      Цикл for...in     **************** \\
// const user = {
//   name: 'Alice',
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };
// for (const key in user) {
//   //   console.log(key);  //name //skills
//   console.log(key, user[key]);
// }

// const user = {
//   name: 'Alice',
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };
// const userA = Object.create(user);
// userA.city = 'Lviv';
// console.log(userA);

// for (const key in userA) {
//   //   console.log(key); //city   //name   //skills
//   console.log(key, userA[key]); // city Lviv  //name Alice  //skills {...}
// }

// *************       Метод Object.keys()       **************** \\
// const user = {
//   name: 'Alice',
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };
// const keys = Object.keys(user);
// console.log(keys); //['name', 'skills']

// const user = {
//   name: 'Alice',
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };
// const userA = Object.create(user);
// userA.city = 'Lviv';
// const keys = Object.keys(userA);
// console.log(keys); //['city']

// for (const key of keys) {
//   console.log(key, user[key]); //name Alice  //skills {...}
// }
// console.log(keys); //['name', 'skills']

// ****************Метод Object.values()**************** \\

// const user = {
//   name: 'Alice',
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };
// const values = Object.values(user);
// console.log(values);  // ['Alice', {., ., .}]

// const values = Object.values(user.skills);
//||
// const values = Object.values(user['skills']);
// console.log(values); //[false, true, false]

// ****************Метод Object.entries()**************** \\

// const user = {
//   name: 'Alice',
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };
// const entries = Object.entries(user);
// console.log(entries);

// const entries = Object.entries(user.skills);
// console.log(entries);

// function foo() {
//   console.log(this);
//   console.log(this.price);
// }

// const productA = {
//   name: 'Cherry',
//   price: 100,
//   showPrice: foo,
// };

// const productB = {
//   name: 'banana',
//   price: 60,
//   showPrice: foo,
// };

// const productC = {
//   name: 'apple',
//   price: 30,
//   showPrice: foo,
// };
// productA.showPrice();
// productB.showPrice();
// productC.showPrice();

// ****************Практика**************** \\
//Task - 1
// Створи функцію яка буде приймати 3 параметри та формувати об'єкт покупки:
// 1 Назва продукту, 2 Кількість одиниць, 3 Ціна за 1 одиницю товару
// Функція має повертати сформований об'єкт з ключами name, price, quantity, totalPrice.
// function createBasket(product, quantity, price) {
//   return {
//     product,
//     quantity,
//     price,
//     totalPrice: price * quantity,
//   };
// }
// console.log(createBasket('pizza', 3, 120)); //{product:'pizza', price: 120, quantity: 3, totalPrice: 360}
// console.log(createBasket('aplle', 13, 1200));

// Task - 2
// Створи функцію для ведення статистики комп'ютерного клубу. Функція приймає 1 параметр це об'єкт
// користувачів де ключ це ім'я користувача, а значення це час оренди у хвилинах.
// Функція повертає рядок з інформацією про те скільки було користувачів та який середній час оренди
// комп'ютер.

// const players = {
//   Den: 60,
//   Kate: 130,
//   William: 45,
//   Matthew: 120,
//   Ethan: 40,
//   David: 55,
// };
// const values = Object.values(players);
// //console.log(values); //[60, 130, 45, 120, 40, 55]

// function getTime(obj) {
//   let total = 0;
//   for (const value of values) {
//     total += value;
//   }
//   return `Count of players ${values.length}, average time ${
//     total / values.length
//   }`;
// }
// console.log(getTime(players));  //Count of players 6, average time 75

// const players = {
//   Den: 60,
//   Kate: 130,
//   William: 45,
//   Matthew: 120,
//   Ethan: 40,
//   David: 55,
// };
// function getTime(obj) {
//   let countPlayers = 0;
//   let totalMinutes = 0;

//   for (const key in obj) {
//     console.log(key); //den // Kate //William // Matthew //Ethan //David
//     totalMinutes += obj[key];
//     countPlayers += 1;
//   }
//   return `Count of players ${countPlayers}, average time ${
//     totalMinutes / countPlayers
//   }`;
// }

// console.log(getTime(players));

// Task - 3
// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є дана книга ("Harry Potter") \\\ "Anna, Oleksii"

// 2 Порахувати вік всіх юзерів у яких є ключ age.

// const friends = [
//   { name: 'Anna', books: ['Bible', 'Harry Potter'], age: 21 },
//   { name: 'Bob', books: ['War and peace', 'Romeo and Juliet'], age: 26 },
//   { name: 'Alice', books: ['War and peace', 'Romeo and Juliet'] },
//   {
//     name: 'Oleksii',
//     books: ['Bible', 'War and peace', 'Harry Potter', 'Romeo and Juliet'],
//     age: 26,
//   },
// ];
// // function getUsers(arr, bookName) {
// //   const userNames = [];
// //   let totalAges = 0;
// //   for (const user of arr) {
// //     if (user.books.includes(bookName)) {
// //       userNames.push(user.name);
// //     }
// //     if (user.age !== undefined) {
// //       totalAges += user.age;
// //     }
// //   }

// //   console.log(totalAges);

// //   //   console.log(userNames); //['Anna', 'Oleksii']
// //   return userNames.join(', '); // перетворює в рядок
// // }
// // console.log(getUsers(friends, 'Harry Potter')); //Anna, Oleksii

// function getTotalAge(arr) {
//   let totalAges = 0;

//   for (const user of arr) {
//     //1
//     // // console.log(user.hasOwnProperty('age'));  //.hasOwnProperty()
//     // if (user.hasOwnProperty('age')) {
//     //   totalAges += user.age;
//     // }
//     //2
//     // if (user.age) {
//     //   totalAges += user.age;
//     // }
//     //3
//     if ('age' in user) {
//       totalAges += user.age; //key in object
//     }
//     //4
//     // if (user.age !== undefined) {
//     //   totalAges += user.age;
//     // }
//   }
//   return totalAges;
// }
// console.log(getTotalAge(friends)); //73

// // Task - 4
// /*1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів
// факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків
// факультету(перевірити чи є властивість points!!!)  */
// const hogvarts = {
//   griffindor: [
//     { name: 'Harry', points: 17 },
//     { name: 'Hermiona', points: 19 },
//     { name: 'Ron', points: 14 },
//   ],
//   slizerin: [
//     { name: 'Draco', points: 17 },
//     { name: 'Goyl', points: 14 },
//     { name: 'Crabbe', points: 5 },
//   ],
//   getUserList(faculty) {
//     if (!(faculty in this)) {
//       return 'Facult not found 😥';
//     }

//     const users = [];
//     for (const student of this[faculty]) {
//       users.push(student.name);
//     }
//     return users.join(', ') + '.';
//   },
//   getTotalPoints(faculty) {
//     if (!(faculty in this)) {
//       return 'not points';
//     }
//     let totalPoints = 0;
//     for (const valuePoints of this[faculty]) {
//       totalPoints += valuePoints.points;
//     }
//     return totalPoints;
//   },
// };
// console.log(hogvarts.getUserList('griffindor')); //Harry, Hermiona, Ron
// console.log(hogvarts.getUserList('slizerin')); // Draco, Goyl, Grabbe
// console.log(hogvarts.getUserList('slitherin')); //Facult not found 😥

// console.log(hogvarts.getTotalPoints('griffindor')); //50
// console.log(hogvarts.getTotalPoints('slizerin')); //36
// console.log(hogvarts.getTotalPoints('slitherin')); //not points

// const arr = ['1', '2', '3', '4', '5', '6'];
// console.log([...arr].map([].pop, arr)); //['6', '5', '4', '3', '2', '1']

//                     Practice M4-2 mentor

// const obj = {
//   sayHello() {
//     console.log('Hello');
//   },
// };
// console.log(obj);

// const values = [10, 3, 17, 84, 12, 6];
// console.log(...values); // 10 3 17 84 12 6
// const minValues = Math.min(...values);
// console.log(minValues);  //3

//4
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [...arr1];
// console.log(arr2); //[1, 2, 3, 4, 5]
// console.log(arr1 === arr2); //false

//5
// const profile = {
//   username: 'Mango',
//   age: 2,
// };
// const profileUpdate = {
//   username: 'Poly',
// };
// const updateProfile = {
//   ...profile,
//   ...profileUpdate,
// };
// console.log(updateProfile); // {username: 'Poly', age: 2 }

//7
// function foo(...args) {
//   console.log(args); //[1, 2, 3, 4, 5] масив
// }
// foo(1, 2, 3, 4, 5);

// //8
// function foo(a, b, c, ...args) {
//   console.log(args); //[4, 5] масив
// }
// foo(1, 2, 3, 4, 5);

// ******************************Деструктуризація масива***************************************\\
// const arr = [1, 2, 3, 4, 5];

// const [first, second, third] = arr;

// console.log(first); //1
// console.log(second); //2
// console.log(third); //3

// const [, , , , last] = arr;
// console.log(last); //5
// console.log(arr);  //[1, 2, 3, 4, 5]

// ******************************Деструктуризація об'єкта***************************************\\
const user = {
  name: 'Test name',
  skills: {
    html: true,
    css: false,
    js: true,
  },
};
const { skills, name } = user;
console.log(skills); //{html: true, css: false, js: thue}
console.log(name); //Test name

// const skills = ['html', 'css', 'js'];

// const { skills: userSkills } = user; //зміна назви ключа на userSkills
// console.log(user); //{ ... }
// console.log(skills); //['html', 'css', 'js']
// console.log(userSkills); //{html: true, css: false, js: thue}

// const name = user.name;
// const skills = user.skills;

// ************************Глибока деструктуризація об'єкта***************************************\\

// const user = {
//     name: 'Test name',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     },
//     languages: {
//         ukrainian : true,
//         spanish: false
//     },
//     sayHello(){
//         console.log(this)
//         console.log('hello')
//     }
// }

// const {skills : {
//     html: skillHTML, css, js
// }, skills, languages : {
//     ukrainian, spanish
// }, sayHello} = user;

// console.log(ukrainian)
// console.log(sayHello)
// sayHello()
// user.sayHello()

// *********************Деструктуризація об'єкта в параметрах функції******************************\\

// const user = {
//     name: 'Test name',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }

// *********Без деструктуризації
// function getUserName(obj) {
//     console.log(`Hello my name is ${obj.name}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js -${obj.skills.js}`);
// }

// getUserName(user)

// *********З деструктуризацією
// const user = {
//   name: "Test name",
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };
// function getUserName({name, skills: {html, css,js}= {}} = {}) {
//   console.log(
//     `Hello my name is ${name}, I know html - ${html}, css - ${css} and js -${js}`
//   );
// }

// getUserName(user);

// *************************Деструктуризація об'єкта в циклі***********************************\\

// const users = [{ name: "Kate" }, { name: "Alex" }, { name: "Mark" }];

// function getAllPropValues(prop) {
//   const result = [];
//   for (const user of users) {
//     if (user.hasOwnProperty(prop)) {
//       // prop in user

//       result.push(user[prop]);
//     }
//   }

//   return result;
// }
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("qwerty"));

// ********Без деструктуризації*******
// const names = [];

// for (const user of users) {
//     names.push(user.name)
// }

// console.log(names);

// ********З деструктуризацією*********
// const names = [];

// for (const {name} of users) {
//     names.push(name)
// }

// console.log(names);

// *************************Операція rest та spread********************************\\

// const numbers = [1, 2, 3];
// const copy = [...numbers]; //spread
// console.log(numbers === copy)

// const numbers = [1, 2, 3];
// const [first, ...args] = numbers; // rest
// console.log(first)
// console.log(args)

// ************Операція rest та spread в функціях********************************\\

// const numbers = [1, 2, 3];

// function foo(...props){//rest [1,2,3]

// }
// foo(...numbers)// spread // 1 , 2 ,3

// const names = ['Alice', 'Kate', 'Emma'];

// function foo(first, second, third) {
//     console.log('first', first);
//     console.log('second', second);
//     console.log('third', third);
// }

// foo(...names) // foo('Alice', 'Kate', 'Emma')// spread

// const names = ['Alice', 'Kate', 'Emma'];
// function foo(first, second, ...args) { //rest
//     console.log(first);
//     console.log(second);
//     console.log(args);
// }

// foo('Alice', 'Kate', 'Emma', 'Mia', 'Lily')

// const user = {
//     name: 'Test name',
//     age: 22,
//     city: 'Lviv',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }

// function foo({ name, age, ...props }) {
//     console.log(name);
//     console.log(age);
//     console.log(props);
// }
// foo(user)

// const user = {
//     name: 'Test name',
//     age: 22,
//     city: 'Lviv',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }

// function foo({ name, skills: {html, ...props2}, ... props}) {
//     console.log(name);
//     console.log(html);
//     console.log(props);
//     console.log(props2);
// }
// foo(user)

// Task - 1 - Деструктуризація
// Деструктуризуй об'єкт таким чином щоб отримати значення name, surname, username

// const user = {
//     id: 1,
//     username: 'harry_potter',
//     profile: {
//       name: 'Harry',
//       surname: 'Potter',
//       age: 25
//     }
//   };

// Деструктуризація об'єкта для отримання окремих змінних
// const  {username, profile : {name , surname}} = user;

// Виведення отриманих значень
// console.log(`Ім'я користувача: ${name}`);
// console.log(`Прізвище користувача: ${surname}`);
// console.log(`Ім'я користувача (за нікнеймом): ${username}`);

// Task - 2 Деструктуризація
// Допиши функцію таким чином щоб кожна властивість об'єкта product була незалежним параметром

// const product = {
//     name: 'Smart TV',
//     price: 25000,
//     category: 'Electronics',
//     details: {
//       brand: 'Samsung',
//       color: 'Black',
//       weight: '15.5'
//     }
//   };

// function displayProductInfo({name, price, category, details: {brand, color ,weight} = {}} = {}) {
//     console.log(`Назва товару: ${name}`);
//     console.log(`Ціна: ${price} грн`);
//     console.log(`Категорія: ${category}`);
//     console.log('Деталі:');
//     console.log(`- Бренд: ${brand}`);
//     console.log(`- Колір: ${color}`);
//     console.log(`- Вага: ${weight} кг`);
// }

// displayProductInfo();

// Task - 3 - Операція spread
// Напиши функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в partialContact немає такої властивості.

// function createContact(partialContact) {
//   return {
//     id: Date.now(),
//     createdAt: new Date(),
//     list: "default",
//     ...partialContact,
//   };
// }

// console.log(
//   createContact({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );
// console.log(
//   createContact({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

// Task - 4 - Операція rest
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// function transformUsername({ firstName, lastName, ...props }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...props,
//   };
// }

// function transformUsername(obj) {
//   const result = {};
//   for (const prop in obj) {
//     if (prop === "firstName" || prop === "lastName") {
//       continue;
//     }

//     result[prop] = obj[prop];
//   }

//   result.fullName = obj.firstName + " " + obj.lastName;

//   return result;
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@mail.com",
//     friendCount: 40,
//   })
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: "Adrian",
//     lastName: "Cross",
//     email: "a.cross@hotmail.com",
//     friendCount: 20,
//   })
// );

// Task - 5 Об'єкт параметрів
// Необхідно зрoбити рефакторинг функції calculateHousePerimeter, так щоб вона приймала об'єкт з параметрами будинку, включаючи довжини сторін будинку. Функція повинна розрахувати та повернути периметр будинку.

// function calculateHousePerimeter({ sideA: a, sideB: b, sideC: c, sideD: d }) {
//   const perimeter = a + b + c + d;
//   return perimeter;
// }

// const perimeter = calculateHousePerimeter({
//   sideA: 10,
//   sideB: 15,
//   sideC: 10,
//   sideD: 15,
// });
// console.log(`Периметр будинку: ${perimeter}`);
