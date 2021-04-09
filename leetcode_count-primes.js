var countPrimes = function(n) {
    let pn = 0 ;    // 소수의 개수
    
    // 지워졌으면 true
    let c = [];
    for(let i=0; i<=n; i++)
        c.push(false);  

    for(let i=2; i<n; i++) {
        if(c[i] === false) {
            pn++;

            for(let j=i*i; j<=n; j+=i)
                c[j] = true;
        }
    }

    return pn;
};