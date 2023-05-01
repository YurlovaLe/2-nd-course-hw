//Задание 1

function mult(a) {
  const resultMult = a.reduce((b, c) => b * c);
  return resultMult;
}

function sum(f) {
  const resultSum = f.reduce((d, e) => d + e);
  return resultSum;
}

function getResult(arr, callback) {
  return callback(arr);  
}

getResult ([3, 4, 1, 9], mult);
getResult ([3, 4, 1, 9], sum);

//Задание 2

const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];

function compareUser(a, b) { 
	if (a.age > b.age) return 1;
	if (a.age < b.age) return -1;
	return 0;
}

users.sort(compareUser);
console.log(users);

//Задание 3

const k = [1, '4', 9, 'two'];
const l = [1, '4', false, 9, 'two'];

function reversArr(g) {
  return g.reverse();
}

function toNumberArr(h) {
  return h.map(Number).filter((element) => !isNaN(element))
}

function each(j, callbackArr) {
  return callbackArr(j);
}

each(k,reversArr);
each(l,toNumberArr);

//Задание 4

let timerId = setInterval(() => console.log(new Date()), 3000);
setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 30000);

//Задание 5

function calling() {
  console.log('Звоню!')
};

function beeps(callbackTalk) {
  setTimeout(() => {
      console.log('Идут гудки...');
      callbackTalk();
  }, 1000);
}

function talk() {
  console.log('Разговор')
}

calling();
beeps(talk);
