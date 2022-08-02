const initialState = [{
    id:1,
    todo: 'comprar algo',
    donde: false
}]

const todoReducer  = (state = initialState , action) => {

    if(action?.type === 'ADD'){
        return [...state, action.payload]
    }


    return state
}

let todos = todoReducer();


const newTodo = {
    id:2,
    todo: 'comprar algo 2',
    donde: false
}

const action = {
    type: 'ADD',
    payload: newTodo
}


todos = todoReducer(todos, action)


console.log(todos)