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

