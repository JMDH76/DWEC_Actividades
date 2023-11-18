const words = [];
const wordsDefinitions = [];
let counter = 3;
let flag = true;
let gameWords = words.length;
let rigthWords = 0;

const hideKeyboard = () => {
    const keyboard = document.getElementById('keyboard-cont')
    const clone = keyboard.cloneNode(true);
    keyboard.remove()
    let newWord = '';

    document.addEventListener('keydown', () => {
        const showKeyboardWord = 'a';        //'abracadabra';
        const hideKeyWord = 'c'             //'patadecabra';
        const newLetter = (event.key !== 'Meta') ? event.key.toLowerCase() : ''; // Evita el uso de la tecla 'Meta'

        if (newLetter !== 'enter' && newLetter !== 'backspace') {
            newWord += newLetter;
        } else if (newLetter === 'backspace') {
            newWord = newWord.slice(0, -1);
        }
        if (newWord === showKeyboardWord) {
            document.getElementsByTagName('table')[1].appendChild(clone);
            newWord = '';
            addWord();

        } else if (newWord === hideKeyWord) {
            document.getElementById('keyboard-cont').remove();
            newWord = '';

            const letsPlay = document.getElementsByTagName('h1')[0];

            letsPlay.addEventListener('click', () => {
                if (localStorage.length > 0) {
                    Array.from(localStorage).map((element, index) => {
                        let key = index + 1;
                        let word = localStorage.getItem(key);
                        word = word.replace(/"/g, '');
                        words.push(word);
                        getApiData(words[index], index);
                    });
                }
            });
        }
    });
}



const obtenerDatos = () => {
    //console.log(words[counter]);
    const long = wordsDefinitions[counter].length;
    console.log(long)
    for (let i = 0; i < long; i++) {
        console.log(wordsDefinitions[counter][i])
    }
}


const getApiData = async (word, index) => {

    let response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    let definitionsNumber = [];
    let meaningsLength = (response.data[0].meanings).length;
    let definitions = [];

    let arrayMeaningsNumber = Array.from({ length: meaningsLength }, (element, index) => index);
    arrayMeaningsNumber.map((element, index) => {
        let length_meanings = (response.data[0].meanings[index].definitions).length;
        definitionsNumber.push(length_meanings);
        for (let j = 0; j < definitionsNumber[index]; j++) {
            let definition = response.data[0].meanings[index].definitions[j].definition;
            definitions.push(definition);
        }
    });
    wordsDefinitions.push(definitions);

    if (flag === true) {

        obtenerDatos();
        let word = words[counter];
        let wordLength = word.length;
        let tr = document.getElementsByTagName('tr')[0];
        let casillas = document.getElementsByClassName('activity');

        Array.from(casillas).map((element, index) => {
            if (index > 0) element.remove();
        })

        let arrayWordLength = Array.from({ length: wordLength - 1 }, (element, index) => index);
        arrayWordLength.map((element, index) => {
            let casilla = casillas[index].cloneNode(true);
            tr.appendChild(casilla);
        })

        let celdaAnterior = undefined;
        let w = word.split("");

        Array.from(casillas).map((element, index) => {
            const randomIndex = Math.floor(Math.random() * w.length);
            element.innerHTML = w[randomIndex];
            w.splice(randomIndex, 1);


            element.addEventListener('click', () => {
                if (celdaAnterior !== undefined) {
                    let temp = element.innerHTML;
                    element.innerHTML = celdaAnterior.innerHTML;
                    celdaAnterior.innerHTML = temp;
                    celdaAnterior = undefined;
                } else {
                    celdaAnterior = element;
                }

                let provisionalWord = '';
                for (let i = 0; i < word.length; i++) {
                    let letter = document.getElementsByClassName('activity')[i].innerHTML;
                    provisionalWord += letter;
                }
                console.log(provisionalWord);

                if (provisionalWord === word) {
                    console.log('acierto');
                    flag = true;
                    rigthWords++;
                    counter++
                } else flag = false;

            })
        })

        //counter++;
        //console.log(counter);
    }
}


const addWord = () => {
    let typedLetters = '';
    let buttons = document.getElementsByClassName('keyboard-button');

    Array.from(buttons).map((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            const value = element.value;
            if (value === 'submit') {
                saveData(localStorage.length + 1, typedLetters)
                typedLetters = '';
            } else if (value === 'del') {
                typedLetters = typedLetters.slice(0, -1);
            } else {
                typedLetters += value;
            }
        });
    });
}


const saveData = (key, data) => {
    window.localStorage.setItem(key, JSON.stringify(data));
}


window.onload = (hideKeyboard());