import React, { useState } from "react";
import { AddButton } from "./Button/SButton";

const TodoForm = ({ handleAdd }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <AddButton type="submit">Add</AddButton>
    </form>
  );
};

export default TodoForm;
