import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleDelete, handleEdit, handleComplete }) => {
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

export default TodoList;
