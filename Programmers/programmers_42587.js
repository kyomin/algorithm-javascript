function solution(priorities, location) {
    let answer = 0;
    let idxAndPriorities = [];

    priorities.forEach((priority, idx) => {
        let idxAndPriority = {
            idx,
            priority
        };

        idxAndPriorities.push(idxAndPriority);
    });

    let order = 1;      // 첫 순서는 1로 잡는다.
    
    while(idxAndPriorities.length !== 0) {
        let found = false;
        let curIdxAndPriority = idxAndPriorities[0];

        for(let i=1; i<idxAndPriorities.length; i++) {
            let idxAndPriority = idxAndPriorities[i];

            // 우선순위가 높은 것이 발견된다면
            if(idxAndPriority.priority > curIdxAndPriority.priority){
                found = true;
                break;
            }
        }

        // 우선순위가 높은 것이 발견됐다면 맨 뒤로 보내는 작업을 한다.
        if(found) {
            idxAndPriorities.splice(0, 1);
            idxAndPriorities.push(curIdxAndPriority);
        } else{     // 첫 번째 원소가 가장 우선순위가 높은 것이라면
            // 그리고 첫 번째 원소의 인덱스가 location과 일치한다면
            if(curIdxAndPriority.idx === location){
                answer = order;
                break;
            } else {    // 첫 번째 원소의 인덱스가 location과 일치하지 않는다면
                idxAndPriorities.splice(0, 1);  // 첫 번째 원소 처리 후
                order += 1;
            }
        }
    }

    return answer;
}