function solution(n) {
    let answer = 0;
    n = n+"";   // number to string
    let arr = n.split('');  // string to array

    arr.sort();
    arr.reverse();

    answer = parseInt(arr.join(''));

    return answer;
}