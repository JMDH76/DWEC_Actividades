// Cargar al acceder a la página    >      
window.onload = 'funcion aejecutar';

//Recarga la página
h1[0].addEventListener('click', () => {
    window.location.reload();
});

//llamada Axios
const getData = async () => {
    try {
        let response = await axios.get('https://api.thecatapi.com/v1/images/search?size=full');
        let url = response.data[0].url;

        let catImage = document.createElement('div');
        catImage.setAttribute('id', 'catImage');
        catImage.style.border = '1px solid black';
        catImage.style.backgroundImage = 'url(' + url + ')';
        catImage.style.backgroundSize = 'cover';
        catImage.style.width = '400px';
        catImage.style.height = '400px';
        catImage.style.margin = '15px';
        catImage.style.marginLeft = '200px'

        catImageFrame[0].appendChild(catImage);

    } catch {
        console.error(error)
    }
}

//Botones Carrusel
//Carrusel series
let actualActor = 0;
let actualSerie;
let type;

//Boton 'Anterior'
let previousButtom = document.getElementsByTagName('a')[0];
previousButtom.addEventListener('click', () => {
    if (actualActor === 0) actualActor = actors[0].length - 1;
    else actualActor--;
    changeCarousel(actualActor, actualSerie);   // > función para cambiar imagen
});

//Boton 'Siguiente'
let nextButtom = document.getElementsByTagName('a')[1];
nextButtom.addEventListener('click', () => {
    if (actualActor === 2) actualActor = 0;
    else actualActor++;
    changeCarousel(actualActor, actualSerie);
});


//Seleccionar por ID
let elemento = document.getElementById('miElemento');

//Seleccionar por Clase
let elementos = document.getElementsByClassName('miClase');

//Seleccionarpor Nombre
let elementos1 = document.getElementsByTagName('p');

//Seleccionar por selectores de CSS:
let elemento2 = document.querySelector('#miID'); // Selecciona el primer elemento que coincida
let elementos2 = document.querySelectorAll('.miClase'); // Selecciona todos los elementos que coincidan

//Obtener datos de atributos:
let enlace = document.getElementById('miEnlace');
let url = enlace.getAttribute('href');

//Obtener valores de entrada:
let inputValor = document.getElementById('miInput').value;

//backgroundImage
let fondo = document.getElementsByClassName("header")[0];
fondo.style.backgroundImage = "url('https://cope-cdnmed.agilecontent.com/resources/jpg/6/6/1632307476066.jpg')";
fondo.style.backgroundSize = "auto";

//Borrar
img.remove();

//Inicia oculto
let divSeries = document.getElementsByClassName('series')[0];
divSeries.style.display = 'none';

//Crear imagenes y añadirles un Eventos
function createImages(index) {
    let drinks = ['cafe', 'infusiones', 'alcohol'];
    for (let i = 1; i < 6; i++){
        let image = document.createElement('img');
        image.src = `../bebidas/src/${drinks[index - 1]}/${i}.jpg`;
        image.style.width = '19%';
        image.style.marginLeft = '1%';
        td.appendChild(image);
        //Ejerccio03:
        image.addEventListener('click', () => addPhoto(drinks[index - 1], i));
    }
}

//Eventos:
document.getElementById('miBoton').addEventListener('click', (event) => {
    event.preventDefault(); // >Solo para formularios
    // Acciones al hacer clic en el botón
    console.log('Se hizo clic en el botón');
});

//Cambiar color partes de la pantalla
window.addEventListener('mousemove', (event) => {
    let x = event.clientX;
    let y = event.clientY;

    if (x >= 0 && x <= 500 && y >= 0 && y <= 500) {
        textH1.style.color = 'yellow';
    } else if (x >= 0 && x <= 500 && y >= 501 && y <= 1000) {
        textH1.style.color = 'red';
    } else if (x >= 501 && x <= 1000 && y >= 0 && y <= 500) {
        textH1.style.color = 'blue';
    } else if (x >= 501 && x <= 1000 && y >= 501 && y <= 1000) {
        textH1.style.color = 'green';
    } else textH1.style.color = 'white';
});


//Crear array a partir de un número
const arrayNewCards = Array.from({ length: newCards }, (element, index) => index + 1);

//Array.From()
Array.from(coleccionDOM).map((element, index) => {
    //Tratamiento datos
    console.log(element, index);
});

/* Guardar localStorage */
let saveFavoritesData = (key, data) => {
    window.localStorage.setItem(key, JSON.stringify(data));
}

/* Extraer datos de localStorage y crear array con los datos */
Array.from(localStorage).map((element, index) => {
    let key = localStorage.key(index);
    let item = localStorage.getItem(key);
    item = JSON.parse(item);
    favoritesResponse.push(item);
})


//Mostrar/ocultar elemento
let menu = document.getElementsByTagName("ul")[0];
menu.style.display = "none";

let image = document.getElementsByTagName("img")[0];
image.addEventListener("click", () => {
    if (menu.style.display === "none") {
        menu.style.display = 'block';
    }
})

//Ventana Modal
let modal = document.createElement('div');
modal.setAttribute('class', 'modal');

let modalContent = document.createElement('div');
modalContent.setAttribute('class', 'modal-content');

let modalButton = document.createElement('span');
modalButton.setAttribute('class', 'close-button');
modalButton.innerHTML = 'X';

//Abre modal
footerContent.addEventListener('click', () => {
    modal.classList.toggle('show-modal');
});

//Botón 'X' de cierre Modal
modal.getElementsByClassName('close-button')[0].addEventListener('click', () => {
    modal.classList.toggle('show-modal');
});


//Crear modal
const modalWindow = (response) => {
    const modalButtons = document.getElementsByClassName('trigger');
    const modalContainer = document.getElementsByClassName('modal')[0];
    const closeButton = document.getElementsByClassName('close-button')[0];
    const modalImage = document.getElementsByClassName('modal-content')[0];
    const modalText = document.getElementsByTagName('h1')[1];

    Array.from(modalButtons).map((element, index) => {
        modalButtons[index].addEventListener('click', () => {
            modalContainer.classList.add('show-modal');
            modalImage.style.backgroundImage = `url(${response[index].image})`;
            modalImage.style.backgroundSize = 'cover';
            modalText.textContent = response[index].name;
        });
        closeButton.addEventListener('click', function () {
            modalContainer.classList.remove('show-modal');
        });
    });
}












// Números aleatorios
const getNumbers = (min, max, iter) => {
    let combination = [];
    let number;
    for (let i = 0; i < iter; i++) {
        number = Math.floor(Math.random() * (max - min) + min);
        if (combination.includes(number) === false) combination.push(number);
        else i = i - 1;
    }
    combination = combination.sort(comparar).join(" - ");
    return combination;
}


// Petición por prompt + Calcular año
const calculateYear = (resp) => {
    let year = new Date().getFullYear();
    if (isNaN(resp) === false && resp != 0) {
        alert("Naciste en el año " + (year - resp))
    } else {
        question();
    }
}
const question = () => {
    let age = prompt("¿Cuál es tu edad?");
    return calculaAnyo(age);
}


//Letras aleatorias
const generateRandomLetter = (() => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomIndex = Math.floor(Math.random() * letters.length);
    return letters[randomIndex];
})

