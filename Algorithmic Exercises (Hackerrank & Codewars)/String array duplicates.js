// https://www.codewars.com/kata/59f08f89a5e129c543000069

// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra", "allottee", "assessee"]) = ["abracadabra", "alote", "asese"].

//     dup(["kelless", "keenness"]) = ["keles", "kenes"].

// Strings will be lowercase only, no spaces.See test cases for more examples.

function dup(s) {

    let result = [];

    for (let word of s) {
        let prevChar = word[0];
        let newWord = prevChar;

        for (let i = 1; i < word.length; i++) {
            if (word[i] !== prevChar) {
                newWord += word[i];
                prevChar = word[i];
            }
        }

        result.push(newWord);
    }

    return result;

}