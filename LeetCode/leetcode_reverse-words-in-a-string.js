var reverseWords = function(s) {
    let arr = s.split(' ');
    arr = arr.filter((x, idx) => x !== '');
    arr.reverse();
    
    return arr.join(' ');
};