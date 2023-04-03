//Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);

//Задание 2
let iphoneRelease = 2007;
alert(iphone);

//Задание 3
let JavaScriptCreator = "Брендан Эйх";
alert(JavaScriptCreator);

//Задание 4
let c = 10;
let d = 2;
alert(c+d);
alert(c-d);
alert(c*d);
alert(c%d);

//Задание 5
let result = 2**5;
alert(result);

//Задание 6
let b = 2;
a = 9;
alert(a%b);

//Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);

//Задание 8
let age = +prompt('Сколько вам лет?');
alert(age);

//Задание 9.0
const user = {
  name: "Джон",
  age: 25,
  isAdmin: true
};

//Задание 9.1
user['city of residence'] = "Новосибирск";

//Задание 9.2
user.age = 26;

//Задание 9.3
delete user['city of residence'];

//Задание 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?", "name");
alert (user[info]);

//Задание 10
userName = prompt('Ввидите имя');
alert(`Привет, ${userName}!`);