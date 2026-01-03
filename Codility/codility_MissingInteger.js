function solution(A) {
    let check = [];
    let len = A.length;
    let max = 0;

    for(let i=0; i<len; i++) {
        let n = A[i];

        if(n > 0) check[n] = true;
        if(max < n) max = n;
    }

    for(let i=1; i<=max+1; i++)
        if(!check[i])
            return i;
    
    return 0;
}