// scene("practice", () => {
//     // all objs are bound to a scene
//     add(/* ... */)
//     // all events are bound to a scene
//     keyPress(/* ... */)
// });




// let fibonacci = function (n) {
//   const memo = [0, 1];
//   const aux = (n) => {
//     // 이미 해결한 적이 있으면, 메모해둔 정답을 리턴한다.
//     if (memo[n] !== undefined) return memo[n];
//     // 새롭게 풀어야하는 경우, 문제를 풀고 메모해둔다.
//     memo[n] = aux(n - 1) + aux(n - 2);
//     return memo[n];
//   };
//   return aux(n);
// };