
/* En  el  archivo  almuerzos.html  proporcionado, implementa un script  para que cuando se cargue 
la página la tabla  con  las  imágenes  aparezca  oculta  al  usuario.  Al hacer éste  doble  click  
sobre  el  titulo  'Almuerzos',  se  mostrará  la tabla. Si vuelve a hacer doble click, se ocultará 
otra vez. Y así sucesivamente. */

let table = document.getElementById("tablebot");
table.style.display = "none";

let title = document.getElementsByTagName("h1")[0];
title.addEventListener("dblclick", () => {
    if (table.style.display === "none") {
        table.style.display = 'block';

    } else {
        table.style.display = 'none';
    }
})
