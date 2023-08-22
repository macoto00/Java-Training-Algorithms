// Input matrix
const inputMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function transposeMatrix(matrix) {
    
    let length = matrix.length;
    let result = [];

    for (let i = 0; i < length; i++) {
        result[i] = [];
    }

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            result[j][i] = matrix[i][j];
        }
    }

    return result;
}

const transposedMatrix = transposeMatrix(inputMatrix);

// Expected output (transposed matrix)
// [
//     [1, 4, 7],
//     [2, 5, 8],
//     [3, 6, 9]
// ]

console.log(transposedMatrix);
