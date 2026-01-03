var isPalindrome = function(x) {
    x = x+'';   // number to string
    let reversed = x.split('').reverse().join('');

    if(x === reversed) return true;
    else return false;
};