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

