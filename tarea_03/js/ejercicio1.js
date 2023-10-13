/* Implementa  un  script  que  permita  validar  el siguiente  formulario:  
el  nombre  y  los  apellidos  deben  estar compuestos  por  letras  y  el  
DNI  debe  de  ser  un  número  de ocho  números.  Al  validar  el  DNI  se  
calculará  la  letra  del  DNI. Si se introduce un dato incorrecto, saltará 
una alerta indicando que  vuelva  a  introducirlo.  Si  todo  es  correcto,  
saltará  una alerta indicando la letra del DNI. */

let form = document.getElementsByTagName('form')[0];
let titlesArray = ['Nombre', 'Primer apellido', 'Segundo apellido', 'dni'];

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let dniLetter = testDni();
    if (testText() === true && dniLetter !== false) {
        alert('La letra de su dni es ' + dniLetter);
        form.reset();
    }
});

function testText() {
    let resp = true;
    for (let i = 0; i < 3; i++) {
        let text = document.getElementsByTagName('input')[i].value;
        if (!isNaN(text) || text === "" || text === undefined) {
            alert('Inserte un ' + titlesArray[i] + ' valido');
            document.getElementsByTagName('input')[i].value = '';
            resp = false;
            break;
        }
    }
    return resp;
}

function testDni() {
    let dni = document.getElementById('dni').value;
    let dniLength = dni.toString().length;
    let letters = 'TRWAGMYFPDXBNJZSQVHLCKE';

    if (!isNaN(dni) && dniLength === 8 && dni !== '' && dni !== undefined) {
        let dniLetter = letters[dni % 23];
        return dniLetter;
    } else {
        document.getElementById('dni').value = '';
        alert('Inserte un número de DNI valido');
        return false
    }
}
