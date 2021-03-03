function solution(s) {
    let answer = '';
    let s_arr = s.split("");

    // 오름차순으로 정렬
    s_arr.sort();

    // 그 후, 거꾸로 문자열 만들기
    for(let i=s_arr.length-1; i>=0; i--)
        answer += s_arr[i];

    return answer;
}