function solution(begin, target, words) {
    const MAX = 55;

    let answer = MAX;
    let check = [];
    let nodes = [];
    let flag = false;

    // 변환할 수 없는 경우
    for(let i = 0; i < words.length; i++)
        if(words[i] === target)
            flag = true;
    
    if(!flag) return 0;

    // 리스트 초기화
    nodes.push(begin);

    for(let i = 0; i < words.length; i++)
        nodes.push(words[i]);

    for(let r = 0; r < MAX; r++){
        let temp = [];

        for(let c = 0; c < MAX; c++)
            temp.push(false);
        
        check.push(temp);
    }

    // 두 단어를 비교해서 한 문자만 다른지 판단한다.
    function isOneDifferent(s1, s2) {
        let cnt = 0;
        let len = s1.length;

        for(let i = 0; i < len; i++)
            if(s1[i] !== s2[i])
                cnt++;
        
        if(cnt === 1) return true;
        else return false;
    }

    function dfs(node, cnt, target) {
        if(nodes[node] === target) {
            if(answer > cnt)
                answer = cnt;

            return;
        }

        for(let i = 0; i < nodes.length; i++) {
            let next = i;

            if(next === node) continue;
            if(check[node][next]) continue;

            // 한 글자만 다른 경우에 탐색 진행
            if(isOneDifferent(nodes[node], nodes[next])) {
                check[node][next] = true;
                check[next][node] = true;

                dfs(next, cnt + 1, target);
            }
        }
    }

    dfs(0, 0, target);

    return answer;
}