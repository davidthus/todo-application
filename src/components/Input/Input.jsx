import { StyledInput, StyledDiv } from './Input.style.js';
import useTodo from '../../hooks/useTodo';

function Input() {
  const { addTodo, todos } = useTodo();


  const handleKeyDown = event => {

    if (event.key === "Enter" && event.target.value.trim()) {
      addTodo({ todo: event.target.value, completed: false, id: todos.length - 1});
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