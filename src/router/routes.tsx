import NavigationLayout from "../layout/navigation-layout";
import Courses from "../components/Courses";
import React from "react";
import FindTask from "../modals/FindTask";
export const routes= [{
    path:"/",
    element: <NavigationLayout/>,
    children: [{path:"/",element:<Courses/> }, {path:"/messi",element:<Courses/>}]


} ]
