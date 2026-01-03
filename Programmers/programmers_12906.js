function solution(arr) {
    let answer = [];

    // 일단 첫 번째 원소는 집어넣기!
    answer.push(arr[0]);

    for(let i=1; i<arr.length; i++) {
        // 이전 원소하고 연속되지 않을 때만 집어넣기!
        if(arr[i] !== arr[i-1]) 
            answer.push(arr[i]);
    }
    
    return answer;
}