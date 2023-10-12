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
    let textOk = testText();
    let dniLetter = testDni();
    if (textOk === true && isNaN(dniLetter)) {
        alert('La letra de su dni es ' + dniLetter);
        form.reset();
    } else alert("error");
});


function testText() {
    let test = [];
    for (let i = 0; i < 3; i++) {
        let text = document.getElementsByTagName('input')[i].value;
        if (isNaN(text)) {
            test.push('ok');
        } else {
            alert('Inserte un ' + titlesArray[i] + ' valido');
            document.getElementsByTagName('input')[i].value = '';
        }
    }

    for (let i = 0; i < test.length; i++){
        if (test[i] !== 'ok') {
            return false
        } else  return true;
    }
}

function testDni() {
    let dni = document.getElementById('dni').value;
    let dniLength = dni.toString().length;
    let letters = 'TRWAGMYFPDXBNJZSQVHLCKE';

    if (!isNaN(dni) && dniLength === 8) {
        let dniLetter = letters[dni % 23]
        return dniLetter;
    } else {
        alert('Inserte un número de DNI valido');
        document.getElementById('dni').value = '';
    }
}
