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