import React,{useEffect, useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import  '../components/SidebarMenu.css'
import "./CreateCourses.css"

const CreateCourses = ({ modal, toggle, save }) => {
  const [tasks, setTasks] = useState([]);
  const [TaskName, setTaskName] = useState('');
  const [Description, setDescription] = useState('');
  const [MentorName, setMentorName] = useState('');
  const [ImageURL, setImageURL] = useState('');
  

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'TaskName') {
      setTaskName(value);
    } else if (name === 'Description') {
      setDescription(value);
    } else if (name === 'MentorName') {
      setMentorName(value);
    } else if (name === 'ImageURL') {
      setImageURL(value);
    
    }
  };

  const handleSave = () => {
    const TaskObj = {
      Name: TaskName,
      Description: Description,
      MentorName: MentorName,
      Image: ImageURL,
      
    };

    setTasks([...tasks, TaskObj]);
    save(TaskObj);
  };

  return (
    <div className='task-container' style={{ marginLeft: '5px' }}>
      <Modal isOpen={modal} toggle={toggle} {...CreateCourses}>
        <ModalHeader toggle={toggle}>New Course</ModalHeader>
        <ModalBody>
          <form>
            <div className='form-group'>
              <label> Course Name</label>
              <input
                type='text'
                className='form-control'
                value={TaskName}
                onChange={handleChange}
                name='TaskName'
              />
            </div>
            <div className='form-group'>
              <label>Description</label>
              <textarea
                rows='5'
                className='form-control '
                value={Description}
                onChange={handleChange}
                name='Description'
              ></textarea>
            </div>
            <div className='form-group'>
              <label> User Name</label>
              <input
                type='text'
                className='form-control'
                value={MentorName}
                onChange={handleChange}
                name='MentorName'
              />
            </div>
            <div className='form-group'>
              <label> Image Path</label>
              <input
                type='text'
                className='form-control'
                value={ImageURL}
                onChange={handleChange}
                name='ImageURL'
                placeholder='images/your-image.jpg'
              /></div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={handleSave}>
            Create
          </Button>{' '}
          <Button color='secondary' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      <div className='header-1 '>
        
        <div className='task-grid'>
          {tasks.map((task, index) => (
            <div key={index} className='task-card'>
              <img  className='card-image ' src='https://w7.pngwing.com/pngs/734/59/png-transparent-laptop-showing-signage-computer-icons-programmer-computer-programming-source-code-coder-angle-text-rectangle.png' />
              <h3 className='title'>{task.Name}</h3>
              
              <p className='descript'>{task.Description}</p>
              <p className='mentor-name'>Mentor:    {task.MentorName}</p>
              
              <div className='join-button'><button className='join' > JOIN</button></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateCourses;

