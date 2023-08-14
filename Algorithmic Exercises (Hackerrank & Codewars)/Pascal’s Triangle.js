// https://www.codewars.com/kata/5226eb40316b56c8d500030f/train/javascript

// In mathematics, Pascal's triangle is a triangular array of the binomial coefficients expressed with formula

// where n denotes a row of the triangle, and k is a position of a term in the row.

// Pascal's Triangle

// You can read Wikipedia article on Pascal's Triangle for more information.

// Task
// Write a function that, given a depth n, returns n top rows of Pascal's Triangle flattened into a one-dimensional list/array.

// Example:
// n = 1: [1]
// n = 2: [1,  1, 1]
// n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]
// Note
// Beware of overflow. Requested terms of a triangle are guaranteed to fit into the returned type, but depending on selected method of calculations, intermediate values can be larger.

function pascalsTriangle(n) {

    if (n <= 0) {
        return [];
    }

    const triangle = [[1]];
    for (let i = 1; i < n; i++) {
        const row = [1];
        for (let j = 1; j <= i; j++) {
            const prevRow = triangle[i - 1];
            const value = (prevRow[j - 1] || 0) + (prevRow[j] || 0);
            row.push(value);
        }
        triangle.push(row);
    }

    return triangle.flat();

}