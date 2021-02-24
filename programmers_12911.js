function solution(n) {
    // 10진수를 2진수로 바꿨을 때의 1의 개수를 세는 함수
    function countOne(num) {
        let cnt = 0;

        while(num > 1) {
            let r = num%2;
            num = parseInt(num/2);

            if(r===1) cnt++;
        }

        cnt++;

        return cnt;
    }
   
    let originCnt = countOne(n);    // 현재 숫자의 1의 개수
    n++;    // 다음 수부터 시작!

    while(true) {
        if(originCnt === countOne(n)) break;

        n++;
    }

    return n;
}