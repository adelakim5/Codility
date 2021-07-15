function solution(A) {
  const obj = {};

  const half = A.length % 2 === 0 ? A.length / 2 + 1 : Math.ceil(A.length / 2);
  for (let i = 0; i < A.length; i++) {
    const key = A[i];
    if (obj[key]) obj[key][1]++;
    else obj[key] = [i, 1];
  }

  for (let [key, value] of Object.entries(obj)) {
    const [index, cnt] = value;

    if (cnt >= half) return index;
  }

  return -1;
}
