var isValid = function(s) {
    let stack = [];
    let parentheses = ['(', '{', '['];

    for(let i=0; i<s.length; i++) {
        let ch = s[i];

        // 여는 괄호라면 그냥 넣어주기
        if(parentheses.indexOf(ch) !== -1) {
            stack.push(ch);
            continue;
        }

        // 닫는 괄호인 경우 처리
        if(stack.length === 0) 
            return false;

        let open_parenthese = stack.pop();

        if(ch === ')' && open_parenthese !== '(') return false;
        if(ch === '}' && open_parenthese !== '{') return false;
        if(ch === ']' && open_parenthese !== '[') return false;
    }

    if(stack.length === 0) return true;
    else return false;
};