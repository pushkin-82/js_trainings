'use strict';

let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget : money,
    timeData : time,
    expenses: {},
    optionalExpenses : {},
    income : [],
    savings : false
};

for (let i = 0; i < 2; i++) {
    let title = prompt("Введите обязательную статью расходов в этом месяце"),
        value = prompt("Во сколько обойдется?");
    if (typeof(title) === 'string' && typeof(title) != null && typeof(value) != null
    && title !== '' && value !== '' && title.length < 50) {
        appData.expenses[title] = value;
    } else {
        i--;
    }
}

// let idx = 0;
// while (idx < 2) {
//     let title = prompt("Введите обязательную статью расходов в этом месяце"),
//         value = prompt("Во сколько обойдется?");
//     idx++;
//     if (typeof(title) === 'string' && typeof(title) != null && typeof(value) != null
//         && title !== '' && value !== '' && title.length < 50) {
//         appData.expenses[title] = value;
//         console.log('done' + idx);
//     }
//     else {
//         idx--;
//     }
// }

// let index = 0;
// do {
//     let title = prompt("Введите обязательную статью расходов в этом месяце"),
//         value = prompt("Во сколько обойдется?");
//
//     index++;
//
//     if (typeof(title) === 'string' && typeof(title) != null && typeof(value) != null
//         && title !== '' && value !== '' && title.length < 50) {
//         appData.expenses[title] = value;
//     }
//     else {
//         index--;
//     }
// } while (index < 2);

appData.moneyPerDay = appData.budget / 30;
alert("Budget per day:" + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Poor');
} else if (appData.moneyPerDay > 2000) {
    console.log('Rich')
} else{
    console.log('Middle class')
}


// let answer = confirm("Hello world!");
// console.log(answer);
