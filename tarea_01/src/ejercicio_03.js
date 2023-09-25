function question3() {
    let note;
    do {
        note = prompt("¿Qué nota has sacado?");
        if (isNaN(note) || note > 10 || note < 0) {
            alert("Tu  nota debe estar entre 0 y 10")
        }
    } while (isNaN(note) || note > 10 || note < 0);
    return calculateNote(note);
}

function calculateNote(resp) {
    let letterNote;
    if (resp >= 0 && resp < 5) {
        letterNote = "Insuficiente";
    } else if (resp >= 5 && resp < 6) {
        letterNote = "Suficiente";
    } else if (resp >= 6 && resp < 7) {
        letterNote = "Bien";
    } else if (resp >= 7 && resp < 8) {
        letterNote = "Notabe";
    } else if (resp >= 8 && resp < 9) {
        letterNote = "Notable alto";
    } else if (resp >= 9 && resp <= 10) {
        letterNote = "Sobresaliente";
    }
    alert("Tu nota ha sido un " + letterNote);
}
