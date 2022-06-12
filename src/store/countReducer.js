import { DONE_COUNT, UNDONE_COUNT } from "./action.type"


const initial={
    done:0,
    undone:0
}
export const countReducer=(state=initial,{type,payload})=>{
    console.log(state)
    switch(type){
        case DONE_COUNT:{
            return {
                ...state,
                done:payload
        }
        }
        case UNDONE_COUNT:{
            return {
                ...state,
                undone:payload
            }
        }
        default:{
            return state
        }
    }
}