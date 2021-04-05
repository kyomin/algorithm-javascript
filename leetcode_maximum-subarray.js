var maxSubArray = function(nums) {
    const MIN = Math.pow(10, 5)*(-1);

    let ret = MIN;
    let pSum = 0;

    for(let i=0; i<nums.length; i++) {
        pSum = Math.max(pSum, 0) + nums[i];
        ret = Math.max(pSum, ret);
    }

    return ret;
};