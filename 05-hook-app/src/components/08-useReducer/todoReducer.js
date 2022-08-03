


export const todoReducer = (state = [], action)=>{

    switch ( action.type ) {
         case 'ADD':
             return [...state, action.payload];
         case 'DELETE':
            return state.filter(todo => todo.id !== action.payload); 
         case 'COMPLETE': 
            return state.map(todo =>{
                if(todo.id === action.payload){
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });    
        
        default:
            return state;
    }


}