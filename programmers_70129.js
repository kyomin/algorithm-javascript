function solution(s) {
    let answer = [];
    let cnt = 0;
    let zero_count = 0;

    function makeBinary(num) {
        let str = '';

        while(num >= 2) {
            let r = num%2;
            let q = Math.floor(num/2);

            str += (r+'');

            num = q;
        }

        str += (num+'');

        return str.split('').reverse().join('');
    }

    while(s !== '1') {
        let len = s.length;
        let temp = '';

        for(let i=0; i<len; i++) {
            if(s[i] === '0') {
                zero_count++;
                continue;
            }

            temp += s[i];
        }

        s = makeBinary(temp.length);
        cnt++;
    }

    answer.push(cnt);
    answer.push(zero_count);

    return answer;
}