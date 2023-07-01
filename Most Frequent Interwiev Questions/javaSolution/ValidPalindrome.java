package javaSolution;
/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
and removing all non-alphanumeric characters, it reads the same forward and backward.
Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
 */
public class ValidPalindrome {
    public static void main(String[] args) {
        String s = "A man, a plan, a canal: Panama";
        System.out.println(isPalindrome(s));
    }

    public static boolean isPalindrome(String s) {
        String clenaedString = s.toLowerCase().trim().replaceAll("[^a-zA-Z0-9]", "");

        for (int i = 0; i < clenaedString.length() / 2; i++) {
            if (clenaedString.charAt(i) != clenaedString.charAt(clenaedString.length() - 1 - i)) {
                return false;
            }
        }

        return true;

        /*

        or:

        // Get the reversed cleaned string
        String reversedCleanedString = new StringBuilder(cleanedString).reverse().toString();

        // Check if the cleaned string is a palindrome
        return cleanedString.equals(reversedCleanedString);

         */
    }
}
