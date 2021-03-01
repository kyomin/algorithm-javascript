function solution(seoul) {
    let answer = "김서방은 ";
    let len = seoul.length;

    for(let i=0; i<len; i++) {
        if(seoul[i] === "Kim") {
            answer += i;
            answer += "에 있다";
            break;
        }
    }

    return answer;
}