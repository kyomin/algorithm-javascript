class Queue {           // Queue 자료구조 클래스 정의
    constructor() {
        this.arr = [];
        this.length = 0;
    }

    push(element) {
        this.arr.unshift(element);
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

    front() {
        return this.arr[this.length-1];
    }
}