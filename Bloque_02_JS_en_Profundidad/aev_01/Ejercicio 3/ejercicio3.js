//Cargamos las rutas de las imágenes en un array
let contents = [
    { title: 'Entrantes', path: "url(./src/entrantes/1.jpg)" },
    { title: 'Postres', path: "url(./src/tartas/1.jpg)" },
    { title: 'Bebidas', path: 'url(./src/alcohol/1.jpg)' }
];

//Obtenemos los elementos que vamos a usar
let img = document.getElementsByTagName('img')[0];
img.remove();
let previus = document.getElementById('anterior');
let next = document.getElementById('siguiente');
let pageTitle = document.getElementsByTagName('h1')[0];
let table = document.getElementsByTagName('td')[2];
let h1 = document.createElement('h1');
let actual = 0;

table.appendChild(h1);
initialImageFormat();

//Botonera
previus.addEventListener('click', () => {
    if (actual === 0) {
        actual = contents.length - 1;
    } else {
        actual--;
    }
    initialImageFormat();
});

next.addEventListener('click', () => {
    if (actual === contents.length - 1) {
        actual = 0;
    } else {
        actual++;
    }
    initialImageFormat();
});

function initialImageFormat() {
    pageTitle.innerHTML = contents[actual].title;
    h1.style.backgroundImage = contents[actual].path;
    h1.innerHTML = contents[actual].title;
    h1.style.backgroundSize = 'cover';
    h1.style.backgroundPosition = 'center center';
    h1.style.height = '300px';
    h1.style.color = 'white';
}