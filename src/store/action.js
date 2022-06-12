import { DIVISIBLE_TODO, DONE_COUNT, GET_FAIL, GET_LOADING, GET_SUCCESS, POST_FAIL, POST_LOADING, POST_SUCCESS, SINGLE_UPDATE, UNDONE_COUNT } from "./action.type"

import axios from "axios"
//todo componet 
export const post=(value)=>(dispatch)=>{
    dispatch({type:POST_LOADING})
    axios.post("http://localhost:8080/posts",value).then((res)=>{
       
        dispatch({type:POST_SUCCESS,payload:res.data})
    })
    dispatch({type:POST_FAIL})
}

export const get=()=>(dispatch)=>{
    dispatch({type:GET_LOADING})
    // console.log("before get")
    axios.get("http://localhost:8080/posts").then((res)=>{
        // console.log("after get")
        dispatch({type:GET_SUCCESS,payload:res.data})
    })

    dispatch({type:GET_FAIL})
}

export const update=(data)=>(dispatch)=>{
   
    axios.patch(`http://localhost:8080/posts/${data.id}`,{
        
        status:data.status,
        title:data.title
    }).then((res)=>{
       
       dispatch({type:SINGLE_UPDATE,payload:res.data})
    })
}

export const removeitem=(id)=>{
    axios.delete(`http://localhost:8080/posts/${id}`)
    
}


export const single=()=>(dispatch)=>{
    (dispatch({type:DIVISIBLE_TODO}))}


export const done_count=()=>(dispatch)=>{
    axios.get("http://localhost:8080/posts").then((res)=>{
        let count=0;
        res.data.filter(e=>{
            return (e.status==true ? count=count+1 : null)
        })
        dispatch({type:DONE_COUNT,payload:count})
    })
}

export const undone_count=()=>(dispatch)=>{
    axios.get("http://localhost:8080/posts").then((res)=>{
        let count=0;
        res.data.filter(e=>{
            return (e.status==false ? count=count+1 : null)
        })
        console.log("undone",count)
        dispatch({type:UNDONE_COUNT,payload:count})
    })
}