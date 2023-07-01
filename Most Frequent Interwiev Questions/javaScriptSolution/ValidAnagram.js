function isAnagram(one, two) {
    if (one.length !== two.length) {
        return false;
    }

    let firstArray = Array.from(one);
    let secondArray = Array.from(two);

    firstArray.sort();
    secondArray.sort();

    return firstArray.every((char, index) => char === secondArray[index]);
}

let firstWord = "anagram";
let secondWord = "nagaram";
console.log(isAnagram(firstWord, secondWord));
