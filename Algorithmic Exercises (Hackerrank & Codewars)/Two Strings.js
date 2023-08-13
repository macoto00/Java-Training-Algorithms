// https://www.hackerrank.com/challenges/two-strings/problem

// Given two strings, determine if they share a common substring. A substring may be as small as one character.

// Example


// These share the common substring .



// These do not share a substring.

// Function Description

// Complete the function twoStrings in the editor below.

// twoStrings has the following parameter(s):

// string s1: a string
// string s2: another string
// Returns

// string: either YES or NO
// Input Format

// The first line contains a single integer , the number of test cases.

// The following  pairs of lines are as follows:

// The first line contains string .
// The second line contains string .
// Constraints

//  and  consist of characters in the range ascii[a-z].
// Output Format

// For each pair of strings, return YES or NO.

// Sample Input

// 2
// hello
// world
// hi
// world
// Sample Output

// YES
// NO

function twoStrings(s1, s2) {
    
    for (let char of s1) {
        if (s2.includes(char)) {
            return "YES";
        }
    }

    return "NO";
}

function testTwoStrings() {
    // Test case 1: Expected "YES" case
    const result1 = twoStrings("hello", "world");
    console.log(`Test case 1: Expected "YES", Got: ${result1}`);
    console.log(`Test case 1 passed: ${result1 === "YES"}`);
    
    // Test case 2: Expected "NO" case
    const result2 = twoStrings("hi", "world");
    console.log(`Test case 2: Expected "NO", Got: ${result2}`);
    console.log(`Test case 2 passed: ${result2 === "NO"}`);
}

testTwoStrings();