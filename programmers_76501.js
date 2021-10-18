function solution(absolutes, signs) {
	var answer = 0;
	var len = absolutes.length;

	for (let i = 0; i < len; i++) {
		let num = absolutes[i];
		let sign = signs[i];

		if (sign) answer += num;
		else answer += num * -1;
	}

	return answer;
}
