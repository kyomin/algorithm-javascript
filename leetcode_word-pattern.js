var wordPattern = function(pattern, s) {
    let words = s.split(' ');
    let len = words.length;
    let pattern_and_word = {};  // key: pattern, value: word
    let word_and_pattern = {};  // key: word, value: pattern

    if(pattern.length !== len)
        return false;

    for(let i=0; i<len; i++) {
        let word = words[i];
        let k = pattern[i];

        // 아직 패턴 등록이 되지 않았다면
        if(pattern_and_word[k] === undefined) {
            // 단어도 등록이 안 된 경우에만 등록
            if(word_and_pattern[word] === undefined) {
                pattern_and_word[k] = word;
                word_and_pattern[word] = k;
                continue;
            }

            // 이미 해당 단어가 패턴에 등록되어 있는 경우이다.
            return false;
        }

        // 패턴에 등록이 되어 있는데, 패턴과 맞지 않는 경우
        if(pattern_and_word[k] !== word) 
            return false;
    }

    // 위의 검증을 끝냈다면 패턴에 맞는 경우이다.
    return true;
};