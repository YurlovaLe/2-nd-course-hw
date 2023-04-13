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
  e[j] = [ ];

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