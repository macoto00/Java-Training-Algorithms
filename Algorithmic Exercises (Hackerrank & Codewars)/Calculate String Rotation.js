// https://www.codewars.com/kata/5596f6e9529e9ab6fb000014/train/javascript

// Write a function that receives two strings and returns n, where n is equal to the number of characters we should shift the first string forward to match the second. The check should be case sensitive.

// For instance, take the strings "fatigue" and "tiguefa". In this case, the first string has been rotated 5 characters forward to produce the second string, so 5 would be returned.

// If the second string isn't a valid rotation of the first string, the method returns -1.
// Examples:
// "coffee", "eecoff" => 2
// "eecoff", "coffee" => 4
// "moose", "Moose" => -1
// "isn't", "'tisn" => 2
// "Esham", "Esham" => 0
// "dog", "god" => -1

function shiftedDiff(first, second) {

    const firstSplitted = first.split("");
    const secondSplitted = second.split("");
    let rotated = 0;

    firstSorted = firstSplitted.sort();
    secondSorted = secondSplitted.sort();

    if (firstSorted.length !== secondSorted.length || !hasSameChars(firstSorted, secondSorted)) {
        rotated = -1;
        return rotated;
    }

    for (let i = 0; i < firstSplitted.length; i++) {
        if (firstSplitted[i] == secondSplitted[i]) {
            return rotated;
        } else {
            let temp = secondSplitted[i];
            secondSplitted[i].shift;
            secondSplitted.pop(temp);
            rotated++;
        }
    }

    return rotated;

}

function hasSameChars(first, second) {

    for (let i = 0; i < first.length; i++) {
        if (!first[i] === second[i]) {
            return false;
        }
    }

    return true;
}