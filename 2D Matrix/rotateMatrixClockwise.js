
function rotateMatrixClockwise(matrix) {
    let length = matrix.length;
    let result = [];

    for (let i = 0; i < length; i++) {
        result[i] = [];

        for (let j = length - 1; j >= 0; j--) {
            result[i].push(matrix[j][i]);
        }
    }

    return result;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const rotatedMatrix = rotateMatrixClockwise(matrix);
console.log(rotatedMatrix);
  /* Output:
[
   [7, 4, 1],
   [8, 5, 2],
   [9, 6, 3]
]
*/
