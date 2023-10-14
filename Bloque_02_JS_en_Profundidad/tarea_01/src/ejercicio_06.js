/* Ejercicio 06. Implementa en un script la función o funciones que necesites para que 
mediante prompt() se le pida al usuario que introduzca un número y a continuación muestre 
por pantalla el resultado del factorial de ese número. Se deberá utilizar el bucle ‘for’. 
Nota: factorial del número 5 = 5*4*3*2*1. Factorial del número 7 = 7*6*5*4*3*2*1. */

function question6() {
    let num;
    do {
        num = prompt("Indique un número para calcular su factorial");
        if (isNaN(num)) {
            alert("Debe introducir un número")
        }
    } while (isNaN(num));
    calcNumber(num);
}


function calcNumber(number) {
    let result = 1;
    for (let i = result; i <= number; i++) {
        result = result * i;
        console.log(result);
    }
    alert("El factorial de " + number + " es " + result);
}