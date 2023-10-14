/* Actividad 1 – Implementa un script para que en el centro del 
archivo HTML proporcionado se visualicen tres imágenes con 
tres textos sobreimpuestos: 'café', 'infusions' y 'alcohol'. */

let td = document.getElementsByTagName('td')[0];
let title = document.getElementsByTagName('h1')[1];

let contents = [
    { title: 'Café', path: "url(../bebidas/src/cafe/1.jpg)" },
    { title: 'Infusiones', path: "url(../bebidas/src/infusiones/1.jpg)" },
    { title: 'Alcohol', path: 'url(../bebidas/src/alcohol/1.jpg)' }
];

title.remove();

for (let i = 0; i < contents.length; i++){
    let h1 = document.createElement('h1');
    h1.style.backgroundImage = contents[i].path;
    h1.style.height = '300px';
    h1.style.color = '#05A8AA';
    h1.style.width = '30%';
    h1.style.display = 'inline-block';
    h1.style.margin = '2px'
    h1.textContent = contents[i].title;
    td.appendChild(h1);
}
