var isValidSudoku = function(board) {
    let check = [];

    function initCheck() {
        for(let i=0; i<10; i++) 
            check[i] = false;
    }

    // 가로 줄 검사
    for(let r=0; r<9; r++) {
        initCheck();

        for(let c=0; c<9; c++) {
            let n = board[r][c];

            if(n === '.')
                continue;

            n = Number(n);

            // 중복으로 숫자가 등장한 순간
            if(check[n])
                return false;

            check[n] = true;
        }
    }

    // 세로 줄 검사
    for(let c=0; c<9; c++) {
        initCheck();

        for(let r=0; r<9; r++) {
            let n = board[r][c];

            if(n === '.')
                continue;

            n = Number(n);

            // 중복으로 숫자가 등장한 순간
            if(check[n])
                return false;

            check[n] = true;
        }
    }

    // 9개의 3x3 검사
    for(let row_boundary = 3; row_boundary <= 9; row_boundary += 3) {
        for (let col_boundary = 3; col_boundary <= 9; col_boundary += 3) {
            initCheck();

            for (let r = row_boundary - 3; r < row_boundary; r++) {
                for (let c = col_boundary - 3; c < col_boundary; c++) {
                    let n = board[r][c];

                    if(n === '.')
                        continue;

                    n = Number(n);

                    // 중복으로 숫자가 등장한 순간
                    if(check[n])
                        return false;

                    check[n] = true;
                }
            }
        }
    }

    // 위의 검증을 무사히 마쳤다면, 스도쿠의 규칙을 만족하는 것이다.
    return true;
};