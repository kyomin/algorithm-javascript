function solution(n) {
    let answer = 0;
    let square_n = 1;
    let found = true;

    while(true) {
        if(square_n*square_n === n) {
            square_n++;
            answer = square_n * square_n;
            break;
        }

        if(square_n*square_n > n) {
            found = false;
            break;
        }

        square_n++;
    }

    if(!found) return -1;

    return answer;
}