function solution(S, P, Q) {
  let answer = [];

  const obj = {
    A: 1,
    C: 2,
    G: 3,
    T: 4,
  };

  const getMin = (between) => {
    for (let [key, value] of Object.entries(obj)) {
      if (between.includes(key)) return value;
    }
  };

  const k = P.length;

  for (let i = 0; i < k; i++) {
    const p = P[i];
    const q = Q[i];

    if (p === q) answer.push(obj[S[p]]);
    else {
      const between = S.slice(p, q + 1);
      answer.push(getMin(between));
    }
  }

  return answer;
}
