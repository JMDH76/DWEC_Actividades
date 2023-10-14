/* En  el  archivo  postres.html  proporcionado, implementa  un  script  para  que  cuando  el  
usuario  deslice  el cursor  del  ratón  en  las  siguientes  zonas  de  la  pantalla,  se 
cambie  el  color  del  título  de  primer  nivel  a  los  siguientes valores: 

- Horizontal: entre 0 y 500 píxels. Vertical: entre 0 y 500 píxels. Color: amarillo. 
-  Horizontal:  entre  0  y  500  píxels.  Vertical:  entre  500  y  1000 píxels. Color: rojo. 
-  Horizontal:  entre  500  y  1000  píxels.  Vertical:  entre  0  y  500 píxels. Color: azul. 
- Horizontal: entre 500 y 500 píxels. Vertical: entre 500 y 1000 píxels. Color: verde. 
Resto: color blanco. */

let textH1 = document.getElementsByTagName('h1')[0];

window.addEventListener('mousemove', (event) => {
    let x = event.clientX;
    let y = event.clientY;

    if (x >= 0 && x <= 500 && y >= 0 && y <= 500) {
        textH1.style.color = 'yellow';
    } else if (x >= 0 && x <= 500 && y >= 501 && y <= 1000) {
        textH1.style.color = 'red';
    } else if (x >= 501 && x <= 1000 && y >= 0 && y <= 500) {
        textH1.style.color = 'blue';
    } else if (x >= 501 && x <= 1000 && y >= 501 && y <= 1000) {
        textH1.style.color = 'green';
    } else textH1.style.color = 'white';
});
