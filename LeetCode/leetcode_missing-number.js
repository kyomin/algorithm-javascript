var missingNumber = function(nums) {
    let num = 0;
    let len = nums.length;

    nums.sort((a, b) => {
        return a-b;
    });

    for(let i=0; i<len; i++) {
        if(num === nums[i]) {
            num++;
            continue;
        }

        return num;
    }

    return num;
};