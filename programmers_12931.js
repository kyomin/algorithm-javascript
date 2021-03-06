function solution(n) {
    let answer = 0;
    let str_n = n+"";
    
    for(let i=0; i<str_n.length; i++)
        answer += parseInt(str_n[i]);

    return answer;
}