import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lighttheme, darktheme, GlobalStyles } from './themes.js'
import { StyledContainer } from './components/Container/Container.style';

const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1.5rem;
  background-color: ${props => props.theme.colorBg};
  background-position: top center;
  background-repeat: no-repeat;
  background-image: ${props => props.theme.bgImageDesktop};

  @media screen and (max-width: 375px) {
    background-image: ${props => props.theme.bgImageMobile};
  }

  @media screen and (min-width: 800px) {
    padding-top: 4rem;
  }
`

function App() {
  const [ Theme, setTheme ] = useState(localStorage.getItem('Theme') || 'dark');

  useEffect(() => {
    localStorage.setItem("Theme", Theme);
  }, [Theme])
  

  const themeToggle = () => {
    Theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={Theme === 'light' ? lighttheme : darktheme}>
      <GlobalStyles />
    <StyledApp>
      <StyledContainer themeToggle={themeToggle} />
    </StyledApp>
    </ThemeProvider>
  );
}

export default App;
