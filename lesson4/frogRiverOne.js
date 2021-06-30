function solution(X, A) {
  // write your code in JavaScript (Node.js 8.9.4)

  const set = new Set();

  for (let i = 0; i < A.length; i++) {
    set.add(A[i]);
    if (set.size === X) return i;
  }

  return -1;
}
