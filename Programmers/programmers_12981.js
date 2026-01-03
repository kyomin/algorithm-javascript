function solution(n, words) {
    let answer = [0, 0];
    let prev_words = [];    // 끝말잇기가 끝난 단더들을 넣는다.

    for(let i=0; i<words.length; i++) {
        let cur_person = (i%n) + 1;
        let cur_turn = Math.floor(i/n) + 1;
        let word = words[i];

        if(i === 0) {
            prev_words.push(word);
            continue;
        }

        // 단어가 포함된 경우
        if(prev_words.indexOf(word) !== -1) {
            answer[0] = cur_person;
            answer[1] = cur_turn;
            break;
        }

        let first_char = word[0];
        let last_char = prev_words[i-1][prev_words[i-1].length-1];

        // 끝말잇기 규칙이 어긋난 경우
        if(first_char !== last_char) {
            answer[0] = cur_person;
            answer[1] = cur_turn;
            break;
        }

        prev_words.push(word);
    }

    return answer;
}