/* Ejercicio 01. Implementa en un script la función o funciones que necesites para que mediante el uso de 
prompt() se le pregunte al usuario cuántos años tiene y tras capturar su respuesta, se muestre por pantalla 
una alerta que indique el año en que nació. Si el usuario introduce por error letras en lugar de 
números, volverá a preguntar al usuario cuántos años tiene hasta que éste introduzca un número. 
Para realizar este script deberás utilizar la sentencia condicional ‘if’. */

function question() {
    let age = prompt("¿Cuál es tu edad?");
    return calculaAnyo(age);
}


function calculaAnyo(resp) {
    let year = new Date().getFullYear();
    if (isNaN(resp) === false && resp != 0) {
        alert("Naciste en el año " + (year - resp))
    } else {
        question();
    }
}