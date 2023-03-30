import React from "react";
import TodoItem  from "../TodoItem/TodoItem";

const ToDoListContainer = ({ todos, handleDelete, handleEdit, handleComplete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleComplete={handleComplete}
        />
      ))}
    </div>
  );
};

export default ToDoListContainer;
