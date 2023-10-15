//Crea div con atributo 'class = header' para formato y lo oculta. 
let footer = document.createElement('div');
footer.setAttribute('class', 'header');
footer.style.display = 'none';

//Crea h1 y lo coloca dentro del div
let footerContent = document.createElement('h1');
footerContent.textContent = 'Contacto';
footer.appendChild(footerContent);

//Coloca el div al final del body
let body = document.getElementsByTagName('body')[0];
body.appendChild(footer);



