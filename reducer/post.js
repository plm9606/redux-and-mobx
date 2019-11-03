const postReducer = (prevState, action) => {
  const { type, value } = action;
  switch (type) {
    case "CHANGE_POST":
      return { posts: [...prevState, value] };
    default:
      return prevState;
  }
};

module.exports = postReducer;
