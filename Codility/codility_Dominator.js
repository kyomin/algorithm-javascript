function solution(A) {
  let ans = -1;

  const mid = A.length / 2;
  const map = {};

  A.forEach((num) => {
    map[num] = (map[num] || 0) + 1;
  });

  for (const [key, value] of Object.entries(map)) {
    if (map[key] > mid) {
      ans = A.indexOf(Number(key));
    }
  }

  return ans;
}
