function solution(X, Y, D) {
    let diff = Y - X;
    let q = Math.floor(diff / D);
    let r = diff % D;

    if(r !== 0) q++;

    return q;
}