import React from 'react';
import '../components/SidebarMenu.css'
import { FaRegChartBar, FaUsers, FaRobot, FaUserTie, FaChalkboardTeacher } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <h1>NOMADAI</h1> 
            </div>
            <ul className="sidebarMenu">
                <li className="menuItem"><FaRegChartBar /> <a href='/'>COURSES </a></li>
                <li className="menuItem"><FaUsers /><a> USERS </a></li>
                <li className="menuItem"><FaRobot className='icon'/><a> EMTIHAN GPT </a></li>
                <li className="menuItem"><FaUserTie /><a> AI MENTOR</a></li>
                
            </ul>
            
        </div>
        
    );
};

export default Sidebar;

