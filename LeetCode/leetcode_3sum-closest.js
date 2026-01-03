var threeSumClosest = function(nums, target) {
    let compare = Math.pow(2, 31)-1;  // 타겟과 가장 가까운 차이는 int의 최댓값으로 설정
    let ret = 0;
    let len = nums.length;
    let j, k;   // second, third 포인터
    
    nums.sort((a, b) => {
        return a-b;
    });

    for(let i=0; i<len; i++) {
        j=i+1;
        k=len-1;

        while(j<k) {
            let sum = nums[i]+nums[j]+nums[k];
            let val = Math.abs(sum-target);   // 타겟과의 차이 구하기

            if(val<compare) {
                compare=val;
                ret=sum;

                if(ret<target) {    // 두 번째 포인터를 오른쪽으로 옮기는 경우
                    j++;
                } else {    // 세 번째 포인터를 왼쪽으로 옮기는 경우
                    k--;
                }
            } else if(sum<target) {
                j++;
            } else {
                k--;
            }
        }
    }

    return ret;
};