
// BOOLEAN COMPARISONS

// ----lev-1_14

// console.log(Boolean(100))

// console.log(Boolean(3.14))

// console.log(Boolean(-15))

// console.log(Boolean("hello"))
// console.log(Boolean("false"))
// console.log(Boolean(1 + 7 + 3.14))
// console.log(Boolean(0))
// console.log(Boolean(-0))
// console.log(Boolean(NaN))
// console.log(Boolean(null))
// console.log(Boolean(false))
// console.log(Boolean(true))

// ----lev-1_15

// let num = 5;
// let anotherNum = 8;
// console.log(num == anotherNum);
// console.log(num > anotherNum);
// console.log(num < anotherNum);
// console.log(num >= anotherNum);
// console.log(num <= anotherNum);

// console.log(num == "5");
// console.log(num != "8");
// console.log(num != "5");



// DATA TYPES
// --------lev 1_3-----Einführung data types------------------
// let i = 1;
// console.log(typeof (1));/* number*/
// let lastName = "Johnson";
// console.log(typeof ("Johnson"));/* string*/
// let j = "2";
// console.log(typeof ("2"));/* string*/
// let status = true;
// console.log(typeof (status));/* boolean*/
// let hello = "hello";
// console.log(typeof (hello));/* string*/
// let helloWorld = "hello";
// console.log(typeof (helloWorld));/* string*/




// --------lev 1_4------Einführung data types------------------

// console.log(typeof ("John"));/* string*/
// console.log(typeof (3.14));/* number*/
// console.log(typeof (NaN)); /* number*/
// console.log(typeof (false)); /* boolean*/
// console.log(typeof ([1, 2, 3, 4])); /* object*/
// console.log({ name: 'john', age: 34 });/* object*/
// console.log(typeof (function myFunction() { }));/* object*/
// console.log(typeof (null));/* object*/
// console.log(typeof (""));/* string*/
// console.log(typeof (2 + 3 == 5));/* boolean*/
// console.log(typeof (3 + "3"));/* string*/


// --------lev 1_8------Einführung data types------------------

// // Aufgabenstellung 1
// let x = 20;
// let y = 30;
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);

// let z = 10;
// let resultOne = (x * y) / z;
// console.log(resultOne);

// // Aufgabenstellung 2

// let a = 15;
// let b = 9;
// console.log(a % b); /*Restwert 6*/

// let c = 20;
// let resultTwo = ((a + b) * c)
// console.log(resultTwo);

// let resultThree = b - a;
// console.log(resultThree);

// console.log(resultOne % resultTwo);


// -------------------DOM ELEMENTS---------------------------------------------

// Übung 2_1

// let home = document.getElementById('navHome');
// function changeHome() {
//     // console.log('hi');
//     home.style.backgroundColor = 'crimson';
//     home.style.transform = 'rotate(180deg)';
// };

// Übung 2_2

// let firstName = document.getElementById('vorname');
// let lastName = document.getElementById('nachname');
// let country = document.getElementById('land');


// function showForm() {

//     console.log(firstName.value + ' ' + lastName.value + ' ' + country.value);


// }


// Übung 2_10

// function 1


// let headline = document.getElementById('headline');


// function s() {
//     console.log('hi');
//     headline.className = "";
//     headline.classList.add("small");
// };



// function m() {
//     console.log('hi');
//     headline.className = "";
//     headline.classList.add("mid");
// };
// function b() {
//     console.log('hi');
//     headline.className = "";
//     headline.classList.add("big");
// };


// Übung 2_11

// Anweisungen

// function generiere eine abgerundete random Zahl

// speichere diese Zahl in einer Variablen ab

// Variable  verwende diese Zahl für eine Farbe


// let bgcolor = document.getElementById('bgcolor');

// function randomNumber() {
//     // console.log('Hi');

//     let r = Math.floor(Math.random() * 255);
//     let g = Math.floor(Math.random() * 255);
//     let b = Math.floor(Math.random() * 255);

//     bgcolor.classList.add("background");

//     console.log(r, g, b);
// }
// randomNumber();


function randomNumber() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    console.log(randomColor);
};
