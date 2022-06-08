import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { StackContext } from "../contexts/StackContext";
import "./style.css";

const AddStack = () => {
  const { saveStack } = useContext(StackContext);
  const [stack, setStack] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    saveStack(stack);
  };

  const handleInputChange = (e) => {
    setStack({
      ...stack,
      title: e.target.value,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="input-stack"
          type="text"
          name="title"
          id="title"
          placeholder="New Tecnology"
          onChange={handleInputChange}
        />
        <button className="add-button">Add</button>
      </form>
      <Button href="/" >Back</Button>
    </div>
  );
};

export default AddStack;
