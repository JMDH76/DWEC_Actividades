function question2() {
    let year = new Date().getFullYear();
    let age;
    do {
        age = prompt("¿Cuál es tu edad?");
    } while (isNaN(age) !== false || age == 0);
    alert("Naciste en el año " + (year - age));
}
