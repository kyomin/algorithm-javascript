var majorityElement = function(nums) {
    nums.sort((a, b) => {
        return a-b;
    });

    let cur_num = nums[0];
    let cur_cnt = 1;
    let ans_cnt = 1;
    let ans = cur_num;

    for(let i=1; i<nums.length; i++) {
        if(nums[i] === cur_num) {
            cur_cnt++;
            continue;
        }

        if(cur_cnt > ans_cnt) {
            ans_cnt = cur_cnt;
            ans = cur_num;
            cur_cnt = 1;
        }

        cur_num = nums[i];
    }

    if(cur_cnt > ans_cnt)
        ans = cur_num;
    
    return ans;
};