function solution(s) {
    let answer = '';
    let words_arr = s.split(' ');   // 공백으로 스트링 분리 후, 배열화

    for(let i=0; i<words_arr.length; i++) {
        let word = words_arr[i];

        // 첫 문자가 바뀌었는가?
        let isFirstChanged = false;

        for(let j=0; j<word.length; j++) {
            // 첫 문자이고
            if(j === 0) {
                // 소문자라면
                if(word[j].match(/^[a-z]$/) !== null) {
                    // 대문자로 변환!
                    let temp = word.split('');
                    let val = temp[0].charCodeAt(0);    // 아스키 코드 추출
                    val -= 32;      // 대문자 아스키 코드 값으로 변환
                    temp[0] = String.fromCharCode(val);
                    word = temp.join('');

                    isFirstChanged = true;
                } 
            }   else {    // 첫 문자가 아니고
                    if(!isFirstChanged && word[j-1].match(/^[A-Z]$/) === null && word[j-1].match(/^[a-z]$/) === null && word[j].match(/^[A-Z]$/) !== null) {
                        // 첫 문자가 영문이 아니고, 이어지는 영문이 대문자라면 소문자로 변환
                        let temp = word.split('');
                        let val = temp[j].charCodeAt(0);    // 아스키 코드 추출
                        val += 32;      // 소문자 아스키 코드 값으로 변환
                        temp[j] = String.fromCharCode(val);
                        word = temp.join('');

                        isFirstChanged = true;

                        continue;
                    }

                    // 대문자라면 소문자로 변환
                    if(word[j].match(/^[A-Z]$/) !== null) {
                        let temp = word.split('');
                        let val = temp[j].charCodeAt(0);    // 아스키 코드 추출
                        val += 32;      // 소문문자 아스키 코드 값으로 변환
                        temp[j] = String.fromCharCode(val);
                        word = temp.join('');
                    }
            }
        }

        answer += word;

        if(i != words_arr.length - 1)
            answer += ' ';
    }

    return answer;
}