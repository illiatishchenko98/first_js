const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
const personalDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцени его?', '');
    //   c = prompt('Один из последних просмотренных фильмов?', ''),
    //   d = prompt('На сколько оцени его?', '');
personalDB.movies[a] = b;
// personalDB.movies[c] = d;
console.log(personalDB);