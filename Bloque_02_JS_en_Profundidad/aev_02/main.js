const getData = async (page) => {
    try {
        let response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
        document.getElementById('number-page').textContent = page;
        response = response.data.results;
        console.log(response)
        console.log(typeof (response));
        const actualPage = parseInt(document.getElementById('number-page').textContent);

        buildCards(2, response, actualPage);
        showMore(response, actualPage);
        favorites();
    } catch (error) {
        console.error(error);
    }
}


const favorites = (actualPage) => {
    let response = [];
    const title = document.getElementsByTagName('h1');

    title[0].addEventListener('click', () => {

        Array.from(localStorage).map((element, index) => {
            let key = localStorage.key(index);
            let item = localStorage.getItem(key);

            item = JSON.parse(item);
            response.push(item)

        })
        console.log(response)
        buildCards(response.length-1, response, actualPage);

    })

}


/* Obtener datos de localStorage */
/* let getFavoritesData = (key) => {
    let data = window.localStorage.getItem(key);
    return data;
} */


/* Guardar localStorage */
let saveFavoritesData = (key, data) => {
    window.localStorage.setItem(key, JSON.stringify(data));
}

/* Botón 'Mostrar más */
const showMore = (response, actualPage) => {
    const showMoreButton = document.getElementsByTagName('button')[0];
    showMoreButton.addEventListener('click', () => {
        showMoreButton.remove();
        if (actualPage === 42) {
            previousPageButtonClick(actualPage)
            buildCards(5, response, actualPage);
        } else {
            if ((actualPage - 1) === 0) nextPageButtonClick(actualPage);
            else {
                previousPageButtonClick(actualPage);
                nextPageButtonClick(actualPage);
            }
            buildCards(19, response, actualPage);
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
            modalImage.style.backgroundImage = `url(${response[index].image})`;
            modalImage.style.backgroundSize = 'cover';
            modalText.textContent = response[index].name;
        });
        closeButton.addEventListener('click', function () {
            modalContainer.classList.remove('show-modal');
        });
    });
}

/* Crea los Cards necesarios */
const buildCards = (newCards, response, actualPage) => {
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

        let image = document.getElementsByClassName('item-0')[index].style.backgroundImage = `url(${response[index].image})`;
        image = image.replace(/(url\(|\)|"|')/g, '');
        let gender = document.getElementsByClassName('item-1')[index].textContent = response[index].gender;
        let species = document.getElementsByClassName('item-2')[index].textContent = response[index].species;
        let name = document.getElementsByClassName('item-3')[index].textContent = response[index].name;
        let status = document.getElementsByClassName('item-4')[index].textContent = response[index].status


        /* Guardar en favoritos */
        document.getElementsByClassName('item-3')[index].addEventListener('click', () => {
            key = actualPage + '' + index;
            let data = { 'image': image, 'name': name, 'gender': gender, 'status': status, 'species': species };
            saveFavoritesData(key, data);
        })
    });
    modalWindow(response);
}

window.onload = getData(1);