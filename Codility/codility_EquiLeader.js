function solution(A) {
  let answer = 0;

  const rightObj = {};
  let rightLength = A.length;

  A.forEach((num) => {
    rightObj[num] = (rightObj[num] || 0) + 1;
  });

  const leftObj = {};
  let leftLength = 0;
  let leftLeader = 0;
  let leftLeaderCount = 0;

  A.forEach((num) => {
    rightObj[num] -= 1;
    rightLength -= 1;

    leftObj[num] = (leftObj[num] || 0) + 1;
    leftLength += 1;

    if (leftObj[num] > leftLeaderCount) {
      leftLeader = num;
      leftLeaderCount = leftObj[num];
    }

    if (
      rightObj[leftLeader] > parseInt(rightLength / 2) &&
      leftLeaderCount > parseInt(leftLength / 2)
    ) {
      answer++;
    }
  });

  return answer;
}
