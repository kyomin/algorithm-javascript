function solution(A) {
	function descent(a, b) {
		return b - a;
	}
	A.sort(descent);
	var len = A.length;
	return Math.max(A[0] * A[1] * A[2], A[0] * A[len - 1] * A[len - 2]);
}
