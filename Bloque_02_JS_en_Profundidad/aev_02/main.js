
const getData = async (page) => {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);

        let pageNumber = document.getElementById('number-page').textContent = page;

        buildCards(2, response);
        modalWindow(response);
        showMore(response);

    } catch (error) {
        console.error(error);
    }
}


const showMore = (response) => {
    const showMoreButton = document.getElementsByTagName('button')[0];
    const cards = Array.from(document.getElementsByClassName('card'));

    showMoreButton.addEventListener('click', () => {
        cards.map((element, index) => {
            if (index > 0) {
                element.remove();
            }
        })
        buildCards(19, response);
        modalWindow(response);
        //getData(2);
    })
}


const modalWindow = (response) => {

    let modalButtons = document.getElementsByClassName('trigger');
    let modalContainer = document.getElementsByClassName('modal')[0];
    let closeButton = document.getElementsByClassName('close-button')[0];
    let modalImage = document.getElementsByClassName('modal-content')[0];
    let modalText = document.getElementsByTagName('h1')[1];

    Array.from(modalButtons).map((element, index) => {
        modalButtons[index].addEventListener('click', () => {
            modalContainer.classList.toggle('show-modal');
            modalImage.style.backgroundImage = `url(${response.data.results[index].image})`;
            modalImage.style.backgroundSize = 'cover';
            modalText.textContent = response.data.results[index].name;
        });

        closeButton.addEventListener('click', function () {
            modalContainer.classList.toggle('show-modal');
        });
    });
}


const buildCards = (num, response) => {

    const container = document.getElementsByClassName('grid-container')[0];
    const cards = document.getElementsByClassName('card');
    document.getElementById('trigger').setAttribute('class', 'trigger');

    for (let i = 0; i < num; i++) {
        let cardClone = cards[0].cloneNode(true);
        container.appendChild(cardClone);
    }

    Array.from(cards).map((element, index) => {
        document.getElementsByClassName('item-0')[index].style.backgroundImage = `url(${response.data.results[index].image})`;
        document.getElementsByClassName('item-1')[index].textContent = response.data.results[index].gender;
        document.getElementsByClassName('item-2')[index].textContent = response.data.results[index].species;
        document.getElementsByClassName('item-3')[index].textContent = response.data.results[index].name;
        document.getElementsByClassName('item-4')[index].textContent = response.data.results[index].status;
    });
}

window.onload = getData(1);