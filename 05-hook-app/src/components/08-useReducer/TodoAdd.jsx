import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {


   const { description, onInputChange, onResetForm  } = useForm({
    description: ''
   })

   const onFormSubmit = (e) =>{
    e.preventDefault();
    if(description.length <= 1) return
    const newTodo ={
      id: new Date().getTime(),
      description,
      done: false,
    }

    onNewTodo(newTodo);
    onResetForm();

   }


  return (
    <form onSubmit={onFormSubmit}>
    <input
    className='form-control'
    type='text'
    name='description'
    placeholder='Aprender...'
    autoComplete='off'
    value={ description }
    onChange={ onInputChange }
    ></input>
    <button
    type='submit'
    className='btn btn-outline-primary mt-1 btn-block'
    >
        Agregar
    </button>
</form>
  )
}
