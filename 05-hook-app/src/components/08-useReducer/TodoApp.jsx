import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList.jsx'
import { TodoAdd } from './TodoAdd'
import { useEffect } from 'react'

import './styles.css'



const initialState = [{
    // id: new Date().getTime(),
    // description: 'Aprender React',
    // donde: false
}]

const init = () =>{
    return JSON.parse( localStorage.getItem('todos')) || [];
}


export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)


    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify( todos ))
    },[todos])


    const handleNewTodo = (todo) => {
      
        const action = {
            type: 'ADD',
            payload: todo
        }
   
        dispatch( action )
    }

    const handleDelete = (id) =>{
        
        const action = {
            type: 'DELETE',
            payload: id
        }
   
        dispatch( action )
    }

    return (
        <div>
            <h1>TodoApp ({todos.length}) </h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                  
               
            <TodoList todos={todos} onDeleteTodo={ handleDelete }/>

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
