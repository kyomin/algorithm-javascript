var plusOne = function(digits) {
    let len = digits.length;
    let carry = 0;

    for(let i=len-1; i>=0; i--) {
        let num = digits[i];

        // 맨 마지막 수에만 1을 더한다.
        if(i === len-1) {
            num += 1;

            if(num<10) {
                digits[i] += 1;
                carry = 0;
                break;
            } else {
                digits[i] = 0;
                carry = 1;
            }
        } else {
            num += carry;

            if(num<10) {
                digits[i] += carry;
                carry = 0;
                break;
            } else {
                digits[i] = 0;
                carry = 1;
            }
        }
    }

    if(carry === 1) digits.unshift(carry);

    return digits;
};