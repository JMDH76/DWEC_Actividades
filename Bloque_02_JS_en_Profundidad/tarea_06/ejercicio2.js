saveButton = document.getElementsByTagName('button')[4];
getButton = document.getElementsByName('button_get_data')[1];
deleteItemButton = document.getElementsByName('button_delete_item')[1];
deleteAllButton = document.getElementsByName('button_delete_all')[1];

let names2 = ['dni', 'name', 'first_surname', 'second_surname', 'color'];


/* Guardar registro */
saveButton.addEventListener('click', (event) => {
    event.preventDefault();

    names2.map((element, index) => {

        if (names2[index] !== 'color') {
            let value = document.getElementsByName(element)[1].value;
            if (names2[index] === 'dni') {
                key = value;

            } else {
                data[element] = value;
            }
        } else {
            let selectValue = document.getElementById('color').value;
            let selectText = document.getElementById('color').options[selectValue - 1].text;
            data[element] = selectText;
        }
    });
    saveData(key, data);
    form[1].reset();
});


/* Obtener registro */
getButton.addEventListener('click', (event) => {
    event.preventDefault();
    form[1].reset();

    let getKey = document.getElementsByName('get_data')[1].value;
    let data = getData(getKey);
    let array = Object.values(JSON.parse(data));

    document.getElementsByName('dni')[1].value = getKey;

    array.map((element, index) => {
        let selectValue;
        if (names2[index + 1] === 'color') {
            document.getElementById('paragraph').style.color = element;
            if (element === 'lightgrey') selectValue = 1;
            else if (element === 'green') selectValue = 2;
            else if (element === 'beige') selectValue = 3;
            else if (element === 'yellow') selectValue = 4;
            else if (element === 'salmon') selectValue = 5;
            else if (element === 'red') selectValue = 6;
            document.getElementById('color').value = selectValue;
        } else {
            document.getElementsByName(names2[index + 1])[1].value = element;
        }
    });
    document.getElementsByName('get_data')[1].value = "";
})


/* Borrar item */
deleteItemButton.addEventListener('click', (event) => {
    event.preventDefault();
    form[1].reset();

    let getKey = document.getElementsByName('delete_item')[1].value;
    deleteItem(getKey);
    document.getElementsByName('delete_item')[1].value = "";
});


/* Borrar todos los registros */
deleteAllButton.addEventListener('click', (event) => {
    event.preventDefault();
    deleteAllItems();
});
