function solution(n) {
	var answer = '';

	while (n > 0) {
		switch (n % 3) {
			case 1:
				answer = '1' + answer;
				n = Math.floor(n / 3);
				break;
			case 2:
				answer = '2' + answer;
				n = Math.floor(n / 3);
				break;
			case 0:
				answer = '4' + answer;
				n = n / 3 - 1;
				break;
		}
	}

	// 문자열 뒤집어서 리턴
	return answer;
}
