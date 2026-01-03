function solution(N, road, K) {
    const INF = Math.pow(10, 9);    // 절대 나올 수 없는 경로 값

    let answer = 0;
    let dist = [];

    // dist 배열 설정. 일단 자기 자신은 0, 나머지는 INF로 초기화
    for(let i=1; i<=N; i++) {
        let temp = [];

        for(let j=1; j<=N; j++) {
            if(i === j) temp[j] = 0;
            else temp[j] = INF;
        }
        
        dist[i] = temp;
    }

    // 간선 정보 입력!
    for(let i=0; i<road.length; i++) {
        let a, b, c;
        [a, b, c] = road[i];

        dist[a][b] = Math.min(dist[a][b], c);
        dist[b][a] = Math.min(dist[b][a], c);
    }
    
    // 플로이드 와샬 알고리즘 적용
    for(let k=1; k<=N; k++)
        for(let i=1; i<=N; i++)
            for(let j=1; j<=N; j++)
                dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);

    // 이제 dist 배열은 실제 최단 경로를 담고 있다.
    for(let col=1; col<=N; col++)
        if(dist[1][col] <= K)
            answer+=1;

    return answer;
}