const userReducer = (prevState, action) => {
  const { type, value } = action;
  switch (type) {
    case "LOGIN":
      return { ...prevState, data: value.data };
    case "LOGOUT":
      return { ...prevState, data: null };
    default:
      return prevState;
  }
};

module.exports = userReducer;
