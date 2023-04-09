//Задание 1

function higherNumber(a, b) {
if (a >= b) {
  return a;
} else {
  return b;
}
}

console.log(higherNumber(8, 4));
console.log(higherNumber(6, 6));

//Задание 2

let n = prompt("Введи число")

function evenCheck() {
  let t = (n % 2 ==0) ? 'Число четное' : 'Число нечетное';
  return t;
}

evenCheck();

//Задание 3.1

function squaring(d) {
  console.log(d * d);
}

squaring(8);

//Задание 3.2

function squaring(d) {
  return(d * d);
}

squaring(8);

//Задание 4

function salutation(age = prompt("Введите свой возраст")) {
  if (age < 0) {
    alert("Вы ввели неправильное значение");
  } else if (age < 13) {
    alert("Привет, друг!");
  } else {
    alert("Добро пожаловать!");
  }
}

salutation();

//Задание 5

function mult(f, g) {
  if (isNaN(f) || isNaN(g)) {
    console.log ('Одно или оба значения не являются числом');
  } else {
    return f * g;
  }
}

mult(4,5);

//Задание 6

function cubeNumber(c = Number(prompt("Введите число"))) {
  if (isNaN(c)) {
    console.log("Переданный параметр не является числом");
  } else {
    console.log(`${c} в кубе равняется ${c**3}`);
  }
}

 cubeNumber();

 //Задание 7

function getCirclArea() {
  return Math.PI * this.radius ** 2; 
}
function getCirclPerimeter() {
  return 2 * Math.PI * this.radius;
}

 const circl1 = {
  radius: 5,
  getArea: getCirclArea,
  getPerimeter: getCirclPerimeter
 }

 const circl2 = {
  radius: 7,
  getArea: getCirclArea,
  getPerimeter: getCirclPerimeter
 }

 console.log(circl1.getArea());
 console.log(circl1.getPerimeter());
 console.log(circl2.getArea());
 console.log(circl2.getPerimeter());