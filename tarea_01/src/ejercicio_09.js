/* Ejercicio 09. Realizar un script que calcule y muestre por consola una combinación al azar de la lotería Euromillones: 
    5 primeros números al azar elegidos del 1 al 50 y dos últimos del 1 al 12. Nota: no puede haber números 
    repetidos. Utilizar Math.random. */

function euromillones() {

    let numbers = getNumbers(1, 50, 5);
    let stars = getNumbers(1, 12, 2);
    console.log(numbers + "\nEstrellas:  " + stars);
    alert(numbers + "\nEstrellas:  " + stars);
}


function getNumbers(min, max, iter) {

    let combination = [];
    let number;
    for (let i = 0; i < iter; i++) {
        number = Math.floor(Math.random() * (max - min) + min);
        if (combination.includes(number) === false) combination.push(number);
        else i = i - 1;
    }
    combination = combination.sort(comparar).join(" - ");
    return combination;
}


function comparar(a, b) {
    return a - b;
}