/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

++2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

++3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

++4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

++5) Фильмы должны быть отсортированы по алфавиту */

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
      filmList = document.querySelector('.promo__interactive-list'),
      interactiveForm = document.querySelector('.promo__interactive'),
      addForm = interactiveForm.querySelector('.add'),
      addBtn = addForm.querySelector('button'),
      chkBox = addForm.querySelector('[type="checkbox"]');

const addNewMovieToList = (e) => {
    e.preventDefault();
    const newMovieName = addForm.querySelector('.adding__input').value;
    movieDB.movies.push(cutMovieName(newMovieName));

    if (chkBox.checked) {
        console.log("Добавляем любимый фильм");
    }

    showMovieList();
};

const deleteMovie = (e) => {
    let movieToDelete = e.currentTarget.parentElement.textContent;
    const index = movieToDelete.indexOf(' ');

    movieToDelete = movieToDelete.slice(index+1);
    movieDB.movies = removeFromDB(movieDB.movies, movieToDelete.trim());

    showMovieList();
};

showMovieList();

ads.forEach(item => {
    item.remove();
});

genres.textContent = 'ДРАМА';

background.style.backgroundImage = `url('img/bg.jpg')`;

addBtn.addEventListener('click', addNewMovieToList);
background.addEventListener('click', addNewMovieToList);

function cutMovieName(movie) {
    let cutMovie = movie;
    if (movie.length > 21) {
        cutMovie = movie.slice(0, 18) + '...';
    }

    return cutMovie;
}

function cutMoviesInMovieDB(list) {
    for (let i = 0; i < list.length; i++) {
        list[i] = cutMovieName(list[i]);
    }
}

function showMovieList() {
    filmList.innerHTML = '';

    movieDB.movies.sort();
 
    movieDB.movies.forEach((film, i) => {
        filmList.innerHTML += `
            <li class="promo__interactive-item">${i+1}. ${film}
                <div class="delete"></div>
            </li>    
        `;
    });   
    
    updateDeleteBtns();
}

function updateDeleteBtns() {
    const trashBtns = interactiveForm.querySelectorAll('.delete');
    trashBtns.forEach(item => {
        item.addEventListener('click', deleteMovie);
    });
}

function removeFromDB(arr, name) {
    let index = arr.indexOf(name);

    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}
