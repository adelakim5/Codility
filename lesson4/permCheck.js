function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  const checks = Array(A.length + 1).fill(false);

  for (let num of A) {
    if (checks[num]) return 0;
    checks[num] = true;
  }

  for (let i = 1; i < checks.length; i++) {
    if (!checks[i]) return 0;
  }

  return 1;
}
