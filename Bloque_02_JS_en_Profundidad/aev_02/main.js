const getData = async (page) => {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
        document.getElementById('number-page').textContent = page;
        const actualPage = parseInt(document.getElementById('number-page').textContent);

        buildCards(2, response);
        showMore(response, actualPage);

    } catch (error) {
        console.error(error);
    }
}

/* Botón 'Mostrar más */
const showMore = (response, actualPage) => {
    const showMoreButton = document.getElementsByTagName('button')[0];
    showMoreButton.addEventListener('click', () => {
        showMoreButton.remove();
        if (actualPage === 42) {
            previousPageButtonClick(actualPage)
            buildCards(5, response);
        } else {
            if ((actualPage - 1) === 0) nextPageButtonClick(actualPage);
            else {
                previousPageButtonClick(actualPage);
                nextPageButtonClick(actualPage);
            }
            buildCards(19, response);
        }
    })
}

/* Botón 'Anterior' */
const previousPageButtonClick = (actualPage) => {
    const buttonContainer = document.getElementById('render-more');
    const previousPageButton = document.createElement('button');
    previousPageButton.innerHTML = 'ANTERIOR';
    previousPageButton.style.marginRight = '5px'
    previousPageButton.setAttribute('id', 'anterior');
    buttonContainer.appendChild(previousPageButton);

    previousPageButton.addEventListener('click', (event) => {
        const nextPageButton = document.getElementById('siguiente');
        previousPageButton.remove();
        if (nextPageButton) nextPageButton.remove();

        const showMoreButton = document.createElement('button');
        showMoreButton.innerHTML = 'MOSTRAR MÁS';
        buttonContainer.appendChild(showMoreButton);
        getData(actualPage - 1);
    })
}

/* Botón 'Siguiente' */
const nextPageButtonClick = (actualPage) => {
    const buttonContainer = document.getElementById('render-more');
    const nextPageButton = document.createElement('button');
    nextPageButton.innerHTML = 'SIGUIENTE';
    nextPageButton.setAttribute('id', 'siguiente');
    buttonContainer.appendChild(nextPageButton);

    nextPageButton.addEventListener('click', (event) => {
        const previousPageButton = document.getElementById('anterior');
        nextPageButton.remove();
        if (previousPageButton) previousPageButton.remove();

        const showMoreButton = document.createElement('button');
        showMoreButton.innerHTML = 'MOSTRAR MÁS';
        buttonContainer.appendChild(showMoreButton);
        getData(actualPage + 1);
    })
}

/* Crea el modal y le asigna los valores correspondientes */
const modalWindow = (response) => {
    const modalButtons = document.getElementsByClassName('trigger');
    const modalContainer = document.getElementsByClassName('modal')[0];
    const closeButton = document.getElementsByClassName('close-button')[0];
    const modalImage = document.getElementsByClassName('modal-content')[0];
    const modalText = document.getElementsByTagName('h1')[1];

    Array.from(modalButtons).map((element, index) => {
        modalButtons[index].addEventListener('click', () => {
            modalContainer.classList.add('show-modal');
            modalImage.style.backgroundImage = `url(${response.data.results[index].image})`;
            modalImage.style.backgroundSize = 'cover';
            modalText.textContent = response.data.results[index].name;
        });
        closeButton.addEventListener('click', function () {
            modalContainer.classList.remove('show-modal');
        });
    });
}

/* Crea los Cards necesarios */
const buildCards = (newCards, response) => {
    const container = document.getElementsByClassName('grid-container')[0];
    const cards = document.getElementsByClassName('card');
    document.getElementById('trigger').setAttribute('class', 'trigger');

    /* Si existen borra todas menos la primera */
    Array.from(cards).map((element, index) => {
        if (index > 0) {
            element.remove();
        }
    })

    /* Clona la primera y las añade */
    for (let i = 0; i < newCards; i++) {
        let cardClone = cards[0].cloneNode(true);
        container.appendChild(cardClone);
    }

    /* Da los valores correspondientes a cada Card */
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