// You are given a string containing characters  and  only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.

// Your task is to find the minimum number of required deletions.

// Example

// Remove an  at positions  and  to make  in  deletions.

// Function Description

// Complete the alternatingCharacters function in the editor below.

// alternatingCharacters has the following parameter(s):

// string s: a string
// Returns

// int: the minimum number of deletions required
// Input Format

// The first line contains an integer , the number of queries.
// The next  lines each contain a string  to analyze.

// Constraints

// Each string  will consist only of characters  and .
// Sample Input

// 5
// AAAA
// BBBBB
// ABABABAB
// BABABA
// AAABBB
// Sample Output

// 3
// 4
// 0
// 0
// 4

function alternatingCharacters(s) {

    let deletions = 0;
    let prevChar = s[0];

    for (let i = 1; i < s.length; i++) {
        if (s[i] === prevChar) {
            deletions++;
        } else {
            prevChar = s[i];
        }
    }

    return deletions;

}

// test

const testInput = [
    "AAAA",
    "BBBBB",
    "ABABABAB",
    "BABABA",
    "AAABBB"
];

const expectedResult = [3, 4, 0, 0, 4];
const calculatedResult = testInput.map(input => alternatingCharacters(input));

console.log(`Expected Result: ${expectedResult}`);
console.log(`Calculated Result: ${calculatedResult}`);
console.log(`Tests Passed: ${JSON.stringify(expectedResult) === JSON.stringify(calculatedResult)}`);