function solution(s){
    let stack = [];

    for(let i=0; i<s.length; i++) {
        let ch = s[i];

        if(ch === '(') {
            stack.push(ch);
            continue;
        }

        if(ch === ')') {
            if(stack.length === 0) return false;

            stack.pop();
        }
    }
    
    if(stack.length === 0) return true;
    else return false;
}