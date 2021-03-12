function solution(A, B) {
    let answer = 0;
    let len = A.length;     // 두 배열 A, B의 길이는 같으므로
    let left = 0;           // A를 대상으로 한 인덱스이다.

    // 계산의 편의를 위해 오름차순 정렬
    A.sort((a, b) => {
        return a-b;
    });

    B.sort((a, b) => {
        return a-b;
    });

    for(let i=0; i<len; i++) {
        if(A[left] < B[i]) {
            left++;
            answer++;
        }
    }

    return answer;
}