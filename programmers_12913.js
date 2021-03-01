function solution(land) {
    let answer = 0; 
    let R = land.length;
    let C = 4;
    let dp = []

    for(let r=0; r<R; r++) {
        let arr = [];

        for(let c=0; c<C; c++)
            arr.push(0);

        dp.push(arr);
    }

    for(let r=0; r<R; r++) {
        for(let c=0; c<C; c++) {
            if(r===0) {
                dp[r][c] = land[r][c];
                continue;
            }

            let n = 0;

            for(let k=0; k<C; k++) {
                if(k===c) continue;

                if(dp[r-1][k] > n)
                    n = dp[r-1][k];
            }

            dp[r][c] = n + land[r][c];
        }
    }

    for(let c=0; c<C; c++)
        if(dp[R-1][c] > answer)
            answer = dp[R-1][c];
    
    return answer;
}