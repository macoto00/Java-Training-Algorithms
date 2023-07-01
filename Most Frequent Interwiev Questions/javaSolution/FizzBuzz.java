package javaSolution;

import java.util.Arrays;

/*
Given an integer n, return a string array answer (1-indexed) where:

    answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
    answer[i] == "Fizz" if i is divisible by 3.
    answer[i] == "Buzz" if i is divisible by 5.
    answer[i] == i (as a string) if none of the above conditions are true.

 */

public class FizzBuzz {
    public static void main(String[] args) {
        System.out.println(Arrays.toString(fizzBuzz(30)));
    }

    public static String[] fizzBuzz(int number) {
        String[] resultArray = new String[number];

        for (int i = 1; i <= number; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                resultArray[i - 1] = "java.FizzBuzz";
            } else if (i % 3 == 0) {
                resultArray[i - 1] = "Fizz";
            } else if (i % 5 == 0) {
                resultArray[i - 1] = "Buzz";
            } else {
                resultArray[i - 1] = String.valueOf(i);
            }
        }

        return resultArray;
    }
}
