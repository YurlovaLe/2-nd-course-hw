//Задание 1

let str = 'js';
str = str.toUpperCase();

//Задание 2

//Задание 3

const a = 32.58884;

console.log (Math.floor(a));
console.log (Math.ceil(a));
console.log (Math.round(a));

//Задание 4

let b = Math.max(52, 53, 49, 77, 21, 32);
let c = Math.min(52, 53, 49, 77, 21, 32);

console.log(`Наибольшее число ${b}`);
console.log(`Наименьшее число ${c}`);

//Задание 5

function random() {
  let d = Math.floor(Math.random() * 10) + 1;
  return d;
}

random();

//Задание 6


//Задание 7

function randomInRange(min, max) {
  let e = Math.floor(Math.random() * (max - min)) + min;
  return e;
}

randomInRange(-3, 8);

//Задание 8

let dateToday = new Date(Date.now());
console.log(dateToday);

//Задание 9

let currentDate = new Date();
let g = new Date(currentDate.setDate(currentDate.getDate() + 73));

console.log(g);

//Задание 10

  function DateInfo(s) {
    const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let myDate = new Date(s);
    let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + days[myDate.getDay()] + ".";
    let fullTime = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
    console.log(fullDate);
    console.log(fullTime);
  }

  DateInfo('1995-12-17T03:24:00');

