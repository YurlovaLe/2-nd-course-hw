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

//Задание 5
let num = 0;
for (let n = 1000; n >= 50; num++) {
  n /= 2;
}
console.log(num);

//Задание 6
let firstFriday = 4;
for (let dayMonth = 1; dayMonth < 32; dayMonth++) {
  if ((dayMonth - firstFriday) % 7 == 0) {
    console.log(`Сегодня пятница, ${dayMonth}-е число. Необходимо подготовить отчет.`);
  }
}


