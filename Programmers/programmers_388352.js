function solution(n, q, ans) {
  let answer = 0;

  const N = n;
  const M = ans.length;

  const combination = [];
  const inputs = [];
  const response = ans;

  // DFS로 조합을 구한다
  const dfs = (start, depth) => {
    // 5개를 뽑은 조합이 완성되었다면
    if (depth === 5) {
      const code = new Set([...combination]);

      let flag = true;

      for (let i = 0; i < M; i++) {
        const input = inputs[i];
        const ans = response[i];

        // 교집합 구하기
        const intersection = (a, b) => new Set([...a].filter((v) => b.has(v)));

        const result = intersection(code, input);

        if (result.size === ans) {
          continue;
        }

        // 해당 시도 입력을 만족하지 않는 경우
        if (result.size !== ans) {
          flag = false;
          break;
        }
      }

      if (flag) {
        answer++;
      }

      return;
    }

    for (let i = start; i <= N; i++) {
      combination.push(i);

      dfs(i + 1, depth + 1);

      combination.pop();
    }
  };

  // 교집합을 위해 vector -> set 변환
  q.forEach((input) => {
    const s = new Set(input);

    inputs.push(s);
  });

  // 조합 탐색 시작
  dfs(1, 0);

  return answer;
}
