function solution(s) {
    let answer = s.length; 

    // 최대 절반까지 단위를 정할 수 있다.
    for(let i=1; i<=Math.floor(s.length/2); i++) {
        let pos = 0;
        let len = s.length;     // 최초 길이는 전체 문자열 길이로 정한다. 압축되는 만큼 빼준다.

        while(pos+i <= s.length) {
            let unit = s.substring(pos, pos+i);
            pos += i;
            
            let cnt = 0;

            while(pos+i <= s.length) {
                if(unit === s.substring(pos, pos+i)) {
                    cnt++;
                    pos += i;
                } else {
                    break;
                }
            }

            // 기준 i로 단위를 잡아 비교했을 때, 같은 것이 하나 이상 카운트 되는 경우
            if(cnt > 0) {
                len -= (i*cnt);

                // 카운트 된 개수 숫자 길이만큼 더해준다.
                len += ((cnt+1)+'').length;
            }

            answer = Math.min(answer, len);
        }
    }

    return answer;
}