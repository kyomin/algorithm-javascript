class Stack {
    constructor() {
        this.arr = [];
        this.length = 0;
    }

    push(element) {
        this.arr.push(element);
        this.length += 1;
    }

    pop() {
        this.arr.pop();
        this.length -= 1;
    }

    empty() {
        if(this.arr.length === 0) return true;
        else return false;
    }

    top() {
        return this.arr[this.length-1];
    }
}

function solution(s) {
    let stack = new Stack();
    let len = s.length;

    for(let i=0; i<len; i++) {
        if(stack.empty()) {
            stack.push(s[i]);
            continue;
        }

        if(stack.top() === s[i]) {
            stack.pop();
            continue;
        }

        stack.push(s[i]);
    }

    if(stack.empty()) return 1;
    else return 0;
}