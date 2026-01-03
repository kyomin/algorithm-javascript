function solution(arr) {
	var answer = 0;
	var sum = 0;
	const len = arr.length;

	for (let i = 0; i < len; i++) sum += arr[i];

	answer = sum / len;

	return answer;
}
