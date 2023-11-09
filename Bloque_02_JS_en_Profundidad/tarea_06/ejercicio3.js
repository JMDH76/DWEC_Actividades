let addMonumentButton = document.getElementsByTagName('button')[8];
let getMonumentButton = document.getElementsByName('button_get_data')[2];
let deleteMonumentButton = document.getElementsByName('button_delete_item')[2];
let deleteAllMonumentsButton = document.getElementsByName('button_delete_all')[2];

let monuments = ['monument', 'country', 'photo'];
addMonumentButton.addEventListener('click', (event) => {
    event.preventDefault();
    monuments.map((element, index) => {
        let value = document.getElementsByName(element)[0].value;
        if (monuments[index] === 'monument') {
            key = value;
        } else {
            data[element] = value;
        }
    });
    saveData(key, data);
    form[2].reset();
})

/* Obtener registro */
getMonumentButton.addEventListener('click', (event) => {
    event.preventDefault();

    let getKey = document.getElementsByName('get_data')[2].value;
    let data = getData(getKey);
    let array = Object.values(JSON.parse(data));
    let monumentImage = document.getElementById('image');
    monumentImage.src = array[1];

    document.getElementsByName('monument_title')[0].innerHTML = getKey;
    document.getElementsByName('monument_country')[0].innerHTML = array[0];
    document.getElementsByName('get_data')[2].value = "";
})


/* Borrar un elemento */
//loadPreviusData();        /* Carga de monumentos directamente para los test de borrado descomentar y refrescar página */

deleteMonumentButton.addEventListener('click', (event) => {
    event.preventDefault();
    let key = document.getElementsByName('get_data')[2].value;
    deleteItem(key);
    //location.reload();
})

/* Borrar todo */
deleteAllMonumentsButton.addEventListener('click', (event) => {
    event.preventDefault();
    deleteAllItems();
})

