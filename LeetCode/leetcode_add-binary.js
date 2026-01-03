var addBinary = function(a, b) {
    let a_len = a.length;
    let b_len = b.length;
    let carry = 0;
    let ans = '';

    if(a_len > b_len) {
        let diff = a_len-b_len;
        for(let i=b_len-1; i>=0; i--) {
            let a_bin = Number(a[i+diff]);
            let b_bin = Number(b[i]);
            let sum = a_bin+b_bin+carry;

            if(sum<2) {
                ans+=(sum+'');
                carry=0;
            } else if(sum===2) {
                ans+=('0');
                carry=1;
            } else if(sum===3) {
                ans+=('1');
                carry=1;
            }
        }

        for(let i=(a_len-b_len-1); i>=0; i--) {
            let a_bin = Number(a[i]);
            let sum=a_bin+carry;

            if(sum<2) {
                ans+=(sum+'');
                carry=0;
            } else if(sum===2) {
                ans+=('0');
                carry=1;
            }
        }

        if(carry===1)
            ans+=('1');
    } else if(a_len < b_len) {
        let diff = b_len-a_len;
        for(let i=a_len-1; i>=0; i--) {
            let a_bin = Number(a[i]);
            let b_bin = Number(b[i+diff]);
            let sum = a_bin+b_bin+carry;



            if(sum<2) {
                ans+=(sum+'');
                carry=0;
            } else if(sum===2) {
                ans+=('0');
                carry=1;
            } else if(sum===3) {
                ans+=('1');
                carry=1;
            }
        }

        for(let i=(b_len-a_len-1); i>=0; i--) {
            let b_bin = Number(b[i]);
            let sum=b_bin+carry;

            if(sum<2) {
                ans+=(sum+'');
                carry=0;
            } else if(sum===2) {
                ans+=('0');
                carry=1;
            }
        }

        if(carry===1)
            ans+=('1');
    } else {
        for(let i=a_len-1; i>=0; i--) {
            let a_bin = Number(a[i]);
            let b_bin = Number(b[i]);
            let sum = a_bin+b_bin+carry;

            if(sum<2) {
                ans+=(sum+'');
                carry=0;
            } else if(sum===2) {
                ans+=('0');
                carry=1;
            } else if(sum===3) {
                ans+=('1');
                carry=1;
            }
        }

        if(carry===1)
            ans+=('1');
    }

    ans=ans.split('').reverse().join('');

    return ans;
};