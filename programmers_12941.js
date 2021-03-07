function solution(A,B){
    let answer = 0;

    // 오름차순 정렬
    function ascent(a, b) {
        return (a - b);
    }

    // 내림차순 정렬
    function descent(a, b) {
        return (b - a);
    }

    A.sort(ascent);
    B.sort(descent);

    for(let i=0; i<A.length; i++)
        answer += (A[i]*B[i]);

    return answer;
}