function solution(x) {
    let answer;
    let sum = 0;

    x = x+"";   // Number to String

    for(let i=0; i<x.length; i++) 
        sum += Number(x[i]);

   x = Number(x);

    if(x%sum === 0) answer = true;
    else answer = false;

    return answer;
}