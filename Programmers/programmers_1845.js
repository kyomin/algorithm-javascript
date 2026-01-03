function solution(nums) {
    let answer = 0;
    let s = new Set(nums);
    let N = nums.length;

    if(s.size < (N/2))
        answer = s.size;
    else
        answer = (N/2);

    return answer;
}