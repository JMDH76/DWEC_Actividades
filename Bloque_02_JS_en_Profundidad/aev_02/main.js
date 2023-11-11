const getData = async (page) => {
    console.log('GetData');
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
    console.log('ShowMore');
    const showMoreButton = document.getElementsByTagName('button')[0];

    showMoreButton.addEventListener('click', () => {
        buildCards(20, response);
        nextButtonClick(response);
        //document.getElementsByTagName('button')[0].style.display = 'none';
    })

}


const nextButtonClick = (response) => {
    console.log('nextButtonClick');
    const showMoreButton = document.getElementsByTagName('button')[0];
    const buttonContiner = document.getElementById('render-more');
    const nextButton = document.createElement('button');
    nextButton.innerHTML = 'SIGUIENTE';
    nextButton.setAttribute('id', 'siguiente');
    buttonContiner.appendChild(nextButton);

    nextButton.addEventListener('click', (event) => {
        document.getElementsByTagName('button')[0].style.display = 'block';
        document.getElementById('siguiente').remove();
        getData(2);
    })
}


const modalWindow = (response) => {
    console.log('Entro en modalWindow');
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
            console.log('ok')
        });
    });
}


const buildCards = (newCards, response) => {
    console.log('Entro en BuildCards');
    console.log(response.data.results)
    const container = document.getElementsByClassName('grid-container')[0];
    let cards = document.getElementsByClassName('card');
    document.getElementById('trigger').setAttribute('class', 'trigger');
    
    
    console.log('Cartas > 1' + Array.from(cards).length)

    Array.from(cards).map((element, index) => {
        if (index > 0) {
            element.remove();
        }
    })

    console.log('Cartas2 > ' + Array.from(cards).length)
    
    for (let i = 0; i < newCards; i++) {
        let cardClone = cards[0].cloneNode(true);
        container.appendChild(cardClone);
    }
    console.log('Cartas3 > ' + Array.from(cards).length)
    
    cards[0].remove();

    console.log('Cartas4 > ' + Array.from(cards).length)
    
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