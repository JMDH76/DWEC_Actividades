/* En  el  archivo  postres.html  proporcionado, implementa un script para introducir 
un carrusel con las imágenes  de  la  carpeta  src,  de  modo  que  el  usuario  pueda 
recorrer las imágenes de la carpeta pulsando sobre 'Anterior' y ‘Siguiente’.*/

//Cargamos las rutas de las imágenes en un array
let images = [
    './src/postres/Flan con huevo.jpg',
    './src/postres/Flan con nata.jpg',
    './src/postres/Tarta de manzana.jpg',
    './src/postres/Tarta de queso.jpg',
    './src/postres/Tarta de zanahoria.jpg',
    './src/postres/Tiramisu.jpg'
];

//Obtenemos los elementos que vamos a usar
let dessertImage = document.getElementsByTagName('img')[1];
let anterior = document.getElementById('anterior');
let siguiente = document.getElementById('siguiente');

//Iniciamos con la primera imagen
let actual = 0;
dessertImage.src = images[actual];
dessertImage.style.height = "400px";

//Si la imagen es la actual '0' le damos el valor a actual de la última si no restamos const first = useContext(second)
anterior.addEventListener('click', () => {
    if (actual === 0) {
        actual = images.length - 1;
    } else {
        actual--;
    }
    dessertImage.src = images[actual];
});

//Si la imagen es la última forzamos el valor de actual a '0' para que vuelva a la primera imagen
siguiente.addEventListener('click', () => {
    if (actual === images.length - 1) {
        actual = 0;
    } else {
        actual++;
    }
    dessertImage.src = images[actual];
});
