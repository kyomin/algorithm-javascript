var singleNumber = function(nums) {
    let ans = false;
    let len = nums.length;

    // 편의를 위해 오름차순 정렬
    nums.sort((a, b) => {
        return a-b;
    });

    for(let i=0; i<(len-1); i+=2) {
        if(nums[i] !== nums[i+1]) {
            ans=nums[i];
            break;
        }
    }

    if(ans === false) return nums[len-1];
    else return ans;
};