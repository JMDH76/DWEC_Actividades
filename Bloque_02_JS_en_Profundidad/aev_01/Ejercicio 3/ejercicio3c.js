let contents = ['Entrantes', 'Postres', 'Bebidas'];
let galeryImages = [
    { title: 'Entrantes', category: 'Entrantes', url: './src/entrantes/', path: 'url(./src/entrantes/1.jpg)' },
    { title: 'Fruta', category: 'Postres', url: './src/fruta/', path: 'url(./src/fruta/1.jpg)' },
    { title: 'Tartas', category: 'Postres', url: './src/tartas/', path: 'url(./src/tartas/1.jpg)' },
    { title: 'Café', category: 'Bebidas', url: './src/cafe/', path: 'url(./src/cafe/1.jpg)' },
    { title: 'Infusiones', category: 'Bebidas', url: './src/infusiones/', path: 'url(./src/infusiones/1.jpg)' },
    { title: 'Alcohol', category: 'Bebidas', url: './src/alcohol/', path: 'url(./src/alcohol/1.jpg)' }
];

let img = document.getElementsByTagName('img')[0];
img.remove();
let botonera = document.getElementsByTagName('tr')[0];
let previus = document.getElementById('anterior');
let next = document.getElementById('siguiente');
let pageTitle = document.getElementsByTagName('h1')[0];
let table = document.getElementsByTagName('td')[2];

let actual = 0;
initialImageFormat(actual);


//Botonera
previus.addEventListener('click', () => {
    deleteImage(actual);
    if (actual === 0) {
        actual = contents.length - 1;
    } else {
        actual--;
    }
    initialImageFormat(actual);
});

next.addEventListener('click', () => {
    deleteImage(actual);
    if (actual === contents.length - 1) {
        actual = 0;
    } else {
        actual++;
    }
    initialImageFormat(actual);
});

function deleteImage(actual) {
    for (let i = actual; i >= 0; i--) {
        document.getElementsByTagName('h1')[1].remove();
    }
}


//Imágenes del carrusel
function initialImageFormat(pos) {
    pageTitle.textContent = contents[pos];
    let h1;
    let index;
    if (pos === 0) {
        for (let i = 0; i < 1; i++) {
            h1 = document.createElement('h1');
            h1.style.backgroundImage = galeryImages[pos].path;
            h1.textContent = galeryImages[pos].title;
            index = i;
            createImage(h1, index);
        }
    } else if (pos === 1) {
        for (let i = 0; i < 2; i++) {
            h1 = document.createElement('h1');
            h1.style.backgroundImage = galeryImages[pos + i].path;
            h1.textContent = galeryImages[pos + i].title;
            index = i + 1;
            createImage(h1, index);
        }
    } else if (pos === 2) {
        for (let i = 0; i < 3; i++) {
            h1 = document.createElement('h1');
            h1.style.backgroundImage = galeryImages[pos + i + 1].path;
            h1.textContent = galeryImages[pos + i + 1].title;
            index = i + 3;
            createImage(h1, index);
        }
    }
}

function createImage(h1, index) {
    h1.style.backgroundSize = 'cover';
    h1.style.backgroundPosition = 'center center';
    h1.style.color = 'white';
    h1.style.display = 'inline-block';
    h1.style.width = '31%';
    h1.style.height = '400px';
    h1.style.margin = '0.5%';
    h1.style.marginTop = "5%"
    table.appendChild(h1);
    openGalery(h1, index);
}

//Abrir galería pulsando sobre imagen
function openGalery(h1, index) {
    h1 = document.getElementsByTagName('h1');
    for (let i = 1; i < h1.length; i++) {
        h1[i].addEventListener('click', () => {
            deleteImage(actual);
            generateGalery(index);
        });
    }
}

function generateGalery(index) {
    for (let i = 0; i < 5; i++) {
        let galery = document.createElement('img');
        galery.setAttribute('class', 'galery');
        galery.setAttribute('id', `image${i + 1}`);
        galery.style.width = '18%';
        galery.style.margin = '0.5%';
        galery.style.marginTop = '5%';
        galery.src = galeryImages[index].url + `${i + 1}.jpg`;
        galery.alt = `imagen ${i + 1}`;
        table.appendChild(galery);
        table.style.display = 'initial';
        botonera.style.display ='none'
    }
}

//Salir de galeria
pageTitle.addEventListener('click', () => {
    if (document.getElementsByTagName('img')[0] !== undefined) {
        botonera.style.display ='block'
        initialImageFormat(actual);
        for (let i = 0; i < 5; i++) {
            document.getElementById(`image${i + 1}`).remove();
        }
    }
});
