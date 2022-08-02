import React from "react";
import { TodoItem } from "./TodoItem";

export const  TodoList = ({todos = [], onDeleteTodo}) => {

  return (
    <ul className='list-group list-group-flush'>
    {
        todos.map((todo, i) => (
           <TodoItem key={ todo.id } todo={ todo } onDeleteTodo={ onDeleteTodo }/>
        ))
    }
</ul>
  );
};
