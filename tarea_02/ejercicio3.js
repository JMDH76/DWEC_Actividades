/* Actividad 3 – En el archivo index.html proporcionado, 
implementa  un  script  para  que  cuando  el  usuario  pase  el 
cursor del ratón sobre el título de primer nivel (h1), el 
contenido  del  título  (Casa  Pepe)  se  cambie  por  otro  de  tú 
elección (Ejemplo: Tu bar para almorzar).  */

let titulo = document.getElementsByTagName("h1")[0];

titulo.addEventListener('mouseover', () => {
    titulo.textContent = "Tu bar para almorzar";
});

titulo.addEventListener('mouseout', () => {
   titulo.innerHTML="Casa Pepe" 
});