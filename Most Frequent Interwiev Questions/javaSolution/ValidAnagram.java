package javaSolution;

import java.util.Arrays;
/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.
 */

public class ValidAnagram {
    public static void main(String[] args) {
        String firstWord = "anagram";
        String secondWord = "nagaram";
        System.out.println(isAnagram(firstWord, secondWord));
    }

    public static boolean isAnagram(String one, String two) {
        if (one.length() != two.length()) {
            return false;
        }

        char[] firstArray = one.toCharArray();
        char[] secondArray = two.toCharArray();

        Arrays.sort(firstArray);
        Arrays.sort(secondArray);

        return Arrays.equals(firstArray, secondArray);
    }
}
