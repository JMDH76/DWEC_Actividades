let actors = [
    [
        { character: 'Tony Soprano', actor: 'James Gandolfini' },
        { character: 'Adriana La Cerva', actor: 'Drea de Matteo' },
        { character: 'Chris Moltisanti', actor: 'Michael Imperioli' }
    ], [
        { character: 'Sheldon Cooper', actor: 'Jim Parsons' },
        { character: 'Leonard Hofstadter', actor: 'Johnny Galecki' },
        { character: 'Howard Wolowitz', actor: 'Simon Helberg' }
    ], [
        { character: 'George Cooper', actor: 'Lance Barber' },
        { character: 'Mary Cooper', actor: 'Zoe Perry' },
        { character: 'Meemaw', actor: 'Annie Potts' }
    ], [
        { character: 'Capitán John H.', actor: 'Tom Hanks' },
        { character: 'Soldado Rayn', actor: 'Matt Damon' },
        { character: 'Sgto. Michael Horv', actor: 'Tom Sizemore' }
    ], [
        { character: 'Edward', actor: 'Johnny Depp' },
        { character: 'Kim Boggs', actor: 'Winona Ryder' },
        { character: 'Peg Boggs', actor: 'Dianne Wiest' }
    ], [
        { character: 'Ellen Ripley', actor: 'Sigourney Weaver' },
        { character: 'Kane', actor: 'John Hurt' },
        { character: 'Ash', actor: 'Ian Holm' }
    ]
];

let covers = [
    { title: 'Los Soprano', cover: 'https://www.econlib.org/wp-content/uploads/2019/04/sopranos-1024x576.jpg' },
    { title: 'The Big Bang Theory', cover: 'https://scontent.fvlc1-2.fna.fbcdn.net/v/t1.6435-9/90498821_10157585787744678_2671171815014924288_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=300f58&_nc_ohc=nOConiNBCIMAX-7oNsL&_nc_ht=scontent.fvlc1-2.fna&oh=00_AfBz-9v2mlaM9nNKmXHkuq-nEXkqgF1WlE54NELAEZpheg&oe=65525202' },
    { title: 'Young Sheldon', cover: 'https://okdiario.com/img/series/2017/05/18/young-sheldon.jpg' },
    { title: 'Salvar al soldado Rayn', cover: 'https://cdn.sincroguia.tv/uploads/programs/s/a/l/xsalvar-al-soldado-ryan-391_SPA-38.jpg.pagespeed.ic.Th1zbN5Ykw.webp' },
    { title: 'Eduardo Manostijeras', cover: 'https://fotografias.larazon.es/clipping/cmsimages01/2019/08/09/918F3C1B-CBED-4F4D-9C26-5AEB1EA4E028/98.jpg?crop=699,393,x0,y78&width=1900&height=1069&optimize=low&format=webply' },
    { title: 'Alien, el octavo pasajero', cover: 'https://i0.wp.com/www.losritmos.es/wp-content/uploads/2020/10/Alien-1.jpg?w=700&ssl=1' }
];

let title = document.getElementsByTagName('h1')[1];
let cover = document.getElementsByTagName('img')[0];
let character = document.getElementsByTagName('h2')[0];
let actor = document.getElementsByTagName('h3')[0];

//Carrusel series
let actualActor = 0;
let actualSerie;
let type;

//Inicia oculto
let divSeries = document.getElementsByClassName('series')[0];
divSeries.style.display = 'none';

//Al pulsar sobre series o películas se muestra la primera serie y primer actor
let seriesButtom = document.getElementsByClassName('nutrition')[0];
seriesButtom.addEventListener('click', () => {
    type = 'series';
    actualSerie = 0;
    divSeries.style.display = 'block';
    changeCarouselSeries(actualActor, actualSerie);
});

let filmsButtom = document.getElementsByClassName('nutrition')[1];
filmsButtom.addEventListener('click', () => {
    type = 'films';
    actualSerie = 3;
    divSeries.style.display = 'block';
    console.log(actualActor + ' > ' + actualSerie)
    changeCarouselSeries(actualActor, actualSerie);
});


//Boton 'Anterior'
let previousButtom = document.getElementsByTagName('a')[0];
previousButtom.addEventListener('click', () => {
    if (actualActor === 0) actualActor = actors[0].length - 1;
    else actualActor--;
    changeCarouselSeries(actualActor, actualSerie);
});

//Boton 'Siguiente'
let nextButtom = document.getElementsByTagName('a')[1];
nextButtom.addEventListener('click', () => {
    if (actualActor === 2) actualActor = 0;
    else actualActor++;
    changeCarouselSeries(actualActor, actualSerie);
});


//Boton2 'Anterior'
let previousButtom2 = document.getElementsByTagName('a')[2];
previousButtom2.addEventListener('click', () => {
    if (type === 'series') {
        if (actualSerie === 0) actualSerie = covers.length - 4;
        else actualSerie--;
    } else if (type === 'films') {
        if (actualSerie === 3) actualSerie = covers.length - 1;
        else actualSerie--;
    }
    actualActor = 0;
    changeCarouselSeries(actualActor, actualSerie);
});

//Boton2 'Siguiente'
let nextButtom2 = document.getElementsByTagName('a')[3];
nextButtom2.addEventListener('click', () => {
    if (type === 'series') {
        if (actualSerie === 2) actualSerie = 0;
        else actualSerie++;
    } else if (type === 'films') {
        if (actualSerie === 5) actualSerie = 3;
        else actualSerie++;
    }
    actualActor = 0;
    changeCarouselSeries(actualActor, actualSerie);
});

//Realiza los cambios en el DIV
function changeCarouselSeries(actorChar, serie) {
    title.innerHTML = covers[serie].title;
    cover.src = covers[serie].cover;
    console.log("Serie > " + serie);
    console.log("ActorChar > " + actorChar);
    character.innerHTML = actors[serie][actorChar].character;
    actor.innerHTML = actors[serie][actorChar].actor;
}
