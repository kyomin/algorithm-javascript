function solution(arr1, arr2) {
    let answer = [];
    let R = arr1.length;
    let C1 = arr1[0].length;
    let C2 = arr2[0].length;

    for(let r=0; r<R; r++) {
        let temp = [];

        for(let c2=0; c2<C2; c2++) {
            let sum = 0;

            for(let c1=0; c1<C1; c1++) 
                sum += arr1[r][c1]*arr2[c1][c2];
            
            temp.push(sum);
        }

        answer.push(temp);
    }

    return answer;
}