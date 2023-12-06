import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import './SidebarMenu.css'
function SidebarMenu(){
    return(
        <div >
         <div className="row">
            <div className="bg-dark col-auto  min-vh-100 d-flex justify-content-between flex-column  ">
                <div>
                <a className="text-decoration-none text-white d-none d-sm-inline d-flex align-itemcenter ms-3 mt-4">
                    
                    <span className="ms-1 fs-4 d-none d-sm-inline">NOMADAI</span>
                </a>
                <hr className="text-secondary d-none d-sm-block " />
                <ul class="nav nav-pills flex-column mt-5 mt-sm-0">
                    <li class="nav-item text-white fs-4 my-3 py-2 py-sm-0">
                        <a href="#" class="nav-link  text-white fs-5" aria-current="page">
                            <i className="bi bi-code-square"></i>
                            <span className="ms-3 d-none d-sm-inline">My progress</span>
                        </a>
                    </li>
                    
                    <li class="nav-item text-white fs-4 my-3 py-2 py-sm-0">
                        <a href="#" class="nav-link  text-white fs-5" aria-current="page">
                            <i className="bi bi-people"></i>
                            <span className="ms-3 d-none d-sm-inline">Users</span>
                        </a>
                    </li>
                    <li class="nav-item text-white fs-4 my-3 py-2 py-sm-0">
                        <a href="#" class="nav-link  text-white fs-5" aria-current="page">
                            <i className="bi bi-chat-square-text"></i>
                            <span className="ms-3 d-none d-sm-inline">AI Mentor</span>
                        </a>
                    </li>
                    <li class="nav-item text-white fs-4 my-3 py-2 py-sm-0">
                        <a href="#" class="nav-link  text-white fs-5" aria-current="page">
                            <i className="bi bi-robot"></i>
                            <span className="ms-3 d-none d-sm-inline">Emtihan GPT</span>
                        </a>
                    </li>
                    <li class="nav-item text-white fs-4 my-3 py-2 py-sm-0">
                        <a href="#" class="nav-link  text-white fs-5" aria-current="page">
                            <i className="bi bi-person-badge-fill"></i>
                            <span className="ms-3 d-none d-sm-inline">Mentors</span>
                        </a>
                    </li>
                </ul>
                </div>
                
            </div>
         </div>  
        </div>
    )
}
export default SidebarMenu