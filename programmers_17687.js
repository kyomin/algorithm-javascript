function solution(n, t, m, p) {
    let answer = '';
    let tmp = '';
    let num = 0;
    let boundary = p + m*(t-1);     // 여기 길이까지만 만들면 된다.

    let table = new Map()

    table.set(10, 'A');
    table.set(11, 'B');
    table.set(12, 'C');
    table.set(13, 'D');
    table.set(14, 'E');
    table.set(15, 'F');

    // base: 몇 진수인가?, num: 바꾸고자 하는 수
    function makeBase(base, num) {
        let str = '';

        while(num >= base) {
            let r = num%base;

            if(r >= 10)
                str += table.get(r);
            else
                str += (r+"");
            
            num = Math.floor(num/base);
        }

        if(num >= 10)
            str += table.get(num);
        else
            str += (num+"");

        // 최종 결과 뒤접어 리턴(뒤집어야 진수 변환이 된 것이다)
        return str.split('').reverse().join('');
    }

    while(tmp.length <= boundary) {
        tmp += makeBase(n, num);
        num++;
    }

    for(let i=0; i<t; i++) {
        let idx = (p + (m*i)) - 1;
        answer += tmp[idx];
    }

    return answer;
}