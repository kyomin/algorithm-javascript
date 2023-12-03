function solution(bandage, health, attacks) {
	let answer = health;
	let continuous = 0; // 연속 성공
	let castingTime = bandage[0]; // 시전 시간
	let recoveryPerSecond = bandage[1]; // 초당 회복량
	let extraRecovery = bandage[2]; // 추가 회복량
	let lastTime = 0; // 몬스터의 마지막 공격 시간
	let last = attacks.length;
	const attackTimeAndDamage = {};

	attacks.forEach((attack, index) => {
		const attackTime = attack[0];
		const damage = attack[1];

		attackTimeAndDamage[attackTime] = damage;

		if (index === last - 1) {
			lastTime = attackTime;
		}
	});

	for (let t = 1; t <= lastTime; t++) {
		const damage = attackTimeAndDamage[t];

		if (damage) {
			answer -= damage;
			continuous = 0; // 연속 성공 초기화
		} else {
			answer += recoveryPerSecond;
			continuous += 1;
		}

		// 시전 시간까지 연속으로 감은 경우
		if (continuous == castingTime) {
			answer += extraRecovery;
			continuous = 0;
		}

		// 최대 체력을 넘긴 경우
		if (answer >= health) answer = health;

		// 체력이 0 이하가 된 경우
		if (answer <= 0) {
			answer = -1;
			break;
		}
	}

	return answer;
}
