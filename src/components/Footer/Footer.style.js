import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledP = styled.p`
  font-weight: 400;
  margin-bottom: 0.8rem;
  font-size: 12px;
  color: ${props => props.theme.colorText};
`
export const StyledAnchor = styled.a`
  font-weight: 400;
  font-size: 12px;
  color: ${props => props.theme.blue};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
