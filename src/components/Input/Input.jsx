import { StyledInput, StyledDiv } from './Input.style.js';
import { ACTIONS } from '../TodoList/todoReducer'


function Input({dispatch}) {


  const handleKeyDown = event => {
    if (event.key === "Enter" && event.target.value.trim()) {
      event.preventDefault();
      dispatch({type: ACTIONS.ADD_TODO, payload: {
        todo: { todo: event.target.value, completed: false, id: Date.now() }
      }});
      event.target.value = "";
    }
  };
  

  return (
    <StyledDiv>
      <StyledInput onKeyDown={handleKeyDown} placeholder="Create a new todo..." type="text" label="Add a new item to the todo list here" />
    </StyledDiv>
  )
}

export default Input;