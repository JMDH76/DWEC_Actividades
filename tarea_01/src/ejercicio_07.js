function question7() {
    let original = prompt("Indique una palabra o frase");
    let sentence = original.toLowerCase();
    isPalindrome(sentence, original);
}


function isPalindrome(sentence, original) {

    let arrayText = Array.from(sentence);
    let arrayTextReverse = [];
    let text = sentence.split(" ").join("");
  
    for (let i = 0; i < arrayText.length; i++) {
        arrayTextReverse.unshift(arrayText[i]);
    }
    let textReverse = arrayTextReverse.toString();
    textReverse = textReverse.split(",").join("");
    textReverse = textReverse.split(" ").join("");

    if (text === textReverse) {
        alert(original + "\nEs palíndromo");
    } else {
        alert(original + "\nNo es palíndromo");
    }
}