import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const CreateTask = ({modal, toggle, save}) => {
  const [TaskName, setTaskName]= useState('')
  const[Description, setDescription]= useState('')
  const[MentorName, setMentorName]= useState('')
  const handleChange = (e)=> {
    

    const{name, value} =e.target

    if(name == "TaskName"){
      setTaskName(value)
    }else if(name=="Description") {
      setDescription(value)
    }else  {
      setMentorName(value)
    }
  }
  const handleSave = () =>{
    let TaskObj={}
    TaskObj["Name"] = TaskName
    TaskObj["Description"] = Description
    TaskObj["MentorName"] = MentorName
    save(TaskObj)
  }
        
  

    return (
      
        <div>
            <Modal isOpen={modal} toggle={toggle} {...CreateTask} >
        <ModalHeader toggle={toggle}>Create Lesson</ModalHeader>
        <ModalBody>
          <form>
            <div className='form-group'> 
            <label> Lesson Name</label>
            <input type='text' className='form-control' value={TaskName} onChange={handleChange} name ="TaskName"/> </div>
            <div className='form-group'>
              <label>Description</label>
              <textarea rows="5" className='form-control ' value={Description} onChange={handleChange} name ="Description"> </textarea>
            </div>
            
            <div className='form-group' > 
            <label> Mentor Name</label>
            <input type='text' className='form-control' value={MentorName} onChange={handleChange} name ="TMentorName"/> </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Create
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
        </div>
    );
};

export default CreateTask;