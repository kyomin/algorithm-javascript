const alphas = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
];

const isSkiped = (alpha, skip) => {
	const len = skip.length;

	for (let i = 0; i < len; i++) {
		if (skip[i] === alpha) return true;
	}

	return false;
};

const getIndex = (alpha) => {
	for (let i = 0; i < 26; i++) {
		if (alphas[i] === alpha) return i;
	}
};

function solution(s, skip, index) {
	let answer = '';

	for (const alpha of s) {
		let cnt = 1;
		let curIndex = getIndex(alpha);

		while (cnt <= index) {
			curIndex++;

			if (curIndex === 26) curIndex = 0;
			if (isSkiped(alphas[curIndex], skip)) continue;

			cnt++;
		}

		answer += alphas[curIndex];
	}

	return answer;
}
