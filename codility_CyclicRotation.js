function solution(A, K) {
    let len = A.length;

    if(len === 0) return [];

    // K번의 회전
    for(let k=0; k<K; k++) {
        // 회전 알고리즘
        let temp = A[len-1];

        for(let i=len-1; i>=1; i--)
            A[i] = A[i-1];
        
        A[0] = temp;
    }

    return A;
}