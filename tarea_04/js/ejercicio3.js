/* Actividad 3 – Completa el script anterior para que al pulsar 
sobre cualquiera de las cinco imágenes de cada categoría, la 
imagen seleccionada se muestre debajo del espacio que 
ocupan las cinco imágenes. */

let images = document.getElementsByTagName('img');

function addPhoto(category, index){
    checkImages();
    let image = document.createElement('img');
    image.src = `../bebidas/src/${category}/${index}.jpg`;
    td.appendChild(image);
};

function checkImages(){
    if(images.length > 6) {
        images[6].remove();
    }
}