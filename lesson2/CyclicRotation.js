function solution(A, K) {
  const nmg = K % A.length;
  const set = new Set(A);
  if (nmg === 0 || !A.length || set.size === 1) return A;
  for (let i = 0; i < K; i++) {
    const last = A.pop();
    A.unshift(last);
  }
  return A;
}

// 예외처리를 안해줘서 계속 틀렸다. 빈배열이 들어올때를 왜 확인안해 바보야..
