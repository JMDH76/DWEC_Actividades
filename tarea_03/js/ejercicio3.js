/* Implementa un script que permita validar el siguiente formulario. 
Una vez validado, sustituye este enunciado con la reseña y los datos 
introducidos por el usuario. */

let form3 = document.getElementsByTagName('form')[2];
let titlesArray3 = ['Nickname', 'Película', 'Año', 'Director', 'Calificación'];
let frequencyArray = ['frequency-low', 'frequency-normal', 'frequency-high'];


form3.addEventListener('submit', function (event) {
    event.preventDefault();
    let nickname = document.getElementById('nickname').value;
    let filmName = document.getElementById('film').value;
    let yearFilm = document.getElementById('year').value;
    let directorFilm = document.getElementById('director').value;
    let filmCalification = document.getElementById('category').value;

    let radioValue;
    for (let i = 0; i < frequencyArray.length; i++) {
        let radio = document.getElementById(frequencyArray[i]).checked;
        if (radio) {
            radioValue = i;
            break;
        }
    }
    let filmReview = document.getElementById('message').value;

    if (testNickname(nickname) === true && testFilm(filmName) === true
        && testYear(yearFilm) === true && testDirector(directorFilm) === true
        && testCalification(filmCalification) !== false && testReview(filmReview) === true
        && testFilmsFrequency(radioValue) && testNotARobot() === true) {

        let parrafo = document.querySelector('#three p');

        parrafo.innerHTML = 'Hola ' + nickname + '.<br> La película que has elegido es \"' + filmName + '\" estrenada en el año ' + yearFilm +
            '. <br>Su director fué ' + directorFilm + ' y la has calificado como \"' + testCalification(filmCalification) + '.\" <br>Tu reseña sobre la película es la siguiente: \n \"' +
            filmReview + '.\"<br> Ves ' + testFilmsFrequency(radioValue) + ' películas a la semana.'
        
        form3.reset();
    }
});

function testNickname(nick) {
    if (nick === '') {
        alert('Inserte un nickname');
        return false;
    } else return true;
}

function testFilm(film) {
    if (film === '') {
        alert('Inserte el nombre de una película');
        return false;
    } else return true;
}

function testYear(year) {
    if (year === '' || isNaN(year) || Math.abs(year).toString().length != 4) {
        alert('Inserte un año válido');
        document.getElementById('year').value = "";
        return false;
    } else return true;
}

function testDirector(director) {
    if (director === '') {
        alert('Inserte el nombre del director de la película');
        return false;
    } else return true;
}

function testCalification(calification) {
    if (calification === "") {
        alert('Califique la película');
        document.getElementById('category').value = "";
        return false;
    } else {
        let filmCalification = document.getElementById('category');
        let optionCalification = filmCalification.options[filmCalification.selectedIndex];
        let textOption = optionCalification.textContent;
        return textOption;
    }
}

function testFilmsFrequency(num) {
    let frequency;
    if (num === 0) frequency = 'Una ó ninguna';
    else if (num === 1) frequency = 'Dos ó tres';
    else if (num === 2) frequency = 'Cuatro ó más';
    return frequency;
}

function testNotARobot() {
    let notARobotValue = document.getElementById('human').checked;
    if (!notARobotValue) {
        alert('Seleccione \'No soy un robot\'')
        return false;
    }
    else return true;
}

function testReview(review) {
    if (review === '' || review === undefined) {
        alert('Inserte una reseña sobre la película');
        document.getElementById('message').value = "";
        return false;
    } else return true;
}








