const hideKeyboard = () => {


    const keyboard = document.getElementById('keyboard-cont')
    const clone = keyboard.cloneNode(true);
    keyboard.remove()
    let newWord = '';

    document.addEventListener('keydown', function (event) {
        const showKeyboardWord = 'a';        //'abracadabra';
        const hideKeyWord = 'c'         //'patadecabra';
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
        }
    });
}

const getApiData = async (word) => {
    let response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)

    let length_0 = (response.data[0].meanings).length;
    let length_1 = (response.data[0].meanings[0].definitions).length;
    let length_2 = (response.data[0].meanings[1].definitions).length;
  /*   let length_3 = (response.data[1].meanings[0].definitions).length;
    let length_4 = (response.data[1].meanings[1].definitions).length; */
    let length_data = (response.data).length

    console.log('length_0 > ' + length_0);
    console.log('length_1 > ' + length_1);
    console.log('length_2 > ' + length_2);
/*     console.log('length_3 > ' + length_3);
    console.log('length_4 > ' + length_4); */

    console.log('length_data > ' + length_data);


    for (let i = 0; i < length_0; i++) {
        if (i === 0) {
            for (let h = 0; h < length_1; h++) {
                console.log(response.data[1].meanings[i].definitions[h].definition);
            }
        } else if (i === 1) {
            for (let j = 0; j < length_2; j++) {
                console.log(response.data[1].meanings[i].definitions[j].definition);
            }
        } else if (i === 2) {
            for (let k = 0; k < length_2; k++) {
                console.log('k > ' + response.data[1].meanings[i].definitions[k].definition);
            }
        }
    }
}


getApiData('love');


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