function solution(nums) {
    let answer = 0;
    let m = 3;
    let vc = [];

    function isPrime(num) {
        if(num < 2) return false;

        for(let i=2; i*i<=num; i++) 
            if(num%i === 0)
                return false;
        
        return true;
    }

    function combination(cnt) {
        if(vc.length === m) {
            let sum = 0;

            for(let i=0; i<m; i++)
                sum += vc[i];

            if(isPrime(sum))
                answer++;
            
            return;
        }

        for(let i=cnt; i<nums.length; i++) {
            if(vc.length < m) {
                vc.push(nums[i]);
                combination(i+1);
                vc.pop();
            }
        }
    }
    
    combination(0);

    return answer;
}