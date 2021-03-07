function solution(n, m) {
    let answer = [];

    function gcd(a, b) {
        while(b != 0) {
            let r = a % b;
            a = b;
            b = r;
        }

        return a;
    }

    let G = gcd(n, m);
    let L = parseInt((n*m) / G);

    answer.push(G);
    answer.push(L);

    return answer;
}