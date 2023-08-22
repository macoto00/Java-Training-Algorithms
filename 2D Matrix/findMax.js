function findMax(matrix) {
    
    let max = 0;

    for (let row of matrix) {
        let rowMax = 0;
        for (let num of row) {
            if (num > rowMax) 
            rowMax = num;
        };
        max = rowMax;
    }

    return max;

}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const maxElement = findMax(matrix);
console.log(maxElement);
// Output: 9
