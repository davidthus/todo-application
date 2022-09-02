import Input from '../Input/Input';
import Config from '../Config/Config';
import Todo from '../Todo/Todo';
import { StyledForm, StyledContainer } from './TodoList.style.js';
import useTodo from '../../hooks/useTodo';


function TodoList() {
  const { filteredTodos, updateTodo, deleteTodo } = useTodo();
  console.log(filteredTodos);

  return (
    <StyledForm>
      <Input/>

      <StyledContainer>{
        // filteredTodos.map(todo => {
        //   return <Todo updateTodo={updateTodo} deleteTodo={deleteTodo} todo={todo} />
        // })
      }<Config />
      </StyledContainer>
    </StyledForm>
  )
}

export default TodoList