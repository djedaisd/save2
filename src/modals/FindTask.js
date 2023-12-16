import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../components/SidebarMenu.css'
import './FindTask.css'
import TodoList from './tasksks'
import { Dropdown, Image } from 'react-bootstrap';
import { FaBell, FaQuestionCircle } from 'react-icons/fa';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const CreateTask = ({ modal, toggle, save }) => {
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
    console.log('_')
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

     <><div className='header-icons '>
      <a href="#" className='icon1'><FaBell size={25} /></a>
      <a href="#" className='icon1'><FaQuestionCircle size={25} /></a>
      <Dropdown align="end">
        <Dropdown.Toggle className='drop1' id="dropdown-basic" style={{ backgroundColor: "white", color: "black", border: "none" , marginTop:'20px'}}>
          <Image src="https://get.pxhere.com/photo/man-person-people-woman-camera-photography-photographer-photo-male-dslr-portrait-canon-child-blue-holding-reflex-camera-photos-digital-camera-eye-picture-digital-photograph-job-cam-photo-shooting-cinematographer-portrait-photography-digital-slr-single-lens-reflex-camera-camera-operator-1102372.jpg" roundedCircle width={30} height={30} />
          Yerdaulet Damir
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Настройки</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Выход</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div><div className='header-1 '>
        <div className='rowProfile'>
          <div className='mt-2 mentor-lesson  '><h3 className='fw-bold mt-2'> My courses</h3> </div>
        </div>
        <div className='search-bar'>
          <input type='text' placeholder='Search' className='input-search'></input>
          <button className='btn btn-light fw-bold poisk'>Search </button>
        </div>
      </div><div className="task-container" style={{ marginLeft: '5px' }}>
        <Modal isOpen={modal} toggle={toggle} {...CreateTask}>
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
                  name="TaskName" />
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
                  name="MentorName" />
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
            <div>
              <div className="task-card task-card3">
                <h3 className="title3">Query</h3>
                <p className="descript3">
                  Our club is for like-minded individuals come together to
                  explore, learn, and excel in the dynamic realms of Android and
                  web development. Follow us inst:@nis.query
                </p>
                <p className="mentor-name3">Mentor: Artyom</p>

                <div className="join-button3">
                  <button
                    onClick={() => handleClick()}
                    className="join"
                    style={{
                      float: 'left',
                      borderRadius: '20px 20px 20px 20px',
                      marginLeft: '630px',
                      width: '140px',
                      height: '46px',
                    }}
                  >
                    {' '}
                    View Tasks
                  </button>
                </div>
              </div>
              <div className="task-card task-card1">
                <h3 className="title1">Math</h3>
                <p className="descript1">Course made for aspired math enjoyers</p>
                <p className="mentor-name1">Mentor: Vladislav</p>

                <div className="join-button1">
                  <button
                    onClick={() => handleClick()}
                    className="join"
                    style={{
                      float: 'left',
                      borderRadius: '20px 20px 20px 20px',
                      marginLeft: '630px',
                      width: '140px',
                      height: '46px',
                    }}
                  >
                    {' '}
                    View Tasks
                  </button>
                </div>
              </div>
              <div className="task-card task-card2">
                <h3 className="title2">Python</h3>
                <p className="descript2">
                  Get ready to unlock the power of this versatile programming
                  language with Mr. Ansar as your knowledgeable and supportive
                  instructor.
                </p>
                <p className="mentor-name2">Mentor: Ansar Akim</p>

                <div className="join-button2">
                  <button
                    onClick={() => handleClick()}
                    className="join"
                    style={{
                      float: 'left',
                      borderRadius: '20px 20px 20px 20px',
                      marginLeft: '630px',
                      width: '140px',
                      height: '46px',
                    }}
                  >
                    {' '}
                    View Tasks
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sidetasks">
          <TodoList />
        </div>
      </div></>
  )
}

export default CreateTask
