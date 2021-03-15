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