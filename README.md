
### 1. 디렉토리 클릭 시 안에 들어있는 디렉토리, 파일 목록 렌더링하기

### 2. 디렉토리 클릭 시 부모 디렉토리에서 디렉토리 순서 '최근 방문 순'으로 업데이트 하기

### 3. 하위 디렉토리 목록 렌더링 시, 가장 왼쪽에 '상위 디렉토리' 버튼 만들기

### 4. 파일 클릭시 모달로 이미지 보여주기

### 5. 모달 창 떴을 때 모달 밖 누르거나 esc 누르면 모달 창 꺼지게 하기

### 6. breadcrumb 파트에 현재 경로 띄우기

### 7. breacrumb 파트의 폴더 누르면 그 폴더로 순간이동 하기

\- 디렉토리의 트리 형태에 관한 정보는 오로지 '현재 노드의 부모노드 번호'만 주어지고 현재 디렉토리의 노드 번호만 갖고는 조상노드들의 개수 및 이름을 알 수 없기 때문에, 순간이동 후 breadcrumb 파트에 현재 경로를 띄우는 알고리즘이 트리 순회를 요했음. 이 프로젝트에서 이 부분이 가장 구현이 곤란했으나 이 역시 어렵지는 않았음.

### 8. 디렉토리 클릭 시 로딩중 메시지 띄우기

### 9. 디렉토리 정보 캐시에 저장해두었다가 디렉토리 옮길 때 fetch 하지 않고 캐시에서 바로 꺼내 렌더링하기


### * 소감

\- 전체적으로 2020 데브매칭 과제에서 요하는 지식과 많이 겹치면서 그보다 적은 지식만을 요했고, 2020 데브매칭 과제를 막 구현한 바로 다음에 구현을 시작했기 때문에 전체적인 구현에 큰 어려움이 없었음. 딱히 새로 배운 코딩 지식도 그닥 없는 듯. (자바스크립트의 Object 객체에 원소를 추가하는 방식에 관해 배운 거 딱 하나 있는 듯.)

\- 그에 비할 때 생각보다 너무 많은 시간을 썼다는 점은 아쉬운 부분. '어디서 막혀서 시간이 끌렸다' 짚기도 애매. 다만 경험이 좀 더 쌓이면 더욱 빠른 시간 내에 구현할 수 있는 실력을 기를 수 있을 거라고 생각.