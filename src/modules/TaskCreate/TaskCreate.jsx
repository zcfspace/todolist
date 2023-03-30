import React, { useState } from "react";
import styled from "styled-components";
import { SAddButton } from "../../components/Button/SButton";

const TaskCreate = ({ handleAdd }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(task);
    setTask("");
  };

  return (
    <STaskForm className="task-form" onSubmit={handleSubmit}>
      <SInput
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Ingrese una tarea"
      />
      <SAddButton type="submit">Agregar</SAddButton>
    </STaskForm>
  );
};

const STaskForm = styled.form``;

const SInput = styled.input``;

export default TaskCreate;
