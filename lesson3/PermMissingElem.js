function solution(A) {
  const N = A.length;
  if (N === 0) return 1;
  const visited = Array(N + 2).fill(false);
  for (let i = 0; i < A.length; i++) {
    visited[A[i]] = true;
  }
  for (let i = 1; i <= N + 1; i++) {
    if (visited[i] === false) return i;
  }
}
