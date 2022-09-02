import { useState, useEffect } from 'react';

export default function useTodo(){

  const [ todos, setTodos ] = useState(JSON.parse(localStorage.getItem('todos')) || [{ todo: "Make a coffee", completed: false, id: 0}])
  const [filteredTodos, setFilteredTodos ] = useState();

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
    console.log(todos);
  }, [todos])

  // handle adding a todo to the todo array in localstorage

  const addTodo = (todo) => {
    setTodos(prev => [...prev, todo]);
  }

  // handle deleting a todo from localstorage

  // const deleteTodo = (id) => {
  //   //excludes the todo with the id passed in
  //   setTodos(todos.filter(todo => todo.id !== id));
  // }

  // // fetch all the filtered todos

  // // const getItemsLeft = () => {
  // //   return filteredTodos;
  // // }

  // // delete all todos with the property of completed set to true

  // const clearCompleted = () => {
  //   setTodos(todos.filter(todo => todo.completed !== false))
  // }

  // handle updating a todo to either completed or not completed

  // const updateTodo = (todo) => {

  // }

  return {
    addTodo,
    // deleteTodo,
    filteredTodos,
    // clearCompleted,
    // updateTodo,
    setFilteredTodos,
    todos
  }
}