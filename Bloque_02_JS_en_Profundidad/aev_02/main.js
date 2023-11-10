
let info = ['image', 'gender', 'species', 'name', 'status'];



const getData = async () => {
    try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');

        buildCards(2);

        let cards = document.getElementsByClassName('card');
        Array.from(cards).map((element, index) => {
            let image = response.data.results[index].image;
            let gender = response.data.results[index].gender;
            let species = response.data.results[index].species;
            let name = response.data.results[index].name;
            let status = response.data.results[index].status;
            document.getElementsByClassName('item-0')[index].style.backgroundImage = `url(${image})`;
            document.getElementsByClassName('item-1')[index].textContent = gender;
            document.getElementsByClassName('item-2')[index].textContent = species;
            document.getElementsByClassName('item-3')[index].textContent = name;
            document.getElementsByClassName('item-4')[index].textContent = status;
        });

        /* Modal */
        let modalButton = document.getElementsByClassName('trigger');
        let modalContainer = document.getElementsByClassName('modal');

        Array.from(modalButton).map((element, index) => {
            let image = response.data.results[index].image;
            let name = response.data.results[index].name;

            document.getElementsByClassName('trigger')[index].addEventListener('click', function () {
                modalContainer[0].classList.toggle('show-modal');
                let modalImage = document.getElementsByClassName('modal-content')[0];
                modalImage.style.backgroundImage = `url(${image})`;
                modalImage.style.backgroundSize = 'cover';
                let modalText = document.getElementsByTagName('h1')[1];
                modalText.textContent = name;

            });
            document.getElementsByClassName('close-button')[0].addEventListener('click', function () {
                modalContainer[0].classList.toggle('show-modal');
            });
        });



    } catch (error) {
        console.error(error);
    }
}


const buildCards = (num) => {
    const container = document.getElementsByClassName('grid-container')[0];
    const card = document.getElementsByClassName('card')[0];
    document.getElementById('trigger').setAttribute('class', 'trigger');

    for (let i = 0; i < num; i++) {
        let cardClone = card.cloneNode(true);
        container.appendChild(cardClone);
    }
}

window.onload = getData();