import styled from "styled-components";

// const slideOff = styled.keyframes`
//   from {
//     transform: translateX(0);
//     opacity: 1;
//   }

//   to {
//     transform: translateX(-120px);
//     opacity: 0;
//   }
// `

export const StyledTodo = styled.li`
  display: flex;
  width: 100%;
  height: 3.25rem;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colorBorder};
  padding: 0 1.5rem;
  background: ${(props) => props.theme.colorSurface};
  color: ${(props) => props.theme.colorTextActive};
  transition: border 1s, background 1s, color 1s;


  @media screen and (min-width: 600px) {
    & {
      height: 4rem;
    }
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: auto;
  cursor: pointer;
`;

export const StyledButton = styled.button`
  opacity: 0;
  border: none;
  padding: 0.375rem;
  background: rgb(0 0 0 / 0%);
  cursor: pointer;
  transition: opacity 0.3s;

  ${StyledTodo}:hover & {
    opacity: 1;
  }
`;

export const StyledInput = styled.input`
  width: 1px;
  height: 1px;
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  white-space: nowrap;
  overflow: hidden;
`;

export const StyledSpan = styled.span`
  flex: 1 0 auto;
  position: relative;
  display: block;
  width: 1.5rem;
  height: 1.5em;
  margin-right: 1.5rem;
  border-radius: 50%;
  padding: 1px;
  background: ${(props) => props.toggled ? props.theme.gradient : props.theme.colorBorder};
  transition: 1s;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: ${(props) => props.theme.gradient};
    opacity: 0;
    transition: opacity 0.5s;

    ${StyledLabel}:hover &{
      opacity: 1;
    }
  }
`;

export const NestedSpan = styled.span`
  position: relative;
  z-index: 1;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${(props) => props.toggled ? props.theme.gradient : props.theme.colorSurface};
  transition: background 1s;
`;

export const StyledText = styled.span`
  position: relative;
  font-size: 0.75rem;
  line-height: 1rem;
  cursor: pointer;
  color: ${(props) => props.toggled ? props.theme.colorTextCompleted : props.theme.colorTextActive};

  @media screen and (min-width: 600px) {
    & {
      font-size: 1.125rem;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: ${props => props.toggled ? '100%' : '0'};
    height: 1px;
    background: ${(props) => props.toggled ? props.theme.colorTextCompleted : props.theme.colorTextActive};
    transition: width 1s, background 1s;
  }
`;
