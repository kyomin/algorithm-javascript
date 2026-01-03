function solution(m, n, board) {
    let answer = 0;
    let copy_board = [];

    // 편의를 위해 새로운 변수에 셋팅
    let R = m;
    let C = n;

    // copy A to B
    function copyArr(A, B) {
        for(let r=0; r<R; r++)
            for(let c=0; c<C; c++)
                B[r][c] = A[r][c];
    }

    for(let r=0; r<R; r++) {
        let temp = [];

        for(let c=0; c<C; c++)
            temp.push(0);
        
        copy_board.push(temp);
    }

    // board의 배열화
    for(let r=0; r<R; r++)
        board[r] = board[r].split('');

    // board -> copy_board
    copyArr(board, copy_board);
    
    while(true) {
        let isItTarget = false;     // 지워질 타겟들이 있는가?

        for(let r=0; r<R; r++) {
            if(r+1 >= R) 
                continue;

            for(let c=0; c<C; c++) {
                if(c+1 >= C)
                    continue;

                // 빈 공간일 경우 패스!
                if(board[r][c] === 0)
                    continue;
                
                let cur_block = board[r][c];
                let right_block = board[r][c+1];
                let bottom_block = board[r+1][c];
                let diagonal_block = board[r+1][c+1];

                let s = new Set([cur_block, right_block, bottom_block, diagonal_block]);

                // 만일 집합의 길이가 1이면 4개 다 중복되는 것이다.
                if(s.size !== 1) 
                    continue;

                isItTarget = true;

                // copy_board에 지워질 부분 0으로 표시
                if(copy_board[r][c] !== 0) {
                    copy_board[r][c] = 0;
                    answer++;
                }

                if(copy_board[r][c+1] !== 0) {
                    copy_board[r][c+1] = 0;
                    answer++;
                }

                if(copy_board[r+1][c] !== 0) {
                    copy_board[r+1][c] = 0;
                    answer++;
                }
                
                if(copy_board[r+1][c+1] !== 0) {
                    copy_board[r+1][c+1] = 0;
                    answer++;
                }
            }
        }

        // copy_board 0인 것을 빈 공간으로 잡고서 아래로 블록 떨어뜨린다.
        for(let c=0; c<C; c++) {
            for(let r=(R-1); r>0; r--) {
                if(copy_board[r][c] !== 0)
                    continue;
                
                for(let k=r-1; k>=0; k--) {
                    if(copy_board[k][c] !== 0) {
                        let temp = copy_board[r][c];
                        copy_board[r][c] = copy_board[k][c];
                        copy_board[k][c] = temp;
                        break;
                    }
                }
            }
        }

        // copy_board -> board
        copyArr(copy_board, board);

        // 지워질 타겟이 없으면 종료한다.
        if(!isItTarget)
            break;
    }

    return answer;
}