//                               Модуль 6. ООП.Класи

//           1. Контекст виконання функції

//1.1. Ключове слово this

// const user = {
//     username: "Victor",
//     showName() {
//         // ❌ Віктор біжить швидко, тому що Віктор намагається зловити поїзд
//         console.log(user.username);  //Victor
//     },
// };

// user.showName();

// const user = {
//     username: "Victor",
//     showName() {
//         // ✅ Віктор біжить швидко, тому що він (this) намагається зловити поїзд.
//         console.log(this.username);  //Victor
//     },
// };

// user.showName();

//1.1. Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this в місцях звернення до 
// властивостей і методів об'єкта.
// const pizzaPalace = {
//     pizzas: ["Supercheese", "Smoked", "Four meats"],
//     checkPizza(pizzaName) {
//         return this.pizzas.includes(pizzaName);
//     },
//     order(pizzaName) {
//         const isPizzaAvailable = this.checkPizza(pizzaName);

//         if (!isPizzaAvailable) {

//             return `Sorry, there is no pizza named «${pizzaName}»`;
//         }
//         // console.log(isPizzaAvailable);
//         return `Order accepted, preparing «${pizzaName}» pizza`;
//     },
// };
// console.log(pizzaPalace.order("Smoked")); //"Order accepted, preparing «Smoked» pizza"
// console.log(pizzaPalace.order("Four meats"));  //"Order accepted, preparing «Four meats» pizza"
// console.log(pizzaPalace.order("Big Mike"));  //"Sorry, there is no pizza named «Big Mike»"
// console.log(pizzaPalace.order("Viennese"));  //"Sorry, there is no pizza named «Viennese»"

//       1.2.        Глобальний контекст

// function foo() {
//     console.log(this);
// }
// foo(); // window - не в суворому режимі

// "use strict";
// function foo() {
//     console.log(this);
// }
// foo(); // undefined - У суворому режимі

//        1.3.         Контекст методу об'єкта

// const user = {
//     username: "Poly",
//     showThis() {
//         console.log(this);
//     }
// };
// user.showThis(); // {username: "Poly", showThis: ƒ}

// "use strict";
// function showThis() {
//     console.log("this in showThis: ", this);
// }
// const user = {
//     username: "Poly",
// };
// user.showContext = showThis;
// // Викликаємо в контексті об'єкта
// user.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}
// // Викликаємо в глобальному контексті
// showThis(); // "this in showThis: undefined"

// "use strict";
// const book = {
//     updateAuthor(newAuthor) {
//         //... Об'єкт book
//         console.log(this);  //Jacob
//     }
// };
// console.log(book.updateAuthor("Jacob"));  //undefined

// const book = {
//     updateTitle(newTitle) {
//         console.log(this);
//         //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
//     }
// };
// const update = book.updateTitle;
// update("Lord Of The Rings");

//            1.4. Метод call()

//Сигнатура методу call**()** виглядає так:     foo.call(thisArg, arg1, arg2, ...)

//створимо функцію greet, яка вітає різних користувачів готелю, кожен з яких представлений об'єктом з 
// властивостями username і room.Функція приймає один параметр, str — рядок привітання.
// function greet(str) {
//     console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }
// const mango = { username: "Mango", room: 27 }
// const poly = { username: "Poly", room: 191 };
// greet.call(mango, "Welcome"); // "Welcome, Mango, your room is 27!"
// greet.call(poly, "Aloha"); // "Aloha, Poly, your room is 191!"

// function showName() {
//     console.log(this.name);  //Alice
// }

// const user = {
//     name: "Alice",
// };
// showName.call(user)

//             1.5. Метод apply()

//Сигнатура методу apply**()** виглядає так:     foo.apply(thisArg, [arg1, arg2, ...])

// function greet(str) {
//     console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }
// const mango = { username: "Mango", room: 27 };
// const poly = { username: "Poly", room: 191 };

// greet.apply(mango, ["Welcome"]); // "Welcome, Mango, your room is 27!"
// greet.apply(poly, ["Aloha"]); // "Aloha, Poly, your room is 191!"

//           1.6.    Метод bind() і втрата контексту

//Сигнатура методу bind() виглядає так:    const boundFoo = foo.bind(thisArg, arg1, arg2, ...)

// "use strict";
// const customer = { username: "Jacob", sayHello() { console.log(`Hello, ${this.username}!`); } };
// customer.sayHello(); // "Hello, Jacob!"
// const greet = customer.sayHello;
// greet(); // TypeError: Cannot read properties of undefined (reading 'username')

//При спробі звернутися до властивості this.username під час виклику функції greet(), виникає помилка, 
// оскільки undefined — це навіть не об'єкт.
// Це можна виправити, прив'язавши контекст за допомогою методу bind.

// "use strict";
// const customer = { username: "Jacob", sayHello() { console.log(`Hello, ${this.username}!`); } };
// customer.sayHello(); // "Hello, Jacob!"
// const greet = customer.sayHello.bind(customer);
// greet(); // "Hello, Jacob!"

// function sayHello(greeting) {
//     console.log(`${greeting}, ${this.name}!`);
// }
// const user = { name: "Alice" };
// const greet = sayHello.bind(user);
// greet("Hello");  //Hello, Alice!

//         1.7. Метод bind() і колбеки

// приклад втрати контексту, коли ми передаємо метод об'єкта як колбек-функцію:
// "use strict";
// const customer = {
//     firstName: "Jacob", lastName: "Mercer",
//     getFullName() { return `${this.firstName} ${this.lastName}`; }
// };
// function makeMessage(callback) {
//     // callback() — це виклик методу getFullName в глобальному контексті
//     const username = callback();
//     console.log(`Processing an application from ${username}`);
// }
// makeMessage(customer.getFullName);
// // TypeError: Cannot read properties of undefined (reading 'firstName')

//Щоб уникнути цієї втрати контексту, можна використати метод bind().
// const customer = {
//     firstName: "Jacob", lastName: "Mercer",
//     getFullName() { return `${this.firstName} ${this.lastName}`; }
// };
// function makeMessage(callback) {
//     const username = callback();
//     console.log(`Processing an application from ${username}`);
// }
// makeMessage(customer.getFullName.bind(customer)); // "Processing an application from Jacob Mercer"

// const library = {
//     books: 1923, logBookCount() { console.log(this.books); }
// };
// const showBooks = library.logBookCount.bind({ books: 724 });
// showBooks();  //724

// "use strict";
// const library = { books: 1923, logBookCount() { console.log(this.books); } };
// function showBooks(callback) {
//     callback()
// }
// showBooks(library.logBookCount); //Cannot read properties of undefined (reading 'books')

//but
// "use strict";
// const library = { books: 1923, logBookCount() { console.log(this.books); } };
// function showBooks(callback) {
//     callback()
// }
// showBooks(library.logBookCount.bind(library)); // 1923

//         1.8.     Стрілочні функції

// const showThis = () => { console.log("this in showThis: ", this); };
// showThis(); // this in showThis: window

//Навіть якщо присвоїти посилання на стрілочну функцію у властивість об'єкта і викликати її в 
// контексті цього об'єкта, this усе одно буде посилатися на об'єкт, який функція запам'ятала в 
// момент її оголошення.
// const showThis = () => { console.log("this in showThis: ", this); };
// const user = { username: "Mango", };
// user.showContext = showThis;
// user.showContext(); // this in showThis: window

//Стрілочні функції також ігнорують наявність суворого режиму.
// "use strict";
// const showThis = () => { console.log("this in showThis: ", this); };
// showThis(); // this in showThis: window

// const hotel = {
//     username: "Resort hotel",
//     showThis() {
//         const foo = () => { console.log("this in foo: ", this); };
//         foo();
//         console.log("this in showThis: ", this);
//     },
// };
// hotel.showThis();
// // this in foo: {username: 'Resort hotel', showThis: ƒ}
// // this in showThis: {username: 'Resort hotel',showThis: ƒ}

// const showThis = () => { console.log("this in showThis: ", this); };
// showThis.call({ username: "Mango" }); // this in showThis: window
// showThis.apply({ username: "Mango" }); // this in showThis: window
// const boundShowThis = showThis.bind({ username: "Mango" });
// boundShowThis(); // this in showThis: window

//  !!! Що треба запам’ятати про this у стрілочних функціях:
//1. Контекст ** this ** усередині стрілочної функції визначається місцем її оголошення, а не виклику.
//2. Стрілочні функції ігнорують наявність суворого режиму.Тому в глобальному контексті у стрілці 
//завжди this посилається на об'єкт window.
//3 .Неможливо змінити значення this усередині стрілочних функцій після її оголошення.Методи call, 
// apply і bind не впливають на значення this у стрілках.

//                         2.     Прототипи

//     2.1.   Прототип об'єкта

//      Метод Object.create(obj) -  створює і повертає новий об'єкт, зв'язуючи його з об'єктом obj.

// const animal = { legs: 4, };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }

// console.log(dog.name); // "Mango"
// console.log(dog.legs); // 4

//2.1.1. 
//Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта у змінній сhild.
// const parent = { name: "Stacey", surname: "Moore", age: 54, heritage: "Irish", };
// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(parent.hasOwnProperty("surname"));  //true
// console.log(parent.hasOwnProperty("heritage"));  //true

// console.log(child.hasOwnProperty("name"));  //true
// console.log(child.name); //"Jason"
// console.log(child.hasOwnProperty("age"));  //true
// console.log(child.age);  //27

// console.log(child.hasOwnProperty("surname"));  //false
// console.log(child.surname);  //"Moore" - от parent

// console.log(child.hasOwnProperty("heritage"));  //false +
// console.log(child.heritage);  //"Irish" +  от parent
// console.log(parent.isPrototypeOf(child));  //true +
// console.log(child);

//     2.2.     Перевірка прототипу

//         Метод   objA.isPrototypeOf(objB)
//Метод перевіряє, чи є об'єкт objA прототипом для об’єкта objB повертає true/false

// const customer = { username: "Jacob" };

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }

// console.log(animal.isPrototypeOf(dog)); // true
// console.log(dog.isPrototypeOf(animal)); // false
// console.log(customer.isPrototypeOf(dog)); // false


//     2.3    Власні і невласні властивості

// console.log(dog); // {name: "Mango", [[Prototype]]: animal}

// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false
// console.log(dog.legs); //4

//     2.4.   Перебір власних властивостей

// for (const key in dog) {
//     console.log(key); // "name" "legs"
// }
//but
// for (const key in dog) {
//     if (dog.hasOwnProperty(key)) {
//         console.log(key); // "name"
//     }
// }

// console.log(Object.keys(dog)); // ["name"]
// console.log(Object.values(dog)); // ["Mango"]

// for (const key of Object.keys(dog)) {
//     console.log(key); // "name"
// }

//     2.5.   Ланцюжки прототипів

// const objC = { c: "objC prop" };

// const objB = Object.create(objC);
// objB.b = "objB prop";

// const objA = Object.create(objB);
// objA.a = "objA prop";

// console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
// console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
// console.log(objC); // { c: "objC prop", [[Prototype]]: Object }

// console.log(objA.hasOwnProperty("a")); // true
// console.log(objA.a); // "objA prop"

// console.log(objA.hasOwnProperty("b")); // false
// console.log(objA.b); // "objB prop"

// console.log(objA.hasOwnProperty("c")); // false
// console.log(objA.c); // "objC prop"

// console.log(objA.hasOwnProperty("x")); // false
// console.log(objA.x); // undefined

//2.5.1 
//Зміни код, побудувавши ланцюжок прототипів таким чином, щоб об'єкт ancestor був прототипом для 
//parent, а той, своєю чергою, був прототипом для child.
// const ancestor = { name: "Paul", age: 83, surname: "Dawson", heritage: "Irish", };

// console.log(ancestor.hasOwnProperty("surname")); //true
// console.log(ancestor.surname);  //"Dawson"
// console.log(ancestor.hasOwnProperty("heritage"));  //true
// console.log(ancestor.heritage);  //"Irish"
// console.log(ancestor.isPrototypeOf("parent"));  //false

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// console.log(parent.hasOwnProperty("surname")); //true
// console.log(parent.surname);  //"Moore"
// console.log(parent.hasOwnProperty("heritage")); //false
// console.log(parent.heritage);  //"Irish"


// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(parent.isPrototypeOf("child")); //false
// console.log(child.hasOwnProperty("heritage"));  //false
// console.log(child.heritage);  //"Irish"

//     2.4    Кінець ланцюжка прототипів

// Наприкінці ланцюжка прототипів завжди знаходиться посилання на базовий клас, від якого походить 
// тип даних у ланцюжку.У нашому випадку objB — це об'єкт, тому в кінці ланцюжка буде посилання на 
// клас Object.

//                  4.    Класи

//      4.1  Оголошення класу

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();
// console.log(poly); // {}

//         4.2   Конструктор класу

// class User {
//     constructor() {
//         console.log("constructor call"); // "constructor call"
//     }
// }
// const mango = new User();
// console.log(mango); // {}

// class User {
//     constructor(name, email) {
//         console.log(name, email);  // "Mango mango@mail.com"
//     }
// }
// const mango = new User("Mango", "mango@mail.com");
// console.log(mango); // {}

// class User {
//     constructor(name, email) {
//         // Ініціалізація властивостей екземпляра
//         this.name = name;
//         this.email = email;
//     }
// }
// const mango = new User("Mango", "mango@mail.com");
// console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

// const poly = new User("Poly", "poly@mail.com");
// console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }

//4.2.1
// class Car {
//     constructor(brand, model, price) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
// }
// const carAudi = new Car("Audi", "Q3", 36000);
// console.log(carAudi); //Car {brand: 'Audi', model: 'Q3', price: 36000}
// const carBmw = new Car("BMW", "X5", 58900);
// console.log(carBmw);  //Car {brand: 'BMW', model: 'X5', price: 58900}
// const carNissan = new Car("Nissan", "Murano", 31700);
// console.log(carNissan);

//        4.3.     Об'єкт параметрів

// class User {
//     constructor(params) {
//         this.name = params.name;
//         this.email = params.email;
//     }
// }
// const mango = new User({
//     name: "Mango",
//     email: "mango@mail.com",
// });
// console.log(mango);  // User { name: "Mango", email: "mango@mail.com" }

//4.3.1.
// class Car {
//     constructor(params) {
//         this.brand = params.brand;
//         this.model = params.model;
//         this.price = params.price;
//     }
// }
// const carAudi = new Car({ brand: "Audi", model: "Q3", price: 36000 });
// console.log(carAudi);
// const carBmw = new Car({ brand: 'BMW', model: 'X5', price: 58900 });
// console.log(carBmw);
// const carNissan = new Car({ brand: "Nissan", model: "Murano", price: 31700 });
// console.log(carNissan);

//        4.4.    Методи класу

// class User {
//     constructor(params) {
//         this.name = params.name;
//         this.email = params.email;
//     }
//     getEmail() {
//         return this.email;
//     }
//     changeEmail(newEmail) {
//         this.email = newEmail;
//     }
// }
// const mango = new User({ name: "Mango", email: "mango@mail.com" });
// console.log(mango.getEmail()); // "mango@mail.com"

// mango.changeEmail("new@mail.com");
// console.log(mango.getEmail()); // "new@mail.com"

//4.4.1. 
// class Car {
//     constructor(params) {
//         this.brand = params.brand;
//         this.model = params.model;
//         this.price = params.price;
//     }
//     getPrice() {
//         return this.price;
//     }
//     changePrice(newPrice) {
//         this.price = newPrice;
//     }
// }
// const carAudi = new Car({ brand: "Audi", model: "Q3", price: 36000 });
// console.log(carAudi.getPrice()); //36000
// carAudi.changePrice(50000);
// console.log(carAudi.getPrice());  //50000

//        4.5. Прототип екземпляру

// class User {
//     constructor(params) {
//         this.name = params.name;
//         this.email = params.email;
//     }
//     getEmail() {
//         return this.email;
//     }
//     changeEmail(newEmail) {
//         this.email = newEmail;
//     }
// }
// console.log(User.prototype); // {constructor: ƒ, getEmail: ƒ, changeEmail: ƒ}

//        4.6.   Приватні властивості

// class User {
//     // Необов'язкове оголошення публічних властивостей
//     name;
//     // Обов'язкове оголошення приватних властивостей
//     #email;
//     constructor(params) {
//         this.name = params.name;
//         this.#email = params.email;
//     }
// }
// const mango = new User({
//     name: "Mango",
//     email: "mango@mail.com",
// });
// console.log(mango.name); // "Mango"
// console.log(mango.#email); // Виникне помилка, це приватна властивість

//4.6.1  
// class Car {
//     #brand;
//     model;
//     price;
//     constructor(params) {
//         this.#brand = params.brand;
//         this.model = params.model;
//         this.price = params.price;
//     }
//     getBrand() {
//         return this.#brand;
//     }
//     changeBrand(newBrand) {
//         this.#brand = newBrand;
//     }
// }
// const carAudi = new Car({ brand: "Audi", model: "Q3", price: 36000 });
// console.log(carAudi.getBrand());

// const carBmw = new Car({ brand: 'BMW', model: 'X5', price: 58900 });
// console.log(carBmw);

// const carNissan = new Car({ brand: "Nissan", model: "Murano", price: 31700 });
// console.log(carNissan);

// carAudi.changeBrand('Honda');
// console.log(carAudi.getBrand());

//       4.7.     Приватні методи

// class User {
//     name;
//     #email;
//     constructor(params) {
//         this.name = params.name;
//         this.#email = params.email;
//     }
//     // Публічний метод для отримання електронної пошти
//     getEmail() {
//         return this.#email;
//     }
//     // Публічний метод для зміни електронної пошти
//     changeEmail(newEmail) {
//         if (this.#validateEmail(newEmail)) {
//             this.#email = newEmail;
//         } else {
//             console.log('Invalid email format');
//         }
//     }
//     // Приватний метод для валідації електронної пошти
//     #validateEmail(email) {
//         return email.includes('@');
//     }
// }
// const mango = new User({ name: 'Mango', email: 'mango@mail.com', });
// // Спробуємо змінити електронну пошту
// mango.changeEmail('newmail.com'); // "Invalid email format"
// mango.changeEmail('new@mail.com');
// console.log(mango.getEmail()); // "new@mail.com"

// // Прямий виклик приватного методу ззовні призведе до помилки
// mango.#validateEmail('test'); // Помилка

//        4.7  Геттери і сеттери
// class User {
//     #email;
//     constructor(params) {
//         this.name = params.name;
//         this.#email = params.email;
//     }
//     // Геттер email
//     get email() {
//         return this.#email;
//     }
//     // Сеттер email
//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }
// const mango = new User({ name: "Mango", email: "mango@mail.com" });
// console.log(mango.email); // mango@mail.com

// mango.email = "mango@supermail.com";
// console.log(mango.email); // mango@supermail.com

//4.8.1.
// class Car {
//     #brand;
//     #model;
//     #price;
//     constructor(params) {
//         this.#brand = params.brand;
//         this.#model = params.model;
//         this.#price = params.price;
//     }
//     get brand() {
//         return this.#brand;
//     }
//     set brand(newBrand) {
//         this.#brand = newBrand;
//     }
// }
// const carAudi = new Car({ brand: "Audi", model: "Q3", price: 36000 });
// console.log(carAudi.brand); //Audi
// carAudi.brand = "Honda";
// console.log(carAudi.brand);  //Honda


//    4.9.     Статичні властивості

// class MyClass {
//     static myProp = "value";
// }
// console.log(MyClass.myProp); // "value"

// const inst = new MyClass();
// console.log(inst.myProp); // undefined

// class User {
//     static roles = {
//         admin: "admin",
//         editor: "editor",
//         basic: "basic"
//     };
//     #email;
//     #role;
//     constructor(params) {
//         this.#email = params.email;
//         this.#role = params.role || User.roles.basic;
//     }
//     get role() {
//         return this.#role;
//     }
//     set role(newRole) {
//         this.#role = newRole;
//     }
// }
// const mango = new User({ email: "mango@mail.com", role: User.roles.admin, });
// console.log(mango.role); // "admin"

// mango.role = User.roles.editor;
// console.log(mango.role); // "editor"

// class MyClass {
//     static b = 5;
//     constructor(value) {
//         this.a = value;
//     }
// }
// const instance = new MyClass(10);
// console.log(instance.b); //undefined
// console.log(MyClass.b); //5













//                       Practice M6-1 mentor
//      Kahut
//3.
// const obj = {
//     foo() {
//         console.log(this);
//     }
// }
// obj.foo();  //object obj

//4.
// "use strict"
// function foo() {
//     console.log(this);  //undrefined
// console.log(foo());
// const obj = {
//     logCtx: foo
// };
// obj.logCtx();  //{logCtx: ƒ}

//5.
// "use strict"
// const objA = {
//     logCtx() {
//         console.log(this);
//     }
// };
// objA.logCtx();  //{logCtx: ƒ}

// const objB = {
//     foo: objA.logCtx()
// };
// objB.foo();  //{logCtx: ƒ}

// Agenda
// 1 Повторення типів функцій
// 2 ПРАВИЛА ВИЗНАЧЕННЯ THIS
// 3 call apply bind

// ***********              Повторення типів функцій            *************\\
// **          Function declaration       **
// function fnDeclaration() {
//     console.log(this);  //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
//     console.log(this.hello); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// }
// fnDeclaration();

// 'use strict'
// function fnDeclaration() {
//     console.log(this);  //undefined
//     console.log(this.hello);  //Uncaught TypeError: Cannot read properties of undefined (reading 'hello')
// }
// fnDeclaration();

// **           Function expression      **
// const fnExpression = function () {
//     console.log(this);  //window
// }
// fnExpression();

// 'use strict'
// const fnExpression = function () {
//     console.log(this);  //undefined
// }
// fnExpression();

// **         Arrow function         **
// 'use strict'
// const fnArrow = () => {
//     console.log(this);
// }

// fnArrow()

//                 ПРАВИЛА ВИЗНАЧЕННЯ THIS
// 1 Визначити з яким типом функції працюємо
// 2 Маємо умовне поділення на два табори
// 2.1 Перший це Function Declaration & Function Expression
// 2.2 Другий це Arrow Function
// 3 Function Declaration & Function Expression визначають this тим хто їх викликав, перший ліворуч
// 4 Arrow Function в рамках чого вона була створена

// *****      Function declaration  *****\\
// const person = {
//     name: 'Alice',
//     hello() {
//         console.log(this);  //{name: 'Alice', hello: ƒ}
//         console.log(this.name);  //Alice
//     }
// };
// person.hello();

// *****    Function Expression    *****\\
// const person = {
//     name: 'Alice',
//     hello: function () {
//         console.log(this);  //{name: 'Alice', hello: ƒ}
//         console.log(this.name);  //Alice
//     }
// }
// person.hello();

// *****       Arrow Function     *****\\

// const person = {
//     name: "Alice",
//     hello: () => {
//         console.log(this);  //window
//         console.log(this.name); //
//     },
// };
// person.hello();

// const person = {
//     name: "Alice",
//     wrapper() {
//         const hello = () => { console.log(this); };  //{name: 'Alice', wrapper: ƒ}
//         hello();
//     },
// };
// person.wrapper();

// const hello = () => { console.log(this); };  //window
// const person = {
//     name: "Alice",
//     wrapper() { hello(); },
// };
// person.wrapper();

// alert('Hello');   // === window.alert('Hello);
// const hello = () => { console.log(this); };  //window
// const person = {
//     name: "Alice",
//     wrapper() { hello(); },
// };
// person.wrapper();

// const objA = {
//     name: 'Alice',
//     objB: {
//         name: 'Kate',
//         objC: {
//             name: 'David',
//             hello: () => {
//                 console.log(this);
//             }
//         }
//     }
// }
// objA.objB.objC.hello();

//     examples:
//1
// const person = {
//     name: 'Alice',
//     hello() {
//         console.log('1', this);  //1 {name: 'Alice', hello: ƒ}
//         const arrowFn = () => { console.log('arrowFn', this); }  //arrowFn {name: 'Alice', hello: ƒ}
//         arrowFn();
//     }
// }
// person.hello();

//2
// const objA = {
//     name: "Alice",
//     hello() {
//         console.log(this);
//     },
// };
// objA.hello(); //{ name: "Alice", hello: f }
// const objB = {
//     name: 'Kate',
//     hello: objA.hello
// }
// objB.hello();  //{ name: "Kate", hello: f }

//3
// const objA = {
//     name: "Alice",
//     hello() {
//         console.log(this);  //{ name: "Alice", hello: f }
//     },
// };
// objA.hello();
// const objB = {
//     name: 'Kate',
//     hello: objA.hello,
// }
// objB.hello();  //{ name: "Kate", hello: f }
// const fn = objB.hello;
// fn();
// console.log(fn); //ƒ hello() {console.log(this); }

//4
// const objA = { name: "Alice", hello: () => { console.log(this.name); }, };
// const objB = { name: "Kate", hello: objA.hello, };
// objB.hello();


//5 type="module"
// const objA = { name: "Alice", hello: () => { console.log(this.name); }, };
// const objB = { name: "Kate", hello() { objA.hello(); }, };
// objB.hello();

//6
// const objA = {
//     name: "Alice",
//     fn() {
//         return { name: "Kate", hello: () => { console.log(this.name); }, };
//     },
// };
// console.log(objA);  //{name: 'Alice', fn: ƒ}
// const result = objA.fn();
// result.hello(); //Alice

//7
// const objA = {
//     name: "Alice",
//     fn: () => {
//         console.log(this)// undefined
//         return {
//             name: "Kate",
//             hello: () => {
//                 console.log(this.name); // error
//             },
//         };
//     },
// };
// const result = objA.fn();
// result.hello();

// ***********       call apply bind        *********** \\

// *****        call        ***** \\
// const bmw = { brand: "BMW", speed: 100, };
// const audi = { brand: "Audi", speed: 80, };

// function drive(action, place) {
//     console.log(`${this.brand.toUpperCase()} їде зі швидкістю ${this.speed} км/год. ${action}, прямує на ${place}`);
// }
// drive.call(bmw, 'Увімкнути ближнє світло', 'СТО');
// drive.call(audi, "Увімкнути клімат-контроль", "СТО");

// *****         apply         ***** \\
// function drive(action, destination) {
//     console.log(`${this.brand} їде зі швидкістю ${this.speed} км/год я рухаюсь в місто ${destination}. ${this.brand} - ${action}`);
// }
// drive.apply(bmw, ['Увімкнути ближне світло', 'Львів']);
// drive.call(bmw, ...['Увімкнути ближне світло', 'Львів']); //===drive.apply
// drive.apply(audi, ['Увімкнути клімат-контроль', 'Київ']);

// *****        bind          ***** \\
// function drive(action, destination) {
//     console.log(arguments);
//     console.log(`${this.brand} їде зі швидкістю ${this.speed} км/год я рухаюсь в місто ${destination}. ${this.brand} - ${action}`);
// }
// const bmwDrive = drive.bind(bmw);
// bmwDrive('Увімкнути ближнє світло', 'Львів')

// function drive(action, destination) {
//     console.log(arguments);
//     console.log(`${this.brand} їде зі швидкістю ${this.speed} км/год я рухаюсь в місто ${destination}. ${this.brand} - ${action}`);
// }
// const bmwDrive = drive.bind(bmw, 'GO', 'QWERTY');
// bmwDrive('Увімкнути ближнє світло', 'Львів')

// *************************Практика***************************\\

// Task - 1
// Наше завдання написати програмне забезпечення для автомобіля, а саме натискання кнопки набору та зниження 
// швидкості в системі круїз контролю.
// Створити об'єкт cruiseСontrol з методами accelerate та decrease, властивостями speed та brand.

// const cruiseControl = {
//     speed: 40,
//     brand: "Audi",
//     accelerate() {
//         this.speed += 10;
//         console.log(
//             `Автомобіль ${this.brand} прискорюєтья. Поточна швидкість автомобіля ${this.speed}`
//         );
//     },
//     decrease() {
//         if (this.speed <= 0) {
//             console.log("Авто зупинилось");
//             return;
//         }

//         this.speed -= 10;
//         console.log(
//             `Автомобіль ${this.brand} гальмує. Поточна швидкість автомобіля ${this.speed}`
//         );
//     },
// };
// cruiseControl.accelerate();
// cruiseControl.accelerate();
// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();  //Авто зупинилось

// Task - 2
// Потрібно створити систему для продажу в інтернет-магазині. В об'єкті продукту (product) потрібно створити 
// метод discount(буде приймати знижку клієнта в %) та повертати вартість товару з врахуванням знижки
// В об'єкті клієнта (client) який містить ім'я та індивідуальну знижку, потрібно створити метод purchase, 
// який буде викликати метод для розрахунку вартості товару та логувати повідомлення про покупку:
// "Alice придбала товар зі знижкою в 8%, сума до сплати 460грн"
// const product = {
//     name: "Smartphone", price: 500,
//     discount(percent) {
//         return ((this.price * (100 - percent)) / 100).toFixed(2);
//     },
// };
// const client = {
//     name: "Alice", discountPercent: 8,
//     purchase() {
//         const price = product.discount(this.discountPercent);
//         console.log(
//             `${this.name} придбала товар зі знижкою ${this.discountPercent}%, сума до сплати ${price} грн `
//         );
//     },
// };
// client.purchase();

// Task - 3
// Потрібно створити функціонал для контролю швидкості прокатних авто. Створіть функцію яка буде приймати 
// 1 параметр(максимально дозволену швидкість) та виводити повідомлення, чи ми рухаємось з безпечною швидкістю 
// чи перевищуємо, функція має опрацьовувати об'єкт автомобіля як this

// const SAFE_SPEED = 60;
// const tesla = { brand: "Tesla", speed: 30, };
// const audi = { brand: "Audi", speed: 70, };

// function speedSensor(maxSpeed) {
//     // if (this.speed <= maxSpeed) {
//     //     return `${this.brand} рухається з безпечною швидкістю`;
//     // }
//     // return `${this.brand} - Перевищує безпечну швидкість 😱`;

//     return this.speed <= maxSpeed
//         ? `${this.brand} рухається з безпечною швидкістю`
//         : `${this.brand} - Перевищує безпечну швидкість 😱`
// }
// console.log(speedSensor.call(audi, SAFE_SPEED));
// console.log(speedSensor.call(tesla, SAFE_SPEED));

// const rentalAudi = speedSensor.bind(audi, SAFE_SPEED);
// console.log(rentalAudi());  //Audi - Перевищує безпечну швидкість 😱
// audi.speed = 40;
// console.log(rentalAudi());  //Audi рухається з безпечною швидкістю 

// const rentalTesla = speedSensor.bind(tesla, SAFE_SPEED)
// console.log(rentalTesla())
// tesla.speed = 100;
// console.log(rentalTesla())

// console.log(speedSensor.apply(audi, [SAFE_SPEED]));
// console.log(speedSensor.apply(tesla, [SAFE_SPEED]));

// Task-4 Калькулятор
// Створіть об'єкт calculator з трьома методами:
// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.

// const calculator = {
//     read(a, b) {
//         this.a = a;
//         this.b = b;
//     },
//     add() {
//         return (this.a ?? 0) + (this.b ?? 0);
//     },
//     mult() {
//         return (this.a ?? 0) * (this.b ?? 1);
//     },
// };
// calculator.read(3);
// console.log(calculator); //{a: 4, b: 3, read: ƒ}
// console.log(calculator.add());
// console.log(calculator.mult());

// Examples
//1
// function hello() {
//     console.log(this.name);  //Alice
// }
// const objA = { name: "Alice", };
// hello.call(objA);

//2
// const objA = {
//     name: "Alice",
//     hello: () => {
//         console.log(this.name);
//     },
// };
// const objB = {
//     name: "Kate",
//     hello() {
//         objA.hello();
//     },
// };
// objB.hello();

//3
// const hello = function () {
//     console.log(this.name);  //Alice
// };
// const objA = {
//     name: "Alice",
//     myName: hello,
// };
// objA.myName();

//4
// const objA = {
//     name: "Alice",
//     myName: function () {
//         console.log(this.name); //""
//     },
// };
// const objB = {
//     name: "Kate",
//     hello: objA.myName.bind(this),
// };
// objB.hello();  //Error

//5
// const objA = {
//     name: "Alice",
//     myName: function () {
//         console.log(this.name); //Kate
//     },
// };
// const objB = {
//     name: "Kate",
//     hello: objA.myName,
// };
// objB.hello();  

//6
// const objA = {
//     name: "Alice",
//     myName: function () {
//         console.log(this.name); //Alice
//     },
// };
// const objB = {
//     name: "Kate",
//     hello: objA.myName.bind(objA),
// };
// objB.hello();

//7
// const hello = () => {
//     console.log(this.name);
// };
// const objA = {
//     name: "Alice",
//     myName: hello,
// };
// objA.myName();

//                           Practice M6-2 mentor

// ***************      Прототипне наслідування та метод Object.create        ***************\\
// const user = {
//     name: 'Alice', age: 23,
//     sayHello() { console.log(`Hello my name is ${this.name}`); },
//     getAge() { console.log(`my age ${this.age}`); }
// };

// const student = Object.create(user);
// console.log(student);  //{}
// console.log(student.name);  //Alice
// student.sayHello();  //Hello my name is Alice
// student.name = "Kate";
// console.log(student.name);  //Kate
// student.sayHello(); //Hello my name is Kate

// const teacher = Object.create(user);
// console.log(teacher);  //{}
// teacher.name = 'Brian';
// console.log(teacher); //{ name: 'Brian' }

// const firstRang = Object.create(teacher);
// console.log(firstRang); //{}
// firstRang.sayHello();  //Hello my name is Brian

// student.getAge();
// student.age = 30;
// student.getAge();

// ***************        ES6 Class       ********************\\

// *****Публічні властивості та методи***** \\
// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     showName() { console.log(`Hello my name is ${this.name}`); }
// }
// const student = new User('Alice', 20);
// const student2 = new User('Kate', 25);
// console.log(student);
// student.name = "Oleg";
// console.log(student);
// student.showName();
// student.showName();

// *****       Приватні властивості та методи        ***** \\
// class User {
//     #password;
//     constructor(name, password) {
//         this.name = name;
//         this.#password = password;
//     }
//     showName() {
//         if (this.#checkPassword()) {
//             console.log(`Hello my name is ${this.name}`);
//         } else {
//             console.log("Who are you ?🧐");
//         }
//     }
//     #checkPassword() {
//         const password = prompt();
//         return password === this.#password;
//     }
// }
// const student = new User('Alice', 'qwerty111');
// console.log(student);  //User {name: 'Alice', #password: 'qwerty111'}

// console.log(student.password); // undefined
// // console.log(student.#password);  // Error privat field
// student.showName();

// ******     Геттери і сеттери          ****** \\
//приватні властивості
// class User {
//     #password;
//     #email;
//     constructor(name, password, email) {
//         this.name = name;
//         this.#password = password;
//         this.#email = email;
//     }
//     showName() {
//         if (this.#checkPassword()) {
//             console.log(`Hello my name is ${this.name}`);
//         } else {
//             console.log("Who are you ?🧐");
//         }
//     }
//     #checkPassword() {
//         const password = prompt();
//         return password === this.#password;
//     }
//     get email() {
//         // if (this.#checkPassword()) {
//         //     return this.#email;
//         // }
//         return this.#email;
//     }
//     set email(newEmail) {
//         if (this.#checkPassword()) {
//             this.#email = newEmail;
//         }
//     }
// }
// const student = new User('Alice', 'qwerty111', 'test@gmail.com');
// console.log(student.email);

// student.email = 'new@gmail.com';
// console.log(student.email);

//публічні властивості
// class User {
//     #password;
//     #email;
//     constructor(name, password, email) {
//         this.name = name;
//         this.#password = password;
//         this.email = email;
//     }
//     showName() {
//         if (this.#checkPassword()) {
//             console.log(`Hello my name is ${this.name}`);
//         } else {
//             console.log("Who are you ?🧐");
//         }
//     }
//     #checkPassword() {
//         const password = prompt();
//         return password === this.#password;
//     }
//     get userEmail() {
//         return this.email;
//     }
//     set userEmail(newEmail) {
//         this.email = newEmail;
//     }
// }
// const student = new User('Alice', 'qwerty111', 'test@gmail.com');

// *****           Статичні властивості та методи          ***** \\
// Розглянемо на практичному завдані (Task-3)

// **********          Наслідування класів           ********* \\
// class User {
//     #password;
//     #email;
//     constructor(name, password, email) {
//         this.name = name;
//         this.#password = password;
//         this.#email = email;
//     }
//     showName() {
//         if (this.#checkPassword()) {
//             console.log(`Hello my name is ${this.name}`);
//         } else {
//             console.log("Who are you ?🧐");
//         }
//     }
//     #checkPassword() {
//         const password = prompt();
//         return password === this.#password;
//     }
//     get email() {
//         if (this.#checkPassword()) {
//             return this.#email
//         }
//     }
//     set email(newEmail) {
//         if (this.#checkPassword()) {
//             this.#email = newEmail;
//         }
//     }
// }
// class Student extends User {
//     constructor(name, password, email, points) {
//         super(name, password, email)
//         this.points = points;
//     }
//     getPoints() {
//         console.log(`${this.name} has ${this.points} points`);
//     }
// }
// class Teacher extends User {
//     constructor(name, password, email, skills) {
//         // super(name, password, email);
//         super();
//         this.skills = skills;
//     }
//     getSkills() {
//         console.log(`${this.name} has ${this.skills} skills`);
//     }
// }

// const student = new Student('Alice', 'qwerty111', 'test@gmail.com', 38);
// console.log(student);
// student.getPoints();
// // student.showName();

// const teacher = new Teacher('Brian', 'qwerty', 'teacher@gmail.com', ["HTML", "CSS", "JS"]);
// console.log(teacher);
// teacher.getSkills();


// ***********************     Практика          *********************** \\

//        Task-1
// Необхідно створити клас Rectangle, який представляє прямокутник. Клас повинен мати приватні властивості 
// width та height, а також гетери та сетери для цих властивостей.Гетери повинні повертати значення 
// властивостей, а сетери повинні дозволяти змінювати значення властивостей з валідацією.
// class Rectangle {
//     #width;
//     #height;
//     constructor({ width, height } = {}) {
//         this.#width = width;
//         this.#height = height;
//     }
//     get width() {
//         return this.#width;
//     }
//     //валідація
//     set width(newWidth) {
//         if (typeof newWidth === 'number' && newWidth > 0) {
//             this.#width = newWidth;
//         } else {
//             console.log("Ширина повинна бути числом та більша за 0");
//         }
//     }
//     get height() {
//         return this.#height;
//     }
//     set height(newHeight) {
//         if (typeof newHeight === 'number' && newHeight > 0) {
//             this.#height = newHeight;
//         } else {
//             console.log("Висота повинна бути числом та більша за 0");
//         }
//     }
// }
// const item = new Rectangle({ width: 10, height: 5 });
// console.log(item.width);  //10
// item.width = 12;
// console.log(item.width);  //12
// item.height = "12";
// console.log(item.height);  //Висота повинна бути числом та більша за 0 => //5

//     Task-2       ******* \\
// Реалізуйте клас Student, який успадковуватиметься від класу User. Цей клас повинен мати такі властивості:
// name приватна властивість (ім'я, успадковується від User),  surname приватна властивість (прізвище, 
// успадковується від User), year (рік вступу до вузу).

// Клас повинен мати метод getFullName() (успадковується від User), за допомогою якого можна вивести одночасно 
// ім'я та прізвище студента.
// Також клас повинен мати метод getCourse(), який виводитиме поточний курс студента (від 1 до 5, якщо значення 
// перевищує 5  курс виводити що студент являється випускником).
// Курс обчислюється так: потрібно від поточного року відняти рік вступу до вузу. Поточний рік отримаєте 
// самостійно(читати документацію!!!).
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
// Приклад ініціалізації екземпляру класа:
// const student = new Student('Петрик', 'Пяточкин', 2019);

// class User {
//     #name;
//     #surname;
//     constructor(name, surname) {
//         this.#name = name;
//         this.#surname = surname;
//     }
//     getFullName() {
//         return `${this.#name} ${this.#surname} `
//     }
// }
// class Student extends User {
//     constructor(name, surname, year) {
//         super(name, surname);
//         this.year = year;
//     }
//     getCourse() {
//         // const today = new Date().getFullYear();
//         const today = new Date();
//         console.log(today);
//         const currentYear = today.getFullYear();
//         console.log(currentYear);  //2024 
//         const diff = currentYear - this.year;
//         if (currentYear < this.year) {
//             return "😫";
//         }
//         if (diff > 5) {
//             return "Студент являється випускником";
//         }
//         return `${diff} курс`;
//     }
// }
// const student = new Student("Петрик", "Пяточкин", 2028);
// console.log(student);  //Student {}
// console.log(student.getFullName()); //'Петрик Пяточкин'
// console.log(student.getCourse()); //Mon Oct 28 2024 16:06:27 GMT+0100 (Центральная Европа, стандартное время)

//       Task-3    ******* \\
// Необхідно створити клас Hero, який представляє героя з гри. Клас повинен мати публічні властивості name, 
// level та health, а також методи attack та heal, що дозволяють герою атакувати та відновлювати здоров'я 
// відповідно. Також створи функціонал для підрахунку створених героїв

// Властивість name має зберігати ім'я героя.
// Властивість level має зберігати рівень героя.
// Властивість health має зберігати поточний рівень здоров'я героя.
// Метод attack наносить пошкодження в розмір 10 одиниць. Метод heal додає до здоров'я героя 10 одиниць.

class Hero {
    static counter = 0;
    static addHero() {
        this.counter += 1; // Hero.counter
        console.log(`Кількість героїв ${this.counter}`);
    }
    constructor(name) {
        this.name = name;
        this.level = 1;
        this.health = 200;
        Hero.addHero();
    }
    attack() {
        console.log("Attack with 10 damage");
    }
    heal() {
        this.health += 10;
    }
}

const bloodseker = new Hero("Bloodseker");  //Кількість героїв 1
const shadow = new Hero("Shadow Fiend");  //Кількість героїв 2
const pudge = new Hero("Pudge");  //Кількість героїв 3
console.log(bloodseker);
console.log(bloodseker.heal());
console.log(bloodseker);
console.log(Hero.counter);

// *******Task-4******* \\
// Необхідно створити клас BankAccount, який представляє банківський рахунок. Клас повинен мати приватну властивість balance, яка представляє баланс рахунку. Клас повинен також мати публічні методи deposit та withdraw, які дозволяють здійснювати операції з депозитом та зняттям коштів з рахунку. При цьому balance повинна бути доступна лише в межах класу BankAccount та його приватних методів.

// class BankAccount {

// }

// const instance = new BankAccount()
// instance.deposit(100)
// instance.deposit(1200)
// instance.withdraw(1000)
// console.log(instance);










