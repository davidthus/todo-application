import Config from "../Config/Config";
import Input from "../Input/Input";
import Todo from "../Todo/Todo";
import { useReducer, useEffect, useState } from 'react';
import { reducer, INITIAL_STATE} from "./todoReducer";
import { StyledContainer, StyledForm, StyledUl } from "./TodoList.style.js";

function TodoList() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [displayTodos, setDisplayTodos] = useState(state.todos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state.todos));
  }, [state])

  useEffect(() => {
    switch(state.filter){
      case 'active':
        setDisplayTodos(state.todos.filter(todo => !todo.completed));
        break;
      case 'completed':
        setDisplayTodos(state.todos.filter(todo => todo.completed));
        break;
      default:
        setDisplayTodos(state.todos);
    }
  }, [state.filter, state.todos])

  return (
    <StyledForm>
      <Input dispatch={dispatch} />

      <StyledContainer>
        <StyledUl>
          {
            displayTodos.map(todo => {
              return <Todo key={todo.id} dispatch={dispatch} todo={todo} />
            })
          }
        </StyledUl>
        <Config dispatch={dispatch} state={state} />
      </StyledContainer>
    </StyledForm>
  );
}

export default TodoList;
