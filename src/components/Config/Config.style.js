import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background: ${props => props.theme.colorSurface};
  color: ${props => props.theme.colorText};
  padding: 0 1.5rem;
  height: 3.125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  line-height: 0.875rem;
`

export const StyledSpan = styled.span`
  @media screen and (min-width: 600px) {
    & {
      font-size: 0.875rem
    }
  }
`

export const StyledButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  color: ${props => props.theme.colorText};
  transition: color 0.3s;

  @media screen and (min-width: 600px) {
    & {
      font-size: 0.875rem
    }
  }

  &:hover {
    color: ${props => props.theme.colorTextActive};
  }
`

export const StyledFilter = styled(StyledButton)`
  margin-right: 1rem;
  font-weight: 700;
  color: ${props => props.active ? props.theme.blue : props.theme.colorText};
  
  @media screen and (min-width: 600px) {
    & {
      font-size: 0.875rem
    }
  }

  &:focus {
    outline: 2px dotted ${props => props.theme.colorTextActive}
  }
  `
  export const StyledDiv = styled.div`
    display: flex;
    align-items: center;
  `

