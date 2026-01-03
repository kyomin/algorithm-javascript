const vc = [];
const result = [];

function dfs(cnt, numbers) {
    // 2개를 뽑았다면
    if(vc.length == 2){
        let sum = 0;

        for(let idx=0; idx<vc.length; idx++)
            sum+=vc[idx];
        
        result.push(sum);

        return;
    }

    for(let idx=cnt; idx<numbers.length; idx++){
        if(vc.length<2){
            vc.push(numbers[idx]);
            dfs(idx+1, numbers);
            vc.pop();
        }
    }
}

function solution(numbers) {
    dfs(0, numbers);

    // result 배열에 중복으로 담긴 숫자들을 제거한다.
    var answer = result.filter((item, index) => result.indexOf(item) === index);

    // 오름차순 정렬!
    answer.sort(function(a, b) {
        return a-b;
    });

    return answer;
}