import { StyledLogo, StyledButton } from './Header.style'
import styled from 'styled-components';
import { ReactComponent as Moon } from "../../assets/Moon.svg";
import { ReactComponent as Sun } from "../../assets/Sun.svg";



function Header({themeToggle}) {
  const currentTheme = localStorage.getItem("Theme");

  return (
    <header>
      <StyledLogo>TODO</StyledLogo>
      <StyledButton onClick={() => themeToggle()}>
        {
          currentTheme === 'dark' ? <Moon/> : <Sun/>
        }
      </StyledButton>
    </header>
  )
}

export const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export default Header