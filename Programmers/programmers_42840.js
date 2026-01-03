function comp(obj1, obj2) {
    // 스코어로 내림차순 정렬
    if(obj1.score < obj2.score)
        return 1;

    if(obj1.score > obj2.score)
        return -1;

    // 스코어가 같다면 사람 번호로 오름차순 정렬
    if(obj1.score === obj2.score){
        if(obj1.who > obj2.who)
            return 1;
        
        if(obj1.who < obj2.who)
            return -1;
        
        if(obj1.who === obj2.who)
            return 0;
    }
}

function solution(answers) {
    let answer = [];

    // 수포자 3인방의 정보들
    let v = [
        {
            who: 1,
            score: 0
        },
        {
            who: 2,
            score: 0
        },
        {
            who: 3,
            score: 0
        }
    ];

    // 찍는 패턴들
    let match1 = [1, 2, 3, 4, 5];
    let match2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let match3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    for(let i=0; i<answers.length; i++){
        if(answers[i] === match1[i%5])
            v[0].score += 1;
        
        if(answers[i] === match2[i%8])
            v[1].score += 1;

        if(answers[i] === match3[i%10])
            v[2].score += 1;
    }

    v.sort(comp);

    // 스코어 내림차순 정렬이므로 첫 원소가 가장 큰 스코어를 가진다.
    let max = v[0].score;

    answer.push(v[0].who);

    for(let i=1; i<3; i++)
        if(max === v[i].score)
            answer.push(v[i].who);

    return answer;
}