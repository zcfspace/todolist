import React from "react";
import ToDoView from "../views/App/ToDoView/ToDoView";
import WelcomeView from "../views/App/Welcome/Welcome";

const Routes = [
  {
    path: '/',
    element: <WelcomeView />
  },
  {
    path: '/app',
    element: <ToDoView />
  }
];

export default Routes;
