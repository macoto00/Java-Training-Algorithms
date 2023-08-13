// https://www.hackerrank.com/challenges/the-birthday-bar/problem

// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

// Lily decides to share a contiguous segment of the bar selected such that:

// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.

// Example



// Lily wants to find segments summing to Ron's birth day,  with a length equalling his birth month, . In this case, there are two segments meeting her criteria:  and .

// Function Description

// Complete the birthday function in the editor below.

// birthday has the following parameter(s):

// int s[n]: the numbers on each of the squares of chocolate
// int d: Ron's birth day
// int m: Ron's birth month
// Returns

// int: the number of ways the bar can be divided
// Input Format

// The first line contains an integer , the number of squares in the chocolate bar.
// The second line contains  space-separated integers , the numbers on the chocolate squares where .
// The third line contains two space-separated integers,  and , Ron's birth day and his birth month.

// Constraints

// , where ()
// Sample Input 0

// 5
// 1 2 1 3 2
// 3 2
// Sample Output 0

// 2

function birthday(s, d, m) {
    
    
    let ways = 0;

    for (let i = 0; i <= s.length - m; i++) {
        let segmentSum = 0;

        for (let j = i; j < i + m; j++) {
            segmentSum += s[j];
        }

        if (segmentSum === d) {
            ways++;
        }
    }

    return ways;

}

// tests

// Sample Input 0
const squares = [1, 2, 1, 3, 2];
const day = 3;
const month = 2;

console.log(birthday(squares, day, month)); // Output: 2

// Sample Input 1
const squares2 = [1, 1, 1, 1, 1, 1];
const day2 = 3;
const month2 = 2;

console.log(birthday(squares2, day2, month2)); // Output: 0

// Sample Input 2
const squares3 = [4];
const day3 = 4;
const month3 = 1;

console.log(birthday(squares3, day3, month3)); // Output: 1