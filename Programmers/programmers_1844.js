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

function solution(maps) {
    const dr = [0, 0, 1, -1];
    const dc = [1, -1, 0, 0];
    const R = maps.length;
    const C = maps[0].length;

    let q = new Queue();    // BFS를 위한 큐 정의
    let dist = [];
    let check = [];
    let answer = 0;

    function isInside(r, c) {
        if(0<=r && r<R && 0<=c && c<C)
            return true;
        
        return false;
    }

    for(let r=0; r<R; r++) {
        let temp1 = [];
        let temp2 = [];

        for(let c=0; c<C; c++) {
            temp1.push(0);
            temp2.push(false);
        }
        
        dist.push(temp1);
        check.push(temp2);
    }

    // 시작 점에 대한 작업!
    q.push({
        'r': 0,
        'c': 0
    });
    check[0][0] = true;
    dist[0][0] = 1;

    // 탐색 시작!
    while(!q.empty()) {
        let r = q.front()['r'];
        let c = q.front()['c'];

        q.pop();

        for(let k=0; k<4; k++) {
            let nr = r + dr[k];
            let nc = c + dc[k];

            // 범위를 벗어난다면
            if(!isInside(nr, nc))
                continue;
            
            // 이미 방문했다면
            if(check[nr][nc])
                continue;
            
            // 벽이라면
            if(maps[nr][nc] === 0)
                continue;
            
            // 위의 조건들을 통과했다면 다음으로 탐색이 가능한 것이다.
            q.push({
                'r': nr,
                'c': nc
            });
            dist[nr][nc] = dist[r][c] + 1;
            check[nr][nc] = true;
        }
    }

    if(dist[R-1][C-1] === 0)    // 끝에 도달하지 못한 경우
        return -1;

    return dist[R-1][C-1];
}