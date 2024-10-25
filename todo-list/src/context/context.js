import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todo: [
    {
      id: 1,
      todo: "this is todo msge",
      completed: false,
    },
  ],

  addTodo:(todo)=>{},
  UpdateTodo:(id,todo)=>{},
  DeleteTodo:(id,todo)=>{},
  ToggleTodo:(id)=>{}
});

export const Usetodo = () => {
  return useContext(createContext);
};

export const TodoProvider = TodoContext.Provider;
