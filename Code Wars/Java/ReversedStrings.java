public class ReversedStrings {

    //    Complete the function that accepts a string parameter,
    //    and reverses each word in the string. All spaces in the string should be retained.
    public static String reverseWords(String original) {
        String[] words = original.split(" ");
        StringBuilder reversedString = new StringBuilder();

        for (String word : words) {
            StringBuilder reversedWord = new StringBuilder(word).reverse();
            reversedString.append(reversedWord).append(" ");
        }

        return reversedString.toString().trim();
    }
}
