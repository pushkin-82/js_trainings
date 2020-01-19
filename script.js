'use strict';
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == '' || money == null)
        money = +prompt("Ваш бюджет на месяц?", '');
}

start();

let appData = {
    budget : money,
    timeData : time,
    expenses: {},
    optionalExpenses : {},
    income : [],
    savings : true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let title = prompt("Введите обязательную статью расходов в этом месяце"),
            value = prompt("Во сколько обойдется?");
        if (typeof(title) === 'string' && typeof(title) != null && typeof(value) != null
            && title != '' && value != '' && title.length < 50) {
            appData.expenses[title] = value;
        } else {
            i--;
        }
    }
}

chooseExpenses();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let answer = prompt("Статья необязательных расходов?")
        if (typeof(answer) == 'string' && typeof(answer) != null && answer != '') {
            appData.optionalExpenses[i+1] = answer;
        }
    }
}

chooseOptExpenses();




function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Poor');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Rich')
    } else{
        console.log('Middle class')
    }
}

function checkSavings() {
    if (appData.savings) {
        let save = +prompt("What is your sum?");
        let percent = +prompt("What is percent?");

        appData.monthIncome = save/100/12 * percent;

        alert("Your profit is: " + appData.monthIncome);
    }
}

checkSavings();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Budget per day:" + appData.moneyPerDay);
}