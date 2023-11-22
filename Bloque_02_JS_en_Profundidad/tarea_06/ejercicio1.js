let form = document.getElementsByTagName('form');
let saveButton = document.getElementsByTagName('button')[0];
let getButton = document.getElementsByName('button_get_data')[0];
let deleteItemButton = document.getElementsByName('button_delete_item')[0];
let deleteAllButton = document.getElementsByName('button_delete_all')[0];

let names = ['dni', 'name', 'first_surname', 'second_surname'];
let key;
let namesArray = [];
let data = {};


/* Guardar registro */
saveButton.addEventListener('click', (event) => {
    event.preventDefault();

    names.map((element, index) => {
        let value = document.getElementsByName(element)[0].value;
        if (names[index] === 'dni') {
            key = value;
        } else {
            data[element] = value;
        }
    });
    saveData(key, data);
    form[0].reset();
});


/* Obtener registro */
getButton.addEventListener('click', (event) => {
    event.preventDefault();
    form[0].reset();

    let getKey = document.getElementsByName('get_data')[0].value;
    let data = getData(getKey);
    let array = Object.values(JSON.parse(data));

    array.map((element, index) => {
        document.getElementsByName(names[index + 1])[0].value = element;
    });
    document.getElementsByName('dni')[0].value = getKey;
    document.getElementsByName('get_data')[0].value = "";
})


//////////////////////////////////////////
//LocalStorage
// Guardar un dato con una clave específica
localStorage.setItem('nombre', 'Ejemplo');

// Guardar un objeto serializado en JSON
let usuario = {
  nombre: 'Juan',
  edad: 30,
  email: 'juan@example.com'
};
localStorage.setItem('usuario', JSON.stringify(usuario));

// Obtener un dato por su clave
let nombre = localStorage.getItem('nombre');
console.log('Nombre:', nombre);

// Obtener un objeto y convertirlo de nuevo a su forma original
let usuarioGuardado = localStorage.getItem('usuario');
let usuarioParseado = JSON.parse(usuarioGuardado);
console.log('Usuario:', usuarioParseado);

// Eliminar un dato por su clave
localStorage.removeItem('nombre');

// Borrar todos los datos de localStorage
localStorage.clear();



/* Borrar item */
deleteItemButton.addEventListener('click', (event) => {
    event.preventDefault();
    form[0].reset();

    let getKey = document.getElementsByName('delete_item')[0].value;
    deleteItem(getKey);
    document.getElementsByName('delete_item')[0].value = "";
});


/* Borrar todos los registros */
deleteAllButton.addEventListener('click', (event) => {
    event.preventDefault();
    
    deleteAllItems();
});


let saveData = (key, data) => {
    window.localStorage.setItem(key, JSON.stringify(data));
}

let getData = (key) => {
    let data = window.localStorage.getItem(key);
    return data;
}

let deleteItem = (key) => {
    window.localStorage.removeItem(key);
}

let deleteAllItems = () => {
    window.localStorage.clear();
}
