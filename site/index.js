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