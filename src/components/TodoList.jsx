import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { done_count,  get,  removeitem,  undone_count, update } from '../store/action'
import styled from "./todo.module.css"

const TodoList = () => {
    const navigate=useNavigate()
    const location=useLocation()
    const ref=useRef()
    const {id}=useParams()
    console.log(id)
    const [loading,setLoading]=useState(false)
    const [disable,setDisable]=useState(false)
const [data,setData]=useState({})

    useEffect(()=>{
        setLoading(true)
      axios.get(`http://localhost:8080/posts/${id}`).then((res)=>{
        setLoading(false)
        setData(res.data)
      })  
    },[id])
   

const dispatch=useDispatch()
const handletoggle=()=>{
   data.status=!data.status
   setData({
    ...data

   })
 
}
const handleupdate=()=>{
    data.title=ref.current.value
    setData({
        ...data
    })
    dispatch(update(data))
    dispatch(get())
    
      
        navigate("/")
        location.key='default'
    console.log(location)
}
let m=data.title
  return (
    <div className={styled.container3}>
        {loading ? <h2>Loading..</h2>: <div>
        <div className={styled.changetext}>change status    here</div>
            <button onClick={()=>{
            
                handletoggle()
            }} className={data.status==true ? styled.toggle : styled.toggle1}>{data.status==true ? "Done" : "Undone"}</button>
            <div className={styled.changetext}>change text here</div>
            <input ref={ref} type="text" placeholder={m} defaultValue={data.title} className={styled.changeinput}/>
            {/* {data.title} */}
           
            <div> <button onClick={handleupdate} className={styled.finalbuttons}>update</button> </div>
            <div> <button onClick={()=>{
               removeitem(data.id)
               location.key='default'
               dispatch(get())
               navigate("/")
            }} className={styled.finalbuttons}>delete</button> </div>
           
            </div>}
      
    </div>
  )
}

export default TodoList