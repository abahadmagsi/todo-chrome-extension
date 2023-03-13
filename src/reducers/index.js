const initialState = "";

const addTodo = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTODO":
      return localStorage.setItem("todos", JSON.stringify(state));

    case "DELETETODO":
      let arr = JSON.parse(localStorage.getItem("todos"));
      arr.splice(state, 1);
      localStorage.setItem("todos", JSON.stringify(arr));
      return arr;

    default:
      return state;
  }
};
