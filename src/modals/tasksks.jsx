import React, { useState } from 'react'
import './stool.css'
const TodoList = () => {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const handleInputChange = (e) => {
    setNewTask(e.target.value)
  }

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask])
      setNewTask('')
    }
  }

  return (
    <div className="mainbody">
      <h2>Your Task List</h2>
      <div>
        <input
          className="inputtext"
          type="text"
          value={newTask}
          onChange={handleInputChange}
        />

        <button className="but" onClick={addTask}>
          +
        </button>
      </div>

      {tasks.map((task, index) => (
        <div className="tassk" key={index}>
          {task}
        </div>
      ))}
    </div>
  )
}

export default TodoList
