function reverseString(s) {
  let length = s.length;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    let temp = s[i];
    s[i] = s[length - 1 - i];
    s[length - 1 - i] = temp;
  }
}

let s1 = ['h', 'e', 'l', 'l', 'o'];
reverseString(s1);
console.log(s1);

let s2 = ['H', 'a', 'n', 'n', 'a', 'h'];
reverseString(s2);
console.log(s2);
