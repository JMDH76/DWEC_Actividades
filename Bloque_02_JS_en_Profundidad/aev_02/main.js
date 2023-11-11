
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
    let showMoreButton = document.getElementsByTagName('button')[0];
    let cards = Array.from(document.getElementsByClassName('card'));
    let cardClone = cards[0].cloneNode(true);


    console.log('cards > ' + cards.length);

    showMoreButton.addEventListener('click', () => {   
           cards.map((element, index) => {
               if (index > 0) {
                   element.remove();
               } 
            })

        buildCards(19, response, cardClone);
        modalWindow(response);
    })
}


const modalWindow = (response) => {
    let modalButton = document.getElementsByClassName('trigger');
    let modalContainer = document.getElementsByClassName('modal');
    //console.log('modal > ' + Array.from(modalButton).length)
    Array.from(modalButton).map((element, index) => {
       
        document.getElementsByClassName('trigger')[index].addEventListener('click', function () {
            modalContainer[0].classList.toggle('show-modal');
            let modalImage = document.getElementsByClassName('modal-content')[0];
            modalImage.style.backgroundImage = `url(${response.data.results[index].image})`;
            modalImage.style.backgroundSize = 'cover';
            modalText.textContent = response.data.results[index].name;
            console.log('>> Modal 1 pasado')
        });
        document.getElementsByClassName('close-button')[0].addEventListener('click', function () {
            modalContainer[0].classList.toggle('show-modal');
        });
    });
}


const buildCards = (newCards, response) => {

    const container = document.getElementsByClassName('grid-container')[0];
    const cards = document.getElementsByClassName('card');
    document.getElementById('trigger').setAttribute('class', 'trigger');

    for (let i = 0; i < num; i++) {
        let cardClone = card.cloneNode(true);
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