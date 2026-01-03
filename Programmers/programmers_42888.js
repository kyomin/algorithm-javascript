function solution(record) {
    let room = new Map();   // 유저들을 담는 방
    let events = [];        // 메시지 담는 벡터
    let status = [];        // 들어오고 나가고 변경하는 기록 담기
    let len = record.length;

    for(let i=0; i<len; i++) {
        let temp = record[i].split(' ');
        let command = temp[0];
        let uid = temp[1];
        let name = temp[2];

        // 방에 입장한 것이라면
        if(command === 'Enter') {
            // 만일 room에 추가된 적 없는 key라면
            if(!room.has(uid)) {
                // room에 추가하고
                room.set(uid, name);

                // 이벤트 메시지에 추가
                status.push([uid, '님이 들어왔습니다.']);
            } 
            // 만일 이미 room에 있는 것이라면 나갔다 들어온 것이다.
            else {    
                // 이벤트 메시지만 추가
                status.push([uid, '님이 들어왔습니다.']);

                // 다시 들어올 때 설정한 아이디로 변경
                room.set(uid, name);
            }
        } 
        // 나가는 경우
        else if(command === 'Leave') {
            /* 
                이벤트 메시지만 추가해준다.
                room에서 따로 빼 내지는 않는다.
                왜냐하면 key에 대응하는 닉네임으로 접근해야 하기 때문이다.
            */
            status.push([uid, '님이 나갔습니다.']);
        }
        // 닉네임을 변경하는 경우
        else {
            room.set(uid, name);
        }
    }

    for(let i=0; i<status.length; i++) {
        let uid = status[i][0];
        let message = status[i][1];
        let name = room.get(uid);

        events.push(name + message);
    }

    return events;
}