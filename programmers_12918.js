function solution(s) {
    let answer = true;
    let len = s.length;

    if(len !== 4 && len !== 6) return false;

    for(let i=0; i<len; i++)
        if(isNaN(s[i])) // 숫자가 아닐 경우!
            return false;

    return answer;
}