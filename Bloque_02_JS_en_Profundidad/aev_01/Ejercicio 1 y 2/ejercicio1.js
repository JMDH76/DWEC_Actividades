let seriesActors = [
    [
        { character: 'Tony Soprano', actor: 'Drea de Matteo' },
        { character: 'Adriana La Cerva', actor: 'Drea de Matteo' },
        { character: 'Chris Moltisanti', actor: 'Michael Imperioli' }
    ], [
        { character: 'Sheldon Cooper', actor: 'Jim Parsons' },
        { character: 'Leonard Hofstadter', actor: 'Johnny Galecki' },
        { character: 'Howard Wolowitz', actor: 'Simon Helberg' },
    ], [
        { character: 'George Cooper', actor: 'Lance Barber' },
        { character: 'Mary Cooper', actor: 'Zoe Perry' },
        { character: 'Meemaw', actor: 'Annie Potts' }
    ]
];

let seriesCovers = [
    { title: 'Los Soprano', cover: 'https://www.econlib.org/wp-content/uploads/2019/04/sopranos-1024x576.jpg' },
    { title: 'The Big Bang Theory', cover: 'https://scontent.fvlc1-2.fna.fbcdn.net/v/t1.6435-9/90498821_10157585787744678_2671171815014924288_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=300f58&_nc_ohc=nOConiNBCIMAX-7oNsL&_nc_ht=scontent.fvlc1-2.fna&oh=00_AfBz-9v2mlaM9nNKmXHkuq-nEXkqgF1WlE54NELAEZpheg&oe=65525202' },
    { title: 'Young Sheldon', cover: 'https://okdiario.com/img/series/2017/05/18/young-sheldon.jpg' }
];

let title = document.getElementsByTagName('h1')[1];
let cover = document.getElementsByTagName('img')[0];
let character = document.getElementsByTagName('h2')[0];
let actor = document.getElementsByTagName('h3')[0];

//Carrusel series
let actualActor;
let actualSerie;

//Inicia oculto
let divSeries = document.getElementsByClassName('series')[0];
divSeries.style.display = 'none';

//Al pulsar sobre series se muestra la primera serie y primer actor
let seriesButtom = document.getElementsByClassName('nutrition')[0];
seriesButtom.addEventListener('click', () => {
    divSeries.style.display = 'block';
    actualSerie = 0;
    actualActor = 0;
});

//Boton 'Anterior'
let previousButtom = document.getElementsByTagName('a')[0];
previousButtom.addEventListener('click', () => {
    if (actualActor === 0) actualActor = seriesCovers.length - 1;
    else actualActor--;
    changeCarouselSeries(actualActor, actualSerie)
});

//Boton 'Siguiente'
let nextButtom = document.getElementsByTagName('a')[1];
nextButtom.addEventListener('click', () => {
    if (actualActor === 2) actualActor = 0;
    else actualActor++;
    changeCarouselSeries(actualActor, actualSerie)
});

//Realiza los cambios en el DIV
function changeCarouselSeries(actorChar, serie) {
    title.innerHTML = seriesCovers[serie].title;
    cover.src = seriesCovers[serie].cover;
    character.innerHTML = seriesActors[serie][actorChar].character;
    actor.innerHTML = seriesActors[serie][actorChar].actor;
    //console.log('Personaje > ' + seriesActors[serie][actorChar].character);
}

