const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?');
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?'),
                  b = prompt('На сколько оцените его?');
        
            if(a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies [a] = b;
                console.log('done');
            } else {
                console.log('Error');
                i--;
            } 
        }
    },
    detectPersonalLevel: function() {
        if(personalMovieDB.count < 10) {
            console.log('Просмотренно довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB.privat);
        }
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        // for(let i = 1; i<=3; i++) {
        for(let i = 1; i<=2; i++) {
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            // if(genre === '' || genre == null) {
            //     console.log('Вы ввели некоректные данные или не ввели их вовсе');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i-1] = genre;
            // }

            let genres = prompt('Введите Ваши любимые жанры через запятую').toLowerCase();

            if(genres === ' ' || genres == null) {
                console.log('Вы ввели некоректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        } 

        personalMovieDB.genre.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};