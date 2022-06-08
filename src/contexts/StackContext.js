import React, { useState, createContext } from "react";

export const StackContext = createContext();

const StackProvider = ({ children }) => {
  const [stacks, setStacks] = useState([
    { id: 1, title: "HTML", done: "false" },
    { id: 2, title: "CSS", done: "false" },
    { id: 3, title: "Javascript", done: "false" },
    { id: 4, title: "Ruby on Rails", done: "false" },
  ]);
  const saveStack = stack => {
    const newStack = {
      id: stacks.length + 1,
      title: stack.title,
      done: "false",
    };
    setStacks([...stacks, newStack]);
  };

  return (
    <StackContext.Provider value={{ stacks, saveStack }}>
      {children}
    </StackContext.Provider>
  );
};

export default StackProvider;
