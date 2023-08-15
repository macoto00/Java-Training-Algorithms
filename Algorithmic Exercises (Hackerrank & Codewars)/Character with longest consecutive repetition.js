// https://www.codewars.com/kata/586d6cefbcc21eed7a001155

// For a given string s find the character c (or C) with longest consecutive repetition and return:

// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

// For empty string return:

// ["", 0]

function longestRepetition(s) {
  
    let result = ["", 0];

    if (s.length > 0) { 

        let actualChar = "";
        let actualCounter = 0;
        let mostChar = "";
        let mostCount = 0;

        for (let i = 0; i < s.length; i++) {
            actualChar = s[i]; 
            actualCounter = 1; 

            while (i + 1 < s.length && s[i] === s[i + 1]) {
                actualCounter++;
                i++; 
            }

            if (actualCounter > mostCount) {
                mostChar = actualChar;
                mostCount = actualCounter;
            }
        }

        result = [mostChar, mostCount]; 
    }

    return result;
  
}