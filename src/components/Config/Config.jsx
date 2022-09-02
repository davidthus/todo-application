import { useState, useEffect } from 'react';
import { StyledContainer, StyledSpan, StyledButton, StyledFilter, StyledDiv } from './Config.style';
import useTodo from '../../hooks/useTodo';


function Config() {
  const [ filter, setFilter ] = useState('all');
  const { setFilteredTodos, todos } = useTodo();


  useEffect(() => {
    // sort the todos every time filter changes here
    console.log(todos)
    if(filter === 'active'){
      setFilteredTodos(todos.filter(todo => todo.completed === false))
      return;
    } else if (filter === 'completed'){
      setFilteredTodos(todos.filter(todo => todo.completed === true))
      return;
    }
  }, [todos, filter, setFilteredTodos])
  

  return (
    <StyledContainer>
      <StyledSpan>
        {todos.filter(todo => !todo.completed).length} items left
      </StyledSpan>

      <StyledDiv>
        <StyledFilter active={ filter === 'all' ? true : false} onClick={(e) => { e.preventDefault(); setFilter('all')}}>All</StyledFilter>
        <StyledFilter active={ filter === 'active' ? true : false} onClick={(e) => { e.preventDefault(); setFilter('active')}}>Active</StyledFilter>
        <StyledFilter active={ filter === 'completed' ? true : false} onClick={(e) => { e.preventDefault(); setFilter('completed')}}>Completed</StyledFilter>
      </StyledDiv>

      <StyledButton onClick={(e) => { e.preventDefault()}}>
        Clear Completed
      </StyledButton>
    </StyledContainer>
  )
}

export default Config;