/* Ejercicio 07. Implementa en un script la función o funciones que necesites para que 
mediante prompt() se le pida al usuario introduzca una palabra o frase y le responda por 
pantalla si esa palabra es un palíndromo. No se podrá utilizar la función reverse(). 
Nota: Palíndromo: palabra o frase que se lee igual de atrás hacia adelante. 
Ejemplos: ‘Ana’. ‘Otto’. ‘Dábale arroz a la zorra el abad’. */

function question7() {
    let original = prompt("Indique una palabra o frase");
    isPalindrome(original);
}


function isPalindrome(original) {

    //Crea string
    let sentence = original.toLowerCase().split(" ").join("");

    //Sustituye vocales con acento en el string
    let vocals = ["a", "e", "i", "o", "u"];
    let accentVocals = ["á", "é", "í", "ó", "ú"];
    for (let i = 0; i < vocals.length; i++) {
        sentence = sentence.replace(accentVocals[i], vocals[i]);
    }

    //Crea string invertido y lo compara
    let arrayTextReverse = [];
    for (let i = 0; i < sentence.length; i++) {
        arrayTextReverse.unshift(sentence.charAt(i));
    }

    let reverseSentence = arrayTextReverse.toString();
    reverseSentence = reverseSentence.split(",").join("");
    reverseSentence = reverseSentence.split(" ").join("");

    if (sentence === reverseSentence) {
        alert(original + "\nEs palíndromo");
    } else {
        alert(original + "\nNo es palíndromo");
    }
}