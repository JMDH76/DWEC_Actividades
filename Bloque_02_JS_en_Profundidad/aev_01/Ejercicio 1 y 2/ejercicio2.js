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


/* Modal */
let modalElement = document.createElement('div');
modalElement.setAttribute('class', 'modal');

let modalContent = document.createElement('div');
modalContent.setAttribute('class', 'modal-content');

let modalButton = document.createElement('span');
modalButton.setAttribute('class', 'close-button');
modalButton.innerHTML = 'X';

let form = document.createElement('form');

let divField = document.createElement('div');
let divField1 = document.createElement('div');
let divField2 = document.createElement('div');
let divButton = document.createElement('div');

let input1 = document.createElement('input');
input1.setAttribute('class', 'input');
input1.setAttribute('type', 'text');
input1.setAttribute('name', 'name');
input1.setAttribute('id', 'name');
input1.setAttribute('value', '');
input1.setAttribute('placeholder', 'Nombre');
input1.style.marginLeft = '25px';

let input2 = document.createElement('input');
input2.setAttribute('class', 'input');
input2.setAttribute('type', 'text');
input2.setAttribute('name', 'first-surname');
input2.setAttribute('id', 'first-surname');
input2.setAttribute('value', '');
input2.setAttribute('placeholder', 'Primer apellido');
input2.style.marginLeft = '5px';

let input3 = document.createElement('input');
input3.setAttribute('class', 'input');
input3.setAttribute('type', 'text');
input3.setAttribute('name', 'second-surname');
input3.setAttribute('id', 'second-surname');
input3.setAttribute('value', '');
input3.setAttribute('placeholder', 'Segundo apellido');

let input4 = document.createElement('input');
input4.setAttribute('class', 'input');
input4.setAttribute('type', 'text');
input4.setAttribute('name', 'phone');
input4.setAttribute('id', 'phone');
input4.setAttribute('value', '');
input4.setAttribute('placeholder', 'Teléfono');
input4.style.marginLeft = '5px';

let formSubmitButton = document.createElement('button');
formSubmitButton.setAttribute('class', 'send');
formSubmitButton.setAttribute('type', 'submit');
formSubmitButton.innerHTML = 'Enviar';

//Crea la nueva estructura
divSeries.appendChild(modalElement);
modalElement.appendChild(modalContent);
modalContent.appendChild(modalButton);
modalContent.appendChild(form);
form.appendChild(divField1);
divField1.appendChild(input1);
divField1.appendChild(input2);
form.appendChild(divField2);
divField2.appendChild(input3);
divField2.appendChild(input4);
form.appendChild(divButton);
divButton.appendChild(formSubmitButton);

//Abre modal
let modal = document.getElementsByClassName('modal')[0];
footerContent.addEventListener('click', function () {
    modal.classList.toggle('show-modal');
});

//Botón de cierre
modal.getElementsByClassName('close-button')[0].addEventListener('click', function () {
    modal.classList.toggle('show-modal');
});

//Comprobación campos formulario
let ids = [{ id: 'name', placeholder: 'nombre' }, { id: 'first-surname', placeholder: 'primer apellido' },
{ id: 'second-surname', placeholder: 'segundo apellido' }, { id: 'phone', placeholder: 'Teléfono' }];

let formulario = document.getElementsByTagName('form')[0];
formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    let flag = true;
    for (let i = 0; i < ids.length; i++) {
        let id = ids[i].id;
        let placeholder = ids[i].placeholder;
        let text = document.getElementById(ids[i].id).value;
        let phone = document.getElementById(ids[i].id).value;

        if (i < 3) {
            if (!textCheck(id, placeholder, text)) {
                flag = false;
                break;
            }
        } else {
            if (!phoneCheck(id, phone)) {
                flag = false;
                break;
            }
        }
    }

    if (flag) {
        formulario.reset();
        modal.classList.toggle('show-modal');
    }
});

function textCheck(id, placeholder, text) {
    let regExp = "^([A-Za-z ÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-z ÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-z ÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-z ÑñÁáÉéÍíÓóÚú]+))*$";
    if (text.match(regExp) === null) {
        alert(`Por favor, introduce un ${placeholder} válido`);
        document.getElementById(id).value = '';
        return false;
    } else return true;
}

function phoneCheck(id, number) {
    if (isNaN(number) || number.length !== 9) {
        alert('Por favor, indique un número de teléfono válido');
        document.getElementById(id).value = '';
        return false;
    } else return true

}

