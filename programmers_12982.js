function solution(d, budget) {
    let answer = 0;

    // 계산 편의를 위해 오름차순 정렬
    d.sort((a, b) => {
        return (a-b);
    });

    for(let i=0; i<d.length; i++) {
        if(d[i] > budget) 
            break;
        
        budget -= d[i];
        answer += 1;
    }

    return answer;
}