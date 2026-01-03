function solution(n) {
    let answer = '';
    let str = '수박';

    for(let i=0; i<Math.floor(n/2); i++)
        answer += str;

    if(n%2 === 1)
        answer += '수';

    return answer;
}