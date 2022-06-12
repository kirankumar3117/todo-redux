import { GET_FAIL, GET_LOADING, GET_SUCCESS, POST_LOADING, POST_SUCCESS,POST_FAIL, DIVISIBLE_TODO, SINGLE_UPDATE } from "./action.type"

const initial={
    gettodo:{
        loading:false,
        error:false
    },
    posttodo:{
        loading:false,

    },
    todo:[],
    single_state:false
}

export const todoReducer=(state=initial,{type,payload})=>{
  console.log(state.todo)
    switch(type){
        case SINGLE_UPDATE:{
        return {
        ...state,
        gettodo:{
            ...state.gettodo
        },
        todo:[...state.todo]
        }
    }
        case DIVISIBLE_TODO:{
            return {
                ...state,
                single_state:true
            }
        }
        case GET_LOADING:{
            return {
                ...state,
             gettodo:{
                ...state.gettodo,
                
                    loading:true
                },
               
            }
        }
        case GET_SUCCESS:{
            return {
                ...state,
                gettodo:{
                    ...state.gettodo,
                    loading:false
                },
              
                todo:payload
            }
        }
        case POST_LOADING:{
            return {
                ...state,
                posttodo:{
                    loading:true
                },
               
            }
        }
        case GET_FAIL:{
            return {
                ...state,
                gettodo:{
                    loading:false,
                    error:true
                },

            }
        }
        case POST_SUCCESS:{
            return {
                ...state,
                posttodo:{
                    loading:false
                },
                todo:[...state.todo,payload]
            }
        }
        case POST_FAIL:{
            return {
                ...state,
                posttodo:{
                    loading:false,
                    error:true
                },

            }
        }
        default:{
            return state
        }
    }

}