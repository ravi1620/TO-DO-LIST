import React, { useState } from "react";

function ToDoList() {
  let [tasks, setTasks] = useState(["come", "go", "later"]);
  let [newtask, setNewTask] = useState("");

  function handleInputChange(eo) {
    setNewTask(eo.target.value);
  }

  function addTask() {
    if (newtask.trim() !== "") {
      setTasks((t) => [...t, newtask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    let updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveUp(index) {
    if (index > 0) {
      let updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveDown(index) {
    if (index < tasks.length - 1) {
      let updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="mainDiv">
      <h1>To-Do-List</h1>
      <div className="div1">
        <input
          type="text"
          placeholder="Enter your task...."
          value={newtask}
          onChange={handleInputChange}
        ></input>
        <button type="button" className="addButton" 
        onClick={addTask}>
          Add
        </button>
      </div>

      <ol className="oL">
        {tasks.map((task, index) => {
            return(
          <li key={index}>
            <span className="span">{task}</span>
     
            <button className="delButton" onClick={() => deleteTask(index)}>Delete</button>
            <button className="upButton" onClick={() => moveUp(index)}>Move Up</button>
            <button className="downButton" onClick={() => moveDown(index)}>Move Down</button>
            
          </li>);
        })}
      </ol>
    </div>
  );
}

export default ToDoList;
