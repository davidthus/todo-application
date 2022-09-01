import './App.css';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { lighttheme, darktheme, GlobalStyles } from './themes.js'

const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colorBg};
`

function App() {
  const [ Theme, setTheme ] = useState(localStorage.getItem('Theme') || 'dark');

  useEffect(() => {
    localStorage.setItem('Theme', Theme);
  
    // return () => {
    //   localStorage.removeItem('Theme');
    // }
  }, [Theme])
  

  const themeToggle = () => {
    Theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={Theme === 'light' ? lighttheme : darktheme}>
      <GlobalStyles />
    <StyledApp>
      <button onClick={() => themeToggle()}>
        Change Theme
      </button>
    </StyledApp>
    </ThemeProvider>
  );
}

export default App;
