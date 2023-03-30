import React, { useState, useEffect } from "react";
import TaskCreate from "../../../modules/TaskCreate/TaskCreate";
import ToDoListContainer from "../../../modules/ToDoListContainer/ToDoListContainer";
import styled from "styled-components";
import {
  getTasks,
  insertTask,
  deleteTask,
  editTask,
  completeTask,
} from "../../../services/ToDoView/ToDoView";

function ToDoView() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTasks().then((tasks) => {
      setTodos(tasks);
    });
  }, []);

  const handleAdd = (task) => {
    if (task.trim() !== "") {
      insertTask(task).then((newTodo) => {
        setTodos([...todos, newTodo]);
      });
    }
  };

  const handleDelete = (id) => {
    deleteTask(id).then(() => {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    });
  };

  const handleEdit = (id, newTask) => {
    editTask(id, newTask).then(() => {
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask } : todo
      );
      setTodos(updatedTodos);
    });
  };

  const handleComplete = (id) => {
    completeTask(id).then(() => {
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      );
      setTodos(updatedTodos);
    });
  };

  return (
    <SContainer>
      <SForm>
        <SSearchDiv>
          <SH1>TO-DO-LIST</SH1>
          <TaskCreate handleAdd={handleAdd} />
        </SSearchDiv>
        <ToDoListContainer
          todos={todos}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleComplete={handleComplete}
        />
      </SForm>
    </SContainer>
  );
}

const SContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  height: 100vh;
  background-color: #f5f5f5;
`;

const SForm = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
  width: 500px;
  margin-top: 50px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;
const SSearchDiv = styled.div`
  align-items: center;
  text-align: center;
`;
const SH1 = styled.h1``;

export default ToDoView;
