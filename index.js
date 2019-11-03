const { createStore } = require("redux");
const reducer = require("./reducer");
const { editPost } = require("./actions/post");
const { login, logout } = require("./actions/user");
const log = (str, ...rest) => {
  return console.log(str, ...rest);
};

const initialState = {
  user: { isLoggingIn: true, data: null },
  posts: [],
  comments: [],
  favorites: [],
  history: [],
  likes: [],
  followers: []
};

const store = createStore(reducer, initialState);

// react-redux안에 들어있
store.subscribe(() => {
  // 화면 바꿔주는 코드
  log(`changed`);
});
log("first", store.getState());

store.dispatch(login({ id: "happy123", name: "kim" }));
log(store.getState());

store.dispatch(editPost({ id: 1, content: "heloo" }));
log(store.getState());

store.dispatch(editPost({ id: 2, content: "study hard" }));
log(store.getState());

store.dispatch(logout());
log(store.getState());
