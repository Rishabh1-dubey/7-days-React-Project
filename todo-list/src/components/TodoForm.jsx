import React, { useState } from "react";
import { Usetodo } from "../context";

const TodoForm = () => {
  const [todos, setTodod] = useState([]);
  const [addTodo] = Usetodo();

  const add = (e) => {
    e.preventDefault();
    if (!todos) return;
    addTodo({ todos, completed: false });

    setTodod("")
  };
  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      value={todos}
      onChange={(e)=>setTodod(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
