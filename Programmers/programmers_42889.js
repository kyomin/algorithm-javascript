function solution(N, stages) {
    let answer = [];
    let users = [];         // 각 스테이지마다 머무는 사람의 수를 담는 배열
    let fail_pair = [];     // 실패율과 스테이지 번호 저장 컨테이너
    let number = stages.length;     // 플레이어의 수

    // N은 최대 500이므로
    for(let i=0; i<=500; i++)
        users.push(0);

    // 각 스테이지마다 머무는 사람의 수를 담는다.
    for(let i=0; i<number; i++)
        if(N >= stages[i])
            users[stages[i]]++;

    // 각 스테이지에 대해 실패율을 계산한다.
    for(let stage=1; stage<=N; stage++) {
        if(number !== 0) {      // 현 스테이지의 플레이어 수가 0이 아닌 경우
            let fail = users[stage] / number;

            fail_pair.push({
                fail,
                stage
            });
        } else {
            fail_pair.push({
                fail: 0,
                stage
            });
        }

        number -= users[stage];
    }

    // 실패율 기준 내림차순 정렬
    fail_pair.sort((a, b) => {
        if(a.fail > b.fail) return -1;
        if(a.fail === b.fail) {
            if(a.stage < b.stage) return -1;
            if(a.stage === b.stage) return 0;
            if(a.stage > b.stage) return 1;
        }
        if(a.fail < b.fail) return 1;
    });

    for(let i=0; i<fail_pair.length; i++)
        answer.push(fail_pair[i].stage);

    return answer;
}