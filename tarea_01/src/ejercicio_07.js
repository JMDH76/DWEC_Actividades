function question7() {
    let original = prompt("Indique una palabra o frase");
    isPalindrome(original);
}


function isPalindrome(original) {

    let vocals = ["a", "e", "i", "o", "u"];
    let accentVocals = ["á", "é", "í", "ó", "ú"];

    let sentence = original.toLowerCase().split(" ").join("");

    //Quita acentos de las vocales
    for (let i = 0; i < vocals.length; i++) {
        sentence = sentence.replace(accentVocals[i], vocals[i]);
    }

    let arrayTextReverse = [];
    for (let i = 0; i < sentence.length; i++) {
        arrayTextReverse.unshift(sentence.charAt(i));
    }

    let textReverse = arrayTextReverse.toString();
    textReverse = textReverse.split(",").join("");
    textReverse = textReverse.split(" ").join("");


    if (sentence === textReverse) {
        alert(original + "\nEs palíndromo");
    } else {
        alert(original + "\nNo es palíndromo");
    }
}