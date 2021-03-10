function solution(A) {
    let N = A.length;
    let check = [];
    let answer = 0;

    for(let i=0; i<N; i++)
        check[A[i]] = true;
    
    for(let i=1; i<=N+1; i++) {
        if(check[i] === undefined) {
            answer = i;
            break;
        }
    }

    return answer;
}