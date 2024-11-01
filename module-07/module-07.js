//                              M7 DOM. Подіі
//             1.       Об'єктна модель документа
//  1.3. Пошук HTML елементів за допомогою querySelector() / querySelectorAll()

// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);

//                 2.      Властивості та атрибути
//     2.1.   Доступ до властивостей
// const link = document.querySelector(".link");
// console.log(link.href); // "http://https//goit.global

// link.href = "https://neo.goit.global";
// console.log(link.href); // "https://neo.goit.global/"

//     2.2.   Властивість textContent
// const el = document.querySelector(".text");
// console.log(el.textContent); // "Username: Mango"

// const nested = document.querySelector('span');
// console.log(nested.textContent); // "Mango"

// el.textContent = 'Username: Poly';
// console.log(el.textContent);  //Username: Poly'

// nested.textContent = 'Brian';
// console.log(nested.textContent);  //Brian

//     2.3.     Властивість classList
// const link = document.querySelector(".link");
// console.log(link.classList); //DOMTokenList(2) ['link', 'is-active', value: 'link is-active']

//Метод classList.contains(className)
// const hasActiveClass = link.classList.contains("is-active");
// console.log(hasActiveClass); //true
// console.log(`hasActiveClass - ${hasActiveClass}`);  //hasActiveClass - true

//Метод classList.add(className)
// link.classList.add("special");
// console.log(link.classList); //DOMTokenList(3) ['link', 'is-active', 'special', value: 'link is-active special']

//Метод classList.remove(className)
// link.classList.remove("is-active");
// console.log(link.classList); //DOMTokenList(2) ['link', 'special', value: 'link special']

//Метод classList.remove(className)
// link.classList.toggle("is-active");
// console.log(link.classList);  //DOMTokenList(3) ['link', 'special', 'is-active', value: 'link special is-active']

// link.classList.toggle("is-active");
// console.log(link.classList);  //DOMTokenList(2) ['link', 'special', value: 'link special']

//Метод classList.replace(oldClassName, newClassName)
// link.classList.replace("special", "regular");
// console.log(link.classList);  //DOMTokenList(2) ['link', 'regular', value: 'link regular']

//       2.4. Властивість style
// const button = document.querySelector(".btn");

// button.style.backgroundColor = "teal";
// button.style.fontSize = "24px";
// button.style.textAlign = "center";

// console.log(button.style); // inline styles object

//       2.5.   Доступ до атрибутів
//Метод element.hasAttribute(nameAttribute)
// const link = document.querySelector('.link');
// console.log(link.hasAttribute('href'));  //true
// console.log(link.hasAttribute('target')); //false

//Метод element.getAttribute(nameAttribute)
// console.log(link.getAttribute('href'));  //https://goit.global
// console.log(link.getAttribute('target'));  //null

//Метод element.setAttribute(nameAttribute, value)
// link.setAttribute('target', '_blank');
// console.log(link.getAttribute('target'));
// console.log(link); //<a class="link is-active" href="//https://goit.global" target="_blank">A random link</a>

// link.setAttribute('href', 'https://goit.randome.global');
// console.log(link.getAttribute('href'));

//Метод element.removeAttribute(nameAttribute)
// link.removeAttribute('target');
// console.log(link.hasAttribute('target'));  //false

//          2.6   Власні атрибути
const saveBtn = document.querySelector('button[data-action="save"]');
console.log(saveBtn.dataset.action); //save

const closeBtn = document.querySelector('button[data-action="close"]');
console.log(closeBtn.dataset.action); //close

// Змінюємо значення data-action для кнопки saveBtn
saveBtn.dataset.action = "update";
// Додаємо новий data-атрибут data-role
saveBtn.dataset.role = "admin";

console.log(saveBtn.dataset.action); // "update"
console.log(saveBtn.dataset.role); // "admin"
console.log(saveBtn);


const heading = document.createElement("h1");










//                         Practice M7-1 Mentor

// ******     Пошук HTML елементу за допомогою querySelector      ****** \\
//        1.     За назвою тегу
// const title = document.querySelector('h1');
// console.log(title);

//        2.     За назвою класу
// const title = document.querySelector('.js-title');
// console.log(title);  //<h1 class="title js-title" id="title">Hello world</h1>

//        3. За ID
// const title = document.querySelector('#title');
// // console.log(title);  //<h1 class="title js-title" id="title">Hello world</h1> 
// console.dir(title);  //h1#title.title.js-title - object

// const title = document.querySelector('.js_title');
// console.log(title)

// ******Пошук HTML елементів за допомогою querySelectorAll****** \\

// const items = document.querySelectorAll('li')
// console.log(items);  //NodeList(3) [li.js-item, li.js-item, li.js-item]

// Перетворення колекції до масиву
// console.log(Array.from(items));  //(3) [li.js-item, li.js-item, li.js-item]
// console.log([...items]); //(3)[li.js - item, li.js - item, li.js - item]


// const items = document.querySelectorAll('.js-item')
// console.log(items);  //NodeList(3) [li.js-item, li.js-item, li.js-item]

// Перетворення колекції до масиву
// console.log(Array.from(items));  //(3) [li.js-item, li.js-item, li.js-item]
// console.log([...items]); //(3)[li.js - item, li.js - item, li.js - item]

// ******        Створення HTML елементів за допомогою createElement****** \\
// const list = document.querySelector(".js-list");

// const li = document.createElement("li");
// const h2 = document.createElement("h2");
// // console.dir(h2);

// h2.textContent = "Hello world";

// li.append(h2);
// list.append(li);
// console.log(list);

// ******       Створення HTML елементів за допомогою шаблонної розмітки****** \\
// const list = document.querySelector(".js-list");
// const title = 'Hello world';
// const li = `<li> <h2>${title}</h2> </li>`;
// // Метод insertAdjacentHTML
// list.insertAdjacentHTML('beforeend', li);
// console.log(list);

//or
// const list = document.querySelector(".js-list");
// const title = 'Hello world';
// list.insertAdjacentHTML('beforeend', `<li> <h2>${title}</h2> </li>`)
// console.log(list);

// Властивість innerHTML
// const list = document.querySelector(".js-list");
// const title = 'Hello world';
// const li = `<li> <h2>${title}</h2> </li>`;
// list.innerHTML = li;
// console.log(list);

// const list = document.querySelector(".js-list");
// const title = document.getElementById('title')
// console.log(title)

// const list = document.querySelector(".js-list");
// console.log(list.children)
// const dynamicArr = document.getElementsByClassName("js-item");
// const staticArr = document.querySelectorAll(".js-item");

// list.insertAdjacentHTML(
//   "beforeend",
//   '<li class="js-item">Item 4</li><li class="js-item">Item 5</li><li class="js-item">Item 6</li>'
// );

// console.log(dynamicArr);

// console.log(staticArr);

// ******Стилізація за допомогою властивості style****** \\

// const list = document.querySelector(".js-list");

// list.style.listStyle = 'none';
// list.style.color = 'red'
// list.style.fontSize = '20px'

// ******Стилізація за допомогою властивості classList****** \\

// console.dir(list)

// Метод add
// list.classList.add('list')
// Метод remove

// list.classList.remove('list')
// list.classList.remove('secondList')
// Метод toggle
// list.classList.toggle('list')
// list.classList.toggle('list')

// ******Системні атрибути****** \\
// const btn = document.querySelector('.js-btn');
// btn.hidden = true;
// btn.hidden = false;
// btn.disabled = true;

// методи для роботи з атрибутами

// console.log(btn.hasAttribute('hidden'))
// console.log(btn.getAttribute('disabled'))
// btn.setAttribute('disabled', true);
// btn.removeAttribute('disabled')

// ******Data атрибути****** \\

// const btn = document.querySelector('.js-btn');

// console.dir(btn)

// console.log(btn.getAttribute('data-btn-custom-super-id'))
// console.log(btn.dataset.btnCustomSuperId)

// ***************************Практика************************* \\
// Потрібно створити розмітку з картками автомобілів.
// Для створення розмітки використовуй масив cars.

// Варіант-1
// Створи розмітку використовуючи метод createElement

// Варіант-2
// Створи розмітку використовуючи приклад шаблонної розмітки

// const cars = [
//     {
//         id: 1,
//         model: "Honda",
//         type: "Civic",
//         price: 12000,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//     },
//     {
//         id: 2,
//         model: "Audi",
//         type: "Q7",
//         price: 40000,
//         img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//     },
//     {
//         id: 3,
//         model: "BMW",
//         type: "5 series",
//         price: 9000,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//     },
//     {
//         id: 4,
//         model: "Honda",
//         type: "Accord",
//         price: 20000,
//         img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//     },
//     {
//         id: 5,
//         model: "Volvo",
//         type: "XC60",
//         price: 7000,
//         img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//     },
// ];

// *******Варіант-1******* \\

// const list = document.querySelector(".js-list");
// function createMarkup(arr) {
//   return arr.map(({ id, model, type, price, img }) => {
//     const liEL = document.createElement("li");
//     const imgEl = document.createElement("img");
//     const h2EL = document.createElement("h2");
//     const h3El = document.createElement("h3");
//     const pEl = document.createElement("p");

//     liEL.setAttribute("data-car-id", id);

//     imgEl.src = img;
//     imgEl.alt = model;
//     imgEl.style.width = "300px";

//     h2EL.textContent = model;
//     h3El.textContent = type;
//     pEl.textContent = price;

//     liEL.append(imgEl, h2EL, h3El, pEl);
//     return liEL;
//   });
// }
// list.append(...createMarkup(cars))

// *******Варіант-2******* \\
// const list = document.querySelector(".js-list");

// function createMarkup(arr) {
//     return arr.map(
//         ({ id, model, type, price, img }) => `
//     <li data-car-id="${id}">
//         <img src="${img}" alt="${model}" width="300">
//         <h2>${model}</h2>
//         <h3>${type}</h3>
//         <p>${price}</p>
//     </li>
// `).join('')
// }

// list.insertAdjacentHTML('afterbegin', createMarkup(cars))