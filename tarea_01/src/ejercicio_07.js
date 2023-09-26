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