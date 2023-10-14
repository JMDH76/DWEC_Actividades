/* Implementa  un  script  que  permita  validar  el siguiente  formulario:  
el  nombre  y  los  apellidos  deben  estar compuestos únicamente por  letras 
y  el  correo electrónico introducido debe ser correcto. Si se introduce un dato 
incorrecto,  se  borrará  el  campo  del  formulario  incorrecto  y saltará una 
alerta indicando que vuelva a introducirlo. */

let form2 = document.getElementsByTagName('form')[1];
//let titlesArray = ['Nombre', 'Primer apellido', 'Segundo apellido', 'email'];

form2.addEventListener('submit', function (event) {
    event.preventDefault();
    if (testText() === true && testEmail() !== false) {
        form2.reset();
    }
});

function testText() {
    let resp = true;
    for (let i = 0; i < 3; i++) {
        let text = document.getElementsByTagName('input')[i + 5].value;
        if (!isNaN(text) || text === "" || text === undefined) {
            alert('Inserte un ' + titlesArray[i] + ' valido');
            document.getElementsByTagName('input')[i].value = '';
            resp = false;
            break;
        }
    }
    return resp;
}

function testEmail() {
    let email = document.getElementById('email').value;
    let exp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailValidation = exp.test(email);

    if (!emailValidation) {
        alert('Inserte una dirección de correo válida');
        document.getElementById('email').value = "";
        return false;
    } else return true;
}
