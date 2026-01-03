function solution(n, s) {
    let answer = [];

    let div = Math.floor(s/n);
    let rest = s%n;

    // 최고의 집합이 존재하지 않는 경우
    if(div===0) return [-1];

    // 몫을 n만큼 분배시킨다.
    for(let i=0; i<n; i++)
        answer.push(div);

    // 나머지만큼 1을 더해준다 => 표준 편차를 작게 하며 s를 만들 수 있다.
    for(let i=0; i<rest; i++)
        answer[i] += 1;
    
    // 오름차순으로 정렬한다.
    answer.sort((a, b) => {
        return (a-b);
    });

    return answer;
}