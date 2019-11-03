const reducer = (prevState, action) => {
  const { type, value } = action;
  switch (type) {
    case "LOGIN":
      return { ...prevState, user: value };
    case "LOGOUT":
      return { ...prevState, user: null };
    case "CHANGE_POST":
      return { ...prevState, posts: [...prevState.posts, value] };
    default:
      return prevState;
  }
};

module.exports = reducer;
