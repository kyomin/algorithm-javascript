function solution(s) {
    let answer = '';
    let strings = s.split(' ');
    let len = strings.length;
    let results = [];

    for(let i=0; i<len; i++) {
        let str = strings[i];
        let tmp = "";

        for(let j=0; j<str.length; j++) {
            if(j%2 === 0) tmp += str[j].toUpperCase();  // 짝수라면 대문자로
            else tmp += str[j].toLowerCase();           // 홀수라면 소문자로
        }

        results.push(tmp);
    }

    answer = results.join(' ');

    return answer;
}