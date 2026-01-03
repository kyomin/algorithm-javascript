function solution(A) {
    let len = A.length;
    let check = [];
    let ans = 1;

    for(let i=0; i<len; i++)
        check[A[i]] = true;

    for(let i=1; i<=len; i++) {
        if(!check[i]) {
            ans = 0;
            break;
        }
    }

    return ans;
}