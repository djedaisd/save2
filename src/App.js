import logo from './logo.svg';
import './App.css';
import Courses from './components/Courses'
import 'bootstrap/dist/css/bootstrap.min.css'
import SidebarMenu from './components/SidebarMenu';

function App() {
  return (
    <div className="App">
      <div className='container'>
         <SidebarMenu/>
         <Courses/>
         </div>
      
      
      
    </div>
  ); 
}

export default App;
