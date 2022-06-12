import React,{useRef} from 'react'
import { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { done_count, get, post, single, undone_count } from '../store/action'
import styled from "./todo.module.css"

const Todoapp = () => {
  
  const navigate=useNavigate()
  const ref=useRef()
  const dispatch=useDispatch()
  const {todo,single_state}=useSelector((state)=>state.todo)
  const {loading}=useSelector((state)=>state.todo.gettodo)
  const {done,undone}=useSelector((state)=>state.count)
  const location=useLocation()
  if(location.pathname=="/"){
    location.state=true
  }
  const handleadd=()=>{
    if(ref.current.value==""){
      alert("Null passing wont acceptable")
    }
    dispatch(post({
      title:ref.current.value,
      status:false,
    }))
    ref.current.value=""
    dispatch(done_count())
    dispatch(undone_count())
  }

  useEffect(()=>{
    dispatch(get())
    dispatch(done_count())
    dispatch(undone_count())
    location.key='default'
  },[])

  useEffect(()=>{
    dispatch(done_count())
    dispatch(undone_count())
  },[location.pathname])

  const handlesingle=(e)=>{
   navigate(`todo/${e.id}`)
   dispatch(single())
   
  }

console.log(location)
  return (
    <div className={styled.container}>

    <section className={styled.head}>
        <h3>Todo List</h3>
        <div>Done:{done } Undone:{ undone}</div>

        <input ref={ref} type="text" placeholder="Write somthing..."/><button onClick={handleadd}>+</button>
    </section>

  

  
  {loading==true ? <h2>Loading...</h2> : <div className={styled.container2}>
   {location.key=='default' || location.state==true ? <section>
  <div className={styled.items}> 
      {todo.map(e=>{
        return <div key={e.id} className={e.status==false ? styled.item : styled.item1}  onClick={()=>{
          location.state=true
           handlesingle(e)}}>
            <div className={styled.single}><p className={e.status ? styled.underline : null}>{e.title}</p><button className={styled.edit}  onClick={()=>{
         location.state=true
          handlesingle(e)}}>Edit</button>
            </div>
            </div>
      })}
      </div>
    </section> :
    <Outlet />}
    </div>}
   

    </div>
  )
}

export default Todoapp