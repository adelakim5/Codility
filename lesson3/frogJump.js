function solution(X, Y, D) {
  // 시간초과
  let cnt = 0;
  while (X < Y) {
    X += D;
    cnt++;
  }
  return cnt;
}

function solution(X, Y, D) {
  let answer = 0;
  const dist = Y - X;
  const mok = Math.floor(dist / D);
  const nmg = dist % D;
  if (nmg) answer = mok + 1;
  else answer = mok;

  return answer;
}
