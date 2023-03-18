import React, { useState } from "react";
import Options from "./Options";

function NewTaskForm({ categoriesState, setTasksState }) {
  
  const [newItemState, setNewItemState] = useState({
    text: "",
    category: ""
  });
  
  const [optionsState, setOptionsState] = useState(categoriesState.filter((cat) => cat !== "All"))

  const renderOptions = optionsState.map((cat) => {
    return <Options cat={cat} key={cat} />
  })

  const handleNewItem = (event) => {
    setNewItemState({...newItemState, [event.target.name]: event.target.value});
  }

  const onTaskFormSubmit = (event) => {
    event.preventDefault();

    setTasksState((prevState) => {
      return [...prevState, newItemState]
    })
  }

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit} >
      <label>
        Details
        <input type="text" name="text" value={newItemState.text} onChange={handleNewItem} />
      </label>
      <label>
        Category
        <select name="category" value={newItemState.category} onChange={handleNewItem}>
          {renderOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
