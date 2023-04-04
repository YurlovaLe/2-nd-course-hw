//Задание 1
let i = 1;
while (i <= 2) {
  console.log('Привет');
  i++;
}

//Задание 2
for (let a = 1; a <= 5; a++) {
  console.log(a);
}

//Задание 3
for (let b = 7; b <= 22; b++) {
  console.log(b);
}

//Задание 4
const obj = {
  'Коля':'200',
  'Вася':'300',
  'Петя':'400'
};
for (let salary in obj) {
  console.log(`${salary} - зарплата ${obj[salary]}`);
}




