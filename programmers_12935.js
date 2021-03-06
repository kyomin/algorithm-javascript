function solution(arr) {
    let answer = [];
    
    // 최솟값 찾기
    let min = arr[0];

    for(let i=1; i<arr.length; i++)
        if(arr[i] < min)
            min = arr[i];

    answer = arr.filter((el, idx) => el > min);
    
    if(answer.length === 0) return [-1];

    return answer;
}