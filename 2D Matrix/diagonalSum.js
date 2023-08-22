function diagonalSum(matrix) {
    let rows = matrix.length;
    let columns = matrix[0].length;
    let sum = {
        primarySum: 0,
        secondarySum: 0
    };

    if (!isSquare(matrix)) {
        return "Matrix is not square";
    }

    for (let i = 0; i < rows; i++) {

        let primRowSum = 0;
        let secRowSum = 0;

        for (let j = 0; j < columns; j++) {
            if (i === j) {
                primRowSum += matrix[i][j];
            }
            if (j === columns - i - 1) {
                secRowSum += matrix[i][j];
            }
        };

        sum.primarySum += primRowSum;
        sum.secondarySum += secRowSum;
        
    }

    return sum;
}

function isSquare(matrix) {
    let arrLength = matrix.length;

    for (let arr of matrix) {
        if (arr.length !== arrLength) {
            return false;
        }
    }

    return true;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const sumResult = diagonalSum(matrix);
console.log(sumResult);
// Output:
// {
//     primarySum: 15,
//     secondarySum: 15
// }
