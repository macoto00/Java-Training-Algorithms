package javaSolution;

import java.util.Arrays;

/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
 */
public class LongestCommonPrefix {
    public static void main(String[] args) {
        String[] strs = {"flower","flow","flight", "eflight", "aflant"};
        String[] strs2 = {"dog","racecar","car"};
        System.out.println(longestCommonPrefix(strs));
        System.out.println(longestCommonPrefix(strs2));
    }

    public static String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0) {
            return "";
        }

        String smallestString = strs[0];
        for (String str : strs) {
            if (str.length() < smallestString.length()) {
                smallestString = str;
            }
        }

        StringBuilder result = new StringBuilder();
        for (int i = 0; i < smallestString.length(); i++) {
            char currentChar = smallestString.charAt(i);
            for (String str : strs) {
                if (str.charAt(i) != currentChar) {
                    return result.toString();
                }
            }
            result.append(currentChar);
        }

        return result.toString();
    }
}
