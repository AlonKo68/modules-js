//          m8 -  Події і бібліотеки

//1.  Делегування подій

//1.1.  Поширення подій
//1.2. Спливання подій
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
//     console.log("Parent click handler");
// });

// child.addEventListener("click", () => {
//     console.log("Child click handler");
// });

// descendant.addEventListener("click", () => {
//     console.log("Descendant click handler");
// });

//1.3. Цільовий елемент
// const parent = document.querySelector("#parent");

// parent.addEventListener("click", (event) => {
//     console.log("event.target: ", event.target);
//     console.log("event.currentTarget: ", event.currentTarget);
// });

// 1.4. Припинення спливання
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
//     alert(
//         "Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//     );
// });

// child.addEventListener("click", () => {
//     alert(
//         "Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//     );
// });

// descendant.addEventListener("click", (event) => {
//     event.stopPropagation();
//     alert("Descendant click handler");
// });

// 1.5. Делегування подій
// const box = document.querySelector("div.box");

// box.addEventListener("click", function (event) {
//     console.log(event.target);
// });

// 1.6. Перевірка цільового елемента події
// створити палітру кольорів. Палітра дає можливість вибрати колір по кліку 
// і відображає обраний колір.
// const colorPalette = document.querySelector(".color-palette");
// const output = document.querySelector(".output");

// colorPalette.addEventListener("click", selectColor);

// // This is where delegation «magic» happens
// function selectColor(event) {
//     // if (event.target.nodeName !== "BUTTON") {
//     //     return;
//     // }

//     // const selectedColor = event.target.dataset.color;
//     // console.log(selectedColor);
//     // output.textContent = `Selected color: ${selectedColor}`;
//     // output.style.color = selectedColor;
// }

// // Some helper functions to render palette items
// createPaletteItems();

// function createPaletteItems() {
//     const items = [];
//     for (let i = 0; i < 60; i++) {
//         const color = getRandomHexColor();
//         const item = document.createElement("button");
//         item.type = "button";
//         item.dataset.color = color;
//         item.style.backgroundColor = color;
//         item.classList.add("item");
//         items.push(item);
//     }
//     colorPalette.append(...items);
// }

// function getRandomHexColor() {
//     const letters = "0123456789ABCDEF";
//     let color = "#";

//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }

//     return color;
// }

//                 3. Деструктуризація

//     3.1.  Навіщо потрібна деструктуризація?
// const user = { name: "Jacob", age: 32 };

// Без деструктуризації 
// console.log(user.name); // Jacob
// console.log(user.age); // 32

//Із деструктуризацією 
// const { name, age } = user;
// console.log(name); // Jacob
// console.log(age); // 32

//     3.2.  Деструктуризація об'єктів
// const book = {
//     title: "The Last Kingdom", author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true, rating: 8.38,
// };
// Без деструктуризації 
// const accessType = book.isPublic ? "pulbic" : "private";
// const message = `Book ${book.title} by author ${book.author} with rating ${book.rating} is in ${accessType} access!`;
// console.log(accessType); //public

// Деструктуризуємо
// const { title, author, isPublic, rating } = book;
// const accessType = isPublic ? "pulbic" : "private";
// const message = `Book ${title} by author ${author} with rating ${rating} is in ${accessType} access!`;

//   3.3. Деструктуризація неіснуючих властивостей
// const { title, bookTitle } = book;
// console.log(title); // "The Last Kingdom"
// console.log(bookTitle); // undefined

// const { title, author, coverImage = "https://via.placeholder.com/640/480" } = book;
// console.log(title); // "The Last Kingdom"
// console.log(author); // "Bernard Cornwell"
// console.log(coverImage); // "https://via.placeholder.com/640/480"

//   3.4. Перейменування змінної
// const { title, author: bookAuthor, isPublic, rating: bookRating } = book;
// console.log(title); // "The Last Kingdom"
// console.log(bookAuthor); // "Bernard Cornwell"
// console.log(isPublic); // true
// console.log(bookRating); // 8.38

//  3.5.  Значення за замовчуванням
// const book = {
//     title: "The Last Kingdom",
//     coverImage: "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };
// const {
//     title, coverImage: bookCoverImage = "https://via.placeholder.com/640/480",
// } = book;
// console.log(title); // "The Last Kingdom"
// console.log(bookCoverImage); // "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg"

// const book = {
//     title: "The Dream of a Ridiculous Man",
// };

// const {
//     title,
//     coverImage: bookCoverImage = "https://via.placeholder.com/640/480",
// } = book;

// console.log(title); // "The Dream of a Ridiculous Man"
// console.log(bookCoverImage); // "https://via.placeholder.com/640/480"

//  3.6.  Деструктуризація в циклах
// const books = [
//     { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.38, },
//     { title: "Beside Still Waters", author: "Robert Sheckley", rating: 8.51, },
// ];
// // Без деструктуризації 
// for (const book of books) {
//     console.log(book.title);
//     console.log(book.author);
//     console.log(book.rating);
// }
// //Із деструктуризацією 
// for (const book of books) {
//     const { title, author, rating } = book;

//     console.log(title);
//     console.log(author);
//     console.log(rating);
// }
// //or
// for (const { title, author, rating } of books) {
//     console.log(title);
//     console.log(author);
//     console.log(rating);
// }

//   3.7.   Деструктуризація параметрів
//Без деструктуризації об'єкта:
// function printUserInfo(user) {
//     console.log(`Name: ${user.name}, Age: ${user.age}, Hobby: ${user.hobby}`);
// }
// printUserInfo({ name: "Alice",age: 25, hobby: "dancing" }); // Name: Alice, Age: 25, Hobby: dancing

// //З деструктуризацією об'єкта в тілі функції:
// function printUserInfo(user) {
//     const { name, age, hobby } = user
//     console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
// }
// printUserInfo({ name: "Alice", age: 25, hobby: "dancing" }); // Name: Alice, Age: 25, Hobby: dancing

// //Із деструктуризацією об'єкта в місці оголошення параметрів:
// function printUserInfo({ name, age, hobby }) {
//     console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
// }
// printUserInfo({ name: "Alice", age: 25, hobby: "dancing" }); // Name: Alice, Age: 25, Hobby: dancing

//  3.8.   Патерн «Об'єкт параметрів»
// function doStuffWithBook(title, pages, downloads, rating, isPublic) {
//     // Робимо щось з параметрами
//     console.log(title);
//     console.log(numberOfPages);
// }
// // ❌ Що таке 736? Що таке 10283? Що таке true?
// doStuffWithBook("The Last Kingdom", 736, 10283, 8.38, true);

// function doStuffWithBook(book) {
//     console.log(book.title);
//     console.log(book.pages);
// }
// // ✅ Все зрозуміло
// doStuffWithBook({
//     title: "The Last Kingdom", pages: 736, downloads: 10283, rating: 8.38, isPublic: true,
// });

// function doStuffWithBook(book) {
//     const { title, pages, downloads, rating, isPublic } = book;
//     console.log(title);
//     console.log(pages);
// }

// function doStuffWithBook({ title, pages, downloads, rating, isPublic }) {
//     console.log(title);
//     console.log(pages);
// }

//3.9. Глибока деструктуризація
// const user = {
//     name: "Jacques Gluke", tag: "jgluke",
//     stats: { followers: 5603, views: 4827, likes: 1308, },
// };
// const { name, tag, stats } = user;
// console.log(name); //Jacques Gluke
// console.log(tag);  //jgluke
// console.log(stats); //{ followers: 5603, views: 4827, likes: 1308, }

//   додамо глибоку деструктуризацію 
// const { name, tag, stats: { followers, views, likes }, } = user;
// console.log(name); //Jacques Gluke
// console.log(tag);  //jgluke
// console.log(stats); //Error
// console.log(followers); //5603

// const {
//     name, tag,
//     stats: { followers = 0, views: userViews = 0, likes: userLikes = 0, images = 1 },
// } = user;
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308
// console.log(images); //1

//             4.   Деструктуризація масивів
//   4.1.  Синтаксис
// const color = [200, 255, 100];
// // const [red, green, blue] = color;
// // console.log(`rgb(${red}, ${green}, ${blue})`); // “rgb(200, 255, 100)"

// //   4.2.  Значення за замовчуванням
// const [red, green, blue, alfa = 0.3] = color;

// console.log(`rgba(${red}, ${green}, ${blue}, ${alfa})`); // “rgba(200, 255, 100, 0.3)"

//  4.3.  Часткова деструктуризація
// const color = [200, 255, 100];
// const [red, ...otherColors] = color;

// console.log(red); // 200
// console.log(otherColors); // [255, 100]
// console.log(color);  //[200, 255, 100]

// const user = {
//     name: "Jacob", age: 32, email: "j.cob@mail.com", isOnline: true
// };
// const { name, isOnline, ...otherProps } = user;
// console.log(name); // "Jacob"
// console.log(isOnline); // true
// console.log(otherProps); // {age: 32, email: "j.cob@mail.com"}

//    4.4.  Пропуск значень
// const rgb = [200, 100, 255];
// const [, , blue] = rgb;
// console.log(`Blue: ${blue}`); // "Blue: 255"

//    4.5.  Деструктуризація параметрів
//Без деструктуризації:
// function printFruits(fruits) {
//     console.log(fruits[0], fruits[1], fruits[2]);
// }
// printFruits(["apple", "banana", "orange"]); // "apple banana orange"

//Із деструктуризацією в місці оголошення параметрів:
// function printFruits([firstFruit, secondFruit, thirdFruit]) {
//     console.log(firstFruit, secondFruit, thirdFruit);
// }
// printFruits(["apple", "banana", "orange"]); // "apple banana orange"


//                 practice m8-1 mentor

// ******* Додавання прослуховувача подій на кожен елемент ******* \\
// Отримай колір квадратика по якому було здійснено клік
// const container = document.querySelector('.js-container');

// console.log(container); //div.container.js-container
// console.log(container.children); //[div.box.js-box.red, div.box.js-box.black, div.box.js-box.green]
// console.log(typeof container); //object

// [...container.children].forEach((box) => {
//     box.addEventListener('click', handlerGetColor)
// })
// function handlerGetColor(evt) {
//     console.log(evt.currentTarget);
//     // const color = evt.currentTarget.dataset.color;
//     // console.log(color); //red
//     const color = evt.currentTarget.dataset.color;
//     console.log(color);
// }

// ************** Делегування подій ************** \\
// Отримай колір квадратика по якому було здійснено клік
//1
// const container = document.querySelector('.js-container');
// container.addEventListener('click', handlerGetColor);
// console.log(container);

// function handlerGetColor(evt) {
//     console.log('currentTarget', evt.currentTarget);
//     // console.log('target', evt.target);
//     if (evt.target === evt.currentTarget) {
//         return;
//     }
//     console.log('target', evt.target);
//     const color = evt.target.dataset.color;
//     console.log(color);
// }

//2 
// const container = document.querySelector('.js-container');
// container.addEventListener('click', handlerGetColor);
// console.log(container);
// function handlerGetColor(evt) {
//     console.log('currentTarget', evt.currentTarget);
//     console.log('target', evt.target);
//     if (!evt.target.classList.contains("js-box")) {
//         return;
//     }
//     console.log('target', evt.target);
//     const color = evt.target.dataset.color;
//     console.log(color);
// }

// **************** stopPropagation **************** \\

// const red = document.querySelector(".js-box-red");
// const green = document.querySelector(".js-box-green");
// const black = document.querySelector(".js-box-black");

// red.addEventListener('click', handlerClick);
// green.addEventListener('click', handlerClick);
// black.addEventListener('click', handlerClick);

// function handlerClick(evt) {
//     // console.log(evt.currentTarget.id);
//     const isConfirm = confirm(`click на елементі ${evt.currentTarget.id}, 
//         викликати метод stopPropagation?`);

//     if (isConfirm) {
//         evt.stopPropagation();
//     }
//     console.log(evt.currentTarget.id);
// }

// **************** stopImmediatePropagation **************** \\

// const red = document.querySelector(".js-box-red");

// red.addEventListener("click", firstHandlerClick);
// red.addEventListener("click", secondHandlerClick);
// red.addEventListener("click", thirdHandlerClick);

// function firstHandlerClick(e) {
//     alert("First handler");

//     const isConfirm = confirm("Викликати метод stopImmediatePropagation ? ");

//     if (isConfirm) {
//         e.stopImmediatePropagation();
//     }
// }

// function secondHandlerClick(e) {
//     alert("Second handler");

//     const isConfirm = confirm("Викликати метод stopImmediatePropagation?");

//     if (isConfirm) {
//         e.stopImmediatePropagation();
//     }
// }

// function thirdHandlerClick(e) {
//     alert("Third handler");

//     const isConfirm = confirm("Викликати метод stopImmediatePropagation?");

//     if (isConfirm) {
//         e.stopImmediatePropagation();
//     }
// }

// **************** Практика **************** \\
// 1.Створи картки з товарами на основі масиву products, 
// приклад картки https://prnt.sc/KmgDlzqOIA3M
// 2. Реалізуй делегування подій на колекції карток
// Після кліку на картку повинно з'являтись модальне вікно з
//  детальною інформацією про продукт, приклад модального 
// вікна https://prnt.sc/vWNoCeZcw7ii
// Для реалізації модального вікна використай бібліотеку 
// basicLightbox (https://github.com/electerious/basicLightbox)

const products = [
    {
        id: 1, img: "https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG",
        name: "Монітор", price: 3000,
        description: "23-дюймовий монітор з Full HD роздільною здатністю.",
    },
    {
        id: 2, img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX",
        name: "Ноутбук", price: 20000,
        description: "Легкий та потужний ноутбук з 15-дюймовим дисплеєм та SSD.",
    },
    {
        id: 3, img: "https://cdn.27.ua/799/66/39/6841913_1.jpeg",
        name: "Смартфон", price: 8000,
        description: "Оснащений потрійною камерою та багатоядерним процесором.",
    },
    {
        id: 4, img: "https://cdn.27.ua/799/b6/16/4371990_1.jpeg",
        name: "Планшет", price: 12000,
        description: "10-дюймовий планшет з високою продуктивністю та Retina дисплеєм.",
    },
];
// // 1 Створи картки з товарами на основі масиву
const list = document.querySelector('.js-products');
function createMarkup(arr) {
    return arr.map(({ id, img, name, price, }) =>
        `<li class="item js-item" data-product-id="${id}">
            <img src="${img}" alt="${name}">
            <h2>${name}</h2>
            <p>Ціна: ${price} грн</p>
        </li>`
    ).join("")
}
list.insertAdjacentHTML('afterbegin', createMarkup(products))

list.addEventListener('click', handlerGetProduct);
function handlerGetProduct(evt) {
    if (evt.currentTarget === evt.target) {
        return;
    }
    // console.log(evt.target);
    // console.log(evt.currentTarget);
    const parent = evt.target.closest('.js-item');
    // console.log(parent);

    const currentId = Number(parent.dataset.productId);
    // console.log(currentId);
    const currentProduct = products.find(({ id }) => id === currentId);
    // console.log(currentProduct);

    // library modalwindow
    const instance = basicLightbox.create(`
       <div class="modal">
          <img src="${currentProduct.img}" alt="${currentProduct.name}">
          <h2>${currentProduct.name}</h2>
          <h3>${currentProduct.price}</h3>
          <p>${currentProduct.description}</p>
        </div>
    `);
    instance.show();
    instance.show(() => console.log('lightbox now visible'));
}

// library
console.log(basicLightbox);








// list.append()
// list.appendChild()

// const fragment = document.createDocumentFragment();

// fragment.appendChild(document.createElement("li"));


// console.log(fragment)

// list.appendChild(fragment)

