function solution(A) {
    let len = A.length;
    let absoluteVals = [];
    let pSum = [];
    pSum[0] = 0;

    // 구간합 배열 메모하기
    for(let i=0; i<len; i++) 
        pSum[i+1] = A[i] + pSum[i];
    
    for(let P=1; P<len; P++) {
        let left = pSum[P] - pSum[0];
        let right = pSum[len] - pSum[P];

        absoluteVals.push(Math.abs(left - right));
    }

    return Math.min(...absoluteVals);
}