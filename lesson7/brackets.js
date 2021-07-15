function solution(S) {
  const stack = [];
  for (let i = 0; i < S.length; i++) {
    const curr = S[i];
    if (curr === "{" || curr === "(" || curr === "[") {
      stack.push(curr);
    } else {
      if (!stack.length) return 0;
      const last = stack[stack.length - 1];
      if (last === "{" && curr === "}") stack.pop();
      else if (last === "[" && curr === "]") stack.pop();
      else if (last === "(" && curr === ")") stack.pop();
    }
  }

  return stack.length ? 0 : 1;
}
