function solution(arr) {
    // 최대공약수 구하는 함수
    function gcd(a, b) {
        while(b !== 0) {
            let r = a % b;
            a = b;
            b = r;
        }

        return a;
    }

    // 가장 작은 case 처리
    if(arr.length === 1) return arr[0];

    let g = gcd(arr[0], arr[1]);
    let l = parseInt((arr[0] * arr[1]) / g);

    for(let i=2; i<arr.length; i++) {
        let n= arr[i];
        g = gcd(n, l);
        l = parseInt((l * n) / g);
    }

    return l;
}