import React from 'react';
import '../components/SidebarMenu.css'
import { FaRegChartBar, FaUsers, FaRobot, FaUserTie, FaChalkboardTeacher } from 'react-icons/fa';
import { BrowserRouter, NavLink, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Courses from './Courses';
import { BsFileEarmarkText } from "react-icons/bs";
import Users from './Users';

const Sidebar = () => {
    return (

        <div className="sidebar">
            <div className="logo">
                <h1>NOMAD</h1>
                <img className='logo-image' src='/logo.png'/>
            </div>
            <ul className="sidebarMenu">
                <li className="menuItem"><FaRegChartBar /> <a href='/' className='link3'>COURSES </a></li>
                <li className="menuItem"><FaUsers /><NavLink to="/mycourses"  className='link3' >
                    <div>MY COURSES</div>
                </NavLink> </li>
                <li className="menuItem"><BsFileEarmarkText className='icon'/><a href='https://nistrz-generator.vercel.app/main' className='link3'> EMTIHAN AI </a></li>
                <li className="menuItem"><FaRobot /><a href='https://nistrz.vercel.app/' className='link4'> NOMAD MENTOR</a></li>
                <li className="menuItem"><FaUsers /><NavLink to="/users"  className='link3' >
                    <div>USERS</div>
                </NavLink> </li>
            </ul>

        </div>


    );
};

export default Sidebar;