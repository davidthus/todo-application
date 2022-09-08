export const ACTIONS = {
  TOGGLE_TODO: "toggle-todo",
  ADD_TODO: "add-todo",
  DEL_TODO: "del-todo",
  SET_FILTER: "set-filter",
  CLEAR_COMPLETED: "clear-completed",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CLEAR_COMPLETED:
      return { ...state, todos: state.todos.filter((todo) => !todo.completed) };
    case ACTIONS.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload.todo] };
    case ACTIONS.SET_FILTER:
      return { ...state, filter: action.payload.filter };
    case ACTIONS.DEL_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case ACTIONS.TOGGLE_TODO:
      return {...state, todos: state.todos.map(todo => {
        if (todo.id === action.payload.id){
          return { ...todo, completed: !todo.completed};
        }
        return todo;
      })}
    default:
      return state;
  }
};

export const INITIAL_STATE = {
  todos: JSON.parse(localStorage.getItem("todos")) || [
    { todo: "Make a coffee", completed: false, id: Date.now() },
  ],
  filter: "all",
};
