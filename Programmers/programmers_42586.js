function solution(progresses, speeds) {
    var answer = [];
    var days = [];

    for(let i=0; i<progresses.length; i++){
        let remain_progress = (100 - progresses[i]);
        let speed = speeds[i];
        let remain_day = parseInt(remain_progress / speed);

        if(remain_progress % speed !== 0)
            remain_day += 1;
        
        days.push(remain_day);
    }

    let cur_remain_day = days[0];
    let cnt = 1;

    for(let i=1; i<days.length; i++){
        if(days[i] <= cur_remain_day){
            cnt += 1;
            continue;
        }

        answer.push(cnt);
        cnt = 1;
        cur_remain_day = days[i];
    }

    answer.push(cnt);

    return answer;
}