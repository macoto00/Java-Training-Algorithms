package javaSolution;
/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct
ways can you climb to the top?
 */
public class ClimbingStairs {
    public static void main(String[] args) {
        System.out.println(counterWays(2));
        System.out.println(counterWays(3));
        System.out.println(counterWays(6));
    }

    public static int counterWays(int number) {
        if (number <= 0) {
            return 0;
        } else if (number == 1) {
            return 1;
        } else if (number == 2) {
            return 2;
        } else {
            int[] ways = new int[number + 1];
            ways[0] = 0;
            ways[1] = 1;
            ways[2] = 2;
            for (int i = 3; i <= number; i++) {
                ways[i] = ways[i - 1] + ways[i - 2];
            }
            return ways[number];
        }
    }
}
