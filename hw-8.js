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