# Redux & MobX

관계/flow를 직접 그려보자!!

## Redux와 MobX와 ContextAPI

- 둘다 리액트와 상관있는 개념은 아니다. 다만 리액트와 같이 많이 사용할 뿐이다. (리액트 자체에서는 상태관리 없기 때문)
- 둘다 상태관리 방식이다
- ContextAPI와 Redux/MobX와의 관계는 자바스크립트와 제이쿼리의 관계라고 생각하면된다. 더편리하게 사용할 수 있다는 느낌... 이미 기능들이 만들어져 있기 때문에

### 필요성

컴포넌트 내부에서는 state 변경이 쉽다.

부모-자식간에서 state를 변경하려면 이제 머리가 아파진다....

- 자식이 부모의 state를 바꾸려면..? (props사용)
- 부모가 자식의 state를 바꾸려면..?
- 엄청난 depth의 자식의 state를 바꾸려면..? (고조 할아버지)

이런 깊은 깊이의 컴포넌트간의 상태 변경을 위해서 ContextAPI가 생겨난 것이고, ContextAPI에 추가적으로 편의기능을 붙이면 Redux, MobX가 되는 것이다.

## Redux

[공식문서](https://redux.js.org/introduction/getting-started)

- fulx패턴에서 발전되었다. ( ⇒ 기존의 양방향통신시에 발생하는 문제들을 해결하기 위해 `단방향`으로 통신하는 방식)
- 함수형프로그래밍의 철학이 녹아있다. ( 만든사람이 함수형 빠)
- `불변성` 때문에 이전 state추적이 가능하다.
- 캐싱 활용

리덕스에서 컴포넌트의 state를 따로 관리해준다. 그렇지만 꼭 component안에서 state를 쓰면 안되는 것은아니다! Redux가 `컴포넌트간에서 state 변경`이 어려워 탄생했기에 컴포넌트 자체 내부에서만 쓰는 state가튼 경우엔 redux에 위임하지 않는 방법이 더 깔끔하겠지?

![](https://miro.medium.com/max/1200/1*3lvNEQE4SF6Z1l-680cfSQ.jpeg)
![](https://hackernoon.com/hn-images/0*cntBtPADjE2ykLSP.png)

### Store

- 데이터(state) 묶음

### Action

- state를 어떻게 바꿀지에 대한 행동

### Dispatch

- 액션을 실행
- state를 dispatch를 통해서만 변경하기 때문에 에러가 적게 나고 에러 탐지가 쉽다

### Reducer

- dispatch를 통해 만들어진 새로운 state를 생성하여 기존 state에 덮어씌운다.
- 수정 x. 새로운 객체를 만들어 덮어씌운다.

단점

- action이 많아질수록 reducer가 엄청 길어진다.
