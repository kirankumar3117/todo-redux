import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes,Route} from "react-router-dom"
import Todoapp from './components/Todoapp';
import TodoList from './components/TodoList';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Todoapp/>}>
          <Route path="todo/:id" element={<TodoList/>}></Route>
        </Route>
        
      </Routes>
    </div>
  )
}

export default App
