var answer = 0;

function dfs(sum, target, numbers, idx) {
    if(idx >= numbers.length) {
        if(sum==target)
            answer++;
        
        return;
    }

    dfs(sum + numbers[idx], target, numbers, idx + 1);
    dfs(sum - numbers[idx], target, numbers, idx + 1);
}

function solution(numbers, target) {
    dfs(0, target, numbers, 0);

    return answer;
}