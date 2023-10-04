/* En  el  archivo  postres.html  proporcionado,implementa un script para que cuando 
el usuario pulse la tecla A,  B  o  C,  cambien  los  colores  del  fondo  del  título  
de  primer nivel. Si se pulsa cualquier otra tecla, volverá al color original. */

//alert("Pulse una de estas letras: A, B o C");

document.addEventListener("keydown", function (event) {
    if (event.key === 'A' || event.key === 'a') {
        textH1.style.background = 'chocolate';
    } else if (event.key === 'B' || event.key === 'b') {
        textH1.style.background = 'khaki';
    } else if (event.key === 'C' || event.key === 'c') {
        textH1.style.background = 'mistyRose';
    } else {
        textH1.style.background = '#05A8AA';
    }
});
