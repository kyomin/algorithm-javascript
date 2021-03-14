function solution(arr1, arr2) {
    let answer = [];
    let R = arr1.length;
    let C = arr1[0].length;

    for(let r=0; r<R; r++) {
        let temp = [];

        for(let c=0; c<C; c++) {
            let sum = arr1[r][c] + arr2[r][c];

            temp.push(sum);
        }

        answer.push(temp);
    }

    return answer;
}