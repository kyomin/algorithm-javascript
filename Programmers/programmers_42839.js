const primes = [];
const visit = [];

function prime(num) {
    if(num < 2)
        return false;

    for(let i=2; i*i<=num; i++){
        if(num%i == 0)
            return false;
    }

    return true;
}

function dfs(numbers, M, vc){
    if(vc.length === M){
        if(prime(parseInt(vc)))
            primes.push(parseInt(vc));
        
        return;
    }

    for(let i=0; i<numbers.length; i++){
        if(!visit[i]){
            visit[i] = true;
            vc+=numbers[i];

            dfs(numbers, M, vc);

            vc = vc.slice(0, vc.length-1);
            visit[i] = false;
        }
    }
}

function solution(numbers) {
    let answer = 0;

    for(let i=0; i<numbers.length; i++)
        visit[i] = false;
    
    for(let i=1; i<=numbers.length; i++)
        dfs(numbers, i, "");

    answer = primes.filter((item, index) => primes.indexOf(item) === index).length;

    return answer;
}