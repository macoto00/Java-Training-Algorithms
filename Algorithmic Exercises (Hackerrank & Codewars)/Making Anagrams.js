// https://www.hackerrank.com/challenges/ctci-making-anagrams/problem

// A student is taking a cryptography class and has found anagrams to be very useful. Two strings are anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency. For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

// The student decides on an encryption scheme that involves two large strings. The encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Determine this number.

// Given two strings,  and , that may or may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams. Any characters can be deleted from either of the strings.

// Example


// Delete  from  and  from  so that the remaining strings are  and  which are anagrams. This takes  character deletions.

// Function Description

// Complete the makeAnagram function in the editor below.

// makeAnagram has the following parameter(s):

// string a: a string
// string b: another string
// Returns

// int: the minimum total characters that must be deleted
// Input Format

// The first line contains a single string, .
// The second line contains a single string, .

// Constraints

// The strings  and  consist of lowercase English alphabetic letters, ascii[a-z].
// Sample Input

// cde
// abc
// Sample Output

// 4

function makeAnagram(a, b) {

    const charCount = {};

    for (let char of a) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    for (let char of b) {
        if (charCount[char]) {
            charCount[char]--;
        } else {
            charCount[char] = -1;
        }
    }

    let deletions = 0;

    for (let char in charCount) {
        deletions += Math.abs(charCount[char]);
    }

    return deletions;

}

// Example input (test)
const a = "cde";
const b = "abc";
const result = makeAnagram(a, b);
const expected = 4;

console.log(`Expected Result: ${expected}`);
console.log(`Calculated Result: ${result}`);
console.log(`Test Passed: ${expected === result}`);