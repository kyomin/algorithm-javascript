var lengthOfLongestSubstring = function(s) {
    let ans = 0;

    for(let i=0; i<s.length; i++) {
        let temp = [];

        for(let start=i; start<s.length; start++) {
            let ch = s[start];

            if(temp.indexOf(ch) === -1)
                temp.push(ch);
            else
                break;
        }

        ans = Math.max(ans, temp.length);
    }

    return ans;
};