function fibonacci(index) {
    if (index < 0) {
        return 0;
    } else if (index < 2) {
        return index;
    } else {
        return fibonacci(index - 1) + fibonacci(index - 2);
    }
}

const input1 = 2;
const input2 = 3;
const input3 = 4;
const input4 = 5;

console.log(fibonacci(input1));
console.log(fibonacci(input2));
console.log(fibonacci(input3));
console.log(fibonacci(input4));
