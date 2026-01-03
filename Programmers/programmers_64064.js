let candidates = [];
let vc = [];
let results = [];
let total;

// 길이가 같은 두 배열이 완전히 같은 원소를 가지고 있는지 비교한다.
function isSameTwoArr(arr1, arr2) {
    let len = arr1.length;
    let isSame = true;

    for(let i=0; i<len; i++) {
        if(arr1[i] !== arr2[i]) {
            isSame = false;
            break;
        }
    }

    return isSame;
}

function dfs(idx) {
    // 끝에 도달한 경우
    if(idx === total) {
        let s = new Set(vc);

        // 중복 없이 조합이 만들어지면
        if(s.size === total) {
            let arr = [...s];
            arr.sort();
            let isNew = true;

            for(let i=0; i<results.length; i++) {
                if(isSameTwoArr(arr, results[i])) {
                    isNew = false;
                    break;
                }
            }

            if(isNew)
                results.push(arr);
        }
        
        return;
    }

    for(let i=0; i<candidates[idx].length; i++) {
        vc.push(candidates[idx][i]);

        dfs(idx+1);

        vc.pop();
    }
}

function solution(user_id, banned_id) {
    let answer = 0;
    total = banned_id.length;
    let bannedLen = total;
    let userLen = user_id.length;

    for(let banned=0; banned<bannedLen; banned++) {
        let bannedId = banned_id[banned];
        let bannedCandidate = [];

        for(let user=0; user<userLen; user++) {
            let userId = user_id[user];

            // 차단 후보가 될 수 없다.
            if(userId.length !== bannedId.length)
                continue;
            
            // 후보가 될 수 있는지 판단한다.
            let judge = true;
            let len = userId.length;

            for(let i=0; i<len; i++) {
                if(bannedId[i] === '*')
                    continue;
                
                if(bannedId[i] === userId[i])
                    continue;
                
                // 다른 것이 하나라도 있으면
                judge = false;
                break;
            }

            if(judge)
                bannedCandidate.push(userId);
        }

        candidates.push(bannedCandidate);
    }

    dfs(0);

    answer = results.length;
    
    return answer;
}