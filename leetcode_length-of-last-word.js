var lengthOfLastWord = function(s) {
    // 최소 케이스 처리
    if(s === ' ') return 0;

    s = s.trim();
    let words = s.split(' ');
    let len = words.length;

    return words[len-1].length;
};