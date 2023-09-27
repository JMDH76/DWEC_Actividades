/* Ejercicio 05. Implementa en un script la función o funciones que necesites para que 
mediante el uso de prompt() se le pida al usuario que introduzca los dos lados de un 
paralelogramo - figura geométrica de cuatro lados- y responda por consola - utilizando 
console.log- con el área y perímetro del paralelogramo calculados a partir de los datos 
introducidos por el usuario. Además, deberá informar de qué tipo de paralelogramo se trata: 
cuadrado -los cuatro lados iguales- o rectangular –lados iguales dos a dos-. Nota: en el caso 
de que el usuario no introduzca números para alguno de los lados, el script volverá a pedirle 
que introduzca un número. */

function question5() {
    let side01;
    let side02;
    do {
        side01 = prompt("Indica el lado 1 en cm");
        if (isNaN(side01)) {
            alert("Introduce una medida válida")
        }
    } while (isNaN(side01));

    do {
        side02 = prompt("Indica el lado 2 en cm");
        if (isNaN(side02)) {
            alert("Introduce una medida válida")
        }
    } while (isNaN(side02));

    let type;
    if (side01 === side02) {
        type = "cuadrado";
    } else {
        type = "rectángulo";
    }

    console.log("La figura es un " + type + ".");
    calculateArea(side01, side02);
    calculatePerimeter(side01, side02);
}


function calculateArea(s1, s2) {
    let area = s1 * s2;
    console.log("Área = " + area + " cm2");
}


function calculatePerimeter(s1, s2) {
    let perimeter = 2 * (s1 + s2);
    console.log("Perímetro = " + perimeter + " cm");
}
