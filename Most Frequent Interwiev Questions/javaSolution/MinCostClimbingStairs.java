package javaSolution;

/*
You are given an integer array cost where cost[i] is the
cost of ith step on a staircase. Once you pay the cost,
you can either climb one or two steps.

You can either start from the step with index 0, or the
step with index 1.

Return the minimum cost to reach the top of the floor.
 */
public class MinCostClimbingStairs {
    public static void main(String[] args) {
        int[] cost1 = {10, 15, 20};
        int[] cost2 = {1, 100, 1, 1, 1, 100, 1, 1, 100, 1};
        System.out.println(minCost(cost1));
        System.out.println(minCost(cost2));
    }

    public static int minCost(int[] cost) {
        int top = cost.length;
        int[] dp = new int[top + 1];

        dp[0] = 0;
        dp[1] = 0;

        for (int i = 2; i <= top; i++) {
            dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
        }

        return dp[top];
    }
}
