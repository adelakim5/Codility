function solution(A, B, K) {
  let init = 0;

  for (let i = A; i <= B; i++) {
    if (i % K === 0) {
      init = i;
      break;
    }
  }

  if (init === B) return 1;
  return Math.floor(B / K) - init / K + 1;
}
