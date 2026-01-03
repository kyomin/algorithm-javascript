function solution(phone_number) {
    let answer = '';
    let len = phone_number.length;

    for(let i=0; i<len-4; i++)
        answer += '*';

    for(let i=len-4; i<len; i++)
        answer += phone_number[i];
    
    return answer;
}