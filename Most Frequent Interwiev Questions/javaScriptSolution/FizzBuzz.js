function fizzBuzz(number) {
    let resultArray = new Array(number);

    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            resultArray[i - 1] = "java.FizzBuzz";
        } else if (i % 3 === 0) {
            resultArray[i - 1] = "Fizz";
        } else if (i % 5 === 0) {
            resultArray[i - 1] = "Buzz";
        } else {
            resultArray[i - 1] = i.toString();
        }
    }

    return resultArray;
}

console.log(fizzBuzz(30));
