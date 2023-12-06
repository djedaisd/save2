import React,{useEffect, useState} from 'react';
import CreateTask from '../modals/CreateTask';

const Todolist = () => {
    const [modal, setModal] = useState(false);

    const[TaskList, setTaskList]= useState([])

   
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
        <div className='header-1 text-center style'>
           <h3>Lessons</h3> 
           <button className='btn btn-primary mt-2' onClick={ () => setModal(true)} >Create New Lesson</button>
        </div>
        <div className='task-container'>
            {TaskList.map((obj) => <li> {obj.Name}</li>)}
        </div>
        <CreateTask toggle = {toggle} modal = {modal} save={SaveTask} />
        </>
    );
};

export default Todolist;