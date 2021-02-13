function solution(n) {
    var answer = 0;

    // 메모제이션을 위한 배열 선언
    const dp = [];

    // 가장 작은 자명한 해는 바로 도출 가능하다.
    dp[1] = 1;
    dp[2] = 2;

    if(n===1 || n===2)
        return dp[n];
    
    for(let i=3; i<=n; i++)
        dp[i] = (dp[i-1]%1000000007) + (dp[i-2]%1000000007);
    
    answer = (dp[n]%1000000007);

    return answer;
}