var convertToTitle = function(columnNumber) {
    let alphas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let ret = '';

    while(columnNumber > 26) {
        let r = columnNumber%26;
        let q = Math.floor(columnNumber/26);

        if(r===0) {
            ret+='Z';
            columnNumber=q-1;
        } else {
            ret+=alphas[r-1];
            columnNumber=q;
        }
    }

    if(columnNumber !== 0)
        ret+=alphas[columnNumber-1];

    return ret.split('').reverse().join('');
};