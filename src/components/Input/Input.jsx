import { StyledInput, StyledDiv } from './Input.style.js';
import { useState } from "react";

function Input() {
  const [ currentInput, setCurrentInput ] = useState("");

  function handleKeyDown(e){
    // if(e.key === "Enter" && e.target.value.trim()){

    // }

    setCurrentInput(e.target.value);
  }

  return (
    <StyledDiv>
      <StyledInput value={currentInput} onKeyDown={handleKeyDown} placeholder="Create a new todo..." type="text" label="Add a new item to the todo list here" />
    </StyledDiv>
  )
}

export default Input;