function solution(n) {
    let dp = [];

    dp[0] = 0;
    dp[1] = 1;

    for(let i=2; i<=n; i++)
        dp[i] = ((dp[i - 1] % 1234567) + (dp[i - 2] % 1234567)) % 1234567;

    return dp[n] % 1234567;
}