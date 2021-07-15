function solution(A) {
  A.sort((a, b) => b - a);

  if (A.length === 3) return A.reduce((acc, val) => acc * val, 1);

  let arr = [];

  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) continue;
    if (arr.length === 3) break;
    arr.push(A[i]);
  }

  const one = A[0] * A[1] * A[2];
  const two = arr.reduce((acc, val) => acc * val, 1);
  const three = A[0] * A[A.length - 1] * A[A.length - 2];

  return Math.max(one, two, three);
}
