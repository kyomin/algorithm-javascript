class MyQueue {           // Queue 자료구조 클래스 정의
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

var numIslands = function(grid) {
    let dr = [0, 0, 1, -1];
    let dc = [1, -1, 0, 0];

    let check = [];
    let R = grid.length;
    let C = grid[0].length;

    for(let r=0; r<R; r++) {
        let temp = [];

        for(let c=0; c<C; c++)
            temp.push(false);

        check.push(temp);
    }

    function isInside(r, c) {
        if(0<=r && r<R && 0<=c && c<C)
            return true;
        
        return false;
    }

    function bfs(r, c) {
        let q = new MyQueue();
        q.push({
            r,
            c
        });

        check[r][c] = true;

        while(!q.empty()) {
            r = q.front().r;
            c = q.front().c;

            q.pop();

            // 상하좌우 탐색
            for(let k=0; k<4; k++) {
                let nr = r+dr[k];
                let nc = c+dc[k];

                // 범위를 벗어난 경우
                if(!isInside(nr, nc))
                    continue;

                // 이미 방문한 경우
                if(check[nr][nc])
                    continue;
                
                // 육지가 아닌 경우
                if(grid[nr][nc] === '0')
                    continue;

                q.push({
                    'r': nr,
                    'c': nc
                });

                check[nr][nc] = true;
            }
        }
    }

    let ans = 0;

    for(let r=0; r<R; r++) {
        for(let c=0; c<C; c++) {
            if(grid[r][c] === '1' && !check[r][c]) {
                bfs(r, c);
                ans++;
            }
        }
    }

    return ans;
};