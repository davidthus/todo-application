import useTodo from "../../hooks/useTodo";
import Config from "../Config/Config";
import Input from "../Input/Input";
import Todo from "../Todo/Todo";
import { StyledContainer, StyledForm, StyledUl } from "./TodoList.style.js";

function TodoList() {
  const { filteredTodos, updateTodo, deleteTodo } = useTodo();
  console.log(filteredTodos);

  return (
    <StyledForm>
      <Input />

      <StyledContainer>
        <StyledUl>
          {
            <Todo />
            // filteredTodos.map(todo => {
            //   return <Todo updateTodo={updateTodo} deleteTodo={deleteTodo} todo={todo} />
            // })
          }
        </StyledUl>
        <Config />
      </StyledContainer>
    </StyledForm>
  );
}

export default TodoList;
