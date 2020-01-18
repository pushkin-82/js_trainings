'use strict';

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget : money,
    timeData : time,
    expenses: {},
    optionalExpenses : {},
    income : [],
    savings : false
};

let title = prompt("Введите обязательную статью расходов в этом месяце");
let value = prompt("Во сколько обойдется?");
let title1 = prompt("Введите обязательную статью расходов в этом месяце");
let value1 = prompt("Во сколько обойдется?");

appData.expenses[title] = value;
appData.expenses[title1] = value1;

alert(appData.budget / 30);

console(appData.budget / 30);


// let answer = confirm("Hello world!");
// console.log(answer);
