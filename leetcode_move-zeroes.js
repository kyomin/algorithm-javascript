var moveZeroes = function(nums) {
    let len = nums.length;
    let zero_idx = -1;

    // 맨 처음 0을 찾아서 index 값을 가져옴
    for(let i=0; i<len; i++) {
        if(nums[i] === 0) {
            zero_idx = i;
            break;
        }
    }

    // 0이 없으면 그대로 리턴
    if(zero_idx === -1) return;
    
    // 0이 있는 곳으로 뒤에서 0이 아닌 수를 가져오고 index를 하나 늘린다(반복)
    for(let i=zero_idx; i<len; i++) {
        if(nums[i] === 0) continue;

        nums[zero_idx] = nums[i];
        nums[i] = 0;
        zero_idx++;
    }
};