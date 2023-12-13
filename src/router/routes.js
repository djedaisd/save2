import NavigationLayout from "../layout/navigation-layout";
import Courses from "../components/Courses";
import React from "react";
import FindTask from "../modals/FindTask";
import Users from "../components/Users";
export const routes= [{
    path:"/",
    element: <NavigationLayout/>,
    children: [{path:"/",element:<Users/>} , {path:"/users", element:<Users/>}]


} ]