function counterWays(number) {
  if (number <= 0) {
    return 0;
  } else if (number === 1) {
    return 1;
  } else if (number === 2) {
    return 2;
  } else {
    let ways = new Array(number + 1);
    ways[0] = 0;
    ways[1] = 1;
    ways[2] = 2;
    for (let i = 3; i <= number; i++) {
      ways[i] = ways[i - 1] + ways[i - 2];
    }
    return ways[number];
  }
}

console.log(counterWays(2));
console.log(counterWays(3));
console.log(counterWays(5));
