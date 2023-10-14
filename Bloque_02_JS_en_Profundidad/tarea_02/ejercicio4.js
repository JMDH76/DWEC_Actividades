/* En el archivo index.html proporcionado, implementa un script para que cuando se cargue la 
pantalla se oculten. los contenidos incluidos bajo la clase "nutrition”. A continuación, implementa 
la lógica necesaria para que cuando el usuario haga click sobre el logo que has introducido  
en el Ejercicio 1, se muestren los  elementos incluidos bajo la clase "nutrition”. */

let menu = document.getElementsByTagName("ul")[0];
menu.style.display = "none";

let image = document.getElementsByTagName("img")[0];
image.addEventListener("click", () => {
    if (menu.style.display === "none") {
        menu.style.display = 'block';
    }
})
