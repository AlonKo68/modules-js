/*                                    module 2                            */

// let price = 0;
// const subscription = "pro";

// if (subscription === "pro") {
//     price = 100;
//     console.log(subscription);
// }
// console.log(price); // 100

/*
1. if...
Доповни код функції checkAge(age) так, щоб функція повертала рядок "You are an adult",
якщо значення параметра age більше або дорівнює 18. Використай у тілі функції інструкцію if
для перевірки значення age.*/

// function checkAge(age) {
//   if (age >= 18) {
//     return 'You are an adult';
//   }
// }
// console.log(checkAge(20));      //You are an adult
// console.log(checkAge(17));      // undefined
// console.log(checkAge(10));      // undefined
// console.log(checkAge(30));      //You are an adult

// function checkAge(age) {
//   if (age >= 18) {
//     return 'You are an adult';
//   } else {
//     return 'not adult';
//   }
// }
// console.log(checkAge(20));      // You are an adult
// console.log(checkAge(17));      // not adult
// console.log(checkAge(10));      // not adult
// console.log(checkAge(30));      // You are an adult

// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkAge(20)); //true
// console.log(checkAge(17)); //false
// console.log(checkAge(10)); //true
// console.log(checkAge(30)); //false

// if (message >= 18) {
//   console.log('You are an adult');
// } else {
//   console.log('child');
// }

// function checkAge(age) {
//   const message = prompt('How old are you?');
//   if (message >= 18) {
//     return 'You are an adult';
//   } else {
//     return 'child';
//   }
// }
// console.log(checkAge());

/*
2  if...else
Функція checkStorage(available, ordered) оголошує два параметри:
 available - доступна кількість товарів на складі 
 ordered - кількість одиниць товару в замовленні
i перевіряє можливість оформлення замовлення і повертає повідомлення про результат. 
Використовуючи розгалуження, доповни код функції таким чином, щоб:
Якщо в замовленні вказане число, яке перевищує доступну кількість товарів на складі, функція
повертає рядок "Not enough goods in stock!" В іншому випадку функція повертає рядок
"Order is processed, our manager will contact you"*/

// function checkStorage(available, ordered) {
//   if (ordered > available) {
//     return "Not enough goods in stock!";
//   } else {
//     return "Order is processed, our manager will contact you";
//   }
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// let type;
// const age = 5;
// if (age >= 18) {
//   type = 'adult';
// } else {
//   type = 'child';
// }
// console.log(type);

// const grade = 69;

// if (grade >= 90) {
//   console.log("Perfectly");
// } else if (grade >= 80) {
//   console.log("Good");
// } else if (grade >= 70) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }

//3.   else...if

// function checkStorage(available, ordered) {
//   if (ordered <= 0) {
//     return "There are no products in the order!";
//   } else if (ordered > available) {
//     return "Your order is too large, there are not enough items in stock!"
//   } else {
//     return "The order is accepted, our manager will contact you";
//   }
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));
// console.log(checkStorage(80, 80));

//4.   тернарний оператор

// function checkAge(age) {
//   return age >= 18 ? 'You are an adult' : 'not adult';
// }
// console.log(checkAge(20)); // You are an adult
// console.log(checkAge(17)); // not adult
// console.log(checkAge(10)); // not adult
// console.log(checkAge(30)); // You are an adult

// let price = 0;
// const subscription = 'pro';
// console.log(subscription === 'pro' ? (price = 100) : price);  //100

// function checkStorage(available, ordered) {
//   return ordered > available
//     ? 'Not enough goods in stock!'
//     : 'Order is processed, our manager will contact you';
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// function checkPassword(password) {
//   const correctPassword = "jqueryismyjam";
//     return password == correctPassword ? "Access granted" : "Access denied, wrong password!";
// }
// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));
// console.log(checkPassword("r3actsux"));

//5.      switch
// const fruit = 'apple';
// switch (fruit) {
//   case 'apple':
//     console.log('Apple selected'); //Apple selected
//   case 'banana':
//     console.log('Banana selected');
//     break;
//   case 'orange':
//     console.log('Orange selected');
//     break;
//   default:
//     console.log('The fruit is unknown');
// }

// function names(fruit) {
//   switch (fruit) {
//     case 'apple':
//       return 'Apple selected';
//       break;
//     case 'banana':
//       return 'Banana selected';
//       break;
//     case 'orange':
//       return 'Orange selected';
//       break;
//     default:
//       return 'The fruit is unknown';
//   }
// }
// console.log(names('apple'));
// console.log(names(''));
// console.log(names('orange'));

// let message = prompt('fruit?');
// function fruit(message) {
//   if (message) {
//     message = message.toLowerCase();
//   }
//   switch (message) {
//     case 'apple':
//       return 'Apple selected';
//       break;
//     case 'banana':
//       return 'Banana selected';
//       break;
//     case 'orange':
//       return 'Orange selected';
//       break;
//     default:
//       return 'The fruit is unknown';
//   }
// }
// console.log(fruit(message));

// const day = 6;
// switch (day) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log('This is a working day');
//     break;
//   case 6:
//   case 7:
//     console.log('It is a day off');
//     break;
//   default:
//     console.log('Invalid');
// }

// let message = prompt('Day?');
// function day(message) {
//   if (message) {
//     message = Number(message);
//   }
//   switch (message) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//       return 'This is a working day';
//       break;
//     case 6:
//     case 7:
//       return 'It is a day off';
//       break;
//     default:
//       return 'Invalid';
//   }
// }
// console.log(day(message));

/*                      оператор break
5      
Функція getSubscriptionPrice(type) отримує рядок з типом передплати користувача(параметр type),
перевіряє її на збіг з трьома можливими типами щомісячної передплати та повертає ціну, або
повідомлення про неправильний тип передплати. */

// function getSubscriptionPrice(type) {
//   switch (type) {
//     case 'starter':
//       return 0;
//       break;
//     case 'professional':
//       return 20;
//       break;
//     case 'organization':
//       return 50;
//       break;
//     default:
//           return 'Invalid subscription type!';
//   }
// }
// console.log(getSubscriptionPrice('professional')); //20
// console.log(getSubscriptionPrice('organization')); //50
// console.log(getSubscriptionPrice('starter'));  //0
// console.log(getSubscriptionPrice('random'));   //Invalid subscription type!
// console.log(getSubscriptionPrice('premium'));   //Invalid subscription type!

//                   логічні oператори
// && - end
// 1 true && 2 true = 2 true,
// 1 false && 2 false = 1 false,
// 1 true && 2 false = 2 false

// const screenWidth = 700;
// const ms = 320;
// const ts = 768;
// const ds = 1200;
// if (screenWidth <= ms) {
//   console.log('Mobile screen');
// } else if (screenWidth > ms && screenWidth <= ts) {
//   console.log('Tablet screen');              //'Tablet screen'
// } else if (screenWidth > ts && screenWidth <= ds) {
//   console.log('Desctop screen');
// } else {
//   console.log('Godzilla screen');
// }

/*  6.    чи входить число у проміжок між start i end  */

// function isNumberInRange(start, end, number) {
//   if (number >= start && number <= end) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isNumberInRange(10, 30, 17)); //true
// console.log(isNumberInRange(10, 30, 5));  //false
// console.log(isNumberInRange(20, 50, 24));   //true
// console.log(isNumberInRange(20, 50, 76));   //false

//  || - or
// 1 true || 2 true = 1 true,
// 1 false || 2 false = 1 false,
// 1 true || 2 false = 1 false

/*7. 
Функція checkAccess(subType) перевіряє, чи може користувач отримати доступ до контенту.
Перевірка відбувається за типом передплати.Використовуючи оператор "АБО", доповни код функції
так, щоб якщо значення параметра subType дорівнює рядкам "pro" або "vip", то функція повертала 
true і користувач отримував доступ. В іншому випадку повертала false   */

// function checkAccess(subType) {
//   if (subType == 'pro' || subType == 'vip') {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkAccess('pro'));  //true
// console.log(checkAccess('starter'));  //false
// console.log(checkAccess('vip'));  //true
// console.log(checkAccess('free'));  //false

//  ! - not
// const isBlocked = false;
// const canChat = !isBlocked;
// console.log(canChat); //true
// if (canChat) {
//   console.log('Can type in chat!'); //
// } else {
//   console.log('Blocked from typing in chat!');
// }

// const isBlocked = true;
// const canChat = !isBlocked;
// console.log(canChat); //false
// if (canChat) {
//   console.log('Can type in chat!');
// } else {
//     console.log('Blocked from typing in chat!');   //
// }

// const isOnline = true;
// const isOnblocked = false;
// const canChat = isOnline && !isOnblocked;
// if (canChat) {
//   console.log('Can type in chat!');
// } else {
//   console.log('Blocked from typing in chat!'); //
// }

/* 8.  
Функція toggleModalVisibility(isVisible) перемикає стан відображення модального вікна. У 
параметрі isVisible вона очікує буль true або false. Доповни код функції так, щоб вона повертала 
протилежне значення цього параметра.  */

// function toggleModalVisibility(isVisible) {
//   return !isVisible;
//   }
// console.log(toggleModalVisibility(true));
// console.log(toggleModalVisibility(false));

//                Metods string

//  str.slice(startIndex, endIndex);

// const fullName = 'Jacob Mercer';
// console.log(fullName.slice(0, 5)); //Jacob
// console.log(fullName.slice(0, length - 7)); //Jacob
// console.log(fullName.slice()); //Jacob Mercer
// console.log(fullName.slice(0)); //Jacob Mercer
// console.log(fullName.slice(2)); //cob Mercer

/*9.  
Функція getSubstring(string, length) приймає рядок і повертає новий підрядок(його часткову копію).
Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:
string - оригінальний рядок, length - довжина нового підрядка
Доповни код функції так, щоб повертал новий підрядок від початку string і має довжину length.  */

// function getSubstring(string, length) {
//   //   const newString = string.slice(0,length);
//   //   return newString;
//   return string.slice(0, length);
// }
// console.log(getSubstring('Hello world', 3)); //Hel
// console.log(getSubstring('Hello world', 5)); //Hello
// console.log(getSubstring('Hello world', 8)); //Hello wo
// console.log(getSubstring('Hello world', 11)); //Hello world
// console.log(getSubstring('Hello world', 0)); // пустота

//    metode toLowerCase()  / toUpperCase()

// const message = 'Welcome to Bahamas!';
// console.log(message.toLowerCase()); // "welcome to bahamas!"
// console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"

/*10.  
Функція normalizeInput(input, to) оголошує два параметри:
input - рядок, який потрібно привести до певного регістру
to - рядок с двома можливими значеннями: "upper" або "lower", що вказують до якого регістру 
потрібно привести значення input
Доповни код функції, щоб Якщо значення параметра to — це рядок "upper", то функція повертала 
копію рядка input, але у верхньому регістрі. В іншому разі, функція повертала копію рядка inputу 
нижньому регістрі */

// function normalizeInput(input, to) {
//   if (to === 'upper') {
//     return input.toUpperCase();
//   } else {
//     return input.toLowerCase();
//   }
// }
// console.log(normalizeInput("This ISN'T SpaM", 'lower'));
// console.log(normalizeInput("This ISN'T SpaM", 'upper'));
// console.log(normalizeInput('Big SALE', 'lower'));
// console.log(normalizeInput('Big SALE', 'upper'));
// console.log(normalizeInput('Stay Awhile and Listen', 'lower'));
// console.log(normalizeInput('Stay Awhile and Listen', 'upper'));

//          metode includes()    true/false

// const fullName = 'Jacob Mercer';
// console.log(fullName.includes('Jacob')); //true
// console.log(fullName.includes('J')); //true
// console.log(fullName.includes('b Mercer')); //true
// console.log(fullName.includes('Ajax'));  //false

// const message = 'Please buy our stuff!';
// const hasSpam = message.includes('buy');
// console.log(hasSpam); //true
// if (hasSpam) {
//   console.log('Warning: "This message contains fortidden woras"');  //
// } else {
//   console.log('You can safely open this message');
// }

// 11.
// function checkForName(fullName, firstName) {
//   const lowerFullName = fullName.toLowerCase();
//   const lowerFirstName = firstName.toLowerCase();
//   //   const upperFullName = fullName.toUpperCase();
//   //   const upperFirstName = firstName.toUpperCase();
//   if (lowerFirstName.includes('jason') || lowerFirstName.includes('caty')) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkForName('Jason Neis', 'Jason'));  //true
// console.log(checkForName('Jason Neis', 'jAsOn'));  //true
// console.log(checkForName('Jason Neis', 'Jacob'));  //false
// console.log(checkForName('Caty Stars', 'Caty'));  //true
// console.log(checkForName('Caty Stars', 'cAtY'));  //true
// console.log(checkForName('Caty Stars', 'Andromeda'));  //false

//       metod startsWith() / EndsWith()  true/false

// const fullName = 'Jacob Mercer';
// console.log(fullName.startsWith('Jacob')); //true
// console.log(fullName.startsWith('J')); //true
// console.log(fullName.startsWith('Mercer')); //false

// console.log(fullName.endsWith('Mercer')); //true
// console.log(fullName.endsWith('Jacob')); //false
// console.log(fullName.endsWith('er')); //true

/*12. 
Функція checkFileExtension(fileName, ext) приймає два параметри: fileName - рядок, що зберігає 
ім'я файлу зрозширенням, ext - рядок, що зберігає розширення. Доповни код функції: Якщо 
ім'я файлу fileName закінчується розширенням, зазначеним у параметрі ext, то функція повертала 
рядок "File extension matches" В іншому разі, функція повертала рядок "File extension does not match"  */

// function checkFileExtension(fileName, ext) {
//   if (fileName.endsWith(ext)) {
//     return 'File extension matches';
//   } else {
//     return 'File extension does not match';
//   }
// }
// console.log(checkFileExtension('styles.css', '.css'));
// console.log(checkFileExtension('styles.css', '.js'));
// console.log(checkFileExtension('styles.css', '.js'));
// console.log(checkFileExtension('app.js', '.html'));
// console.log(checkFileExtension('index.html', '.html'));
// console.log(checkFileExtension('index.html', '.css'));
// console.log(checkFileExtension('index.html', '.js'));

//     metod indexOf()
//str.indexOf(що щукаємо, з якого індеса почати)

// const fullName = 'Jacob Mercer';
// console.log(fullName.indexOf(' ')); //5
// console.log(fullName.indexOf('Jacob')); //0
// console.log(fullName.indexOf('c')); //2
// console.log(fullName.indexOf('f')); //-1
// console.log(fullName.indexOf('Mercer', 5)); //6
// console.log(fullName.indexOf('Mercer', 7)); //-1

/*13.  
Функція getFileName(file) приймає один параметр file - рядок з іменем файлу. Ім'я файлу може бути з 
розширенням, або без. Використовуючи методи indexOf та slice, доповни код функції таким чином, щоб:
Вона перевіряла наявність розширення в імені файлу назва розширення відокремлюється від імені файла 
крапкою) Якщо ім'я файлу не містить розширення, то функція повертала новий підрядок, що містить 
ім'я файлу без змін, В іншому разі функція повертала підрядок з іменем файлу, але без розширення*/

// function getFileName(file) {
//   if (file.indexOf('.') !== -1) {
//     return file.slice(0, file.indexOf('.'));
//   } else {
//     return file;
//   }
// }
// console.log(getFileName('styles.css')); //styles
// console.log(getFileName('app.js')); //app
// console.log(getFileName('app')); //app
// console.log(getFileName('index.js')); //index
// console.log(getFileName('index.html')); //index
// console.log(getFileName('index.css')); //index
// console.log(getFileName('index')); //index

// function getFileName(file) {
//   if (file.indexOf('.') === -1) {
//     return file;
//   } else {
//     return file.slice(0, file.indexOf('.'));
//   }
// }
// console.log(getFileName('styles.css'));
// console.log(getFileName('app.js'));
// console.log(getFileName('app'));
// console.log(getFileName('index.js'));
// console.log(getFileName('index.html'));
// console.log(getFileName('index.css'));
// console.log(getFileName('index'));

//   metod trim()  delite "_" start & end

// const fullName = '     Jacob Mercer    ';
// console.log(fullName); //      Jacob Mercer
// console.log(fullName.trim('')); //Jacob Mercer

// function createFileName(name, ext) {
//   //   let inputName = name.trim();
//   //   return `"${inputName}.${ext}"`;
//   //   let inputName = name.trim() + '.' + ext;
//   //   return inputName;
//   return name.trim() + '.' + ext;
// }
// console.log(createFileName(' order ', 'txt'));
// console.log(createFileName('report ', 'csv'));
// console.log(createFileName(' presentation', 'xml'));

//                     cykls
// while ...

// приклад з лічильником
// let count = 0;
// while (count < 10) {
//   console.log(`count: ${count}`); // 0, 1, 2, 3, 4, 5, ... 9
//   count += 1;
// }

// Задача: Реєстрація у готелі
// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter); //  18, 19, ... 24
//   clientCounter += 1;
// }

//15.
// function calculateTotal(number) {
//   let sum = 0;
//   let count = 1;
//   while (count <= number) {
//     sum += count;
//     count += 1;
//   }
//   return sum;
// }

// console.log(calculateTotal(1)); //1
// console.log(calculateTotal(3)); //6
// console.log(calculateTotal(0)); //0
// console.log(calculateTotal(18)); //171
// console.log(calculateTotal(24)); //300
// console.log(calculateTotal()); //0

//   do ... while

// let count = 0;
// do {
//   console.log(`Count: ${count}`);  //0, 1, 2 ... 4
//   count += 1;
// } while (count < 5);

//   for ...

//16.
// function calculateTotal(number) {
//   let sum = 0;
//   for (let count = 1; count <= number; count += 1) {
//     console.log(count);  //1, 2, 3
//     sum += count;
//   }
//   return sum;  //6
// }
// console.log(calculateTotal(1)); //1
// console.log(calculateTotal(3)); //6
// console.log(calculateTotal(0)); //0
// console.log(calculateTotal(18)); //171
// console.log(calculateTotal(24)); //300
// console.log(calculateTotal()); //0

//    інкремент / декремент

// let x = 5;
// const y = ++x;   //інкремент
// console.log(x); // 6
// console.log(y); // 6

// 17.
// function calculateEvenTotal(number) {
//   let sumEven = 0;
//   for (let i = 1; i <= number; i++) {
//     // console.log(i);  //1, 2, ... 7
//     if (i % 2 === 0) {
//       sumEven += i;
//       console.log(sumEven); //2, 4, 6
//     }
//   }
//   return sumEven; //12
// }
// console.log(calculateEvenTotal(1));  //0
// console.log(calculateEvenTotal(3));  //2
// console.log(calculateEvenTotal(7)); //12
// console.log(calculateEvenTotal(18));  //90
// console.log(calculateEvenTotal(27));  //182
// console.log(calculateEvenTotal());  //0

// function calculateEvenTotal(number) {
//   let sumEven = 0;
//   for (let i = 1; i <= number; i++) {
//     // console.log(i);  //1, 2, ... 7
//     if (i % 3 === 0) {
//       sumEven += i;
//       //   console.log(sumEven); //2, 4, 6
//     }
//   }
//   return sumEven; //12
// }
// console.log(calculateEvenTotal(18)); //63

// Оператор break і функції

// let number;
// let start = 17;
// let end = 25;
// for (let number = start; number <= end; number += 1) {
//   if (number % 5 === 0) {
//     console.log(number); //20  //25
//   }
// }

// let number;
// let start = 17;
// let end = 25;
// for (let number = start; number < end; number += 1) {
//   if (number % 5 === 0) {
//     console.log(number); //20
//   }
// }

// let number;
// let start = 17;
// let end = 25;
// for (let number = start; number <= end; number += 1) {
//   if (number % 5 === 0) {
//     console.log(number); //20
//     break;
//   }
// }

// function findNumberFromFive(max, target) {
//   //   console.log('Log in the body of the function before the cycle');
//   for (let i = 5; i <= max; i += 1) {
//     console.log('Current counter value i:', i); //5  //6
//     if (i === target) {
//       console.log(`Found the number ${target}, interrupt the cycle`);  //6
//       break;
//     }
//   }
//   console.log('Log in body function after cycle');
// }
// findNumberFromFive(10, 6);
// console.log('Log after exiting function');

// function findNumberFromFive(max, target) {
//   //   console.log('Log in the body of the function before the cycle');
//   for (let i = 5; i <= max; i += 1) {
//     console.log('Current counter value i:', i); //5  //6
//     if (i === target) {
//       console.log(
//         `Found the number ${target}, we make a return, interrupting the loop and function`
//       );  //6
//       return i;
//     }
//   }
//   // Цей console.log не виконується
//   console.log('Log in body function after cycle');
// }
// const result = findNumberFromFive(10, 6);
// console.log('Log after exiting function'); //
// console.log(`Result of function execution ${result}`); //6

// function findNumber(start, end, divisor) {
//   for (let i = start; i <= end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }
// console.log(findNumber(2, 6, 5));  //5
// console.log(findNumber(8, 17, 3));  //9
// console.log(findNumber(6, 9, 4));  //8
// console.log(findNumber(16, 35, 7));  //21

/*                        
                                module 2-1  mentor                     */

// console.log(null && "false" && "Mango");  //null
// console.log(null || "false" || "Mango");  //false
// console.log("false" && "Mango" || null);  //Mango

// let value = null;
// if (value) {
//   value = 20;
//    console.log("condition");  // пустота
// }
// console.log(value);  //null

// const value = 0;
// if (value < 10) {
//     const value = 27;
//   console.log(value);  //27
// }
// console.log(value); //0

// let value = "";
// if (value && 7) {  //false true - value
//   value = 4;
//   console.log(value) // пустота
// }
// console.log(value);   //""

// let value = undefined;
// if (value && 7) {  //false true - value
//   value = 4;
//   console.log(value) // пустота
// }
// console.log(value); //undefined

// let value = " ";
// if (value && 7) {  //" " && 7 true true - 7
//   value = 4;
//   console.log(value) // 4
// }
// console.log(value); //4

// let value = undefined;
// if (value ?? 7) {  // 7
//   value = 4;
//   console.log(value) // 4
// }
// console.log(value); //4

// let value = 10;
// if (value && 7) {    //7
//   value = 4;
//   console.log(value) // 4
// }
// console.log(value); //4

// let value = 0;
// if (value) {
//   value = 20;
//   console.log(true);   // пустота
// } else {
//   console.log(false);   //false
// }

// let value = 10;
// if (value) {
//   console.log(true);  //true
// } else {
//   console.log(false);
// }

// let value = 0;
// if (value) {
//   console.log(true);
// } else {
//   console.log(false);  //false
// }

// let value = 10;
// if (7 && value) {    // true true - value
//   value = 20;
//   console.log(true);  //true
// }
// console.log(value);  //20

// let value = 10;
// if (7 && value) {    // true true - value
//   console.log(true);  //true
// }
// console.log(value);  //10

// let sum = 5000;
// let discount;
// if (sum >= 3000) {
//   console.log(discount = 10);  //10
// } else {
//   console.log("no discount");
// }

// let sum = 3500;
// let discount;
// if (sum >= 5000) {
//   console.log(discount = 15);
// } else if (sum >= 3499.99) {
//   console.log(discount = 10);  //10
// } else if (sum >= 2999.99) {
//    console.log("no discount");
// }

// let sum = 2500;
// let discount;
// if (sum >= 5000) {
//   console.log(discount = 15);
// } else if (sum >= 3499.99) {
//   console.log(discount = 10);
// } else if (sum >= 2999.99) {
//   console.log(discount = 5);
// } else {
//   console.log("no discount"); //no discount
// }

//switch
// const value = 120;
// switch (true) {
//   case 7 > value:
//     console.log("7");
//     break;
//   case 10 > value:
//     console.log("10");
//     break;
//   case 15 > value:
//     console.log("15");
//     break;
//   default:
//     console.log("another value");  //another value
// }

//тернарний оператор
// const value = 12;
// const answer = 10 === value ? "is true" : "is false";
// console.log(answer);  //is false

// const value = 10;
// const answer = 10 === value ? "is true" : "is false";
// console.log(answer);  //is true

// обл. видимости

// let value = 10;   //global
// if (true) {
//   console.log("1", value);    // 1 10 local
//   if (true) {
//     console.log("2", value);  //  2 10 local
//   }
// }
// console.log(value);   // 10 global

// let value = 10;
// if (true) {
//  let value = 20;
//  console.log("1", value);    // 1 20
//  if (true) {
//    console.log("2", value);  //  2 20
//   }
// }
// console.log(value);  //10

// let value = 10;
// if (true) {
//  value = 20;
//  console.log("1", value);    // 1 20
//  if (true) {
//    console.log("2", value);  //  2 20
//  }
// }
// console.log(value);  //20

// let value = 10;
// console.log(value);  //10
// if (true) {
//  value = 20;
//  console.log("1", value);    // 1 20
//   if (true) {
//     value = 30;
//    console.log("2", value);  //  2 30
//   }
// }
// console.log(value);  //30

// let value = 10;
// console.log(value);  //10
// if (true) {
//  value = 20;
//  console.log("1", value);    // 1 20
//   if (true) {
//     value = 30;
//    console.log("2", value);  //  2 30
//   }
//   console.log(value);  //30
// }
// console.log(value);  //30

// let value = 10;
// console.log(value);  //10
// if (true) {
//  value = 20;
//  console.log("1", value);    // 1 20
//   if (false) {
//     value = 30;
//    console.log("2", value);  // пустота
//   }
// }
// console.log(value);  //20

// let value = 10;
// if (true) {
//   let value = 20;
//   console.log("1", value);    // 1 20
//   if (true) {
//     console.log("2", value);  //  2 20
//   }
// }
// console.log("global", value);    //  global 10

// let value = 10;
// if (true) {
//   value = 20;
//   console.log("1", value);    // 1 20
//   if (true) {
//     let value = 30;
//     console.log("2", value);  //  2 30
//   }
// }
// console.log("global", value);    //  global 20

// let number = 10;
// if (true) {
//   let number = 22;
//   console.log(number);  //22
//   if (true) {
//     number = 35;  //35
//   }
//   console.log(number);  //35
// }
// console.log(number);  //10

// let number = 10;
// if (true) {
//   if (true) {
//     number = 35;
//     console.log(number);  //35
//   }
//    number = 22;  //22
// }
// console.log(number);  //22

// let number = 10;
// if (true) {
//   if (true) {
//     number = 35;  //35
//   }
//   let number = 22;  //Error
//   console.log(number);
// }

// var value = 10;
// if (value) {
//   var value = 15;
// }
// console.log(value);  //15

// function foo() {
//   var str = 'Hello world'; //not defined
// }
// foo();
// console.log(str);  //Error

// var str = 'Hello world';
// function foo() {
//   str = 'Hello';
// }
// foo();
// console.log(str);  //Hello

// function foo() {
//   var name = 'Hello world';
// }
// foo();
// console.log(name);  // / пустота

// var str = 'Hello world';
// function foo() {
//   var str = 'Hello';
//   console.log(str);  // Hello
// }
// foo();
// console.log(str);  //Hello world

/*           practice             */

/*  Task - 1
Потрібно створити світлофор використовуючи конструкцію
switch
В propmt() юзер вводить колір який він бачить на світлофорі
В результаті виконання юзер має отримати повідомлення з
дією яку має виконати   */

// Можливі 4 стани світлофора
// 1 - red, action stop
// 2 - yellow, action ready
// 3 - green, action go
// 4 - Будь-який інший колір або значення відповідно світлофор
//  не працює, action be careful

// let message = prompt("color?");
// let action;
// if (message) {
//   message = message.toLowerCase();
// }
//   switch (message) {
//     case 'red':
//       action = "stop";
//     break;
//     case "yellow":
//       action = "ready";
//     break;
//     case "green":
//       action = "go";
//     break;
//     default:
//       action = "be careful";
//     }
//     console.log(action);

// let message = prompt('color?');
// function action(message) {
//   if (message) {
//     message = message.toLowerCase();
//   }
//   switch (message) {
//     case 'red':
//       return 'stop';
//       break;
//     case 'yellow':
//       return 'ready';
//       break;
//     case 'green':
//       return 'go';
//       break;
//     default:
//       return 'be careful';
//   }
// }
// console.log(action(message));

//  Task - 2
// Потрібно створити застосунок для автоматизації перевірки правильних відповідей на дитячі загадки
// Створи функцію яка буде приймати 2 параметри: 1 параметр це текст загадки, 2 вірна відповідь
// Після виклику функції користувач має побачити питання на екрані та поле для вводу відповіді,
// використовуй propmt(). Функція повертаe булеве значення відповіді(true / false)

// let message = prompt("Зимой и летом одним цветом");
// if (message) {
//   message = message.toLocaleLowerCase();
// }
// switch (message) {
//   case "елка":
//     answer = "true";
//   break;
//   default:
//     answer = "false";
// }
// console.log(trueAnswer);

// function check (text, answer) {
//   let message = prompt(text);
//   if (message) {
//     message = message.toLowerCase();
//   }
//   return answer === message ? true : false;
// }
// console.log(
//   check("Хоч не літак, а крилатий, Без крил не може працювати.", "вітряк")
// );
// console.log(
//   check("Через воду він проводить, А сам з місця вік не сходить", "міст")
// );

// function calculateTotal(number) {
//   let sum = 0;
//   let count = 1;
//   while (count <= number) {
//     sum += count;
//     count += 1;
//   }
//   return sum;
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(0));
// console.log(calculateTotal(2));
// console.log(calculateTotal(24));
// console.log(calculateTotal());

// function calculateTotal(number) {
//   let totalNumber = 0;
//   for (let count = 1; count <= number; count += 1) {
//     totalNumber += count;
//   }
//   return totalNumber;
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(0));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
// console.log(calculateTotal());

// function calculateTotal(number) {
//   let sum = 0;
//   let count = 1;
//   while (count <= number) {
//     sum += count;
//     count ++;
//     // count += 1;
//   }
//   return sum;
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(0));
// console.log(calculateTotal(2));
// console.log(calculateTotal(17));
// console.log(calculateTotal());

// function sumTo(sum) {
//   return sumTo(n) = n + sumTo(n-1)
// }
// console.log(sumTo(3));

// function checkPassword(password) {
//   // password = 10;
//   // console.log(password);  //10
//   // return password;
//   checkPassword = 10;
//   return checkPassword; //10
// }
// console.log(checkPassword()); //10

//module 2-2 practice

//metodes String() / str.toString()

// const str = 'Hello world';

// console.log(str.length); //11
// console.log(str.length - 1);  //10

// console.log(str[0]); //H
// console.log(str[str.length - 11]); //H
// console.log(str[10]); //d
// console.log(str[str.length - 1]); //d
// console.log(str[11]); //undefined
// console.log(str[str.length]); //undefined

//metode toLowerCase(), toUpperCase()

// const str = 'heLLo';
// console.log(str.toLowerCase()); //hello
// console.log(str.toUpperCase()); //HELLO
// console.log(str === str.toLowerCase()); //false
// console.log('hello' === str.toLowerCase()); //true

//metode indexOf()

// const str = 'Hello world';
// console.log(str.indexOf('world'));  //6
// console.log(str.indexOf('H')); //0
// console.log(str.toLowerCase().indexOf('h')); //0
// console.log(str.indexOf('d')); //10
// console.log(str.indexOf(' ')); //5

// console.log(str.indexOf('world')); //6
// console.log(str.indexOf(' ', 0)); //5
// console.log(str.indexOf(' ', 6)); //-1
// console.log(str.indexOf()); //-1

//metode includes()       true/false

// const str = 'Hello WORld';
// console.log(str.includes('WOrld')); //false
// console.log(str.includes('Hello')); //true
// console.log(str.toLowerCase().includes('hello')); // //true

//metode endsWith(), startsWith()   true/false

// const str = 'Hello WORld';
// console.log(str.startsWith('Hello')); //true
// console.log(str.toLowerCase().startsWith('hello')); //true
// console.log(str.startsWith('H')); //true
// console.log(str.startsWith('e')); //false
// console.log(str.startsWith('Hel')); //true
// console.log(str.startsWith('Hello WORld'));  //true

// console.log(str.endsWith('WORld')); //true
// console.log(str.endsWith('world')); //false
// console.log(str.toLowerCase().endsWith('world')); //true
// console.log(str.endsWith('Rld')); //true
// console.log(str.endsWith('Hello WORld'));  //true

//metode replace() - first el, replaceAll() - all el

// const str = 'Hello WORld';
// console.log(str.replace('ello', 'i')); //Hi WORld
// console.log(str.replace('WORld', '💋')); //Hello 💋
// console.log(str.toLowerCase().replace('ello', 'i')); //hi world
// console.log(str.replace('f', 'i')); //Hello WORld
// console.log(str.replace('world', '💋')); ////Heiio WORld
// console.log(str.toLowerCase().replace('world', '💋'));  //hello 💋

// console.log(str.replaceAll('l', 'i')); //Heiio WORld
// console.log(str.replaceAll('', '💋')); //💋H💋e💋l💋l💋o💋 💋W💋O💋R💋l💋d💋

//metode slice()

// const str = 'Hello WORld';
// console.log(str.slice(0, 5)); //Hello
// console.log(str.slice(0, str.length - 6)); //Hello
// console.log(str.slice(length - 6)); //WORld
// console.log(str.toLowerCase().slice(length - 6)); //world
// console.log(str.toLowerCase().slice(6, 11)); //world
// console.log(str.toLowerCase().slice(6, str.length)); //world

// console.log(str.slice(str.indexOf('W'), str.length)); //WORld
// console.log(str.slice(str.indexOf('O'), str.indexOf('O') + 'ORld'.length));
// console.log(str.indexOf('WORld')); //6
// console.log(str.indexOf('WORld') + 'WORld'.length); //11
// console.log(
//   str.slice(str.indexOf('WORld'), str.indexOf('WORld') + 'WORld'.length)
// ); //WORld
// console.log('Hell0'.length); //5

// const str = 'Hello world hello';
// console.log(str.slice(0, str.indexOf(' '))); //Hello
// console.log(str.slice(str.indexOf('w'), str.indexOf('hello'))); //world

// const idx = str.indexOf(' ');
// console.log(str.slice(idx + 1, str.indexOf(' ', idx + 1)));  //world

// const str = 'Hello call hello world';
// const idx = str.indexOf(' ');
// console.log(idx); //5
// console.log(str.slice(idx + 1, str.indexOf(' w'))); //call hello

// const strName = "I'm Stive Konrad";
// console.log(strName);
// console.log(strName.slice(strName.indexOf('S'), strName.length)); //Stive Konrad
// console.log(
//   strName.slice(strName.indexOf('S'), strName.indexOf('S') + strName.length)
// );
// console.log(strName.slice(strName.indexOf('S'), strName.indexOf('Konrad')));
// console.log(strName.slice(strName.indexOf('S'), strName.indexOf('nrad')));

//  cykl for,   while,   do while
// const str = 'Hello world';
// for (let i = 0; i < str.length; i += 1) {
//   console.log(str[i]);
// }

// for (let i = str.length; i >= 0; i -= 1) {
//   console.log(str[i]);
// }

// const str = 'Hello world';
// let i = 0;
// while (i < str.length) {
//   console.log(str[i]);
//   i += 1;
// }

// const str = 'Hello world';
// let i = str.length - 1;
// while (i >= 0) {
//   console.log(str[i]);
//   i -= 1;
// }

// const str = 'Hello world';
// let i = 0;
// do {
//   console.log(str[i]);
//   i += 1;
// } while (i < str.length);

// const str = 'Hello world';
// let i = str.length - 1;
// do {
//   console.log(str[i]);
//   i -= 1;
// } while (i >= 0);

// const str = 'Hello world';
// let i = 0;
// do {
//   console.log(str[i]);
//   i += 1;
// } while (i > str.length);

// practice

// Task - 1
// Виконай рефакторинг коду так, щоб у змінну value присвоювалося
// значення змінної incomingValue, якщо воно не рівне undefined або null.
// В іншому випадку має присвоюватися значення defaultValue.
// Перевір роботу скрипта для наступних значень змінної incomingValue:
// null, undefined, 0. Використовуй оператор ?? (nullish coalescing operator).

// const incomingValue = undefined;
// const defaultValue = 20;
// const value = incomingValue ?? defaultValue;
// console.log(value); //20

// const incomingValue = null;
// const defaultValue = 20;
// const value = incomingValue ?? defaultValue;
// console.log(value); //20

// const incomingValue = '';
// const defaultValue = 20;
// const value = incomingValue || defaultValue;
// console.log(value); //20

// const incomingValue = ' ';
// const defaultValue = 20;
// const value = incomingValue || defaultValue;
// console.log(value); //' '

// const incomingValue = ' ';
// const defaultValue = 20;
// const value = incomingValue && defaultValue;
// console.log(value); //20

// Task-2
// Потрібно створити функцію яка буде рахувати за скільки днів Равлик зможе
// виповзти з колодязя. функція приймає 1 параметр глибину колодязя,
// функція повертає кількість днів яку равлик витратив на шлях.
// за день Равлик проповзає  на 7 м в гору, а за ніч опускається на 2 м вниз
// для вирішення завдання використовуй цикл while

// function getDays(depth) {
//   let days = 0;
//   let total = 0;
//   const daySpeed = 7;
//   const nightSpeed = 2;
//   while (total < depth) {
//     total += daySpeed;
//     days += 1;
//   }
//   if (total < depth) {
//     total -= nightSpeed;
//   }
//   return days;
// }
// console.log(getDays(17)); //3
// console.log(getDays(30)); //5

// function getDays(depth) {
//   const daySpeed = 7;
//   const nightSpeed = 2;
//   let days = 0;
//   let total = 0;
//   do {
//     days += 1;
//     total += daySpeed;
//     if (total < depth) {
//       total -= nightSpeed;
//     }
//   } while (total < depth);

//   return days;
// }
// console.log(getDays(18));

// Task - 3
// Порахуй скільки голосних літер у реченні.

// function countVowel(str) {
//   const vowels = "aeiou";
//   let count = 0;
//   str = str.toLowerCase();
//   for (let i = 0; i < str.length; i += 1) {
//   if (vowels.includes(str[i])) {
//     count += 1;
//   }
// }
//   return count;

// }
// console.log(countVowel("HEllo WORLD"));

// function countVowel(str) {
//   const vowels = 'aeiou';
//   let count = 0;
//   str = str.toLowerCase();
//   console.log(str);
//   for (let i = 0; i < str.length; i += 1) {
//     console.log(str[i]);
//     if (vowels.includes(str[i])) {
//       count += 1;
//     }
//   }
//   return count;
// }
// console.log(countVowel('HEllo WORLD')); //3

// const str = 'Hello';
// const name = 'Fox';
// console.log(str, name, '!');
// console.log(str + name + ' 5');
// const value = 6 + 6;
// console.log(value); //12

// const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"';
// console.log(goodStr);  //Jake asks Finn, "Hey, let's go on an adventure?"'
// const badStr = 'Finn responds, "Let's go!"';
// console.log(badStr);  //Error

// const myStr = 'FirstLine\n\tSecondLine\nThirdLine'; // Змініть цей рядок
// console.log(myStr);

// function countVowel(str) {
//   const vowels = "aeiou";
//   // let count = 0;
//   str = str.toLowerCase();

//   for (let i = 0; i < str.length; i += 1) {
//     if (vowels.includes(str[i])) {
//       // count += 1;
//       console.log(str[i]);
//     }
//   }
//   // return count;
//   return;
// }
// console.log(countVowel("HELLO WORLD")) // 3
// console.log(countVowel("Junior Web Developer")); // 8

// function countVowel(str) {
//   const vowels = "aeiou";
//   let count = 0;

//   str = str.toLowerCase();

//   for (let i = 0; i < str.length; i += 1) {
//     if (vowels.includes(str[i])) {
//       count += 1;
//     }
//   }
//   return count;
// }
// console.log(countVowel("HELLO WORLD")) // 3
// console.log(countVowel("Junior Web Developer")); // 8

//1
//Використовуя функцію if...else, напишіть код, який буде питати: "Яка офіційна назва JavaScript?"
// - Якщо користувач вводить "ECMAScript", то показати через alert: "Вірно!"
//в противному випадку відобразити:"Не знаєте? ECMAScript!"

// let answer = prompt('Яка офіційна назва JavaScript?');
// if (answer === 'ECMAScript') {
//   alert('Вірно!');
// } else {
//   alert('Не знаєте? ECMAScript!');
// }

//2
//Напишіть программу, яка отримує від користувача число (кількість хвилин) и виводить у консоль
// рядок у форматі годин та хвилин  70 === 01:10
//  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

// const answer = prompt('Enter number');
// let hours = parseInt(answer / 60);
// console.log(hours);
// let minutes = answer % 60;
// console.log(minutes);
// console.log(
//   `${hours.toString().padStart(2, '0')} : ${minutes
//     .toString()
//     .padStart(2, '0')}`
// );

//3
//Напишіть цикл, який виводить в консоль
//числа от max до min по зменьшенню
//Виведіть в консоль суму усіх парних чисел

// const max = 100;
// const min = 10;
// let total = 0;
// for (let i = max; i >= min; i -= 1) {
//   // console.log(i);
//   if (i % 2) {
//     total += i;
//   }
// }
// console.log(total); //2475

// function sum(max, min) {
//   let total = 0;
//   for (let i = max; i >= min; i -= 1) {
//     if (i % 2) {
//       total += i;
//     }
//   }
//   return total;
// }
// console.log(sum(100, 10)); //2475

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має значення '1', то у змінну
// result запишемо 'зима', якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.

// const num = Number(prompt('введіть цифру від 1 до 4'));
// let result = '';
// switch (num) {
//   case 1:
//     result = 'зима';
//     break;
//   case 2:
//     result = 'ready';
//     break;
//   case 3:
//     result = 'літо';
//     break;
//   case 4:
//     result = 'осінь';
//     break;
//   default:
//     result = 'введіть цифру від 1 до 4';
// }
// console.log(result);

// const num = Number(prompt('введіть цифру від 1 до 4'));
// function seasons(num) {
//   switch (num) {
//     case 1:
//       return 'зима';
//       break;
//     case 2:
//       return 'ready';
//       break;
//     case 3:
//       return 'літо';
//       break;
//     case 4:
//       return 'осінь';
//       break;
//     default:
//       return 'введіть цифру від 1 до 4';
//   }
// }
// console.log(seasons(num));

//4
//Напишіть код, який буде питати логін за допомогою prompt и логіровати результат
//в консоль браузера. Якщо користувач вводить "Адмін", то prompt запрашує пароль.
//Якщо ничого не ввели чи нажата клавіша Esc вивести строку "Скасовано"
//В противному випадку вивести рядок "Я вас не знаю"
//Пароль перевіряти так: Якщо введен пароль "Я головний", то вивести рядок "Вітаю!"
//в іншому випадку виводити рядок "Невірний пароль!"
