import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SidebarMenu from './components/SidebarMenu';
import Courses from './components/Courses'
import * as React from "react";
import { router } from './router';
import Users from './components/Users';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



// const router = createBrowserRouter([ 
//   { 
//     path: "/", 
//     element: <Courses />, 

//     children: [ 
//       { 
//         path: "/users", 
//         element: <Users/>, 

//       }, 
//     ], 
//   }, 
// ]); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
      <App >  </App>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function 
// to log results (for example: reportWebVitals(console.log)) 
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals 
reportWebVitals();