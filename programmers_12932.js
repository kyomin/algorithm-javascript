function solution(n) {
    let answer = [];

    while(n >= 10) {
        let r = n % 10;

        answer.push(r);

        n = parseInt(n/10);
    }

    answer.push(n);

    return answer;
}