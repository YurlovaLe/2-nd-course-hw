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

