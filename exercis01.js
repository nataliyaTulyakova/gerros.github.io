"use strict";
let message1 = "Hello";
let message2 = "JavaScript";
// alert(message1+' '+message2+'!');
alert(`${message1} ${message2}!`);
let number1;
let number2;
let sum = 0;
do{
number1 = +prompt("Enter first number");
// console.log(number1);
} while (isNaN(number1));
do{
number2 = +prompt("Enter second number");
// console.log(number2);
} while(isNaN(number2));
sum = number1 + number2;
// console.log(sum);
alert(`Sum of numbers: ${sum}`);

const a = 3;
let number;
do {
  number = +prompt("Please, enter a number:");
  if (!isNaN(number)) {
    if (number == a) {
      alert("Congratulations, You did it!");
    } else if (number < a) {
      alert("The number is short");
    } else {
      alert("The number is too long");
    }
  }
} while (number != a);

let day;

day = prompt("Please, enter a day of the week:");
day = day.toLowerCase();
if (day == "monday" || day == "понеділок") {
  alert("Start of the work week!");
} else if (day == "friday" || day == "п'ятниця") {
  alert("End of the work week!");
} else alert("A regular day");

let weekDay;

weekDay = prompt("Please, enter a day of the week:");
weekDay = weekDay.toLowerCase();
switch (weekDay) {
  case "monday":
  case "понеділок":
    alert("Start of the work week!");
    break;
  case "friday":
  case "п\'ятниця":
    alert("End of the work week!");
    break;
  case "tuesday":
  case "вівторок":
  case "wednesday":
  case "середа":
  case "thursday":
  case "четвер":
    alert("A regular day");
    break;
  case "saturday":
  case "субота":
    alert("Weekend");
    break;
  default:
    alert("You enter a wrong day name");
}

let score;
let grade;
do {
  score = +prompt("Enter a score: ");
  if (isNaN(score)) {
    alert("Please, enter a number");
  } else if (score < 50) {
    grade = "F";
  } else if (score < 70) {
    grade = "D";
  } else if (score < 80) {
    grade = "C";
  } else if (score < 90) {
    grade = "B";
  } else {
    grade = "A";
  }
} while (isNaN(score));
alert(`The student\'s grade is "${grade}"`);
