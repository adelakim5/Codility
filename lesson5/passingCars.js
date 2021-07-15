function solution(A) {
  let cnt = 0;
  let size = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) size++;
    else cnt += size;
  }

  if (cnt > 1000000000) return -1;
  return cnt;
}
