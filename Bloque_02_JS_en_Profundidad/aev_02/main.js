
const getData = async (page) => {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);

        let pageNumber = document.getElementById('number-page').textContent = page;

        buildCards(3, response);
        showMore(response);

    } catch (error) {
        console.error(error);
    }
}


const showMore = (response) => {
    const showMoreButton = document.getElementsByTagName('button')[0];

    showMoreButton.addEventListener('click', () => {
        console.log('Pulso botón > Mostrar más')
        buildCards(20, response);
        nextPageButton(response);
        document.getElementsByTagName('button')[0].remove();
    })
}


const nextPageButton = (response) => {

    const buttonContiner = document.getElementById('render-more');
    const nextButton = document.createElement('button');
    nextButton.innerHTML = 'SIGUIENTE';
    nextButton.setAttribute('id', 'siguiente');
    buttonContiner.appendChild(nextButton);

    nextButton.addEventListener('click', (event) => {
        const next = document.createElement('button');
        next.innerHTML = 'MOSTRAR MÁS';
        buttonContiner.appendChild(next);
        document.getElementById('siguiente').remove();
        showMore(response)
        getData(2);
    })
}


const modalWindow = (response) => {
    console.log('>> Entro en Modal')
    let modalButtons = document.getElementsByClassName('trigger');
    let modalContainer = document.getElementsByClassName('modal')[0];
    let closeButton = document.getElementsByClassName('close-button')[0];
    let modalImage = document.getElementsByClassName('modal-content')[0];
    let modalText = document.getElementsByTagName('h1')[1];

    console.log('Butones de modales > ' + Array.from(modalButtons).length);

    Array.from(modalButtons).map((element, index) => {
        modalButtons[index].addEventListener('click', () => {
            modalContainer.classList.add('show-modal');
            modalImage.style.backgroundImage = `url(${response.data.results[index].image})`;
            modalImage.style.backgroundSize = 'cover';
            modalText.textContent = response.data.results[index].name;
            console.log('>> Modal 1 pasado')
        });

        closeButton.addEventListener('click', () => {
            modalContainer.classList.remove('show-modal');
            console.log('>> Modal 2 pasado')
        });
    });
}


const buildCards = (newCards, response) => {

    const container = document.getElementsByClassName('grid-container')[0];
    const cards = document.getElementsByClassName('card');
    document.getElementById('trigger').setAttribute('class', 'trigger');

    console.log('Cartas 1 > ' + Array.from(cards).length + ' > al pulsar el botón')

    Array.from(cards).map((element, index) => {
        if (index > 0) {
            element.remove();
        }
    })
    console.log('Cartas 2 > ' + Array.from(cards).length + ' > después de borrar')

    for (let i = 0; i < newCards; i++) {
        let cardClone = cards[0].cloneNode(true);
        container.appendChild(cardClone);
    }
    console.log('Cartas 3 > ' + Array.from(cards).length + ' > después de clonar')
    cards[0].remove();
    console.log('Cartas 4 > ' + Array.from(cards).length + ' > después de borrar')

    Array.from(cards).map((element, index) => {
        document.getElementsByClassName('item-0')[index].style.backgroundImage = `url(${response.data.results[index].image})`;
        document.getElementsByClassName('item-1')[index].textContent = response.data.results[index].gender;
        document.getElementsByClassName('item-2')[index].textContent = response.data.results[index].species;
        document.getElementsByClassName('item-3')[index].textContent = response.data.results[index].name;
        document.getElementsByClassName('item-4')[index].textContent = response.data.results[index].status;
    });

    modalWindow(response);
}

window.onload = getData(1);