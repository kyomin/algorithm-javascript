function solution(s) {
	const table = {
		zero: '0',
		one: '1',
		two: '2',
		three: '3',
		four: '4',
		five: '5',
		six: '6',
		seven: '7',
		eight: '8',
		nine: '9',
	};
	var ans = '';

	function isDigit(char) {
		if (char.match(/^\d{1,}$/) !== null) {
			return true;
		}

		return false;
	}

	let temp = '';
	for (let i = 0; i < s.length; i++) {
		let char = s[i];
		if (isDigit(char)) {
			ans += char;
			continue;
		}

		temp += char;
		if (table[temp]) {
			ans += table[temp];
			temp = '';
		}
	}

	return Number(ans);
}
