/* Actividad 4 – Implementa un script donde generes un 
formulario de manera dinámica con los siguientes campos: 
‘Nombre’, ‘Primer apellido’, ‘Segundo apellido’, ‘DNI’. Se 
deberá comprobar que el usuario introduce datos correctos en 
cada campo del formulario. De lo contrario saltará una alerta 
indicando qué datos son erróneos. Nota: sírvete de los estilos 
ya definidos en el archivo contacto.css */


let attributes = [
    [{ type: 'class', name: 'input' }, { type: 'placeholder', name: 'Nombre' }, { type: 'type', name: 'text' }, { type: 'name', name: 'name' }], 
    [{ type: 'class', name: 'input' }, { type: 'placeholder', name: 'Primer Apellido' }, { type: 'type', name: 'text' }, { type: 'name', name: 'first-surname' }], 
    [{ type: 'class', name: 'input' }, { type: 'placeholder', name: 'Segundo Apellido' }, { type: 'type', name: 'text' }, { type: 'name', name: 'second-surname' }], 
    [{ type: 'class', name: 'input' }, { type: 'placeholder', name: 'Telefono' }, { type: 'type', name: 'text' }, { type: 'name', name: 'phone-number' }], 
    [{ type: 'class', name: 'send' }, { type: 'placeholder', name: 'Enviar' }, { type: 'type', name: 'submit' }, { type: 'name', name: 'send' }]];



function createInput(attributes) {
    let input = document.createElement('input');
    for (let i = 0; i < attributes.length; i++) {
        input.setAttribute(attributes[i].type, attributes[i].name);
    }
    return input;
}

function createDiv(attributes) {
    let div = document.createElement('div');
    for (let i = 0; i < attributes.length; i++) {
        let input = createInput(attributes[i]);
        div.appendChild(input);
    }
    return div;
}

function createForm() {
    let form = document.createElement('form');
    for(let i = 0; i <= 2; i += 2){
        form.appendChild(createDiv([attributes[i], attributes[i + 1]]));
    }
    let inputSend = createInput(attributes[4]);
    form.appendChild(inputSend);
    document.body.appendChild(form);
}


function onSubmit(event){
    event.preventDefault();
    let names = [{category: 'name', value: 'nombre'}, {category: 'first-surname', value: 'primer apellido'}, {category: 'second-surname', value: 'segundo apellido'}];
    let test = true;
    for(i = 0; i < names.length; i++){
        if(!validateString(names[i].category, names[i].value)) test = false
    }
   if(!validatePhoneNumber()) test = false;
   if(test){
    alert('Tus datos se han introducido correctamente');
    form.reset();
   }
}

function validateString(category, value){
    let string = document.getElementsByName(category)[0].value;
    let regExp = "^([A-Za-z ÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$";
    if(string.match(regExp) === null){
        alert(`Por favor, introduce un ${value} correcto`);
        return false;
    } else {
        return true;
    }
}

function validatePhoneNumber(){
    let string = document.getElementsByName('phone-number')[0].value;
    let regExp = "^[0-9]+$";
    if(string.match(regExp) === null){
        alert(`Por favor, introduce un numero de tefono correcto`);
        return false;
    } else {
        return true;
    }
}

createForm();
let form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', (event) => onSubmit(event));