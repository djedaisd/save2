import logo from './logo.svg';
import './App.css';
import Courses from './components/Courses'
import 'bootstrap/dist/css/bootstrap.min.css'
import SidebarMenu from './components/SidebarMenu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationLayout from './layout/navigation-layout';
import Users from './components/Users';

function App() {
    return (
        <div className="App">

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={< NavigationLayout/>}>
                        <Route index element={<Courses />} />
                        <Route  path='/users' element={<Users/>}/>

                    </Route>
                </Routes>
            </BrowserRouter>


        </div>
    );

}

export default App;