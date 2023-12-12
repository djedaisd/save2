import React, { useEffect, useState } from 'react';
import CreateCourses from '../modals/CreateCourses';
import { Dropdown, Image } from 'react-bootstrap';
import { FaBell, FaQuestionCircle, FaSearch } from 'react-icons/fa';
import '../App.css';

const Courses = () => {
    const [modal, setModal] = useState(false);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Fetch all courses when the component mounts
        fetch('http://localhost:8000/api/courses/')
            .then(response => response.json())
            .then(data => setCourses(data.allCourses))
            .catch(error => console.error('Error fetching courses:', error));
    }, []);

    const toggle = () => {
        setModal(!modal);
    };

    const CreateCourse = (TaskObj) =>{
        let TempList = courses
        TempList.push(TaskObj)
        localStorage.setItem("courses", JSON.stringify(TempList))
        setCourses(TempList)
        setModal(false)
    }

    return (
        <>
        <div className='header-icons '>
               <a href="#" className='icon1'><FaBell size={25}  /></a>
               <a href="#" className='icon1'><FaQuestionCircle size={25} /></a>
               <Dropdown align="end">
                   <Dropdown.Toggle className='drop1' id="dropdown-basic" style={{backgroundColor: "white", color:"black", border:"none"}}>
                       <Image src="https://get.pxhere.com/photo/man-person-people-woman-camera-photography-photographer-photo-male-dslr-portrait-canon-child-blue-holding-reflex-camera-photos-digital-camera-eye-picture-digital-photograph-job-cam-photo-shooting-cinematographer-portrait-photography-digital-slr-single-lens-reflex-camera-camera-operator-1102372.jpg" roundedCircle width={30} height={30} />
                       Yerdaulet Damir
                   </Dropdown.Toggle>

                   <Dropdown.Menu>
                       <Dropdown.Item href="#/action-1">Настройки</Dropdown.Item>
                       <Dropdown.Item href="#/action-2">Выход</Dropdown.Item>
                   </Dropdown.Menu>
               </Dropdown>
               
           </div>
        <div className='header-1 '>
         <div className='rowProfile'>
           
           <div className='mt-2 mentor-lesson  '><h3 className='fw-bold mt-2'>Mentors Courses</h3> </div>  </div>
           <div className='search-bar'>
               <input type='text' placeholder='Search'  className='input-search' ></input>
               <button className='btn btn-light fw-bold poisk'><FaSearch /> Search</button>
               <button className='btn btn-light fw-bold create-button' onClick={ () => setModal(true)} >Create New Course</button>
           </div>
           
        </div>
            {/*<CreateCourses modal={true} toggle=/!* your toggle function *!/ save={handleSave} />*/}
            <CreateCourses toggle={toggle} modal={modal} save={CreateCourse} />
        </>
    );
};

export default Courses;

