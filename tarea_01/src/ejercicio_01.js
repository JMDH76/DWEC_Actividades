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