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
                <li className="menuItem"><FaRegChartBar /> MY PROGRESS</li>
                <li className="menuItem"><FaUsers /> USERS</li>
                <li className="menuItem"><FaRobot className='icon'/> EMTIHAN GPT</li>
                <li className="menuItem"><FaUserTie /> AI MENTOR</li>
                
            </ul>
            
        </div>
        
    );
};

export default Sidebar;

