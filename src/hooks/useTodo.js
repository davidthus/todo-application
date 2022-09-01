import { useState } from 'react';

export default function useTodo(){

  // handle adding a todo to the todo array in localstorage

  const addTodo = () => {

  }

  // handle deleting a todo from localstorage

  const deleteTodo = () => {

  }

  // handle fetching todos based on a filter of either active, complete or all

  const getTodo = () => {

  }

  // delete all todos with the property of completed set to true

  const clearCompleted = () => {

  }

  return {
    addTodo,
    deleteTodo,
    getTodo,
    clearCompleted
  }
}