import React, { useState } from "react";
import { Button, AddButton, DeleteButton, EditButton } from "./Button/SButton";

const TodoItem = ({ todo, handleDelete, handleEdit, handleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  const handleUpdate = (e) => {
    e.preventDefault();
    handleEdit(todo.id, newTask);
    setIsEditing(false);
  };

  return (
    <ul>
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button type="submit">Save</Button>
        </form>
      ) : (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "red" : "black",
              alignItems: "center",
            }}
          >
            {todo.task}
          </span>
          <div>
            <EditButton onClick={() => setIsEditing(true)}>Edit</EditButton>
            <DeleteButton onClick={() => handleDelete(todo.id)}>
              Delete
            </DeleteButton>
            <AddButton onClick={() => handleComplete(todo.id)}>Done</AddButton>
          </div>
        </div>
      )}
    </ul>
  );
};

export default TodoItem;