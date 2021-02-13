function solution(array, commands) {
    let answer = [];

    for(let i=0; i<commands.length; i++) {
        let start = commands[i][0];
        let end = commands[i][1];
        let k = commands[i][2];

        let temp = array.slice(start-1, end);

        temp.sort(function(a, b) {
            return a-b;
        });

        answer.push(temp[k-1]);
    }

    return answer;
}