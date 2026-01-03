function solution(N, A) {
    let current_max = 0;
    let last_called_max = 0;
    let counters = [];

    // 배열 초기화
    for(let i=0; i<N; i++)
        counters.push(0);

    for(let i=0; i<A.length; i++) {
        if(A[i] === N+1) {      // 모든 카운터의 값을 max counter의 값으로 set하는 순간
            last_called_max = current_max;
        } else {
            let counter = A[i] - 1;     // 인덱스를 맞춰주기 위함
            
            // 이미 한 번 max_counter로 호출된 순간이 존재하며, 그때 갱신하지 않은 경우이다.
            if(counters[counter] < last_called_max) 
                counters[counter] = last_called_max + 1;
            else 
                counters[counter]++;

            // 현재 max 값 갱신
            if(counters[counter] > current_max) 
                current_max = counters[counter];
        }
    }

    // 마지막에 호출된 max_count보다 작다면 반영이 안 된 것이므로 반영해준다.
    for(let i=0; i<N; i++)
        if(counters[i] < last_called_max)
            counters[i] = last_called_max;
    
    return counters;
}