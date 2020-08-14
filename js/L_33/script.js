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

document.addEventListener('DOMContentLoaded', () => {
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
          addInput = addForm.querySelector('.adding__input'),
          chkBox = addForm.querySelector('[type="checkbox"]');

    const removeElements = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const initialChanges = () => {
        genres.textContent = 'ДРАМА';
        background.style.backgroundImage = `url('img/bg.jpg')`;
    };
    
    const addNewMovieToList = (e) => {
        e.preventDefault();
        const newMovieName = addInput.value;

        if (newMovieName) {
            movieDB.movies.push(cutMovieName(newMovieName));
        
            if (chkBox.checked) {
                console.log("Добавляем любимый фильм");
            }
        
            showMovieList(movieDB.movies, filmList);            
        }

        e.target.reset();
    };

    const sortArray = (arr) => {
        arr.sort();
    };

    function cutMovieName(movie) {
        let cutMovie = movie;
        if (movie.length > 21) {
            cutMovie = movie.slice(0, 18) + '...';
        }
    
        return cutMovie;
    }

    function showMovieList(films, parent) {
        parent.innerHTML = '';

        sortArray(films);
     
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i+1}. ${film}
                    <div class="delete"></div>
                </li>    
            `;
        });   

        updateDeleteBtns(films, parent);
    }
    
    function updateDeleteBtns(films, parent) {
        const trashBtns = interactiveForm.querySelectorAll('.delete');
        trashBtns.forEach((item, i) => {
            item.addEventListener('click', () => {
                item.parentElement.remove();
                films.splice(i, 1);
                showMovieList(films, parent);
            });
        });
    }
    
    removeElements(ads);
    initialChanges();
    showMovieList(movieDB.movies, filmList);

    addForm.addEventListener('submit', addNewMovieToList);
});