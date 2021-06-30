function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let answer = Array(N).fill(0);
  let currMax = 0;
  let lastMax = 0;

  for (let i = 0; i < A.length; i++) {
    const value = A[i];
    if (value === N + 1) lastMax = currMax;
    else {
      if (answer[value - 1] < lastMax) answer[value - 1] = lastMax + 1;
      else answer[value - 1]++;
      if (answer[value - 1] > currMax) currMax = answer[value - 1];
    }
  }

  for (let i = 0; i < N; i++) {
    if (answer[i] < lastMax) answer[i] = lastMax;
  }

  return answer;
}
