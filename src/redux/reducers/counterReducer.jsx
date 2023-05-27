import { DECREMENT, INCRIMENT, RESET } from "../types/counterTypes"

const initialState ={
    counter:0,    //global state
}


//pure js function
//dışa bir bağımlılıgı olmamalı
 const counterReducer = (state=initialState,action) =>{
    switch (action.type) {
        case INCRIMENT:
            return {counter:state.counter +1}
    
    case DECREMENT :
        return {counter: state.counter - 1}

    case RESET:
        return  {counter:0}
    default:
        return state    
    }
}
export default counterReducer;