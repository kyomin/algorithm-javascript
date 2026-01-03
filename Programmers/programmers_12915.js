function solution(strings, n) {
    let idx = n;

    function comp(s1, s2) {
        if(s1[idx] < s2[idx]) return -1;
        else if(s1[idx] === s2[idx]) {
            if(s1 < s2) return -1;
            else if(s1 === s2) return 0;
            else return 1;
        }
        else return 1;
    }

    strings.sort(comp);

    return strings;
}