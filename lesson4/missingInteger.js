function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const ints = Array(1000001).fill(false);
  for (let num of A) {
    if (num <= 0) continue;
    if (!ints[num]) ints[num] = true;
  }

  for (let i = 1; i < ints.length; i++) {
    if (!ints[i]) return i;
  }
}
