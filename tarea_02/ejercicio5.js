/* En el archivo index.html proporcionado, implementa un script para que cuando el usuario haga click 
se realicen los siguientes cambios sobre los párrafos:  
 
-Primer párrafo: la fuente –tipo de letra- cambia de color, pasa a negrita y el tamaño cambia a 20px. 
-Segundo  párrafo:  la  fuente  –tipo  de  letra-  cambia  de color, pasa a negrita y el tamaño cambia a 30px. 
-Tercer párrafo: la fuente –tipo de letra- cambia de color, pasa a negrita y el tamaño cambia a 40px. 
-Cuarto párrafo: la fuente –tipo de letra- cambia de color, pasa a negrita y el tamaño cambia a 50px */

let parrafo01 = document.getElementsByClassName("body")[0].firstElementChild;
parrafo01.style.color = "#05A8AA";
parrafo01.style.fontWeight = 'bold';
parrafo01.style.fontSize = "20px";

let parrafo02 = document.getElementsByTagName("p")[1];
parrafo02.style.color = "blue";
parrafo02.style.fontWeight = 'bold';
parrafo02.style.fontSize = "30px";

let parrafo03 = document.getElementsByTagName("p")[2];
parrafo03.style.color = "orange";
parrafo03.style.fontWeight = 'bold';
parrafo03.style.fontSize = "40px";

let parrafo04 = document.getElementsByTagName("p")[3];
parrafo04.style.color = "red";
parrafo04.style.fontWeight = 'bold';
parrafo04.style.fontSize = "50px";