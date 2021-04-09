var letterCombinations = function(digits) {
    let out = [];
    let mapping_of_digit = [
        'abc', 'def', 'ghi', 'jkl', 
        'mno', 'pqrs', 'tuv', 'wxyz'
    ];

    // 최소 케이스 처리
    if(digits === '')
        return [];

    function recur(digits_index, ans) {
        if(digits_index >= digits.length) {
            out.push(ans);
            return;
        }

        let digit = Number(digits[digits_index]);
        let str = mapping_of_digit[digit-2];
        
        for(let i=0; i<str.length; i++)
            recur(digits_index+1, ans+str[i]);
    }

    recur(0, '');

    return out;
};