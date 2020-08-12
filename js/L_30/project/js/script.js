/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ]
};

const ads = document.querySelectorAll(".promo__adv img"),
      background = document.querySelector('.promo__bg'),
      genres = background.querySelector(".promo__genre"),
      filmList = document.querySelector('.promo__interactive-list');

ads.forEach(item => {
    item.remove();
});

genres.textContent = 'ДРАМА';

background.style.backgroundImage = `url('img/bg.jpg')`;

// for (let i = 0; i < movieDB.movies.length; i++) {
//     filmList[i].textContent = i + 1 + '. ' + movieDB.movies[i];
// }

filmList.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    filmList.innerHTML += `
        <li class="promo__interactive-item">${i+1}. ${film}
            <div class="delete"></div>
        </li>    
    `;
});

