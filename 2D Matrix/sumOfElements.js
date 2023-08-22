function calculateMatrixSum(matrix) {

    let sum = 0;
    let rows = matrix.length;
    let columns = matrix[0].length;

    for (let i = 0; i < rows; i++) {

        let rowSum = 0;

        for (let j = 0; j < columns; j++) {
            rowSum += matrix[i][j];
        }

        sum += rowSum;
    }

    return sum;

}

const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const matrix2 = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

const matrix3 = [
    [2, 4],
    [6, 8]
];

const sum1 = calculateMatrixSum(matrix1);
console.log(sum1); // Expected output: 45

const sum2 = calculateMatrixSum(matrix2);
console.log(sum2); // Expected output: 450

const sum3 = calculateMatrixSum(matrix3);
console.log(sum3); // Expected output: 20
