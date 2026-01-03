function solution(n) {
    let answer = 0;
    let p = [];

    for(let i=0; i<=n; i++)
        p.push(false);
    
    for(let i=2; i<=n; i++) {
        if(!p[i]) {
            answer++;

            for(let j=i*i; j<=n; j+=i)
                p[j] = true;
        }
    }

    return answer;
}