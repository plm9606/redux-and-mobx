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

module.exports = { login, logout };
