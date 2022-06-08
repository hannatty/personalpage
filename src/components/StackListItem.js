import React from "react";
import './style.css';

const StackListItem = ({ stack }) => {
  return (
    <div >
      {stack.id} - {stack.title} {stack.done ? true : false}
    </div>
  );
};

export default StackListItem;
