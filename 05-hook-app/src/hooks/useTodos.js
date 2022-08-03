import { useEffect, useReducer } from "react";
import { todoReducer } from "../components/08-useReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "ADD",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDelete = (id) => {
    const action = {
      type: "DELETE",
      payload: id,
    };

    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    const action = {
      type: "COMPLETE",
      payload: id,
    };

    dispatch(action);
  };

  return {
    todos,
    handleDelete,
    handleToggleTodo,
    handleNewTodo,
    todosCount: todos.length,
  };
};
