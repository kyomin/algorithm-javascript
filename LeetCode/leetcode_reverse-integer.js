var reverse = function(x) {
    let is_negative = false;
    
    if(x < 0) {
        is_negative = true;
        x *= (-1);
    }

    let str = x+'';
    let arr = str.split('').reverse();
    str = arr.join('');

    x = Number(str);

    if(is_negative)
        x *= (-1);

    if(x < (Math.pow(2, 31)*(-1)) || x > (Math.pow(2, 31) - 1))
        x = 0;

    return x;
};