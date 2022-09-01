import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import Footer from '../Footer/Footer';
import { StyledContainer } from './Container.style.js';


function Container({themeToggle}) {
  return (
    <StyledContainer>
      <Header themeToggle={themeToggle}  />
      <TodoList />
      <Footer />
    </StyledContainer>
  )
}

export default Container