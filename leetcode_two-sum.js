var twoSum = function(nums, target) {
    let m = 2;
    let combination = [];
    let ans = [];
    let flag = false;

    function dfs(cnt) {
        if(combination.length === m) {
            let sum = combination[0].num + combination[1].num;

            if(sum === target) {
                ans.push(combination[0].idx);
                ans.push(combination[1].idx);
                flag = true;
            }

            return;
        }

        for(let i=cnt; i<nums.length; i++) {
            if(flag)
                return;

            if(combination.length < m) {
                let num = nums[i];
                
                combination.push({
                    num,
                    idx: i
                });

                dfs(i+1);

                combination.pop();
            }
        }
    }

    dfs(0);

    return ans;
};