/* En  el  archivo  almuerzos.html  proporcionado, 
implementa  un  script  para  que  cuando  el  usuario  pase  el 
cursor por  encima de cualquiera de las imágenes de la tabla, 
ésta cambie su opacidad a la mitad. Si hace click sobre dicha 
imagen, saltará una pantalla modal con el nombre del 
bocadillo  y  un  enlace  que  llevará  a  una  URL  con  información 
sobre  él  mismo.  Los  nombres  de  los  bocadillos  son:  Chivito, 
Blanco  y  negro,  Brascada,  Almussafes,  Tortilla  de  patatas, 
Calamares en alioli.  
 
NOTA:  se  proporciona  un  ejemplo  de  cómo  implementar  una 
pantalla  modal  en  JavaScript  en  la  carpeta  adjunta  ‘Ejemplo 
Pantalla Modal’. */

let list = [
    "Chivito",
    "Blanco y negro",
    "Brascada",
    "Almussafes",
    "Tortilla de patatas",
    "Calamares en alioli"
];

let links = [
    "https://es.wikipedia.org/wiki/Chivito",
    "https://es.wikipedia.org/wiki/Blanco_y_negro_(bocadillo)",
    "https://www.gastronomia.es/recetas/bocadillo-brascada/",
    "https://www.gastronomia.es/recetas/bocadillo-almussafes/",
    "https://es.wikipedia.org/wiki/Bocadillo_de_tortilla_de_patatas",
    "https://es.wikipedia.org/wiki/Bocadillo_de_calamares"
];

let imagTable = document.getElementsByTagName("table")[0];
let tableSize = document.getElementsByTagName("table")[0].rows.length;
let cells = [];

let modal = document.getElementsByClassName('modal')[0];
let closeButton = document.getElementsByClassName('close-button')[0];
let modalH1 = document.getElementsByTagName('h1')[1];

for (let i = 0; i < tableSize; i++) {
    cells.push(imagTable.rows[i].cells[0].firstChild); //Guarda el contenido de las cells en un array para usarlo después

    cells[i].addEventListener("mouseenter", () => {
        imagTable.rows[i].cells[0].firstChild.style.opacity = "0.5";
    });

    cells[i].addEventListener("mouseleave", () => {
        table.rows[i].cells[0].firstChild.style.opacity = "1";
    });

    cells[i].addEventListener("click", () => {
        modal.classList.toggle('show-modal');
        modalH1.textContent = list[i];
        modalH1.insertAdjacentHTML('afterend', "<a id='newLink' href=" + links[i] + " target='blank'>Ver</a>");
    });
}

closeButton.addEventListener('click', function () {
    document.getElementById('newLink').remove();
    modal.classList.toggle('show-modal');
});

//Cierra el modal pinchando sobre el resto de la pantalla
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        document.getElementById('newLink').remove();
        modal.classList.toggle('show-modal');
    }
});
