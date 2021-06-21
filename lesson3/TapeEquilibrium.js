function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const sum = A.reduce((acc, val) => acc + val, 0);

  let subSum = 0;
  let min = Infinity;
  for (let i = 0; i < A.length - 1; i++) {
    const curr = A[i];
    subSum += curr;
    const subRemainSum = sum - subSum;

    min = Math.min(min, Math.abs(subSum - subRemainSum));
  }

  return min;
}
