// import React,{useEffect, useState} from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import  '../components/SidebarMenu.css'
// import "./CreateCourses.css"
//
// const CreateCourses = ({ modal, toggle, save }) => {
//   const [tasks, setTasks] = useState([]);
//   const [TaskName, setTaskName] = useState('');
//   const [Description, setDescription] = useState('');
//   const [MentorName, setMentorName] = useState('');
//   const [ImageURL, setImageURL] = useState('');
//
//
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//
//     if (name === 'TaskName') {
//       setTaskName(value);
//     } else if (name === 'Description') {
//       setDescription(value);
//     } else if (name === 'MentorName') {
//       setMentorName(value);
//     } else if (name === 'ImageURL') {
//       setImageURL(value);
//
//     }
//   };
//
//   const handleSave = () => {
//     const TaskObj = {
//       Name: TaskName,
//       Description: Description,
//       MentorName: MentorName,
//       Image: ImageURL,
//
//     };
//
//     setTasks([...tasks, TaskObj]);
//     save(TaskObj);
//   };
//
//   return (
//     <div className='task-container' style={{ marginLeft: '5px' }}>
//       <Modal isOpen={modal} toggle={toggle} {...CreateCourses}>
//         <ModalHeader toggle={toggle}>New Course</ModalHeader>
//         <ModalBody>
//           <form>
//             <div className='form-group'>
//               <label> Course Name</label>
//               <input
//                 type='text'
//                 className='form-control'
//                 value={TaskName}
//                 onChange={handleChange}
//                 name='TaskName'
//               />
//             </div>
//             <div className='form-group'>
//               <label>Description</label>
//               <textarea
//                 rows='5'
//                 className='form-control '
//                 value={Description}
//                 onChange={handleChange}
//                 name='Description'
//               ></textarea>
//             </div>
//             <div className='form-group'>
//               <label> User Name</label>
//               <input
//                 type='text'
//                 className='form-control'
//                 value={MentorName}
//                 onChange={handleChange}
//                 name='MentorName'
//               />
//             </div>
//             <div className='form-group'>
//               <label> Image Path</label>
//               <input
//                 type='text'
//                 className='form-control'
//                 value={ImageURL}
//                 onChange={handleChange}
//                 name='ImageURL'
//                 placeholder='images/your-image.jpg'
//               /></div>
//           </form>
//         </ModalBody>
//         <ModalFooter>
//           <Button color='primary' onClick={handleSave}>
//             Create
//           </Button>{' '}
//           <Button color='secondary' onClick={toggle}>
//             Cancel
//           </Button>
//         </ModalFooter>
//       </Modal>
//
//       <div className='header-1 '>
//
//         <div className='course-grid'>
//           {tasks.map((course, index) => (
//             <div key={index} className='course-card'>
//               <img  className='card-image ' src='https://w7.pngwing.com/pngs/734/59/png-transparent-laptop-showing-signage-computer-icons-programmer-computer-programming-source-code-coder-angle-text-rectangle.png' />
//               <h3 className='title'>{course.Name}</h3>
//
//               <p className='descript'>{course.Description}</p>
//               <p className='mentor-name'>Mentor:    {course.MentorName}</p>
//
//               <div className='join-button'><button className='join' > JOIN</button></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default CreateCourses;
//



import React,{useEffect, useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import  '../components/SidebarMenu.css'
import "./CreateCourses.css"

const CreateCourses = ({ modal, toggle, save }) => {
  const [task, setTask] = useState({
    Name: '',
    Description: '',
    MentorName: '',
    Image: '',
  });
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses data from the API when the component mounts
    fetch('http://localhost:8000/api/courses/')
        .then(response => response.json())
        .then(data => setCourses(data.allCourses))
        .catch(error => console.error('Error fetching courses:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSave = () => {
    const newCourse = {
      course_title: task.Name,
      course_description: task.Description,
      course_image: task.Image,
      user_id: task.MentorName,
    };

    fetch('http://localhost:8000/api/courses/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCourse),
    })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(createdCourse => {
          setCourses((prevCourses) => [...prevCourses, createdCourse]);
          save(createdCourse);
        })
        .catch(error => console.error('Error creating course:', error));

    // Reset the form after saving
    setTask({
      Name: '',
      Description: '',
      MentorName: '',
      Image: '',
    });
  };

  return (
      <div className='course-container' style={{ marginLeft: '5px' }}>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>New Course</ModalHeader>
          <ModalBody>
            <form>
              <div className='form-group'>
                <label>Course Name</label>
                <input
                    type='text'
                    className='form-control'
                    value={task.Name}
                    onChange={handleChange}
                    name='Name'
                />
              </div>
              <div className='form-group'>
                <label>Description</label>
                <textarea
                    rows='5'
                    className='form-control'
                    value={task.Description}
                    onChange={handleChange}
                    name='Description'
                ></textarea>
              </div>
              <div className='form-group'>
                <label>User Name</label>
                <input
                    type='text'
                    className='form-control'
                    value={task.MentorName}
                    onChange={handleChange}
                    name='MentorName'
                />
              </div>
              <div className='form-group'>
                <label>Image Path</label>
                <input
                    type='text'
                    className='form-control'
                    value={task.Image}
                    onChange={handleChange}
                    name='Image'
                    placeholder='images/your-image.jpg'
                />
              </div>
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
      </div>
  );
};

export default CreateCourses;



