function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let min = (A[0] + A[1]) / 2;

  let minIndex = 0;

  for (let i = 2; i < A.length; i++) {
    let avg = (A[i - 2] + A[i - 1] + A[i]) / 3;

    if (min > avg) {
      min = avg;
      minIndex = i - 2;
    }

    avg = (A[i - 1] + A[i]) / 2;

    if (min > avg) {
      min = avg;
      minIndex = i - 1;
    }
  }

  return minIndex;
}
