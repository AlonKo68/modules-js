//    *****************   9       Формат JSON      ****************
//1.1.*****        Стандарт JSON
// {
//     "name": "Josh",
//     "weight": 175,
//     "age": 30,
//     "eyecolor": "brown",
//     "isHappy": true,
//     "cars": ["Chevy", "Honda"],
//     "favoriteBook": {
//     "title": "The Last Kingdom",
//     "author": "Bernard Cornwell",
//     "rating": 8.38
//     }
// }

//1.2.******      Перетворення у json
// const dog = { name: "Mango", age: 3, isGoodBoy: true, };

// const json = JSON.stringify(dog);
// console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'

//1.3.****        Перетворення функцій
// const dog = {
//     name: "Mango", age: 3, isGoodBoy: true,
//     bark() { console.log("Woof!"); },
// };

// const json = JSON.stringify(dog);
// console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'

//1.4.****        Парсинг із json
//перетворенню y JavaScript об'єкт
// console.log(JSON.parse("5")); // 5
// console.log(JSON.parse("false")); // false
// console.log(JSON.parse("null")); // null

// const json = '{"name":"Mango","age":3,"isGoodBoy":true}';
// const dog = JSON.parse(json);
// console.log(dog); // {name: "Mango", age: 3, isGoodBoy: true}
// console.log(dog.name); // "Mango"

//1.5.****        Обробка помилок
// const data = JSON.parse("Well, this is awkward");
// console.log("❌ You won't see this log"); //Error

// const data = JSON.parse('{username: "Mango"}');
// console.log("❌ You won't see this log");  //Error

//1.6.****       Рішення 
// try {
//     const data = JSON.parse("Well, this is awkward");
// } catch (error) {
//     console.log(error.name); // "SyntaxError"
//     console.log(error.message); // Unexpected token 'W', "Well, this"... is not valid JSON
// }

// console.log("✅ This is fine, we handled parsing error in try...catch"); //✅ This is fine, we handled parsing error in try...catch

// try {
//     const data = JSON.parse("Well");
// } catch (data) {
//     console.log(data);
// }

//            2.         Вебсховище
//2.1****           Сookie
//2.2*****           Web Storage API
//2.4****            Локальне сховище
//отримати в об’єкті window:
// console.log(window.localStorage);  // Storage {length: 0}

//прямий доступ до об’єкта localStorage
// console.log(localStorage);// Storage {length: 0}

//2.5****          Додавання даних
//Метод setItem(key, value)
// localStorage.setItem("ui-theme", "light");
// console.log(localStorage); // Storage {ui-theme: "light", length: 1}

//2.6****          Додавання складних даних
// const settings = { theme: "dark", isAuthenticated: true, options: [1, 2, 3], };
// localStorage.setItem("settings", JSON.stringify(settings));
// console.log(localStorage);  //Storage {settings: '{"theme":"dark","isAuthenticated":true,"options":[1,2,3]}', length: 1}

//2.7****          Отримання даних
//Метод getItem(key)
// const savedTheme = localStorage.getItem("ui-theme");
// console.log(savedTheme); // "light"

// const savedItem = localStorage.getItem("key-that-does-not-exist");
// console.log(savedItem); // null

// const settings = {
//     theme: "dark",
//     isAuthenticated: true,
//     options: [1, 2, 3],
// };
// localStorage.setItem("settings", JSON.stringify(settings));
// console.log(localStorage);

// const savedSettings = localStorage.getItem("settings");
// console.log(savedSettings); // A string

// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings); // Settings object

//2.8****              Видалення даних
//Метод removeItem(key)
// localStorage.setItem("ui-theme", "dark");
// console.log(localStorage.getItem("ui-theme")); // "dark"

// localStorage.removeItem("ui-theme");
// console.log(localStorage.getItem("ui-theme")); // null

//метод clear()
// localStorage.setItem("ui-theme", "light");
// localStorage.setItem("notif-level", "mute");

// console.log(localStorage);
// // Storage {notif-level: 'mute', ui-theme: 'light', length: 2}

// localStorage.clear();
// console.log(localStorage); // Storage {length: 0}

//2.9****             Сховище сесії
// console.log(window.sessionStorage); // Storage {length: 0}

//Методом setItem(key, value) можна записувати як рядки, так і складні типи даних.
// sessionStorage.setItem("user-id", "123");
// sessionStorage.setItem(
//     "tickets",
//     JSON.stringify({ from: "Lviv", to: "Kyiv", quantity: 2 })
// );
// console.log(sessionStorage);
// Storage {user-id: '123', tickets: '{"from":"Lviv","to":"Kyiv","quantity":2}', length: 2}

//Методом getItem(key) можна читати записи, використовуючи збережений ключ.
// const userId = sessionStorage.getItem("user-id");
// console.log(userId); // "123"

// const tickets = JSON.parse(sessionStorage.getItem("tickets"));
// console.log(tickets); // { from: "Lviv", to: "Kyiv", quantity: 2 }

//І звісно, видаляти елементи за ключем і очищати сховище цілком методами removeItem(key) і clear() відповідно.
// sessionStorage.removeItem("tickets");
// console.log(sessionStorage); // Storage {user-id: '123', length: 1}

// sessionStorage.clear();
// console.log(sessionStorage); // Storage {length: 0}

//2.10****      Кейс: Форма з повідомленням
// const form = document.querySelector(".feedback-form");
// const textarea = form.elements.message;
// console.log(textarea);
// const localStorageKey = "goit-example-message";

// textarea.value = localStorage.getItem(localStorageKey) ?? "";

// form.addEventListener("input", (evt) => {
//     localStorage.setItem(localStorageKey, evt.target.value);
// });

// form.addEventListener("submit", (evt) => {
//     evt.preventDefault();
//     console.log(evt.target.elements.message.value);
//     localStorage.removeItem(localStorageKey);
//     form.reset();
// });

//                  4. Модульність коду
//  4.1.  Модульність коду

//  4.2.   ECMAScript модулі
// function makeMessage(username) {
//     return `Welcome, ${username}!`;
// }
// console.log(makeMessage("Jacob")); // "Welcom, Jacob!"

//      4.3.    Експорт та імпорт за замовчуванням
// export default function makeMessage(username) {
//     return `Welcome, ${username}!`;
// }

//      4.4.    Іменовані експорт та імпорт
// export const makeMessage = username => {
//     return `Welcome, ${username}!`;
// };
// export const levels = ["easy", "medium", "hard"];

//       4.5.    Перейменування
// export const original = "Hello, World!";

// 4.6.     Імпорт простору імен
export const name = "Mango";
export const age = 26;
export const email = "mango@mail.com";




//             Practice    mentor m9-1

// ***********     localStorage     *************** \\
// const LS_KEY = "Array of names";
// const names = ["Alice", "Kate", "Emma"];

//     *****       Збереження в LS     ***** \\
// localStorage.setItem(LS_KEY, JSON.stringify(names));
// localStorage.setItem("Array of names", JSON.stringify(names));

//    *****      Читання з LS       ***** \\
// const value = localStorage.getItem(LS_KEY);
// console.log(value);
// console.log(typeof value);
// // console.log(JSON.parse(value));

// const jsArr = JSON.parse(value);
// console.log(jsArr);
// jsArr.forEach((el) => console.log(el));

// const arr = localStorage.getItem("Array of...");
// console.log(arr); //null

//          *******    try....catch()  **********
// const someValue = 11;
// try {
//     console.log(someValue); //11
// } catch (error) {
//     console.error(error);
// }
// console.log('after try catch'); //'after try catch'

// console.log(someValue); //Error
// try {
//     console.log(someValue);
// } catch (error) {
//     console.error(error);
// }
// console.log('after try catch'); //'after try catch'

// try {
//     console.log(someValue);
// } catch (error) {
//     console.error(error); //Error
// } finally {
//     spinner.close()
//     console.log('finally'); //Error
// }

//           *****       Видалення з LS    ***** \\
// const LS_KEY = "Array of names";
// const names = ["Alice", "Kate", "Emma"];
// localStorage.removeItem(LS_KEY);

// localStorage.removeItem('tye')

// *****Очищення LS******* \\

// localStorage.clear()

//   ***    Чому варто завжди використовувати метод JSON.stringify   ***\\

// const LS_KEY = 'Array of names';
// const names = ['Alice', 'Kate', 'Emma'];
// localStorage.setItem(LS_KEY, names);
// const value = localStorage.getItem(LS_KEY);
// console.log(value); //Alice,Kate,Emma
// console.log(typeof value); //string

// // const valueResult = value.split(',');
// // console.log(valueResult); //['Alice', 'Kate', 'Emma']

// const result = JSON.parse(value);
// console.log(result); //Error

// ***    LS не може зберігати функції в жодній з їх інтерпретацій   ***\\.

// const LS_KEY = "my function";
// function add(a, b) {
//     return a + b;
// }
// console.log(add);
// localStorage.setItem(LS_KEY, add);
// const result = localStorage.getItem(LS_KEY);
// console.log(result);   // 'function add(a, b) {return a + b;}'
// console.log(typeof result); //string

// localStorage.setItem(LS_KEY, JSON.stringify(add));
// const result = localStorage.getItem(LS_KEY);
// console.log(result);   // undefined
// console.log(typeof result); //string

// const parseFunc = JSON.parse(result);
// console.log(parseFunc); //Error

// const LS_KEY = "my function";
// const calculator = {
//     a: 5, b: 10,
//     add() { return this.a + this.b }
// }
// localStorage.setItem(LS_KEY, calculator);
// localStorage.setItem(LS_KEY, JSON.stringify(calculator))
// console.log(localStorage.getItem(LS_KEY));

// *************          Практика        *************** \\
// Застосувати готові стилі з файлу style.css
// Потрібно створити інтернет-магазин в якому буде 2 сторінки.

// Сторінка Home має:
// 1 Містити картки товарів (приклад однієї картки https://prnt.sc/klV2uzLIcG8w)
// 2 На списку товарів реалізовано делегування подій на додавання товару в кошик
// 3 Для додавання товару в кошик використовуй LS
// 4 Під час додавання контролюй кількість доданих товарів, для цього створи в об'єкті 
// доданого товару новий ключ quantity

// Сторінка Checkout має:
// 1 Список карток доданих товарів, кожна картка має містити кількість куплених товарів 
// та загальна вартість за даний товар, (приклад однієї картки https://prnt.sc/ssZA4rzw1x9L)
// 2 Повідомлення про загальну вартість покупки, якщо кошик порожній, то повідомлення 
// "Your basket is empty"
// 3 Кнопку для очищення кошика, після натискання на неї всі товари видаляються, а користувача 
// перенаправляємо на сторінку Home

// const products = [
//     {
//         id: 3, img: "https://static.dnipro-m.ua/cache/products/1335/catalog_origin_325102.jpg",
//         name: "Шліфмашина", price: 1299,
//         description: "Кутова шліфувальна машина Dnipro-M GS-98 – модель, яка поєднує в собі оптимальне співвідношення потужності, ваги та мобільності. Конструкція шліфмашини сприяє зручній та надійній роботі, навіть однією рукою. Інструмент ідеально підходить для виконання різу на висоті та використання у важкодоступних місцях. Низький рівень шуму та вібрації, двопозиційне розташування додаткової рукоятки під кутом 100 градусів, мінімізує втому під час шліфування.",
//     },
//     {
//         id: 4, img: "https://static.dnipro-m.ua/cache/products/8284/catalog_origin_322127.jpg",
//         name: "Пила", price: 11049,
//         description: "Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL призначена для обрізання зайвих гілок, спилювання дерев та чагарника, заготівлі дров, покрою будматеріалів та демонтажних робіт. Її просто використовувати у будь-яких місцях: на висоті, на виїзних роботах, у лісі або саду. При цьому Вам не потрібно буде турбуватися про підключення до мережі.",
//     },
//     {
//         id: 5, img: "https://static.dnipro-m.ua/cache/products/2024/catalog_origin_323413.jpg",
//         name: "Рівень", price: 897,
//         description: "Рівень серії ProVision виробництва DNIPRO-M має не тільки високу точність вимірювань і чудові захисні властивості, а й надає максимальний комфорт користувачеві в процесі експлуатації.",
//     },
//     {
//         id: 6, img: "https://img.joomcdn.net/69671cc829303adb3748fb6d1f1bae5dd39cf3ff_original.jpeg",
//         name: "Тример", price: 3699,
//         description: "Тример електричний Dnipro-M 110 призначений для покосу густої трави, а також кущів з діаметром стовбура до 10 мм.",
//     },
//     {
//         id: 7, img: "https://static.dnipro-m.ua/cache/products/6483/catalog_origin_325859.jpg",
//         name: "Мотокоса", price: 11049,
//         description: "Мотокоса Dnipro-M 43 призначена для покосу трави, чагарників, бур'янів, газонів, а також для заготівлі сіна в невеликих масштабах.    Використовується для польових робіт на садовій ділянці площею до 2000 м2.",
//     },
//     {
//         id: 8, img: "https://static.dnipro-m.ua/cache/products/2745/catalog_origin_319770.jpg",
//         name: "Генератор", price: 10890,
//         description: "Бензиновий генератор GX-25 номінальною потужністю 2,5 кВт забезпечить автономність побутових приладів на дачі або у приватному будинку. Ви зможете одночасно підключити до нього освітлення, холодильник, зарядку телефону, ноутбук та водяний насос.",
//     },
// ];

// const list = document.querySelector(".js-list");
// const LS_KEY = "checkout";

// list.insertAdjacentHTML("afterbegin", createMarkup(products));
// list.addEventListener("click", handlerAddToBasket);

// function handlerAddToBasket(evt) {
//     if (!evt.target.classList.contains("js-add")) {
//         return;
//     }

//     const product = evt.target.closest(".js-product");
//     const productId = Number(product.dataset.productId);
//     const currentProduct = products.find(({ id }) => id === productId);
//     const basket = JSON.parse(localStorage.getItem(LS_KEY)) ?? [];
//     const idx = basket.findIndex(({ id }) => id === productId);

//     if (idx !== -1) {
//         basket[idx].qty += 1;
//     } else {
//         currentProduct.qty = 1;
//         basket.push(currentProduct);
//     }

//     localStorage.setItem(LS_KEY, JSON.stringify(basket));
// }

// function createMarkup(arr) {
//     return arr
//         .map(
//             ({ id, img, name, price, description }) => `
//        <li class="product-card js-product" data-product-id="${id}">
//         <img src="${img}" alt="${name}" class="product-img" />
//         <h2 class="product-title">${name}</h2>
//         <p class="product-description">${description}</p>
//         <p class="product-price">${price} грн</p>
//         <button type="button" class="product-add-btn js-add">Add to basket</button>
//       </li>
//  `
//         )
//         .join("");
// }



