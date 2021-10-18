function solution(people, limit) {
	var answer = 0;
	var len = people.length;
	var low = 0;
	var high = len - 1;

	// 오름차순 정렬
	function ascent(a, b) {
		return a - b;
	}

	people.sort(ascent);

	while (low <= high) {
		if (people[low] + people[high] <= limit) {
			low++;
			high--;
		} else high--;

		answer++;
	}

	return answer;
}
