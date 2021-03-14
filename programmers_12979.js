function solution(n, stations, w) {
    let answer = 0;
    let distance = [];

    // 설치된 기지국 사이에 전파가 닿지 않는 거리를 저장한다.
    for(let i=1; i<stations.length; i++)
        distance.push( (stations[i]-w-1) - (stations[i-1]+w) );

    // 맨 앞 기지국에서 첫 번째 아파트 사이에 전파가 되지 않은 거리
    distance.push(stations[0]-w-1);

    // 맨 뒤 기지국에서 마지막 아파트 사이에 전파가 되지 않은 거리
    distance.push(n-(stations[stations.length-1]+w));

    for(let i=0; i<distance.length; i++) {
        let dist = distance[i];

        // 전파되지 않은 거리가 0 이하일 경우 스킵한다.
        if(dist <= 0) continue;

        answer += Math.ceil(dist/((w*2)+1));
    }

    return answer;
}