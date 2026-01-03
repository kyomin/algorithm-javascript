function solution(n) {
	var ans = 0;

	if (n === 1) return 1;

	while (n > 1) {
		let q = Math.floor(n / 2);
		let r = n % 2;

		if (r === 1) ans += 1;

		if (q === 1) {
			ans += 1;
			break;
		}

		n = Math.floor(n / 2);
	}

	return ans;
}
