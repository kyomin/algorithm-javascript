function solution(new_id) {
    let answer = '';
    let arr = new_id.split('');     // 문자열은 immutable 하므로 배열로 처리

    // 1단계: new_id의 모든 대문자를 대응되는 소문자로 치환
    for(let i=0; i<arr.length; i++) {
        let char = arr[i];

        if(char.match(/^[A-Z]$/) !== null) 
            arr[i] = arr[i].toLowerCase();
    }


    // 2단계: new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거
    let special_characters = ['-', '_', '.'];
    let temp = [];

    for(let i=0; i<arr.length; i++) {
        let char = arr[i];

        if(char.match(/^\d{1,}$/) !== null) temp.push(char);
        if(char.match(/^[a-z]$/) !== null) temp.push(char);
        if(special_characters.indexOf(char) !== -1) temp.push(char);
    }

    arr = temp;


    // 3단계: new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환
    temp = [];

    for(let i=0; i<arr.length; i++) {
        let char = arr[i];

        if(temp.length === 0) {
            temp.push(char);
            continue;
        }

        if(char !== '.') {
            temp.push(char);
            continue;
        }

        // 연속된 것이면 이전에 temp에 담은 문자가 '.'일 것이다.
        if(temp[temp.length-1] === '.')
            continue;
        
        temp.push(char);
    }

    arr = temp;


    // 4단계: new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거
    if(arr.length !== 0 && arr[0] === '.') 
        arr.shift();
    
    if(arr.length !== 0 && arr[arr.length-1] === '.')
        arr.pop();
    
    
    // 5단계: new_id가 빈 문자열이라면, new_id에 "a"를 대입
    if(arr.length === 0)
        arr.push('a');

    
    // 6단계: new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거
    // 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거
    if(arr.length >= 16) {
        arr = arr.slice(0, 15);

        if(arr[14] === '.')
            arr.pop();
    }

    
    // 7단계: new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙이기
    if(arr.length <= 2) {
        let last_char = arr[arr.length-1];

        while(arr.length < 3) {
            arr.push(last_char);
        }
    }

    answer = arr.join('');

    return answer;
}