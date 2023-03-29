//Задание 1
let password = 'пароль';
let enteredPassword = prompt('Введите пароль');
if (enteredPassword===password) {
  console.log('Пароль введен верно');
} else {
  console.log('Пароль введен неправильно');
}

//Задание 2
let c = 0;
if (c>0 && c<10) {
  console.log('Верно');
} else {
  console.log('Неверно');
}

c = 10;
if (c>0 && c<10) {
  console.log('Верно');
} else {
  console.log('Неверно');
}

c = -3;
if (c>0 && c<10) {
  console.log('Верно');
} else {
  console.log('Неверно');
}

c = 2;
if (c>0 && c<10) {
  console.log('Верно');
} else {
  console.log('Неверно');
}

//Задание 3
let d = 15;
let e = 110;
if (d>100 || e>100) {
  console.log('Верно');
} else {
  console.log('Неверно');
}

//Задание 4
let a = '2';
let b = '3';
alert(+a + +b);
