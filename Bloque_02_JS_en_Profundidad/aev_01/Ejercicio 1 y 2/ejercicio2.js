//Crea div con atributo 'class = header' para formato y lo oculta. 
let footer = document.createElement('div');
footer.setAttribute('class', 'header');
footer.style.display = 'none';

//Crea h1 y lo coloca dentro del div
let footerContent = document.createElement('h1');
footerContent.textContent = 'Contacto';
footer.appendChild(footerContent);

//Coloca el div al final del body
let body = document.getElementsByTagName('body')[0];
body.appendChild(footer);

//Ventana Modal
let modal = document.createElement('div');
modal.setAttribute('class', 'modal');

let modalContent = document.createElement('div');
modalContent.setAttribute('class', 'modal-content');

let modalButton = document.createElement('span');
modalButton.setAttribute('class', 'close-button');
modalButton.innerHTML = 'X';

let formGroup = document.createElement('form');

let divField1 = document.createElement('div');
let divField2 = document.createElement('div');
let divButton = document.createElement('div');

//Crea los 4 inputs y los ubica en el árbol dentro de sus div's correspondientes
let inputs = [
    { field: 'input1', class: 'input', type: 'text', name: 'name', id: 'name', value: '', placeholder: 'Nombre' },
    { field: 'input2', class: 'input', type: 'text', name: 'first-surname', id: 'first-surname', value: '', placeholder: 'Primer apellido' },
    { field: 'input3', class: 'input', type: 'text', name: 'second-surname', id: 'second-surname', value: '', placeholder: 'Segundo apellido' },
    { field: 'input4', class: 'input', type: 'text', name: 'phone', id: 'phone', value: '', placeholder: 'Número de teléfono' },
];

for (let i = 0; i < inputs.length; i++) {
    let input = document.createElement('input');
    input.setAttribute('class', inputs[i].class);
    input.setAttribute('type', inputs[i].type);
    input.setAttribute('name', inputs[i].name);
    input.setAttribute('id', inputs[i].id);
    input.setAttribute('value', inputs[i].value);
    input.setAttribute('placeholder', inputs[i].placeholder);

    if (i < 2) {
        if (i === 0) input.style.marginLeft = '25px';
        else input.style.marginLeft = '5px';
        divField1.appendChild(input);
    } else {
        if (i === 3) input.style.marginLeft = '5px';
        divField2.appendChild(input);
    }
}

//Crea boton formulario
let formSubmitButton = document.createElement('button');
formSubmitButton.setAttribute('class', 'send');
formSubmitButton.setAttribute('type', 'submit');
formSubmitButton.innerHTML = 'Enviar';

//Crea la nueva estructura
divSeries.appendChild(modal);
modal.appendChild(modalContent);
modalContent.appendChild(modalButton);
modalContent.appendChild(formGroup);
formGroup.appendChild(divField1);
formGroup.appendChild(divField2);
formGroup.appendChild(divButton);
divButton.appendChild(formSubmitButton);

//Abre modal
footerContent.addEventListener('click', () => {
    modal.classList.toggle('show-modal');
});

//Botón 'X' de cierre Modal
modal.getElementsByClassName('close-button')[0].addEventListener('click', () => {
    modal.classList.toggle('show-modal');
});

//Submit y comprobación campos formulario
let form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', (event) => {
    event.preventDefault();

    let flag = true;
    for (let i = 0; i < inputs.length; i++) {
        let id = inputs[i].id;
        let placeholder = inputs[i].placeholder;
        let text = document.getElementById(inputs[i].id).value;
        let phone = document.getElementById(inputs[i].id).value;

        if (i < inputs.length - 1) {
            if (!textCheck(id, placeholder, text)) {
                flag = false;
                break;
            }
        } else {
            if (!phoneCheck(id, placeholder, phone)) {
                flag = false;
                break;
            }
        }
    }

    if (flag) {
        form.reset();
        modal.classList.toggle('show-modal');
    }
});

//Funciones Check texto y número teléfono
function textCheck(id, placeholder, text) {
    let regExp = "^([A-Za-z ÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-z ÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-z ÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-z ÑñÁáÉéÍíÓóÚú]+))*$";
    if (text.match(regExp) === null) {
        alert(`Por favor, introduce un ${placeholder} válido`);
        document.getElementById(id).value = '';
        return false;
    } else return true;
}

function phoneCheck(id, placeholder, number) {
    if (isNaN(number) || number.length !== 9) {
        alert(`Por favor, indique un ${placeholder} válido`);
        document.getElementById(id).value = '';
        return false;
    } else return true
}
