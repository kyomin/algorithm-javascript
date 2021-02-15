function solution(n, computers) {
    let answer = 0;
    let a = [];             // 인접리스트
    let check = [];         // 방문 체크
    
    // 리스트 초기화
    for(let i=0; i<n; i++){
        a.push([]);
        check.push(false);
    }
    
    function dfs(node) {
        check[node] = true;
    
        for(let i=0; i<a[node].length; i++){
            const next = a[node][i];
    
            if(check[next]===false)
                dfs(next);
        }
    }

    // 연결 관계를 인접리스트에 입력
    for(let i=0; i<n; i++) {
        for(let j=0; j<n; j++) {
            if(i===j) continue;

            if(computers[i][j] === 1) a[i].push(j);
        }
    }

    // 연결요소의 개수가 곧 네트워크의 개수이다.
    for(let i=0; i<n; i++){
        if(check[i]===false) {
            dfs(i);
            answer+=1;
        }
    }

    return answer;
}