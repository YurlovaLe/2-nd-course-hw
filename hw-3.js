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

//Задание 5
let monthNumber = +prompt('Введите номер месяца от 1 до 12');
switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    console.log('Зима');
    break;

  case 3:
  case 4:
  case 5:
    console.log('Весна');
    break;

  case 6:
  case 7:
  case 8:
     console.log('Лето');
     break;

  case 9:
  case 10:
  case 11:
     console.log('Осень');
     break;

  default:
    console.log('Номер месяца должен быть от 1 до 12');
    break;
}
