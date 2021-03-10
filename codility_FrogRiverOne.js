function solution(X, A) {
    const s = new Set();

    for(i=0; i<A.length; i++) {
        const value = A[i];
        s.add(value);

        if(s.size === X)
            return i;
    }

    return -1;
}