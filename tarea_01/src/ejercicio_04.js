/* Ejercicio 04. Implementa el script anterior utilizando esta vez la sentencia condicional ‘switch’. */

function question4() {
    let note;
    do {
        note = prompt("¿Qué nota has sacado?");
        if (isNaN(note) || note > 10 || note < 0) {
            alert("Tu nota debe estar entre 0 y 10")
        }
    } while (isNaN(note) || note > 10 || note < 0)
    calculateNote2(parseInt(note));
}


function calculateNote2(resp) {
    let letterNote;
    switch (resp) {
        case 0:
            letterNote = "Insuficiente";
            break;
        case 1:
            letterNote = "Insuficiente";
            break;
        case 2:
            letterNote = "Insuficiente";
            break;
        case 3:
            letterNote = "Insuficiente";
            break;
        case 4:
            letterNote = "Insuficiente";
            break;
        case 5:
            letterNote = "Suficiente";
            break;
        case 6:
            letterNote = "Bien";
            break;
        case 7:
            letterNote = "Notable";
            break;
        case 8:
            letterNote = "Notable";
            break;
        case 9:
            letterNote = "Sobresaliente";
            break;
        case 10:
            letterNote = "Sobresaliente";
            break;
        default:
            alert("Error");
            break;
    }
    alert("Tu nota ha sido un " + letterNote);
}
