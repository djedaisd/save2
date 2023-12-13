
import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
import '../components/SidebarMenu.css';
import './CreateCourses.css';

const CreateCourses = ({ modal, toggle, save }) => {
  const [newCourse, setNewCourse] = useState({
    course_title: '',
    course_description: '',
   user_id: '',
    course_image: '',
    course_password: '',
  });

  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCourse((prevCourse) => ({ ...prevCourse, [name]: value }));
  };

  const saveCourse = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/courses/create', newCourse);
      // Handle response as needed
      save(newCourse); // Pass the new course to the parent component
      // Optionally, you can fetch the updated course list after creating a new course
      fetchData();
    } catch (error) {
      if (error.response && error.response.status === 422) {
        // Handle validation errors
        console.error('Validation errors:', error.response.data);
        setError('Validation errors occurred');
      } else {
        console.error('Error creating course:', error);
        setError('Error creating course');
      }
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/courses/');
      setCourses(response.data.allCourses);
    } catch (error) {
      console.error('Error fetching courses:', error);
      setError('Error fetching courses');
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts


  return (
      <>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>New Course</ModalHeader>
          <ModalBody>
            <form>
              <div className='form-group'>
                <label>Course Name</label>
                <input
                    type='text'
                    className='form-control'
                    value={newCourse.course_title}
                    onChange={handleChange}
                    name='course_title'
                />
              </div>
              <div className='form-group'>
                <label>Description</label>
                <textarea
                    rows='5'
                    className='form-control'
                    value={newCourse.course_description}
                    onChange={handleChange}
                    name='course_description'
                ></textarea>
              </div>
              <div className='form-group'>
                <label>User Name</label>
                <input
                    type='text'
                    className='form-control'
                    value={newCourse.user_id}
                    onChange={handleChange}
                    name='user_id'
                />
              </div>
              <div className='form-group'>
                <label>Image Path</label>
                <input
                    type='text'
                    className='form-control'
                    value={newCourse.course_image}
                    onChange={handleChange}
                    name='course_image'
                    placeholder='images/your-image.jpg'
                />
              </div>
              <div className='form-group'>
                <label>Course Password</label>
                <input
                    type='text'
                    className='form-control'
                    value={newCourse.course_password}
                    onChange={handleChange}
                    name='course_password'
                />
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={saveCourse}>
              Create
            </Button>{' '}
            <Button color='secondary' onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <div className='header-1'>
          <div className='course-grid'>
            {courses.map((course, index) => (
                <div key={index} className='course-card'>
                  <img className='card-image' src={course.course_image} alt={`Course ${index + 1}`} />
                  <h3 className='title'>{course.course_title}</h3>
                  <p className='descript'>{course.course_description}</p>
                  {course.createdBy && <p className='mentor-name'>Mentor: {course.createdBy.name}</p>}
                  <div className='join-button'><button className='join'>JOIN</button></div>
                </div>
            ))}
          </div>
        </div>
      </>
  );
};

export default CreateCourses;


