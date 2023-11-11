
const getData = async () => {
    try {
        const response = await axios.get('https://rickandmortyapi.com/api/character/?page=1');

        buildCards(2, response);
        modalWindow(response);
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

            let modalText = document.getElementsByTagName('h1')[1];
            modalText.textContent = response.data.results[index].name;
        });
        document.getElementsByClassName('close-button')[0].addEventListener('click', function () {
            modalContainer[0].classList.toggle('show-modal');
        });
    });
}


const buildCards = (num, response) => {

    const container = document.getElementsByClassName('grid-container')[0];
    const card = document.getElementsByClassName('card')[0];
    document.getElementById('trigger').setAttribute('class', 'trigger');

    for (let i = 0; i < num; i++) {
        let cardClone = card.cloneNode(true);
        container.appendChild(cardClone);
    }

    let cards = document.getElementsByClassName('card');
    //console.log('modal > ' + Array.from(cards).length)
    Array.from(cards).map((element, index) => {
        document.getElementsByClassName('item-0')[index].style.backgroundImage = `url(${response.data.results[index].image})`;
        document.getElementsByClassName('item-1')[index].textContent = response.data.results[index].gender;
        document.getElementsByClassName('item-2')[index].textContent = response.data.results[index].species;
        document.getElementsByClassName('item-3')[index].textContent = response.data.results[index].name;
        document.getElementsByClassName('item-4')[index].textContent = response.data.results[index].status;
    });
}

window.onload = getData();