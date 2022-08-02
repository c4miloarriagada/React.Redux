import React from 'react'

export const TodoItem = ({ todo, onDeleteTodo }) => {
  return (
    <li 
    className='list-group-item'>
    <p className='text-center'>  {todo.description} </p>
    <button 
      onClick={()=> onDeleteTodo( todo.id )}
      className='btn btn-danger'>
        Borrar
    </button>
    </li>
  )
}
