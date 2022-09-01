import Input from '../Input/Input';
import Config from '../Config/Config';
import { StyledForm } from './TodoList.style.js';

function TodoList() {
  return (
    <StyledForm>
      <Input/>
      <Config />
    </StyledForm>
  )
}

export default TodoList