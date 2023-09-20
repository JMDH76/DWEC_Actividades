function question() {
    let age = prompt("¿Cuál es tu edad?");
    console.log(age);
    return calculaAnyo(age);
}

function calculaAnyo(resp) {
    let year = new Date().getFullYear();
    if (isNaN(resp) === false && resp != 0) {
        console.log(year - resp);
        alert("Naciste en el año " + (year - resp))
    } else {
        question();
    }
}