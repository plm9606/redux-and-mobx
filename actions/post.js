const editPost = data => {
  return {
    type: "CHANGE_POST",
    value: data
  };
};

module.exports = { editPost };
