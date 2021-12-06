function solution(S) {
	let stack = [];

	for (let i = 0; i < S.length; i++) {
		let ch = S[i];

		if (ch === '(' || ch === '{' || ch === '[') {
			stack.push(ch);
			continue;
		}

		if (ch === ')' || ch === '}' || ch === ']') {
			let length = stack.length;
			if (length === 0) {
				return 0;
			}

			let lastElement = stack[length - 1];
			if (ch === ')') {
				if (lastElement === '(') {
					stack.pop();
					continue;
				} else {
					return 0;
				}
			} else if (ch === '}') {
				if (lastElement === '{') {
					stack.pop();
					continue;
				} else {
					return 0;
				}
			} else {
				if (lastElement === '[') {
					stack.pop();
					continue;
				} else {
					return 0;
				}
			}
		}
	}

	if (stack.length === 0) {
		return 1;
	} else {
		return 0;
	}
}
