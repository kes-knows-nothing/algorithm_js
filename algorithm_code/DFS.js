// 각 노드가 연결된 정보를 표현
graph = [[], [2, 3, 4], [1], [1, 5, 6], [1, 7], [3, 8], [3], [4], [5]];

// 각 노드가 방문된 정보를 표현
visited = Array(9).fill(false);

// 정의된 DFS 함수 호출
dfs(graph, 1, visited);

// DFS 메서드 정의
function dfs(graph, v, visited) {
  // 현재 노드를 방문 처리
  visited[v] = true;
  console.log(v);
  //  현재 노드와 연결된 다른 노드를 재귀적으로 방문
  for (i of graph[v]) {
    // 0. visited[1] = true로 되고 1이 console.log에 찍힌다.
    // 1. graph[1]은 [2, 3, 4] 이 배열을 순회하면 각 원소들이 나오게 된다.
    // 2. 2, 3, 4가 차례로 나오는데 visited[2], visited[3], visited[4]가 들어간다.
    // 초기 이들의 값은 모두 false이다.
    if (!visited[i]) {
        // 초기 visited[2] 은 false이다. false면 true로 바뀌어 재귀함수를 호출한다.
      dfs(graph, i, visited);
    // 3. dfs(graph, 2, visited)가 실행되고 visited[2]은 true로 변경되고 
    // console.log(v)는 2를 출력하게 된다. 
    // graph[2]는 [1] 배열로 다시 반복으로 들어가게 되는데
    // 
    }
  }
}

// DFS 기본 동작 방식
// 1. 시작 노드를 스택에 넣고 [방문 처리]한다.
// 2. 스택에 마지막으로 들어 온 노드에 방문하지 않은 인접 노드가 있는지 확인한다.
// - 있다면, 방문하지 않은 인접 노드를 스택에 삽입하고 방문 처리 한다.
// - 없다면, 현재 노드(스택에 마지막으로 들어 온 노드)를 스택에서 추출한다.
// 3. 2번 과정을 더 이상 반복할 수 없을 때까지 반복한다.