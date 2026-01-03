function solution(n) {
    if(n===0) 
        return [];
    
    let result = [];

    function dfs(result, s, left, right) {
        if(left > right)    // 짝이 안 맞는 경우이다.
            return;

        if(left === 0 && right === 0) {
            result.push(s);
            return;
        }

        if(left > 0)
            dfs(result, s+'(', left-1, right);
        if(right > 0)
            dfs(result, s+')', left, right-1);
    }

    dfs(result, '', n, n);

    return result.length;
}