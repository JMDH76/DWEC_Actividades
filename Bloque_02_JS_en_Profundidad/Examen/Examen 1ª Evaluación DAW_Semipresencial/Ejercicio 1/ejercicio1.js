let keys = [];
let items = [];

const getData = async (page) => {
    if (localStorage.length > 51) {
        alert('Todavía no se han cargado los datos')
    } else {
        try {
            let response = await axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`);
            response = response.data.results;
            response.map((element, index) => {
                let key = response[index].name;
                let id = response[index].id;
                let characters = response[index].characters;
                let data = { 'id': id, 'characters': characters }
                localStorage.setItem(key, JSON.stringify(data));
            })

            if (page === 3) {
                let button = document.getElementsByTagName('button')[0];
                button.addEventListener('click', (event) => {
                    event.preventDefault();
                    Array.from(localStorage).map((element, index) => {
                        let key = localStorage.key(index);
                        let item = localStorage.getItem(key);
                        item = JSON.parse(item);
                        keys.push(key);
                        items.push(item);
                    })

                    let findEpisodeName = document.getElementsByName('name')[0].value;
                    let indexArray = keys.indexOf(findEpisodeName);
                    let characters = items[indexArray].characters;
                    let episodeId = items[indexArray].id;
                    document.getElementsByTagName('span')[1].innerHTML = ('Episodio ' + episodeId + ' - ' + findEpisodeName);
                    characters.map((element, index) => {
                        getCharacter(element);
                    })
                })
                modal();
            }
        } catch (error) {
            console.error(error);
        }
    }
}

const getCharacter = async (element) => {
    let character = await axios.get(element);
    let name = character.data.name;
    let newH4 = document.createElement('h4');
    newH4.innerHTML = name;
    let cardBody = document.getElementsByClassName('card-body')[0];
    cardBody.appendChild(newH4);
}


const modal = () => {
    let modal = document.getElementsByClassName('modal')[0];
    document.getElementsByTagName('button')[0].addEventListener('click', function () {
        modal.classList.toggle('show-modal');

    });
    document.getElementsByClassName('close-button')[0].addEventListener('click', function () {
        modal.classList.toggle('show-modal');
        let removeH4 = document.getElementsByTagName('h4');
        Array.from(removeH4).map((element, index) => {
            if (index > 0) {
                element.remove();
            }
        })
        document.getElementsByTagName('form')[0].reset();
    });
}


const initial = () => {
    [1, 2, 3].map((element) => {
        getData(element);
    })
}


window.load = initial();