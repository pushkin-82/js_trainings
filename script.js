// 'use strict';
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
    savings : true,
    chooseExpenses : function () {
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
    },
    detectDayBudget : function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Budget per day:" + appData.moneyPerDay);
    },
    detectLevel : function () {
        if (appData.moneyPerDay < 100) {
            console.log('Poor');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Rich');
        } else if (appData.moneyPerDay >=100 && appData.moneyPerDay <= 2000){
            console.log('Middle class');
        } else {
            console.log("smth wrong....");
        }
    },
    checkSavings : function () {
        if (appData.savings) {
            let save = +prompt("What is your sum?");
            let percent = +prompt("What is percent?");

            appData.monthIncome = save/100/12 * percent;

            alert("Your profit is: " + appData.monthIncome);
        }
    },
    chooseOptExpenses : function () {
        for (let i = 0; i < 3; i++) {
            let answer = prompt("Статья необязательных расходов?");
            if (typeof(answer) == 'string' && typeof(answer) != null && answer != '') {
                appData.optionalExpenses[i+1] = answer;
            }
        }
    },
    chooseIncome : function () {
        let items = prompt("What give extra profit (list with comma separator)");

        if (typeof(items) == 'string' && typeof items != null && items != '') {
            appData.income = items.split(',');
        }

        let extraItem = '';
        while (extraItem != null) {
            extraItem = prompt("Maybe smth else?");
            if (typeof extraItem == 'string' && extraItem != '') {
                appData.income.push(extraItem);
            }
        }
        appData.income.sort();

        console.log("Способы доп. заработка: ");
        appData.income.forEach(function(item, i) {
            console.log((i+1) + ': ' + item);
        });
    }
};

function info() {
    console.log("Наша программа включает в себя данные: ")
    for (let key in appData) {
        console.log(key);
    }
}
info();
