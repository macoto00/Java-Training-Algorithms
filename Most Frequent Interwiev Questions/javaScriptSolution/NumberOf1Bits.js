function numberOfOneBits(n) {
  let result = 0;
  while (n !== 0) {
    n &= (n - 1);
    result++;
  }
  return result;
}

console.log(numberOfOneBits(0b00000000000000000000000000001011));
console.log(numberOfOneBits(0b00000000000000000000000010000000));
console.log(numberOfOneBits(0b11111111111111111111111111111101));
