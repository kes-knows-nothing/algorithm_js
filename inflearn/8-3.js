function solution(v) {
  let answer;
  function DFS(v) {
    if (v > 7) {
      return;
    } else {
      console.log(v);
      DFS(v * 2);
      DFS(v * 2 + 1);
    }
  }
  DFS(v);
  return answer;
}

solution(1);

// 콘솔을 어디 두냐에 따라서 순회 방향이 달라진다.
// 전위순회 출력 1245367
// 중위순회 출력 4251637
// 후위순회 출력 4526731
