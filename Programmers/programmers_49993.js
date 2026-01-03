function solution(skill, skill_trees) {
    var answer = 0;

    skill_trees.forEach((cur_skill, idx) => {
        let str = "";

        for(let i=0; i<cur_skill.length; i++)
            if(skill.indexOf(cur_skill[i]) !== -1)
                str += cur_skill[i];
        
        if(skill.substr(0, str.length) === str)
            answer += 1;
    })

    return answer;
}