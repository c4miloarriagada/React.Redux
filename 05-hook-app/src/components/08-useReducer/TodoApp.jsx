import React from 'react'
import { TodoList } from './TodoList.jsx'
import { TodoAdd } from './TodoAdd'
import { useTodos } from '../../hooks/useTodos.js'


import './styles.css'




export const TodoApp = () => {

    const {todos, handleDelete, handleNewTodo, handleToggleTodo, todosCount} = useTodos()

    return (
        <div>
            <h1>TodoApp ({todosCount}) </h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                  
               
            <TodoList todos={todos} onDeleteTodo={ handleDelete } onToggleTodo={ handleToggleTodo }/>

                </div>
                <div className='col-5'>
                    <h4>Agregar Todo</h4>
                    <hr/>
                   <TodoAdd onNewTodo={ handleNewTodo }/>

                </div>

            </div>

        </div>
    )
}
