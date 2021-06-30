function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let answer = Array(N).fill(0)
    let max = 0

    for(let i=0; i<A.length; i++) {
        const curr = A[i]
        if(curr <= N && curr >= 1) {
            answer[curr-1]++
            max = Math.max(max, answer[curr-1])
        } else if(curr === N+1) {
            answer = Array(N).fill(max)
        }
    }

    // console.log(answer)
    return answer
}