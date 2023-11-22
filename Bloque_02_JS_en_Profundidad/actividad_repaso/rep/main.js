
const createImage = () => {

    const arrayMap = Array.from({ length: 5 }, (element, index) => index + 1);
    const container = document.getElementsByClassName('container')[0];
    container.style.display = 'inline-block'
    document.getElementsByTagName('h1')[1].remove();
    
    const imagesContainer = document.createElement('div');
    imagesContainer.setAttribute('id', 'imagesContainer');
    imagesContainer.style.display = 'inline-flex';
    container.appendChild(imagesContainer);

    arrayMap.map((element, index) => {
        
        let imageContainer = document.createElement('div');
        let url = `./images/${index + 1}.jpg`;
        imageContainer.setAttribute('class', 'image-container');
        imagesContainer.appendChild(imageContainer);
        imageContainer.style.display = 'flex';
        imageContainer.style.backgroundImage = 'url(' + url + ')';
        imageContainer.style.width = '200px';
        imageContainer.style.height = '200px';
        imageContainer.style.backgroundSize = 'cover';
        imageContainer.style.backgroundPosition = 'center center';
    })

    carousel();
}


const imagesArray = [1, 2, 3, 4, 5];

const carousel = () => {

    const container = document.getElementsByClassName('container')[0];
    const carouselContainer = document.createElement('div');

    let url = './images/1.jpg';

    let imageContainer = document.createElement('div');
    imageContainer.setAttribute('class', 'imageContainer2');

    document.getElementById('imagesContainer').appendChild(imageContainer);
    imageContainer.style.backgroundImage = 'url(' + url + ')';
    imageContainer.style.width = '200px';
    imageContainer.style.height = '200px';
    imageContainer.style.backgroundSize = 'cover';
    imageContainer.style.backgroundPosition = 'center center';

    container.appendChild(carouselContainer);

    let buttonNext = document.createElement('h3')
    buttonNext.innerText = 'Siguiente';
    container.appendChild(buttonNext);

    let buttonBack = document.createElement('h3')
    buttonBack.innerText = 'Atrás';
    container.appendChild(buttonBack);

    
    let actualImage = 1;

    buttonNext.addEventListener('click', () => {
        console.log('next')
        if (actualImage === imagesArray.length) actualImage = 1;
        else actualImage++;
        changeCarousel(actualImage);
    })

    buttonBack.addEventListener('click', () => {
        console.log('back')
        if (actualImage === 1) actualImage = imagesArray.length - 1;
        else actualImage--;
        changeCarousel(actualImage);
    })
}

let changeCarousel = (actualImage) => {
    document.getElementsByClassName('image-container')[0].style.backgroundImage = `url(./images/${actualImage}.jpg)`;
}


window.onload = createImage();