import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../components/SidebarMenu.css'
import './FindTask.css'
import TodoList from './tasksks'

const FindTask = ({ modal, toggle, save }) => {
  const [tasks, setTasks] = useState([])
  const [TaskName, setTaskName] = useState('')
  const [Description, setDescription] = useState('')
  const [MentorName, setMentorName] = useState('')
  const [ImageURL, setImageURL] = useState('')
  const [Price, setPrice] = useState('')
  const [Discount, setDiscount] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'TaskName') {
      setTaskName(value)
    } else if (name === 'Description') {
      setDescription(value)
    } else if (name === 'MentorName') {
      setMentorName(value)
    } else if (name === 'Price') {
      setPrice(value)
    } else {
      setDiscount(value)
    }
  }

  const handleClick = () => {
    console.log('Nurzhik gay')
  }
  const handleSave = () => {
    const TaskObj = {
      Name: TaskName,
      Description: Description,
      MentorName: MentorName,
      Image: ImageURL,
      Price: Price,
      Discount: Discount,
    }

    setTasks([...tasks, TaskObj])
    save(TaskObj)
  }

  return (
    <div className="task-container" style={{ marginLeft: '5px' }}>
      <Modal isOpen={modal} toggle={toggle} {...FindTask}>
        <ModalHeader toggle={toggle}>Find Course</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label> Course Name</label>
              <input
                type="text"
                className="form-control"
                value={TaskName}
                onChange={handleChange}
                name="TaskName"
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                rows="5"
                className="form-control "
                value={Description}
                onChange={handleChange}
                name="Description"
              ></textarea>
            </div>
            <div className="form-group">
              <label> User Name</label>
              <input
                type="text"
                className="form-control"
                value={MentorName}
                onChange={handleChange}
                name="MentorName"
              />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Find
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      <div className="header-1 ">
        <div className="task-grid">
          {tasks.map((task, index) => (
            <div key={index} className="task-card">
              <h3 className="title">{task.Name}</h3>
              <p className="descript">{task.Description}</p>
              <p className="mentor-name">Mentor: {task.MentorName}</p>

              <div className="join-button">
                <button
                  onClick={() => handleClick()}
                  className="join"
                  style={{
                    float: 'left',
                    borderRadius: '20px 20px 20px 20px',
                    marginLeft: '413px',
                    width: '140px',
                    height: '46px',
                  }}
                >
                  {' '}
                  View Tasks
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sidetasks">
        <TodoList />
      </div>
    </div>
  )
}

export default FindTask
