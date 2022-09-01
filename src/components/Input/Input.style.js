import styled from "styled-components";

export const StyledInput = styled.input`
  height: 3rem;
  width: 100%;
  font-size: 1.125rem;
  border-radius: 5px;
  padding-left: 4.5rem;
  border: none;
  background-color: ${(props) => props.theme.colorSurface};
  color: ${(props) => props.theme.colorTextActive};

  &:focus {
    border: none;
    outline: none;
  }

  @media screen and (min-width: 600px) {
    & {
      font-size: 1.25rem;
      height: 4rem;
    }
  }
`;

export const StyledDiv = styled.div`
  position: relative;
  margin-bottom: 1.5rem;

  &::before {
    content: "";
    position: absolute;
    margin: 0;
    padding: 0;
    top: 0.875rem;
    left: 1.5rem;
    width: 1.25rem;
    height: 1.25rem;
    box-sizing: border-box;
    left: 1.5rem;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.colorBorder};
    background-color: rgba(0, 0, 0 / 0%);
    transition: border 1s;
  }

  @media screen and (min-width: 600px) {

    & {
      margin-bottom: 1rem;
    }

    &::before {
      width: 1.5rem;
      height: 1.5rem;
      top: 1.25rem;
    }
  }
`;
