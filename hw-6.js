//Задание 1

const arr = [1, 5, 4, 10, 0, 3];

for (let item of arr) {
  if (item !== 10) {
    console.log(item);
  } else {
    break;
  }
}

//Задание 2

const arr = [1, 5, 4, 10, 0, 3];

let positionNumber = arr.indexOf(4) + 1;
console.log(positionNumber);

//Задание 3

const a = [1, 3, 5, 10, 20];

let b = a.join(' ');
console.log(b);

//Задание 4

let e = [];

for (let j = 0; j < 3; j++) {
  e[j] = [];

  for (let i = 0; i < 3; i++) {
    e[j].push(1);
  }
}

console.log(e);

//Задание 5

const f = [1, 1, 1];

for (let i = 0; i < 3; i++) {
  f.push(2);
}

console.log(f);

//Задание 6

const g = [9, 8, 7, 'a', 6, 5];

g.sort();
g.pop();
console.log(g);

//Задание 7

const h = [9, 8, 7, 6, 5];

let k = Number(prompt('Введи число от 1 до 10'));
if (h.includes(k)) {
  console.log("Такое число есть");
} else {
  console.log("Такого числа нет");
}

//Задание 8

const l = 'abcdef';
let m = l.split('');

m.reverse();
m = m.join('');
console.log(m);

//Задание 9

let n = [[1, 2, 3,], [4, 5, 6]];
let v = [];

n = n.join(',');
v = n.split(',');

for (let i = 0; i < v.length; i++) {
  v[i] = Number(v[i]);
}

console.log(v);

//Задание 10

o = [1, 3, 4, 6, 7, 9];

for (let i = 0; i < o.length; i++) {
  if (i === o.length - 1) {
    break;
  } else {
    console.log(o[i] + o[i + 1]);
  }
  }

  //Задание 11

  function square(p) {
    const result = p.map(r => (r ** 2));
    console.log(result);    
  }

  square([3, 6, 7, 8]);

  //Задание 12

  function getLengthWords(s) {
    let t = [];
    for (let i = 0; i < s.length; i++) {
      let elementLength = s[i].length;
      t.push(elementLength);
    }
    console.log(t);    
  }

  getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']);

  //Задание 13

  function negativeNumber(t) {
    const u = [];
    for (let i = 0; i < t.length; i++) {
      if (t[i] < 0) {
        u.push(t[i]);
      }
    }
    console.log(u);
  }

  negativeNumber([1, -3, 4, -5, -7, 0, -28, 45]);

  //Задание 14

  let fullArr = [];
  let evenArr = [];

  for (let i = 0; i < 10; i++) {
    fullArr[i] = Math.floor(Math.random() * 11);
    if (fullArr[i] % 2 === 0) {
      evenArr.push(fullArr[i]);
    }
  }

  console.log(fullArr);
  console.log(evenArr);

  //Задание 15

  let randomArr = [];
  let sum = 0;

  for (let i = 0; i < 6; i++) {
    randomArr[i] = Math.floor(Math.random() * 10) + 1;
    sum += randomArr[i];
  }
  
  let arithMean = sum / randomArr.length;
  console.log(randomArr);
  console.log(arithMean);