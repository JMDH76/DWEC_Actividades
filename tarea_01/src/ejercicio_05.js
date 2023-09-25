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
    calculateArea(side01, side02, type);
    calculatePerimeter(side01, side02, type);
}

function calculateArea(s1, s2, type) {
    console.log("El área de este " + type + " es de " + (s1 * s2) + " cm2");
}

function calculatePerimeter(s1, s2, type) {
    console.log("El perímetro de este " + type + " es de " + (2 * (s1 + s2) + " cm"));
}
