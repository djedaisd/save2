import React,{useEffect, useState} from 'react';
import CreateTask from '../modals/CreateTask';
import { Dropdown, Image } from 'react-bootstrap';
import { FaBell, FaQuestionCircle } from 'react-icons/fa';
import '../App.css'

const Todolist = () => {
    const [modal, setModal] = useState(false);
    const [TaskList, setTaskList]= useState([])

    const toggle = ()=> {
        setModal(!modal);
    }

    const SaveTask = (TaskObj) =>{
        let TempList = TaskList
        TempList.push(TaskObj)
        localStorage.setItem("TaskList", JSON.stringify(TempList))
        setTaskList(TempList)
        setModal(false)
    }

    return (
        <>
        
        <div className='header-1 '>
            
           <div className='header-icons'>
               <a href="#" className='icon1'><FaBell size={25}  /></a>
               <a href="#" className='icon1'><FaQuestionCircle size={25} /></a>
               <Dropdown>
                   <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                       <Image src="https://i.pinimg.com/originals/b9/05/3d/b9053d873e9f69058997913e0fffca2e.png" roundedCircle width={30} height={30} />
                       Yerdaulet Damir
                   </Dropdown.Toggle>

                   <Dropdown.Menu>
                       <Dropdown.Item href="#/action-1">Настройки</Dropdown.Item>
                       <Dropdown.Item href="#/action-2">Выход</Dropdown.Item>
                   </Dropdown.Menu>
               </Dropdown>
               
           </div>
           <div className='mt-2'><h3 className='fw-bold'>Mentors Lessons</h3> </div>
           <div className='search-bar'>
               <input type='text' placeholder='Search'  className='input-search'/>
               <button className='btn btn-light fw-bold create-button' onClick={ () => setModal(true)} >Create New Course</button>
           </div>
        </div>
        <div className='task-container'>
            {TaskList.map((obj) => <li> {obj.Name}</li>)}
        </div>
        <CreateTask toggle = {toggle} modal = {modal} save={SaveTask} />
        </>
    );
};

export default Todolist;


