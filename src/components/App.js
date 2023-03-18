import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {

const [isClicked, setIsClicked] = useState(null);

const [tasksState, setTasksState] = useState([...TASKS]);
const [categoriesState, setCategoriesState] = useState([...CATEGORIES]);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categoriesState={categoriesState} isClicked={isClicked} setIsClicked={setIsClicked} />
      <NewTaskForm categoriesState={categoriesState} setCategoriesState={setCategoriesState} tasksState={tasksState} setTasksState={setTasksState} />
      <TaskList tasksState={tasksState} setTasksState={setTasksState} isClicked={isClicked}  />
    </div>
  );
}

export default App;
