/* Actividad 2 – Implementa un script que permita que al 
pulsar sobre las imágenes implementadas en el script anterior, 
éstas se eliminen y sean reemplazadas por las cinco 
imágenes correspondientes a cada apartado, incluidas en la 
carpeta src proporcionada -hay 5 imágenes para cada 
categoría: café, infusiones y alcohol-. */

let h1 = document.getElementsByTagName('h1'); // obtiene los h1 del documento

function deleteH1() {
    for (let i = 0; i < 3; i++) {
        h1[1].remove();
    }
}

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

for (let i = 1; i < h1.length; i++) {
    h1[i].addEventListener('click', () => {
        deleteH1();
        createImages(i);
    });
}

//Recarga la página
h1[0].addEventListener('click', () => {
    window.location.reload();
});


