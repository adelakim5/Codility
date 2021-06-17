function solution(N) {
  const bin = N.toString(2);
  let stack = [];
  let max = 0;
  for (let i = 0; i < bin.length; i++) {
    if (stack.length === 0 && bin[i] === "1") stack.push(bin[i]);
    else if (stack.length && bin[i] === "0") stack.push(bin[i]);
    else if (stack.length > 1 && bin[i] === "1") {
      max = Math.max(max, stack.length - 1);
      stack = [];
      stack.push(bin[i]);
    }
  }
  return max;
}
