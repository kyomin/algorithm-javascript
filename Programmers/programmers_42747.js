function solution(citations) {
	var len = citations.length;
	var index = 0;

	// 내림차순 정렬
	function descent(a, b) {
		return b - a;
	}

	citations.sort(descent);

	while (index < len) {
		if (index >= citations[index]) break;

		index++;
	}

	return index;
}
