import { useState, useEffect } from 'react';
import { StyledContainer, StyledSpan, StyledButton, StyledFilter, StyledDiv } from './Config.style';
import { ACTIONS } from '../TodoList/todoReducer';

function Config({ dispatch, state}) {
  const [ filter, setFilter ] = useState('all');
  const [ itemsLeft, setItemsLeft ] = useState(state.todos.filter(todo => !todo.completed).length);

  function handleClear(e){
    e.preventDefault();
    dispatch({ type: ACTIONS.CLEAR_COMPLETED })
  }

  useEffect(() => {
    setItemsLeft(state.todos.filter(todo => !todo.completed).length);
  }, [state])

  useEffect(() => {
    dispatch({type: ACTIONS.SET_FILTER, payload: {filter: filter}})
  }, [filter, dispatch])
  

  return (
    <StyledContainer>
      <StyledSpan>
        {itemsLeft} items left
      </StyledSpan>

      <StyledDiv>
        <StyledFilter active={ filter === 'all' ? true : false} onClick={(e) => { e.preventDefault(); setFilter('all')}}>All</StyledFilter>
        <StyledFilter active={ filter === 'active' ? true : false} onClick={(e) => { e.preventDefault(); setFilter('active')}}>Active</StyledFilter>
        <StyledFilter active={ filter === 'completed' ? true : false} onClick={(e) => { e.preventDefault(); setFilter('completed')}}>Completed</StyledFilter>
      </StyledDiv>

      <StyledButton onClick={handleClear}>
        Clear Completed
      </StyledButton>
    </StyledContainer>
  )
}

export default Config;