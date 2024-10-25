import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './context'

function App() {

const [todo,setTodo ] =useState([])
  return (
    <TodoProvider value={{todo,addTodo,UpdateTodo,DeleteTodo,ToggleTodo}}>
    <div>Hello there</div>
    </TodoProvider>
  )
}

export default App
