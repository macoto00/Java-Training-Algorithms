function longestCommonPrefix(strs) {
  if (strs === null || strs.length === 0) {
    return "";
  }

  let smallestString = strs[0];
  for (let i = 1; i < strs.length; i++) {
    if (strs[i].length < smallestString.length) {
      smallestString = strs[i];
    }
  }

  let result = "";
  for (let i = 0; i < smallestString.length; i++) {
    const currentChar = smallestString.charAt(i);
    for (let j = 0; j < strs.length; j++) {
      if (strs[j].charAt(i) !== currentChar) {
        return result;
      }
    }
    result += currentChar;
  }

  return result;
}

const strs = ["flower", "flow", "flight", "eflight", "aflant"];
const strs2 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs));
console.log(longestCommonPrefix(strs2));
