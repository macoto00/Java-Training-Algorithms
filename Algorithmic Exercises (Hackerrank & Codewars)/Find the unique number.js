// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {

    // let firstChar = arr[0];
    // let unique = arr[0];

    // for (let i = 1; i < arr.length; i++) {
    //     if (arr[i] !== firstChar && arr[i] === arr[i + 1]) {
    //         unique = firstChar;
    //         break;
    //     } else if (arr[i] !== firstChar) {
    //         unique = arr[i];
    //         break;
    //     }
    // }

    // return unique;

    let unique;

    if (arr[0] !== arr[1] && arr[1] === arr[2]) {
        unique = arr[0];
    } else {
        unique = arr.find(num => num !== arr[0])
    }

    return unique;

}