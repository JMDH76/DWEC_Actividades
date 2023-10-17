//Cargamos las rutas de las imágenes en un array
let contents = [
    { title: 'Entrantes', path: "url(./src/entrantes/1.jpg)" },
    { title: 'Postres', path: "url(./src/tartas/1.jpg)" },
    { title: 'Bebidas', path: 'url(./src/alcohol/1.jpg)' }
];

/* let starters = ['./src/entrantes/1.jpg', './src/entrantes/2.jpg', './src/entrantes/3.jpg', './src/entrantes/4.jpg', './src/entrantes/5.jpg'];
let alcohol = ['./src/alcohol/1.jpg', './src/alcohol/2.jpg', './src/alcohol/3.jpg', './src/alcohol/4.jpg', './src/alcohol/5.jpg']
let cofffe = ['./src/cafe/1.jpg', './src/cafe/2.jpg', './src/cafe/3.jpg', './src/cafe/4.jpg', './src/cafe/5.jpg']
let fruit = ['./src/fruit/1.jpg', './src/fruit/2.jpg', './src/fruit/3.jpg', './src/fruit/4.jpg', './src/fruit/5.jpg']
let infusions = ['./src/infusiones/1.jpg', './src/infusiones/2.jpg', './src/infusiones/3.jpg', './src/infusiones/4.jpg', './src/infusiones/5.jpg']
 */
let galeryImages = [
    { title: 'starters', url: './src/entrantes/' },
    { title: 'alcohol', url: './src/alcohol/' },
    { title: 'coffe', url: './src/cafe/' },
    { title: 'fruit', url: './src/fruta/' },
    { title: 'infusions', url: './src/infusiones/' }
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
    if (actual === 0) {
        actual = contents.length - 1;
    } else {
        actual--;
    }

    document.getElementsByTagName('h1')[1].remove();
    initialImageFormat(actual);
    console.log(pageTitle.textContent);
});

next.addEventListener('click', () => {
    if (actual === contents.length - 1) {
        actual = 0;
    } else {
        actual++;
    }

    document.getElementsByTagName('h1')[1].remove();
    initialImageFormat(actual);
    console.log(pageTitle.textContent);
});



//Vuelta atrás título
pageTitle.addEventListener('click', () => {
    for (let i = 0; i < galeryImages.length; i++) {
        document.getElementById(`image${i}`).remove();
    }
    initialImageFormat(actual);
    //h1.style.display = 'block';
});





//genera galeria
let h1 = document.getElementsByTagName('h1')[1];
h1.addEventListener('click', () => {
    galeryAccess();
});





function galeryAccess() {
    h1.remove();
    //h1.style.display = 'none';
    //table.style.display = 'flex';

    for (let i = 0; i < 5; i++) {
        let galery = document.createElement('img');
        galery.setAttribute('class', 'galery');
        galery.setAttribute('id', `image${i}`);
        galery.style.width = '19%';
        galery.style.marginLeft = '1%';
        galery.src = galeryImages[actual].url + `${i + 1}.jpg`;
        galery.alt = 'imagen';
        table.appendChild(galery);
    }
}

function initialImageFormat(pos) {
    let newH1 = document.createElement('h1');
    newH1.style.backgroundImage = contents[pos].path;
    newH1.innerHTML = contents[pos].title;
    newH1.style.backgroundSize = 'cover';
    newH1.style.backgroundPosition = 'center center';
    newH1.style.height = '350px';
    newH1.style.color = 'white';
    pageTitle.innerHTML = contents[pos].title;
    table.appendChild(newH1);
}
