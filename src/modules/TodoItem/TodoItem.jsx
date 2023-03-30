import React, { useState } from "react";
import styled from "styled-components";
import {
  SButton,
  SAddButton,
  SDeleteButton,
  SEditButton,
} from "../../components/Button/SButton";

const TodoItem = ({ todo, handleDelete, handleEdit, handleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  const handleUpdate = (e) => {
    e.preventDefault();
    handleEdit(todo.id, newTask);
    setIsEditing(false);
  };

  return (
    <SUl>
      {isEditing ? (
        <STaskForm onSubmit={handleUpdate}>
          <SInput
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <SButton type="submit">Save</SButton>
        </STaskForm>
      ) : (
        <SDivOneTask>
          <STaskSpan complete={todo.complete}>{todo.task}</STaskSpan>
          <SButtonDiv>
            <SEditButton onClick={() => setIsEditing(true)}>Edit</SEditButton>
            <SDeleteButton onClick={() => handleDelete(todo.id)}>
              Delete
            </SDeleteButton>
            <SAddButton onClick={() => handleComplete(todo.id)}>
              Done
            </SAddButton>
          </SButtonDiv>
        </SDivOneTask>
      )}
    </SUl>
  );
};

const SDivOneTask = styled.div`
  display: flex;
  justify-content: space-between;
`;

const STaskSpan = styled.span`
  text-decoration: ${(props) => (props.complete ? "line-through" : "none")};
  color: ${(props) => (props.complete ? "red" : "black")};
  align-items: center;
`;

const SUl = styled.ul``;
const STaskForm = styled.form``;
const SInput = styled.input``;
const SButtonDiv = styled.div``;

export default TodoItem;
