// Task 1
const menu = prompt("Оберіть каву, чай або сік");
const drinks = ["чай", "кава", "сік"];

switch (menu) {
  case drinks[0]:
    alert("Ви обрали чай");
    break;
  case drinks[1]:
    alert("Ви обрали каву");
    break;
  case drinks[2]:
    alert("Ви обрали сік");
    break;
  default:
    alert("Такого наразі немає");
}
// Task 2
const week = prompt("Введіть день тижня");

switch (week) {
  case "понеділок":
    alert("Сьогодні робочий день");
    break;
  case "вівторок":
    alert("Сьогодні робочий день");
    break;
  case "середа":
    alert("Сьогодні робочий день");
    break;
  case "четвер":
    alert("Сьогодні робочий день");
    break;
  case "пятниця":
    alert("Сьогодні робочий день");
    break;
  case "субота":
    alert("Сьогодні вихідний");
    break;
  case "неділя":
    alert("Сьогодні вихідний");
    break;
  default:
    alert("Ви обрали не існуючий день тижня");
}
// Task 3
const month = prompt("Введіть місяць, щоб дізнатися пору року");

switch (month) {
  case "грудень":
  case "січень":
  case "лютий":
    alert("зима");
    break;

  case "березнь":
  case "квітнь":
  case "травнь":
    alert("весна");
    break;

  case "червень":
  case "липень":
  case "серпень":
    alert("літо");
    break;

  case "вересень":
  case "жовтень":
  case "листопад":
    alert("осінь");
    break;

  default:
    alert("Ви ввели не існуючий місяц");
}
// Task 4
const numbersOfMonths = prompt("Введіть номер місяця, щоб дізнатись скільки в ноьому днів");

switch (numbersOfMonths) {
  case "1":
  case "5":
  case "7":
  case "10":
  case "12":
    alert("в цому місяці 31 день");
    break;

  case "4":
  case "8":
  case "9":
    alert("в цьому місяці 30 днів");
    break;

  case "2":
  case "3":
  case "6":
  case "11":
    alert("в цьому місяці 29 днів");
    break;

  default:
    alert("Ви ввели не існуючий номер місяцю");
}
// Task 5
const colors = prompt("Введіть колір! червоний, жовтий або зелений");

switch (colors) {
  case "червоний":
    alert("ASTANAVISTA😡");
    break;
  case "зелений":
    alert("SALTO??🤑");
    break;
  case "жовтий":
    alert("WAIT!!😖");
    break;
  default:
    alert("Ви ввели не існуючий колір🙊");
}
// Task 6
let x = prompt("Оберіть число!");
let y = prompt("Оберіть число!");
const z = prompt(
  "Якщо ви оберете 1, то виконається дія + . Якщо ви оберете 2, то виконається дія - . Якщо ви оберете 3, то виконається дія * . Якщо ви оберете 4, то виконається дія /"
);

x = parseInt(x);
y = parseInt(y);

let result;

switch (z) {
  case "1":
    result = x + y;
    break;
  case "2":
    result = x - y;
    break;
  case "3":
    result = x * y;
    break;
  case "4":
    result = x / y;
    break;
  default:
    result = "Ви обрали не існуючу команду";
}
alert(result);
