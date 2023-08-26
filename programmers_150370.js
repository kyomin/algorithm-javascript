function solution(today, terms, privacies) {
	const answer = [];

	let todayWithoutDot = '';
	for (let i = 0; i < today.length; i++) {
		if (today[i] === '.') continue;

		todayWithoutDot += today[i];
	}

	const numberToday = parseInt(todayWithoutDot, 10);
	const termsMap = {};
	terms.forEach((term) => {
		const splitTerm = term.split(' ');
		const termType = splitTerm[0];
		const expirationDate = parseInt(splitTerm[1], 10);

		termsMap[termType] = expirationDate;
	});

	privacies.forEach((privacy, i) => {
		const splitPrivacy = privacy.split(' ');
		const collectionDate = splitPrivacy[0];
		const termType = splitPrivacy[1];
		const expirationDate = termsMap[termType];
		const addYear = Math.floor(expirationDate / 12);
		const splitCollectionDate = collectionDate.split('.');

		let year = parseInt(splitCollectionDate[0], 10);
		let month = parseInt(splitCollectionDate[1], 10);
		let date = parseInt(splitCollectionDate[2], 10);

		year += addYear;
		month += expirationDate % 12;

		if (month > 12) {
			year += Math.floor(month / 12);
			month = month % 12;
		}

		let stringYear = year.toString();
		let stringMonth = month.toString();
		let stringDate = date.toString();

		if (stringMonth.length === 1) stringMonth = '0' + stringMonth;
		if (stringDate.length === 1) stringDate = '0' + stringDate;

		const targetDate = stringYear + stringMonth + stringDate;
		const numberTargetDate = parseInt(targetDate, 10);

		if (numberToday >= numberTargetDate) answer.push(i + 1);
	});

	return answer;
}
