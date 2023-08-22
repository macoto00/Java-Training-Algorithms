function calculateAverageGrades(gradesArray) {

    let avgGrades = [];

    for (let row of gradesArray) {
        let rowAvg = 0;
        let rowSum = 0
        for (let grade of row) {
            rowSum += grade; 
        }
        rowAvg = rowSum / row.length;
        avgGrades.push(rowAvg);
    }

    return avgGrades;

}

const studentGrades = [
    [85, 90, 78, 92],
    [76, 88, 90, 81],
    [92, 78, 85, 89]
];

const averageGrades = calculateAverageGrades(studentGrades);
console.log(averageGrades);
// Output: [86.25, 83.75, 86.0]
