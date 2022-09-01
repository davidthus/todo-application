import { StyledHeader } from '../Header/Header';
import Input from '../Input/Input';
import TodoList from '../TodoList/TodoList';
import Footer from '../Footer/Footer';


function Container({themeToggle}) {
  return (
    <main>
      <StyledHeader themeToggle={themeToggle}  />
      <Input />
      <TodoList />
      <Footer />
    </main>
  )
}

export default Container