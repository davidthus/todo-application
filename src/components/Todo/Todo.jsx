import { StyledTodo, StyledButton, StyledLabel, StyledInput, NestedSpan, StyledSpan, StyledText } from './Todo.style';
import { ReactComponent as Cross } from '../../assets/Cross.svg'

function Todo() {
  return (
    <StyledTodo>
      <StyledLabel>
        <StyledInput type="checkbox" />
        <StyledSpan>
          <NestedSpan/>
        </StyledSpan>
        <StyledText>Hello</StyledText>
      </StyledLabel>
      <StyledButton aria-label="delete item" type="button">
        <Cross />
      </StyledButton>
    </StyledTodo>
  )
}

export default Todo;