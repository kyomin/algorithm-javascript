function solution(dirs) {
    let answer = 0;
    let move = {
        U: [0, 1],
        D: [0, -1],
        R: [1, 0],
        L: [-1, 0]
    };

    let start = {
        x: 0,
        y: 0
    };

    let paths = [];     // 이미 지나간 경로들을 담는다.

    function isInside(x, y) {
        if(-5<=x && x<=5 && -5<=y && y<=5)
            return true;
        
        return false;
    }

    function isExistingPath(s, e) {
        let is_existing_path = false;

        for(let i=0; i<paths.length; i++) {
            let path = paths[i];
            let existing_start = path.start;
            let existing_end = path.end;

            if(s.x === existing_start.x && s.y === existing_start.y && e.x === existing_end.x && e.y === existing_end.y) {
                is_existing_path = true;
                break;
            }
        }

        return is_existing_path;
    }

    for(let i=0; i<dirs.length; i++) {
        let dir = dirs[i];
        let x = start.x;
        let y = start.y;

        let dx, dy;
        [dx, dy] = move[dir];

        let nx = x + dx;
        let ny = y + dy;

        // 끝점
        let end = {
            x: nx,
            y: ny
        };

        // 범위 내에 없다면 skip!
        if(!isInside(nx, ny)) continue;

        // 처음 만드는 경로라면 paths에 추가!
        if(!isExistingPath(start, end)) {   
            paths.push({
                start,
                end
            });
            answer += 1;

            // 서로 시작, 끝점이 반대되는 것도 같은 경로이므로!
            if(!isExistingPath(end, start)) {
                paths.push({
                    start: end,
                    end: start
                });
            }
        }

        start = end;    
    }

    return answer;
}