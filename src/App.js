import logo from './logo.svg';
import './App.css';
import Todolist from './components/Todolist'
import 'bootstrap/dist/css/bootstrap.min.css'
import SidebarMenu from './components/SidebarMenu';

function App() {
  return (
    <div className="App">
      <div className='container'>
         <SidebarMenu/>
         <Todolist/>
         </div>
      
      
      
    </div>
  ); 
}

export default App;
