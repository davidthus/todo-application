import styled from "styled-components";

export const StyledLogo = styled.h1`
  font-size: 2.5rem;
  line-height: 2.5rem;
  color: white;
  margin-right: auto;
  letter-spacing: 0.937rem;
  text-transform: uppercase;

  @media screen and (max-width: 800px){
    & {
      font-size: 1.7rem;
      line-height: 1.7rem;
    }
  }
`

export const StyledButton = styled.button`
  outline: none;
  border: none;
  background: none;

  &:hover {
    cursor: pointer;
  }
`

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 3rem;
`