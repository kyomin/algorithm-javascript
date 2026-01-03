function solution(s) {
    let answer = '';
    let len = s.length;
    let index = parseInt(len/2);

    if(len%2 === 1) answer = s.substr(index, 1);
    else answer = s.substr(index-1, 2);

    return answer;
}