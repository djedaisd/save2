// import '../App.css';
// import React, { useEffect, useState } from 'react';
// import { Dropdown, Image } from 'react-bootstrap';
// import { FaBell, FaQuestionCircle } from 'react-icons/fa';
// import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
// import axios from 'axios';
//
// const Users = () => {
//     const [users, setUsers] = useState([]);
//
//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8000/api/users');
//                 console.log(response.data); // Log the data to the console
//                 setUsers(response.data.results); // Use response.data.results
//             } catch (error) {
//                 console.error('Error fetching users:', error);
//             }
//         };
//
//         fetchUsers();
//     }, []); // Pass an empty array of dependencies to useEffect to make it run only once when the component mounts
//
//     return (
//         <div>
//             <div className='header-icons '>
//                 <a href="#" className='icon1'><FaBell size={25} /></a>
//                 <a href="#" className='icon1'><FaQuestionCircle size={25} /></a>
//                 <Dropdown align="end">
//                     <Dropdown.Toggle className='drop1' id="dropdown-basic" style={{ backgroundColor: "white", color: "black", border: "none" }}>
//                         <Image src="https://get.pxhere.com/photo/man-person-people-woman-camera-photography-photographer-photo-male-dslr-portrait-canon-child-blue-holding-reflex-camera-photos-digital-camera-eye-picture-digital-photograph-job-cam-photo-shooting-cinematographer-portrait-photography-digital-slr-single-lens-reflex-camera-camera-operator-1102372.jpg" roundedCircle width={30} height={30} />
//                         Yerdaulet Damir
//                     </Dropdown.Toggle>
//
//                     <Dropdown.Menu>
//                         <Dropdown.Item href="#/action-1">Настройки</Dropdown.Item>
//                         <Dropdown.Item href="#/action-2">Выход</Dropdown.Item>
//                     </Dropdown.Menu>
//                 </Dropdown>
//             </div>
//             <div>
//                 {Array.isArray(users) ? (
//                     users.map(user => (
//                         <div key={user.id} className='card1'>
//                             <img src={user.photo} className='user-photo'></img>
//                             <h1 className='users-name'>{user.name} {user.last_name}</h1>
//                             <p className='user-description'>{user.username}</p>
//                             <div className='user-icon'>
//                                 <a href={`https://instagram.com/${user.insta}`} className='us-icon'><FaInstagram className='us-icon' /> </a>
//                                 <a href={`https://twitter.com/${user.twitter}`} className='us-icon'><FaTwitter className='us-icon' /> </a>
//                                 <a href={`https://facebook.com/${user.facebook}`} className='us-icon'> <FaFacebook className='us-icon' /> </a>
//                                 <a href={`https://linkedin.com/in/${user.linkedin}`} className='us-icon'><FaLinkedin className='us-icon' /> </a>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <p>Loading...</p>
//                 )}
//             </div>
//         </div>
//     );
// };
//
// export default Users;

import '../App.css';
import React, { useEffect, useState } from 'react';
import { Dropdown, Image } from 'react-bootstrap';
import { FaBell, FaQuestionCircle } from 'react-icons/fa';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/users');
                console.log(response.data); // Log the data to the console
                setUsers(response.data.results); // Use response.data.results
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []); // Pass an empty array of dependencies to useEffect to make it run only once when the component mounts

    return (
        <div>
            <div className='header-icons '>
                <a href="#" className='icon1'><FaBell size={25} /></a>
                <a href="#" className='icon1'><FaQuestionCircle size={25} /></a>
                <Dropdown align="end">
                    <Dropdown.Toggle className='drop1' id="dropdown-basic" style={{ backgroundColor: "white", color: "black", border: "none" }}>
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
                    <div className='mt-2 mentor-lesson  '><h3 className='fw-bold mt-2'> Mentors</h3> </div>
                </div>
                <div className='search-bar'>
                    <input type='text' placeholder='Search' className='input-search'></input>
                    <button className='btn btn-light fw-bold poisk'>Search for mentors</button>
                </div>
            </div>
            <div>
                <div className='usercard-container'>
                    {Array.isArray(users) ? (
                        users.map(user => (
                            <div key={user.id} className='card1'>
                                <div className='empty'>
                                    <img src={user.photo} className='user-photo'></img>
                                     </div>
                                <h1 className='users-name'>{user.name} {user.last_name}</h1>
                                <p className='user-description'>{user.username}</p>
                                <p className='user-qualities'>{user.school}</p>
                                <div className='button-con'>
                                    <button className='user-button'>More</button>
                                </div>
                                <div className='user-icon'>
                                    <a href={`https://instagram.com/${user.insta}`} className='us-icon'><FaInstagram className='us-icon' /> </a>
                                    <a href={`https://twitter.com/${user.twitter}`} className='us-icon'><FaTwitter className='us-icon' /> </a>
                                    <a href={`https://facebook.com/${user.facebook}`} className='us-icon'> <FaFacebook className='us-icon' /> </a>
                                    <a href={`https://linkedin.com/in/${user.linkedin}`} className='us-icon'><FaLinkedin className='us-icon' /> </a>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Users;
