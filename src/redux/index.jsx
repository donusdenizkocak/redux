const initialState ={
    counter:0,    //global state
}

export const reducer = (state=initialState,action) =>{
    switch (action.type) {
        case "INCRIMENT":
            return {counter:state.counter +1}
    
    case "DECREMENT" :
        return {counter: state.counter - 1}

    case "RESET":
        return  {counter:0}
    default:
        return state    
    }
}