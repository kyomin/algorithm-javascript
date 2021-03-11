function solution(k, room_number) {
    let answer = [];
    let room_num;
    let other_room_num;
    let len = room_number.length;

    /* 
        key : 배정된 방 번호
        value : 다음 고객이 찾을 때, 그 다음 가능한 방 번호
    */
    let room_map = new Map();

    function findAvailableRoomNum(num) {
        // 만약 아직 배정된 방이 아니라면
        if(!room_map.get(num)) {
            return num;
        } else {
            // 이미 배정되었다면 다음 가능한 방으로
            room_map.set(num, findAvailableRoomNum(room_map.get(num)));
            return room_map.get(num);
        }
    }

    for(let i=0; i<len; i++) {
        room_num = room_number[i];

        // 가능한 방이라면
        if(!room_map.get(room_num)) {
            answer.push(room_num);      // 결과에 바로 넣어주고
            room_map.set(room_num, findAvailableRoomNum(room_num + 1));    // 같은 요청에 대해 다음 방을 가리키게 한다.
        } 
        // 이미 차 있는 방이라면
        else {  
            other_room_num = findAvailableRoomNum(room_num);
            answer.push(other_room_num);
            room_map.set(other_room_num, findAvailableRoomNum(other_room_num + 1));
        }
    }

    return answer;
}