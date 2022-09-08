import { StyledTodo, StyledButton, StyledLabel, StyledInput, NestedSpan, StyledSpan, StyledText } from './Todo.style';
import { useRef } from 'react';
import { ACTIONS } from '../TodoList/todoReducer';
import { ReactComponent as Cross } from '../../assets/Cross.svg'
import { ReactComponent as Check } from '../../assets/Check.svg'

function Todo({todo, dispatch}) {

  const toggled = useRef(todo.completed);

  function handleDelete(e){
    e.preventDefault();
    dispatch({type: ACTIONS.DEL_TODO, payload: {
      id: todo.id
    }})
  }
  
  function handleToggle(e){
    e.preventDefault();
    dispatch({type: ACTIONS.TOGGLE_TODO, payload: {
      id: todo.id
    }})
    toggled.current = !toggled.current
  }

  return (
    <StyledTodo>
      <StyledLabel onClick={handleToggle}>
        <StyledInput type="checkbox" />
        <StyledSpan toggled={ toggled.current ? true : false}>
        <NestedSpan toggled={ toggled.current ? true : false}>
          {toggled.current && <Check />}
        </NestedSpan>
      </StyledSpan>
        <StyledText toggled={ toggled.current ? true : false}>{todo.todo}</StyledText>
      </StyledLabel>
      <StyledButton onClick={handleDelete} aria-label="delete item" type="button">
        <Cross />
      </StyledButton>
    </StyledTodo>
  )
}

export default Todo;