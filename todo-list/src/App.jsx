import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TodoProvider } from "./context";

function App() {
  const [todo, setTodo] = useState([]);

  const addTodo = (todo) => {
    setTodo((prev) => [{ id: Date.now, ...todo }], ...prev);
  };

  const UpdateTodo = (id, todo) => {
    setTodo((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const DeleteTodo = (id) => {
    setTodo((prev) => prev.filter((todo) => todo.id !== id));
  };

  const ToggleTodo = () => {
    setTodo((prev) =>
      prev.map((prevTodo) =>
        prevTodo === id ? { ...prev, completed: !prevTodo.completed } : prevTodo
      )
    );
  };

  ///local storage using todoluist

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todo && todo.length > 0) {
      setTodo(todo);
    }
  }, []);


//another todo
useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todo))
},[])


  return (
    <TodoProvider value={{ todo, addTodo, UpdateTodo, DeleteTodo, ToggleTodo }}>
      <div>Hello there</div>
    </TodoProvider>
  );
}

export default App;
