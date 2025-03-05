//     4.2.    ECMAScript модулі
//     4.3.    Експорт та імпорт за замовчуванням
// import makeMessage from "../module-09.js";

// console.log(makeMessage("Jacob")); // "Welcom, Jacob!"

//      4.4.    Іменовані експорт та імпорт
// import { makeMessage, levels } from "../module-09.js";

// console.log(makeMessage("Jacob")); // "Welcom, Jacob!"
// console.log(levels); // ["easy", "medium", "hard"]

//      4.5.    Перейменування
// import { original as renamed } from '../module-09.js';
// console.log(renamed); // "Hello, World!"

//  4.6.    Імпорт простору імен
import * as user from '../module-09.js';
console.log(user.name); // "Mango"
console.log(user.age); // 26
console.log(user.email); // "mango@mail.com"




// Сторінка Checkout має:
// 1 Список карток доданих товарів, кожна картка має містити кількість куплених товарів 
// та загальна вартість за даний товар, (приклад однієї картки https://prnt.sc/ssZA4rzw1x9L)
// 2 Повідомлення про загальну вартість покупки, якщо кошик порожній, то повідомлення 
// "Your basket is empty"
// 3 Кнопку для очищення кошика, після натискання на неї всі товари видаляються, а користувача 
// перенаправляємо на сторінку Home

// const list = document.querySelector('.js-list');
// const clearBtn = document.querySelector('.js-clear');
// const LS_KEY = 'checkout';
// const products = JSON.parse(localStorage.getItem(LS_KEY)) ?? [];
// const totalPriceLabel = document.querySelector('.js-total-price');

// let totalPrice = 0;

// if (products.length) {
//     clearBtn.hidden = false;
//     totalPrice = products.reduce((acc, { qty, price }) => acc + qty * price, 0);
// }

// totalPriceLabel.textContent = totalPrice
//     ? `Total price ${totalPrice} грн`
//     : "Your basket is empty"

// clearBtn.addEventListener('click', handlerClearBasket);
// function handlerClearBasket() {
//     localStorage.removeItem(LS_KEY);
//     location.href = '../index.html';
// }

// list.insertAdjacentHTML('afterbegin', createMarkup(products))
// function createMarkup(arr) {
//     return arr.map(({ img, name, price, qty }) => `
//         <li class="cart-item">
//            <img class="product-img" src="${img}" alt="${name}">
//            <h2>${name}</h2>
//            <p>Quantity: ${qty}</p>
//            <p>Total price: ${price * qty}грн</p>
//         </li>
//     `).join('');
// }

