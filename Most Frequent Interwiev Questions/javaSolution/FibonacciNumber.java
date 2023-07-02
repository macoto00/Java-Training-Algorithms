package javaSolution;
/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.

Given n, calculate F(n).
 */
public class FibonacciNumber {
    public static void main(String[] args) {
        int input1 = 2;
        int input2 = 3;
        int input3 = 4;
        int input4 = 5;

        System.out.println(fibonacci(input1));
        System.out.println(fibonacci(input2));
        System.out.println(fibonacci(input3));
        System.out.println(fibonacci(input4));
    }

    public static int fibonacci(int index) {
        if (index < 0) {
            return 0;
        } else if (index < 2) {
            return index;
        } else {
            return fibonacci(index - 1) + fibonacci(index - 2);
        }
    }
}
