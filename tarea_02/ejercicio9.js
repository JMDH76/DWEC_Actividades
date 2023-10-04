/* En  el  archivo  postres.html  proporcionado, implementa  un  script  
para  que  cuando  el  usuario  pulse  sobre la imagen y mientras mantenga 
pulsado el cursor, se muestre en  el  titulo  de  segundo  nivel  el  nombre  
de  cada  postre  -utilizando para ello mousedown/mouseup-.  */

let dessertNames = [
    'Flan con huevo',
    'Flan con nata',
    'Tarta de manzana',
    'Tarta de queso',
    'Tarta de zanahoria',
    'Tiramisu'
];

let textH2 = document.getElementsByTagName("h2")[0];
let returnText = 'Tartas'

//Variable ya generada en el ejercicio08
dessertImage.addEventListener('mousedown', () => {
    textH2.innerHTML = dessertNames[actual];
    textH2.style.color = '#05A8AA';
    document.getElementsByTagName('p')[0].style.visibility = 'hidden';
}) 

dessertImage.addEventListener('mouseup', () => {
    textH2.textContent = returnText;
    textH2.style.color = '';
    document.getElementsByTagName('p')[0].style.visibility = 'visible';
}) 
