class Heap {
    constructor(compareFunc) {
        if(compareFunc) this.compareFunc = compareFunc;
        else this.compareFunc = this.defaultCompareFunc;

        this.heap = [];
    }

    // 디폴트는 최소 힙을 만드는 비교 함수이다.
    // true를 반환하면 child의 우선순위가 더 높은 것이다.
    // 즉, child의 우선순위를 높게 설정한 대로 힙의 구조가 잡힌다.
    defaultCompareFunc(parent, child) {
        if(parent > child) return true;
        else return false;
    }

    getLeftChildIndex(parentIndex) {
        return (parentIndex*2) + 1;
    }

    getRightChildIndex(parentIndex) {
        return (parentIndex*2) + 2;
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex-1)/2);
    }

    peek() {
        return this.heap[0];
    }

    insert(value) {
        this.heap.push(value);      // 일단 값을 push하고
        this.heapifyUp();           // 우선순위를 비교하는 과정을 거친다.
    }

    heapifyUp() {
        let index = this.heap.length-1;     // 계속해서 변하는 index 값
        const lastInsertedNode = this.heap[index];

        // 루트 노드가 되기 전까지
        while(index > 0) {
            const parentIndex = this.getParentIndex(index);

            /* 
                부모 노드의 값이 마지막에 삽입된 노드의 키 값보다 크다면
                부모의 자리를 계속해서 아래로 내린다.
            */
            if(this.compareFunc(this.heap[parentIndex], lastInsertedNode)) {
                this.heap[index] = this.heap[parentIndex];
                index = parentIndex;
            } else break;
        }

        /* 
            break를 만나서 자신의 자리를 찾은 상황이다.
            마지막에 찾아진 곳이 가장 나중에 들어온 노드가 들어갈 자리다.
        */
        this.heap[index] = lastInsertedNode;
    }

    remove() {
        const count = this.heap.length;
        const rootNode = this.heap[0];

        if(count <= 0) return undefined;
        if(count === 1) this.heap = [];
        else {
            this.heap[0] = this.heap.pop(); // 끝에 있는 노드를 제거하면서 그 값을 부모 노드로 만들고
            this.heapifyDown();             // 다시 최소 힙의 형태를 갖추도록 한다.
        }

        return rootNode;
    }

    // 변경된 루트노드가 제 자리를 찾아가도록 하는 함수
    heapifyDown() {
        let index = 0;
        const count = this.heap.length;
        const rootNode = this.heap[index];

        // 계속해서 left child가 있을 때 까지 검사한다.
        while(this.getLeftChildIndex(index) < count) {
            const leftChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);

            /* 
                왼쪽, 오른쪽 중에 우선순위가 더 큰 노드를 찾는다.
                rightChild가 있다면 key의 값을 비교해서 더 작은 값을 찾는다.
                없다면 leftChild가 더 작은 값을 가지는 인덱스가 된다.
            */
            const higherPriorityChildIndex = 
                rightChildIndex < count && this.compareFunc(this.heap[leftChildIndex, this.heap[rightChildIndex]])
                ? rightChildIndex
                : leftChildIndex;
            
            // 자식 노드의 우선순위가 루트 노드보다 크다면 위로 끌어올린다.
            if(this.compareFunc(rootNode, this.heap[higherPriorityChildIndex])) {
                this.heap[index] = this.heap[higherPriorityChildIndex];
                index = higherPriorityChildIndex;
            } else break;
        }

        this.heap[index] = rootNode;
    }
}

// 비교 함수를 전달하지 않으면, 디폴트로 '최소 힙'이 된다!
class PriorityQueue extends Heap {
    constructor(compareFunc) {
        super(compareFunc);
    }

    enqueue(value) {
        this.insert(value);
    }

    dequeue() {
        this.remove();
    }

    isEmpty() {
        if(this.heap.length <= 0) return true;
        else return false;
    }
}