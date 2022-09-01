import { StyledLogo, StyledButton, StyledHeader } from './Header.style'
import { ReactComponent as Moon } from "../../assets/Moon.svg";
import { ReactComponent as Sun } from "../../assets/Sun.svg";



function Header({themeToggle}) {
  const currentTheme = localStorage.getItem("Theme");

  return (
    <StyledHeader>
      <StyledLogo>TODO</StyledLogo>
      <StyledButton onClick={() => themeToggle()}>
        {
          currentTheme === 'dark' ? <Moon/> : <Sun/>
        }
      </StyledButton>
    </StyledHeader>
  )
}



export default Header