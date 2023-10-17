//Cargamos las rutas de las imágenes en un array
let contents = [
    { title: 'Entrantes', path: "url(./src/entrantes/1.jpg)" },
    { title: 'Postres', path: "url(./src/tartas/1.jpg)" },
    { title: 'Bebidas', path: 'url(./src/alcohol/1.jpg)' }
];


let galeryImages = [
    { title: 'starters', url: './src/entrantes/', path: 'url(./src/entrantes/1.jpg)' },
    { title: 'alcohol', url: './src/alcohol/', path: 'url(./src/alcohol/1.jpg)' },
    { title: 'coffe', url: './src/cafe/', path: 'url(./src/cafe/1.jpg)' },
    { title: 'infusions', url: './src/infusiones/', path: 'url(./src/infusiones/1.jpg)' },
    { title: 'fruit', url: './src/fruta/', path: 'url(./src/fruta/1.jpg)' },
    { title: 'cakes', url: './src/tartas/', path: 'url(./src/tartas/1.jpg)' }
];

//Obtenemos los elementos que vamos a usar
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


function initialImageFormat(pos) {
    for (let i = 0; i < pos + 1; i++) {
        createImage(pos);
    }
}

function deleteImage(pos) {
    for (let i = 0; i < pos + 1; i++) {
        document.getElementsByTagName('h1')[1].remove();
    }
}

function createImage(pos) {
    let nh1 = document.createElement('h1');
    nh1.style.backgroundImage = contents[pos].path;
    nh1.innerHTML = contents[pos].title;
    nh1.style.backgroundSize = 'cover';
    nh1.style.backgroundPosition = 'center center';
    nh1.style.width = '50%';
    nh1.style.height = '400px'
    nh1.style.color = 'white';
    nh1.style.margin = 'auto';
    table.style.marginTop = "4%"
    pageTitle.innerHTML = contents[pos].title;
    table.style.display = 'flex';
    table.appendChild(nh1);
}

function galeryAccess(title) {
    console.log(h1.textContent)
    h1.remove();
    if (title === 'Entrantes') {
        generateGalery(0);
    } else if (title === 'postres') {
        generateGalery(1)
    }
}

function generateGalery(pos) {

    if (pos === 0) {
        for (let i = 0; i < 5; i++) {
            let galery = document.createElement('img');
            galery.setAttribute('class', 'galery');
            galery.setAttribute('id', `image${i}`);
            galery.style.width = '18%';
            galery.style.marginLeft = '1%';
            galery.src = galeryImages[pos].url + `${i + 1}.jpg`;
            galery.alt = `imagen ${i + 1}`;
            table.appendChild(galery);
            table.style.display = 'initial';
        }

    } else if (pos === 1) { 
        for (let i = 0; i < 5; i++) {
            let galery = document.createElement('img');
            galery.setAttribute('class', 'galery');
            galery.setAttribute('id', `image${i}`);
            galery.style.width = '18%';
            galery.style.marginLeft = '1%';
            galery.src = galeryImages[pos].url + `${i + 1}.jpg`;
            galery.alt = `imagen ${i + 1}`;
            table.appendChild(galery);
            table.style.display = 'initial';
        }

    }


    /* for (let i = 0; i < 5; i++) {
        let galery = document.createElement('img');
        galery.setAttribute('class', 'galery');
        galery.setAttribute('id', `image${i}`);
        galery.style.width = '18%';
        galery.style.marginLeft = '1%';
        galery.src = galeryImages[pos].url + `${i + 1}.jpg`;
        galery.alt = `imagen ${i + 1}`;
        table.appendChild(galery);
        table.style.display = 'initial';
    } */
}


//genera galeria
let h1 = document.getElementsByTagName('h1')[1];
h1.addEventListener('click', () => {
    galeryAccess(pageTitle.textContent);
});


//Vuelta atrás título
pageTitle.addEventListener('click', () => {
    initialImageFormat(actual);
    for (let i = 0; i < 5; i++) {
        document.getElementById(`image${i}`).remove();
    }
});