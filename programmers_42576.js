function solution(participant, completion) {
    var answer = '';

    // 비교의 편의를 위해 정렬한다.
    participant.sort();
    completion.sort();

    // 중간에 완주하지 못한 선수가 발견되는 경우이다.
    for(let i=0; i<completion.length; i++)
        if(completion[i] !== participant[i])
            return participant[i];

    // 위의 과정을 통과했으면, 맨 마지막에 완주하지 못한 선수가 있는 것이다.
    answer = participant[participant.length-1];

    return answer;
}