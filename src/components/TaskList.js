import Task from "./Task";

function TaskList({ tasksState, setTasksState, isClicked }) {
  
  const removeTask = (event) => {
    setTasksState(tasksState.filter((task) => task.text !== event.target.parentNode.id));
  }

  const renderTasks = tasksState.map((task) => {
    return (
       isClicked === null || task.category === isClicked || isClicked === "All" ?
      <Task text={task.text} category={task.category} key={task.text} isClicked={isClicked} onRemoveTask={removeTask} />
      : null
    )
  })
  
  return (
    <div className="tasks">
      {renderTasks}
    </div>
  );
}

export default TaskList;
