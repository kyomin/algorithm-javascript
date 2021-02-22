class Queue {           // Queue 자료구조 클래스 정의
    constructor() {
        this.arr = [];
        this.length = 0;
    }

    push(element) {
        this.arr.unshift(element);
        this.length += 1;
    }

    pop() {
        this.arr.pop();
        this.length -= 1;
    }

    empty() {
        if(this.arr.length === 0) return true;
        else return false;
    }

    front() {
        return this.arr[this.length-1];
    }
}

function solution(n, edge) {
    let answer = 0;
    let a = [];         // 인접 리스트
    let check = [];     // 방문 여부 체크
    let depth = [];     // 깊이 여부 체크

    // 배열들 초기화. 노드 번호는 1부터 시작하므로 n+1만큼 크기를 잡아준다.
    for(let i=0; i<=n; i++) {
        a.push([]);
        check.push(false);
        depth.push(0);
    }

    // 인접리스트 초기화
    for(let i=0; i<edge.length; i++) {
        let u = edge[i][0];
        let v = edge[i][1];

        a[u].push(v);
        a[v].push(u);
    }

    function bfs(node) {
        let q = new Queue();

        // 방문 체크!
        check[node] = true;
        q.push(node);

        while(!q.empty()) {
            let cur_node = q.front();
            q.pop();
            
            for(let i=0; i<a[cur_node].length; i++) {
                let next_node = a[cur_node][i];

                // 다음 노드가 이미 방문을 했다면
                if(check[next_node]) continue;

                // 깊이 체크!
                depth[next_node] = depth[cur_node] + 1;

                // 방문 체크!
                check[next_node] = true;

                q.push(next_node);
            }
        }
    }

    // 1번 노드가 기준이므로 1번 노드부터!
    bfs(1);

    let max_depth = depth[1];

    for(let i=2; i<=n; i++) {
        if(depth[i] > max_depth) max_depth = depth[i];
    }

    for(let i=1; i<=n; i++) {
        if(depth[i] === max_depth) answer++;
    }

    return answer;
}