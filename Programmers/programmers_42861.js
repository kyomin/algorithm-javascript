function solution(n, costs) {
    let answer = 0;

    let parent = [];
    let e = [];

    // parent 배열을 자기 자신 인덱스를 root로 초기화
    for(let i=0; i<n; i++)
        parent.push(i);
    
    // 간선 정보 입력 받음
    for(let i=0; i<costs.length; i++){
        e.push({
            u: costs[i][0],
            v: costs[i][1],
            w: costs[i][2]
        });
    }

    // 간선을 가중치 기준으로 오름차순 정렬하는 비교 함수
    function comp(edge1, edge2) {
        if(edge1.w < edge2.w) return -1;
        if(edge1.w === edge2.w) return 0;
        if(edge1.w > edge2.w) return 1;
    }

    // Find(x) : x로 들어온 원소의 root 노드를 반환
    function Find(x) {
        // root인 경우 x를 반환
        if(x === parent[x]) return x;

        // 아니면 root를 찾아감
        let p = Find(parent[x]);
        parent[x] = p;

        return p;
    }

    // Union(x, y) : x원소와 y원소를 합치는 함수로 y의 root 노드를 x로 한다.
    function Union(x, y) {
        x = Find(x);
        y = Find(y);

        if(x !== y) {
            parent[y] = x;
            return true;
        }

        return false;
    }

    // 간선을 가중치 기준으로 오름차순 정렬
    e.sort(comp);

    let cnt = 0;    // 뽑은 간선 수
    let idx = 0;    // 간선 인덱스

    while(true) {
        if(Union(e[idx].u, e[idx].v)) {
            answer += e[idx].w;
            cnt++;

            // n-1개의 간선을 뽑으면 작업 끝!
            if(cnt === n-1) break;
        }

        idx++;
    }

    return answer;
}