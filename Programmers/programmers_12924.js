function solution(n) {
    let answer = 0;

    for(let i=1; i<=n; i++) {
        let start = i;
        let sum = 0;

        for(let j=start; j<=n; j++) {
            sum += j;

            if(sum === n) {
                answer++;
                break;
            }

            if(sum > n) break;
        }
    }

    return answer;
}