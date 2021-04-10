var rotate = function(nums, k) {
    let len = nums.length;
   let r = k%len;

    const spliceArray = nums.splice(0, len-r)
    spliceArray.forEach(el => nums.push(el))
};