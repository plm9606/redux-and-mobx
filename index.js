const { createStore } = require("redux");
const reducer = require("./reducer");
const log = (str, ...rest) => {
  return console.log(str, ...rest);
};

const initialState = {
  compA: null,
  compB: 123,
  compC: null,
  user: null,
  posts: ["hihihi"]
};

const store = createStore(reducer, initialState);

// react-redux안에 들어있
store.subscribe(() => {
  // 화면 바꿔주는 코드
  log(`changed`);
});
log("first", store.getState());

// 객체가 action이다
// action 생성자
const login = data => {
  return {
    type: "LOGIN",
    value: data
  };
};

const logout = data => {
  return {
    type: "LOGOUT"
  };
};

const editPost = data => {
  return {
    type: "CHANGE_POST",
    value: data
  };
};

store.dispatch(login({ id: "happy123", name: "kim" }));
log(store.getState());

store.dispatch(editPost({ id: 1, content: "heloo" }));
log(store.getState());

store.dispatch(editPost({ id: 2, content: "study hard" }));
log(store.getState());

store.dispatch(logout());
log(store.getState());
