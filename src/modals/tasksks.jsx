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
    <div>
      <h2 className="headd">Your Assignments</h2>
      <div className="mainbody">
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
        <div className="tassk task1">
          <div className="qqeeww">Accomplish your homework</div>
          <div className="qweq">
            <p className="par">Ansar Akim</p>
            <div className="dateq">14 Dec, 2023 | 19:00</div>
          </div>
        </div>
        <div className="tassk task2">
          <div className="qqeeww">Learn mapping in javascript</div>
          <div className="qweq">
            <p className="par">Artyom </p>
            <div className="dateq">3 Jan, 2024 | 00:00</div>
          </div>
        </div>
        <div className="tassk task3">
          <div className="qqeeww">Repeat the topic of differentiation</div>
          <div className="qweq">
            <p className="par">Vladislav</p>
            <div className="dateq">15 Dec, 2023 | 14:15</div>
          </div>
        </div>
        <div className="tassk task4">
          <div className="qqeeww">Revise binary search algorithm</div>
          <div className="qweq">
            <p className="par">Ansar Akim</p>
            <div className="dateq">19 Dec, 2023 | 19:30</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoList
