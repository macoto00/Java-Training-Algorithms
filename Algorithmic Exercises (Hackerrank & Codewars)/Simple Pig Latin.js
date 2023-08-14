// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {

    let strSplitted = str.split(" ");
    let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    let result = [];

    for (let word of strSplitted) {
        let newWord = "";

        if (!letters.includes(word[0])) {
            result.push(word);
        } else {
            let temp = word[0];
            newWord = word.slice(1) + temp + "ay";
            result.push(newWord);
        }
    }

    return result.join(' ');

}
