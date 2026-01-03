function solution(n) {
    // 0: 아래, 1: 오른쪽, 2: 왼쪽 대각선 위
    const dr = [1, 0, -1];
    const dc = [0, 1, -1];
    
    let answer = [];
    let R = n;
    let C = n;
    let dp = [];

    // 2차원 배열 만들기!
    for(let r=0; r<R; r++) {
        let row = [];

        for(let c=0; c<C; c++)
            row.push(0);
        
        dp.push(row);
    }
    
    function isInside(r, c) {
        if(0<=r && r<R && 0<=c && c<C)
            return true;

        return false;
    }

    // 가장 작은 해 처리
    if(n === 1) return [1];

    let dir = 0;    // 처음 방향은 아래로
    let r = 0;
    let c = 0;
    dp[r][c] = 1;

    while(true) {
        let nr = r + dr[dir];
        let nc = c + dc[dir];

        // 이미 방문한 곳이거나 범위를 벗어나면 방향을 튼다.
        if(!isInside(nr, nc) || dp[nr][nc] !== 0) {
            dir += 1;

            if(dir > 2) dir = 0;

            // 만일 방향을 틀었는데, 이미 방문한 곳이라면 다 채운 것이다.
            nr = r + dr[dir];
            nc = c + dc[dir];

            if(dp[nr][nc] !== 0) break;

            dp[nr][nc] = dp[r][c] + 1;
            r = nr;
            c = nc;

            continue;
        }

        dp[nr][nc] = dp[r][c] + 1;
        r = nr;
        c = nc;
    }

    for(let r=0; r<R; r++)
        for(let c=0; c<C; c++)
            if(dp[r][c] !== 0)
                answer.push(dp[r][c]);
    
    return answer;
}