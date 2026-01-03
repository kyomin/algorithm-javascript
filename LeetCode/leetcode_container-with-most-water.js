var maxArea = function(height) {
    let left = 0;
    let right = height.length-1;
    let max_area = (right-left)*Math.min(height[left], height[right]);

    while(left<right) {
        if(height[left]<=height[right]) left++;
        else right--;

        max_area = Math.max(max_area, (right-left)*Math.min(height[left], height[right]));
    }

    return max_area;
};