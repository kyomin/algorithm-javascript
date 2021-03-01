function solution(s){
    let answer = true;
    let count_p = 0;
    let count_y = 0;
    let len = s.length;

    for(let i=0; i<len; i++) {
        if(s[i] === 'p' || s[i] === 'P') {
            count_p++;
            continue;
        }

        if(s[i] === 'y' || s[i] === 'Y') {
            count_y++;
            continue;
        }
    }

    if(count_p !== count_y) 
        answer = false;

    return answer;
}