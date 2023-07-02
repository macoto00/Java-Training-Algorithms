function minCost(cost) {
    const top = cost.length;
    const dp = new Array(top + 1);

    dp[0] = 0;
    dp[1] = 0;

    for (let i = 2; i <= top; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }

    return dp[top];
}

const cost1 = [10, 15, 20];
const cost2 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
console.log(minCost(cost1));
console.log(minCost(cost2));
