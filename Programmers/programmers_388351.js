function solution(schedules, timelogs, startday) {
  let answer = 0;

  schedules.forEach((schedule, index) => {
    // 출근 인정 시각 계산
    let hour = Math.floor(schedule / 100);
    let minutes = schedule % 100;

    minutes += 10;

    if (minutes >= 60) {
      hour += 1;
      minutes = minutes % 60;
    }

    hour *= 100;

    const computedSchedule = hour + minutes;
    const timelog = timelogs[index];

    let flag = true;
    let curDay = startday - 1;

    for (let i = 0; i < 7; i++) {
      curDay += 1;

      if (curDay > 7) {
        curDay %= 7;
      }

      // 주말은 무시
      if (curDay == 6 || curDay == 7) continue;

      let curTimelog = timelog[i];

      // 시간이 지켜지지 않은 경우라면
      if (curTimelog > computedSchedule) {
        flag = false;
        break;
      }
    }

    if (flag) {
      answer++;
    }
  });

  return answer;
}
