function solution(sticker) {
    let answer = 0;
    let N = sticker.length;
    let dp1 = [];
    let dp2 = [];

    // 가장 작은 케이스들 처리
    if(N === 1) return sticker[0];

    if(N === 2) {
        if(sticker[0] > sticker[1]) return sticker[0];
        else return sticker[1];
    }

    // dp[0][i] :  뜯지 않는 경우, dp[1][i] : 뜯는 경우
    for(let i=0; i<2; i++) {
        let temp1 = [];
        let temp2 = [];

        for(let j=0; j<N; j++) {
            temp1.push(0);
            temp2.push(0);
        }

        dp1.push(temp1);
        dp2.push(temp2);
    }

    // 1. 첫 번째 스티커를 뜯는 경우를 계산한다.
    dp1[1][0] = sticker[0];

    for(let i=1; i<N; i++) {
        dp1[0][i] = Math.max(dp1[0][i-1], dp1[1][i-1]);

        dp1[1][i] = dp1[0][i-1] + sticker[i];
    }

    // 2. 첫 번째 스티커를 뜯지 않는 경우를 계산한다.
    for(let i=1; i<N; i++) {
        dp2[0][i] = Math.max(dp2[0][i-1], dp2[1][i-1]);

        dp2[1][i] = dp2[0][i-1] + sticker[i];
    }

    answer = Math.max(dp1[0][N-1], dp2[0][N-1], dp2[1][N-1]);

    return answer;
}