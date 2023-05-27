import { DECREMENT, INCRIMENT, RESET } from "../types/counterTypes";

export const ınc = () => ({
  type: INCRIMENT
})
export const dec=()=>{
    return {type:DECREMENT}
}
export const reset= () => ({type:RESET})

