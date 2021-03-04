function solution(s, n) {
    let answer = '';
    
    for(let i=0; i<s.length; i++) {
        let ch = s[i];
        let ch_num = ch.charCodeAt(0);  // 해당 문자를 아스키 코드 값으로 변환
        ch_num += n;

        if(ch === ' ') {
            answer += ch;
            continue;
        }

        // 정규 표현식을 이용해 대소문자 구분으로 분기 처리를 한다.
        if(ch.match(/^[A-Z]$/) !== null) {  // 대문자라면
            if(ch_num > 90)
                ch_num = 65 + (ch_num - 91);
            
            // 유니코드 정수 값을 문자로 변환
            ch = String.fromCharCode(ch_num);
            answer += ch;
            continue;
        }

        // 소문자라면
        if(ch.match(/^[a-z]$/) !== null) {
            if(ch_num > 122)
                ch_num = 97 + (ch_num - 123);
            
            ch = String.fromCharCode(ch_num);
            answer += ch;
            continue;
        }

    }

    return answer;
}