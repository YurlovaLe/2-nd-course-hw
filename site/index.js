function seasonsGame(monthNumber = Number(prompt("Введи номер месяца от 1 до 12"))) {

  if (monthNumber === 1  || monthNumber === 2 || monthNumber === 12) {
    console.log('Зима');
  } else if (monthNumber === 3  || monthNumber === 4 || monthNumber === 5) {
    console.log('Весна');
  } else if (monthNumber === 6  || monthNumber === 7 || monthNumber === 9) {
  console.log('Лето');
  } else if (isNaN(monthNumber)) {
    console.log('Месяц должен быть введен числом');
  } else {
  console.log('Номер месяца должен быть от 1 до 12');
    }
}

function rememberWordsGame() {
  let arrWords = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
  arrWords.sort(() => Math.random() - 0.5);
  alert(arrWords, "Запомните первое и последнее слово");
  let firstWord = prompt("Чему равнялся первый элемент массива?");
  let lastWord = prompt("Чему равнялся последний элемент массива?");
  let checkFirstWord = Number(arrWords[0].toLowerCase() === firstWord.toLowerCase());
  let checkLastWord = Number(arrWords[arrWords.length - 1].toLowerCase() === lastWord.toLowerCase());

  switch (checkFirstWord + checkLastWord) {
    case 2:
      console.log('Ура! Вы запомнили оба слова');
      break;
    case 1:
      console.log('Вы были близки к победе!');
      break;
    case 0:
      console.log('В этот раз удача не на вашей стороне. Попробуем еше раз?');
      break;
    default:
      console.log('Ой-ой, что-то пошло не так');
      break;
  }
}


