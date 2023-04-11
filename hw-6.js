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