
const words = [];
const wordsDefinitions = [];

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
                        let key = index + 1
                        let word = localStorage.getItem(key);
                        word = word.replace(/"/g, '');
                        words.push(word);
                        getApiData(words[index]);
                    })
                }
                console.log(wordsDefinitions);
            });
        }
    });
}

const getApiData = async (word) => {

    let response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    let definitionsNumber = [];
    let meaningsNumber = (response.data[0].meanings).length;
    let definitions = [];

    const arrayMeaningsNumber = Array.from({ length: meaningsNumber }, (element, index) => index);

    arrayMeaningsNumber.map((element, index) => {
        let length_meanings = (response.data[0].meanings[index].definitions).length;
        definitionsNumber.push(length_meanings);
        for (let j = 0; j < definitionsNumber[index]; j++) {
            let definition = response.data[0].meanings[index].definitions[j].definition;
            definitions.push(definition);
        }
    })
    wordsDefinitions.push(definitions);
}

//getApiData('pace');

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