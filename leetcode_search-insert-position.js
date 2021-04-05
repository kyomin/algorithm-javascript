var searchInsert = function(nums, target) {
    let len = nums.length;

    for(let i=0; i<len; i++)
        if(nums[i] === target || nums[i] > target)
            return i;

    return len;
};