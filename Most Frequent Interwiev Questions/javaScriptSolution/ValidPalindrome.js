function isPalindrome(s) {
    const cleanedString = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    for (let i = 0; i < Math.floor(cleanedString.length / 2); i++) {
        if (cleanedString[i] !== cleanedString[cleanedString.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

const s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));
