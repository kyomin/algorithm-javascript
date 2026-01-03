function solution(clothes) {
    let answer = 1;
    let obj = {};

    clothes.forEach((choth, index) => {
        if(!obj[choth[1]])
            obj[choth[1]]=1;
        else
            obj[choth[1]]+=1;
    });

    const keys = Object.keys(obj);

    keys.forEach((key, index) => {
        answer *= (obj[key]+1);
    });

    return answer-1;
}