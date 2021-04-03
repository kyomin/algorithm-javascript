var findMedianSortedArrays = function(nums1, nums2) {
    let nums = [...nums1, ...nums2];
    
    function ascent(a, b) {
        return (a - b);
    }

    nums.sort(ascent);

    if(nums.length%2 === 1) {
        return nums[Math.floor(nums.length/2)];
    } else {
        let idx = nums.length/2;

        return ((nums[idx-1] + nums[idx])/2);
    }
};