/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};


// for (let i = 0; i < 2; ) {
//     const movie = prompt('Один из последних просмотренных фильмов?',''),
//           rating = prompt('На сколько оцените его?', '');

//     if (movie != '' && movie != null && movie.length <= 50 && rating != '' && rating != null) {
//         personalMovieDB.movies[movie] = rating;
//         i++;
//     }
// }

let index = 0;

// while (index < 2) {
//     const movie = prompt('Один из последних просмотренных фильмов?',''),
//           rating = prompt('На сколько оцените его?', '');

//     if (movie != '' && movie != null && movie.length <= 50 && rating != '' && rating != null) {
//         personalMovieDB.movies[movie] = rating;
//         index++;
//     }    
// }

do {
    const movie = prompt('Один из последних просмотренных фильмов?',''),
    rating = prompt('На сколько оцените его?', '');

    if (movie != '' && movie != null && movie.length <= 50 && rating != '' && rating != null) {
        personalMovieDB.movies[movie] = rating;
        index++;
    }       
} while (index < 2);

if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else if (personalMovieDB.count > 10) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 0) {
    alert("Просмотрено довольно мало фильмов");
} else {
    alert("Произошла ошибка");
}



console.log(personalMovieDB);
