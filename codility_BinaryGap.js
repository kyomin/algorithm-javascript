function solution(N) {
    let binary = "";

    while(N != 1) {
        let r = N % 2;
        
        binary += (r + "");
        
        N = parseInt(N / 2);
    }

    binary += (N + "");

    binary = binary.split("").reverse().join("");

    let binary_gaps = [];
    let len = binary.length;
    let cnt = 0;

    for(let i=0; i<len; i++) {
        if(binary[i] === '0') {
            cnt += 1;
            continue;
        }

        binary_gaps.push(cnt);
        cnt = 0;
    }

    if(binary_gaps.length === 0) return 0;

    let max = binary_gaps[0];

    for(let i=1; i<binary_gaps.length; i++)
        if(binary_gaps[i] > max)
            max = binary_gaps[i];
    
    return max;
}