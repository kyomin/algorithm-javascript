function solution(s) {
    let answer = [];
    let map = [];
    let findNum = false;    // 문자열에서 숫자를 발견했는가?
    let num = "";

    // 정렬 비교 함수. 빈도수 기준으로 내림차순 정렬
    function comp(p1, p2) {
        if(p1.frequency > p2.frequency) return -1;
        if(p1.frequency === p2.frequency) return 0;
        if(p1.frequency < p2.frequency) return 1;
    }

    for(let i=0; i<s.length; i++) {
        // 숫자를 발견하는 순간!
        if(!isNaN(s[i])) {
            findNum = true;
            num += s[i];
            continue;
        }

        // 숫자를 발견하고 더해 나가다가 다른 문자를 만나면
        if(findNum) {
            findNum = false;
            let n = parseInt(num);

            let findKey = false;

            for(let mapIdx=0; mapIdx<map.length; mapIdx++) {
                if(map[mapIdx].num === n) {
                    findKey = true;
                    map[mapIdx].frequency += 1;
                    break;
                }
            }

            if(!findKey) {
                let objElement = {
                    num: n,
                    frequency: 1
                };

                map.push(objElement);
            }

            num = "";
        }
    }

    map.sort(comp);

    for(let i=0; i<map.length; i++) 
        answer.push(map[i].num);

    return answer;
}