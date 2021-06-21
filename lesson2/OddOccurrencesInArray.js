function solution(A) {
  let map = new Map();
  for (let i = 0; i < A.length; i++) {
    const key = A[i];
    if (map.has(key)) {
      const value = map.get(key);
      map.set(key, value + 1);
    } else map.set(key, 1);
  }

  for (let [key, value] of map) {
    if (value % 2 !== 0) return key;
  }
}
