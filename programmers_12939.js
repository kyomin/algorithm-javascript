function solution(s) {
    let answer = '';
    let arr = s.split(' ');

    // string to number 작업을 한다.
    for(let i=0; i<arr.length; i++) 
        arr[i] = parseInt(arr[i]);
    
    
    // 최댓값과 최솟값을 찾는다.
    let max = arr[0];
    let min = arr[0];
    
    for(let i=1; i<arr.length; i++) {
        if(arr[i] > max) max = arr[i];
        if(arr[i] < min) min = arr[i];
    }

    answer += (min+"");
    answer += ' ';
    answer += (max+"");

    return answer;
}