function solution(cacheSize, cities) {
	var answer = 0;
	var cache = [];

	if (cacheSize === 0) {
		return 5 * cities.length;
	}

	cities.forEach((city) => {
		city = city.toUpperCase(); // 편의를 위해 모두 대문자로 변환

		let temp = [...cache];

		if (cache.includes(city)) {
			// cache hit
			answer += 1;
			let idx = cache.indexOf(city);

			for (let i = idx + 1; i < cache.length; i++) {
				temp[i - 1] = cache[i];
			}

			temp[cache.length - 1] = city;
		} else {
			// cache miss
			answer += 5;

			if (cache.length === cacheSize) {
				for (let i = 0; i < cache.length - 1; i++) {
					temp[i] = cache[i + 1];
				}

				temp[cache.length - 1] = city;
			} else {
				temp.push(city);
			}
		}

		cache = [...temp];
	});

	return answer;
}
