function solution(n, results) {
    let answer = 0;
    let map = [];

    for(let row=0; row<=n; row++) {
        let arr = [];

        for(let col=0; col<=n; col++) {
            arr.push(false);
        }

        map.push(arr);
    }

    for(let i=0; i<results.length; i++) {
        let a = results[i][0];
        let b = results[i][1];

        map[a][b] = true;   // a > b를 만족한다(a가 b를 이겼단 의미).
    }

    // 플로이드 와샬 알고리즘 적용
    for(let k=1; k<=n; k++)
        for(let i=1; i<=n; i++)
            for(let j=1; j<=n; j++)
                if(map[i][k] && map[k][j])
                    map[i][j] = true;

    for(let i=1; i<=n; i++) {
        let cnt = 0;

        for(let j=1; j<=n; j++)
            if(!map[i][j] && !map[j][i])
                cnt++;
        
        if(cnt-1 === 0)
            answer++;
    }

    return answer;
}