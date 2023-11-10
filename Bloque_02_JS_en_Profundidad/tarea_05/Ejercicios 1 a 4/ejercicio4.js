let gridThree = document.getElementsByClassName('elementor-grid-3');
let content = gridThree[0].innerHTML;                               //guarda la estructura html de las seis fotos dentro del 'section'
let gridOne = document.getElementsByClassName('elementor-grid-1');
let container = document.getElementsByClassName('container elementor-grid');
let photoContainer = document.getElementsByClassName('photo-container');
//console.log(content);

const removePhotos = (index) => {
    gridThree[0].className = 'elementor-grid-1';            //Cambia el monbre de la clase del div para aplicar css
    container[1].remove();                                  //borra el contenido del 'section'
    Array.from(photoContainer).map((element, index) => {    //Borra las 'photo-container' y deja sólo el primero
        (index > 0) && element.remove();
    });
    photos[0].remove();     //borra la imagen del interior del 'photo-container'
    createPhoto(index);     //crea la nueva foto (grande) pasando el 'index' a la función
}

const createPhoto = (index) => {
    let div = document.createElement('div');                        //crea un nuevo div con Class="photo"
    div.setAttribute('class', 'photo');                             //con Class="photo"
    div.style.backgroundImage = `url(images/${index + 1}.jpg)`      //Añade imagen al div
    photoContainer[0].appendChild(div);                             //Añade el nuevo div dentro del photo-container
    div.addEventListener('click', removePhoto);                     //Añade evento de borrar para cuando volvamos a pulsar invertir proceso
}

const removePhoto = () => {
    gridOne[0].className = 'elementor-grid-3';              //Cambia el nombre de la clase al original para el formato desde css 
    container[0].remove();                                  //borra el container
    createPhotos();                                         //llama a la función crearPhotos para volver a añadir las seis fotos
}

const createPhotos = () => {
    gridThree[0].innerHTML = content;                                    //Vuelve a añadir el contenido html que habíamos guardado y borrado al inicio
    Array.from(photos).map((element, index) => {
        element.addEventListener('click', () => removePhotos(index));    //Añade de nuevo el evento de borrado a todas las fotos (como en ejercicio03)
    });
}