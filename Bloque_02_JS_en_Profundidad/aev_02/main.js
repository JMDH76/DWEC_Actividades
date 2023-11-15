const getData = async (page, allItems) => {
    try {
        let response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
        document.getElementById('number-page').textContent = page;
        response = response.data.results;

        const actualPage = parseInt(document.getElementById('number-page').textContent);

        if (allItems === true) {
            buildCards(19, response, actualPage, true);
            nextPageButtonClick(actualPage);
        }
        else {
            buildCards(2, response, actualPage, true);
            showMore(response, actualPage);
        }
        favoritesPage(actualPage);

    } catch (error) {
        console.error(error);
    }
}

/* Abrir favoritos */
const favoritesPage = (actualPage) => {
    let favoritesResponse = [];
    const title = document.getElementsByTagName('h1');

    title[0].addEventListener('click', () => {
        if (localStorage.length > 0) {
           
            const showMoreButton = document.getElementsByTagName('button');
            Array.from(showMoreButton).map(() => {
                showMoreButton[0].remove();
            });

            const buttonContainer = document.getElementById('render-more');
            const favoritesBackButton = document.createElement('button');
            favoritesBackButton.innerHTML = "VOLVER";
            buttonContainer.appendChild(favoritesBackButton);

            favoritesBackButton.addEventListener('click', () => {
                favoritesBackButton.remove();
                getData(1, true)
            });

            /* Extraer datos de localStorage y crear array con los datos */
            Array.from(localStorage).map((element, index) => {
                let key = localStorage.key(index);
                let item = localStorage.getItem(key);
                item = JSON.parse(item);
                favoritesResponse.push(item)
            })
            buildCards(favoritesResponse.length - 1, favoritesResponse, actualPage, false);
            document.getElementById('number-page').textContent = "Favoritos";
        }
    });
}

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
            buildCards(19, response, actualPage, true);
        }
    });
}

/* Botón 'Anterior' */
const previousPageButtonClick = (actualPage) => {
    const buttonContainer = document.getElementById('render-more');
    const previousPageButton = document.createElement('button');
    previousPageButton.innerHTML = 'ANTERIOR';
    previousPageButton.style.marginRight = '5px'
    previousPageButton.setAttribute('id', 'anterior');
    buttonContainer.appendChild(previousPageButton);

    previousPageButton.addEventListener('click', () => {
        const nextPageButton = document.getElementById('siguiente');
        previousPageButton.remove();
        if (nextPageButton) nextPageButton.remove();

        showMoreButton(actualPage, 1);
    });
}

/* Botón 'Siguiente' */
const nextPageButtonClick = (actualPage) => {
    const buttonContainer = document.getElementById('render-more');
    const nextPageButton = document.createElement('button');
    nextPageButton.innerHTML = 'SIGUIENTE';
    nextPageButton.setAttribute('id', 'siguiente');
    buttonContainer.appendChild(nextPageButton);

    nextPageButton.addEventListener('click', () => {
        const previousPageButton = document.getElementById('anterior');
        nextPageButton.remove();
        if (previousPageButton) previousPageButton.remove();

        showMoreButton(actualPage, 2);
    });
}

/* Botón Mostrsr más */
const showMoreButton = (actualPage, flag) => {
    const buttonContainer = document.getElementById('render-more');
    const showMoreButton = document.createElement('button');
    showMoreButton.innerHTML = 'MOSTRAR MÁS';
    buttonContainer.appendChild(showMoreButton);

    if (flag === 1) {
        getData(actualPage - 1, false);
    } else getData(actualPage + 1, false);
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
const buildCards = (newCards, response, actualPage, favoritesSave) => {
    const container = document.getElementsByClassName('grid-container')[0];
    const cards = document.getElementsByClassName('card');
    document.getElementById('trigger').setAttribute('class', 'trigger');

    /* Si existen borra todas menos la primera */
    Array.from(cards).map((element, index) => {
        if (index > 0) {
            element.remove();
        }
    });

    /* Clona la primera y las añade */
    for (let i = 0; i < newCards; i++) {
        let cardClone = cards[0].cloneNode(true);
        container.appendChild(cardClone);
    }

    /* Da los valores correspondientes a cada Card */
    Array.from(cards).map((element, index) => {

        const image = document.getElementsByClassName('item-0')[index].style.backgroundImage = `url(${response[index].image})`;
        const imageUrl = image.replace(/(url\(|\)|"|')/g, '');
        document.getElementsByClassName('item-0')[index].style.transition = '2s';

        const gender = document.getElementsByClassName('item-1')[index].textContent = response[index].gender;
        const species = document.getElementsByClassName('item-2')[index].textContent = response[index].species;
        const name = document.getElementsByClassName('item-3')[index].textContent = response[index].name;
        const status = document.getElementsByClassName('item-4')[index].textContent = response[index].status;

        //animacion(name, index);  //No funciona como debiera, lo genera todo en el primer item

        /* Guardar en favoritos. Solo deja desde fuera de favoritos */
        if (favoritesSave) {
            document.getElementsByClassName('item-3')[index].addEventListener('click', () => {
                key = actualPage + '' + index;
                let data = { 'image': imageUrl, 'name': name, 'gender': gender, 'status': status, 'species': species };
                saveFavoritesData(key, data);
            });
        }
    });
    modalWindow(response);
}




const animacion = (name, index) => {

    let cont = 0;
    let cont2 = 0;
    let flag = false
    let itemName = name;
    let replaceWhiteSpaces = itemName.replace(/ /g, '.');
    let itemNameArray = replaceWhiteSpaces.toUpperCase().split("");
    let randomTextElement = document.getElementsByClassName("item-3")[index];
    randomTextElement.style.display = 'inline-flex';
    randomTextElement.innerHTML = '';

    document.querySelector('.card-footer > div > h2').appendChild(document.createElement('p'));

    const intervalId = setInterval(function () {
        updateRandomText(itemNameArray, itemName, intervalId);
    }, 25);


    const updateRandomText = () => {
        let pPosition = document.querySelectorAll('p').length - 1
        let newParagraf = document.getElementsByTagName('p')[pPosition];
        if (cont < 6) {
            newParagraf.textContent = generateRandomLetter();
            cont++;

        } else {
            if (itemNameArray.length > 1) {
                newParagraf.textContent = itemNameArray[cont2];
                cont2++;

                if (cont2 === itemNameArray.length + 1) {
                    flag = true;
                    clearInterval(intervalId);

                } else {
                    let newParagraf2 = document.createElement('p');
                    document.querySelector('.card-footer > div > h2').appendChild(newParagraf2);
                    newParagraf2 = document.getElementsByTagName('p')[document.querySelectorAll('p').length - 1];
                    newParagraf = newParagraf2;

                    if (itemNameArray[cont2] === '.') {
                        newParagraf.style.color = 'white';
                    }
                }
                cont = 0;
            }
            if (flag === true) {
                document.getElementsByClassName("item-3")[index].innerHTML = itemName.toUpperCase();
            }
        }
    }

    /* Letras aleatorias */
    const generateRandomLetter = (() => {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const randomIndex = Math.floor(Math.random() * letters.length);
        return letters[randomIndex];
    })
}

window.onload = getData(1, false);